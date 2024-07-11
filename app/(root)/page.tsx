import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function HOME() {
  const loggedIn = { username: "kapil" };
  return (
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.username || "Guest"}
              subtext="Access and manage your account and transactions seamlessly"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250}
            />
          </header>
        </div>
      </section>
    </>
  );
}

export default HOME;
