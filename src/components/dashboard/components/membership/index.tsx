"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { payment } from "../../../../../actions/payment";
// import { DotsIcon } from "@/components/icons/accounts/dots-icon";
// import { ExportIcon } from "@/components/icons/accounts/export-icon";
// import { InfoIcon } from "@/components/icons/accounts/info-icon";
// import { TrashIcon } from "@/components/icons/accounts/trash-icon";
// import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
// import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";
// import { SettingsIcon } from "@/components/icons/sidebar/settings-icon";
// import { TableWrapper } from "@/components/table/table";
// import { AddUser } from "./add-user";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import { UsersIcon } from "../icons/breadcrumb/users-icon";
import { TrashIcon } from "@radix-ui/react-icons";
import { DotsIcon } from "../icons/accounts/dots-icon";
import { ExportIcon } from "../icons/accounts/export-icon";
import { InfoIcon } from "../icons/accounts/info-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { TableWrapper } from "../table/table";
import Modal from "@/components/auth/modal";

export const Membership = () => {
  const [modal,setModal] = useState(true);

    payment().then((data) => {
      console.log(data);
    });

  // useEffect(()=>{
  //   <Modal onClose={()=>setModal(false)}/>
  // },[])
  return (
    <>
      <h1 className="m-6">Membership</h1>    
<a href="#" className="block max-w-sm p-6 m-6 bg-gradient-to-r from-green-500 to-lime-300 border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zoey</h5>
<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">**** **** **** 3889</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Elite Membership</p>
</a>

<h2 className="m-6">Select Membership Plan</h2>
<div className="grid grid-cols-3 gap-4">
<a href="#" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">One-Time Payment</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Charge users a one-time payment fee to access the content.</p>
</a>
<a href="#" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Membership</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Split the full bundle price over several monthly payments.</p>
</a>
<a href="#" className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
</div>

    </>
  );
};
