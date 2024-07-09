"use server";
import { db } from "@/lib/db";
import { auth } from "../auth";
export const getMembershipTypes = async () => {
  const result = await db.membership_Plans.findMany();
  return result;
};

export const getMembership = async (email: string) => {
  const session = await auth();
  const result = await db.user_Info.findUnique({
    where: {
      email: session?.user.email!,
    },
    include: {
      Membership_Info: true,
    },
  });
  console.log(result);
  if (result) {
    return result;
  } else {
    return undefined;
  }
};

export const insertMembershipdetails = async (
  id: string,
  membershiptype: any,
  membershipAmt: any,
  membershipDuration: any,
  membershipAmenities: any
) => {
  const start = new Date().toISOString();

  const ends = new Date();
  ends.setFullYear(ends.getFullYear() + 1);
  const finalEnds = ends.toISOString();
  console.log(id);
  console.log(start);
  console.log(finalEnds);
  const result = await db.user_Info.update({
    where: {
      email: id,
    },
    data: {
      Membership_Info: {
        create: {
          membershipType: membershiptype,
          membershipAmt: membershipAmt,
          membershipDuration: membershipDuration,
          membershipStatus: "Active",
          membershipExpireDate: finalEnds,
          membershipStartDate: start,
        },
      },
    },
  });
  return "Membership purchased successfully.";
};
