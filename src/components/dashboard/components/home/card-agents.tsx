import { Avatar, AvatarGroup, Card, CardBody } from "@nextui-org/react";
import React from "react";

const pictureUsers = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];

type Props = {
  custom : ()=>void
}

export const CardAgents = ({custom}:Props) => {
  return (
    <Card className="bg-default-50 rounded-xl shadow-md w-full">
      <CardBody className="py-5 gap-6">
      <a onClick={custom}
          href="#"
          className="block max-w-md p-6 bg-gradient-to-r from-green-500 to-lime-300 border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Zoey
          </h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            **** **** **** 3889
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Elite Membership
          </p>
        </a>
      </CardBody>
    </Card>
  );
};
