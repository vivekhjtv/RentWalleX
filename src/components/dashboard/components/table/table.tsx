import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spacer
} from "@nextui-org/react";
import React from "react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";

export const TableWrapper = () => {
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells" className="border-separate border-spacing-2">
        <TableHeader columns={columns} className="text-left rounded-xl">
          {(column) => (
            <TableColumn className="bg-lime-100 text-green-500"
              key={column.uid}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}  >
         
          {(item: any) => (
            <TableRow className="bg-lime-100 mb-4" >
              {(columnKey) => (
               
                  <TableCell className="gap-y-4">
                  {RenderCell({ user: item, columnKey: columnKey })}
                </TableCell>
               
              )}
            </TableRow>
          )}
        
         
       
        </TableBody>
        
      </Table>
    </div>
  );
};
