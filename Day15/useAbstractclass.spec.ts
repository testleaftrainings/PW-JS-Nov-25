

import { test } from "@playwright/test";
import { SBIBank } from "./02-abstract";

test("RBI Compliance Check", async () => {

  const bank = new SBIBank();

  bank.openAccount();
  bank.depositMoney();
  bank.withdrawMoney();

  console.log(bank.interestRatePolicy());
});