"use server";

import { db } from "@/lib/db";
import { auth } from "../auth";

export const PaymentInfo = async () => {
  const session = await auth();

  const result = db.user_Info.findUnique({
    where: {
      email: session?.user.email!,
    },
    include: {
      Payment_Info: true,
    },
  });
  return result;
};

export const SavePaymentInfo = async (paymentAmt: number, status: string) => {
  const session = await auth();
  const rentAmt = "2000";
  const remain = Number(rentAmt) - Number(paymentAmt);
  const date = new Date().toISOString();
  console.log(status);
  const result = db.user_Info.update({
    where: {
      email: session?.user.email!,
    },
    data: {
      Payment_Info: {
        create: {
          rentAmt: rentAmt,
          paymentAmt: paymentAmt.toString(),
          remainingAmt: remain.toString(),
          payemntDate: date,
          status: status,
        },
      },
    },
  });
  console.log(result);
  return result;
};
