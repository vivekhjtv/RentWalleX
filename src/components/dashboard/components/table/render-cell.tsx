import { User, Tooltip, Chip, Button, Spacer } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { users } from "./data";

interface Props {
  user: (typeof users)[number];
  columnKey: string | React.Key;
}

export const RenderCell = ({ user, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "status":
      return (
        <>
         <Button
          size="sm"
          variant="flat"
          className={
            cellValue === "Paid"
              ? "px-5 py-3 bg-green-200 w-32 sm:w-full rounded-xl"
              : cellValue === "Processing"
              ? "px-5 py-3 bg-violet-300 w-32 sm:w-full rounded-xl"
              : "warning"
          }
        >
          <span className="capitalize text-xs">{cellValue}</span>
        </Button>
       
        </>
      );
    default:
      return cellValue;
  }
};
