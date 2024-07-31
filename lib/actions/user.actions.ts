"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async (userData: signInProps) => {
  const { email, password } = userData;
  try {
    const { account } = await createAdminClient();
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const { email, password, firstName, lastName } = userData;
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.log(error);
  }
};

export const getLoggedInUser = async () => {
  try {
    const { account } = await createSessionClient();
    const user = await account?.get();
    const plainUserObject = await parseStringify(user);
    console.log(plainUserObject, "ok");

    return plainUserObject;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
  } catch (error) {
    throw error;
  }
};
