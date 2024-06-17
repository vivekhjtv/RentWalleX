import { Avatar, AvatarGroup, Card, CardBody } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { getMembership } from "../../../../../actions/membership";
import { MembershipInfoType, MembershipsType } from "@/types";

type Props = {
  custom: () => void;
};

export const CardAgents = ({ custom }: Props) => {
  const [memInfo, setMemInfo] = useState<MembershipInfoType>();
  const session = useSession();
  const userEmail = session?.data?.user.email!;
  useEffect(() => {
    console.log(userEmail);
    getMembership(userEmail).then((data: any) => {
      setMemInfo(data);
    });
  }, [userEmail]);
  console.log(memInfo);
  return (
    <Card className="block max-w-md p-6 bg-gradient-to-r from-green-500 to-lime-300 border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700">
      <CardBody className="py-5 gap-6">
        <a onClick={custom} href="#">
          <div className="flex items-center">
            <Avatar
              className="h-16 w-16"
              isBordered
              src={session.data?.user.image!}
              alt={session.data?.user.name!}
            />
            <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {memInfo?.name}
            </h5>
          </div>

          <h5 className="mt-5 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Status:{" "}
            {!memInfo?.Membership_Info[0]
              ? "N/A"
              : memInfo?.Membership_Info[0].membershipStatus}
          </h5>
          <p className="font-bold text-gray-700 dark:text-gray-400">
            {!memInfo?.Membership_Info[0]
              ? "N/A"
              : memInfo?.Membership_Info[0].membershipType}{" "}
            Membership
          </p>
        </a>
      </CardBody>
    </Card>
  );
};
