import { MembershipsType } from "@/types";
import { Avatar, AvatarGroup, Card, CardBody } from "@nextui-org/react";
import React from "react";
import { insertMembershipdetails } from "../../../../../actions/membership";
import { auth } from "../../../../../auth";
import { useSession } from "next-auth/react";
const pictureUsers = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];

export const MembershipTypeCards = ({
  id,
  membershipType,
  membershipAmt,
  membershipDuration,
  membershipAmenities,
}: MembershipsType) => {
  const session = useSession();
  const userId = session?.data?.user.email!;
  const handleBuy = () => {
    insertMembershipdetails(
      userId,
      membershipType,
      membershipAmt,
      membershipDuration,
      membershipAmenities
    ).then((result) => {
      alert(result);
    });
  };
  return (
    <a
      onClick={() => handleBuy()}
      href="#"
      className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {membershipType}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        ${membershipAmt}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {membershipDuration}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {membershipAmenities}
      </p>
    </a>
  );
};
