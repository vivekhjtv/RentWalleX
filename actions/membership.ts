"use server";
import { db } from "@/lib/db";
export const getMembershipTypes = async () => {
  const result = await db.membership_Plans.findMany();
  return result;
};

export const getMembership = async (email: string) => {
  const result = await db.user_Info.findUnique({
    where: {
      email: email,
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
  const ends = new Date().toISOString();
  console.log(id);
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
          membershipExpireDate: ends,
          membershipStartDate: start,
        },
      },
    },
  });
  return "Membership purchased successfully.";
};
