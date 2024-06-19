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
