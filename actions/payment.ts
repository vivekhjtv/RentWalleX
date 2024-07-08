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

export const SavePaymentInfo = async (paymentAmt: string) => {
  const session = await auth();
  const rentAmt = 2000;
  const result = db.user_Info.update({
    where: {
      email: session?.user.email!,
    },
    data: {
      Payment_Info: {
        create: {
          rentAmt: rentAmt,
          paymentAmt: paymentAmt,
          remainingAmt: Number(rentAmt) - Number(paymentAmt),
        },
      },
    },
  });
};
