"use client";

import React from "react";
import CountUp from "react-countup/";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <CountUp decimals={2} duration={4} decimal="," prefix="$" end={amount} />
  );
}

export default AnimatedCounter;
