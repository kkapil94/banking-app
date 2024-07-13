import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function HOME() {
  const loggedIn = {
    firstname: "kapil",
    lastname: "Khatri",
    email: "kapil@gmail.com",
  };
  return (
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstname || "Guest"}
              subtext="Access and manage your account and transactions seamlessly"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250}
            />
          </header>
          Recent Transactions
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
      </section>
    </>
  );
}

export default HOME;
