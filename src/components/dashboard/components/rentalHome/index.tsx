'use client';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// import { AddUser } from './add-user';
import { HouseIcon } from '../icons/breadcrumb/house-icon';
import { UsersIcon } from '../icons/breadcrumb/users-icon';
import { TrashIcon } from '@radix-ui/react-icons';
import { DotsIcon } from '../icons/accounts/dots-icon';
import { ExportIcon } from '../icons/accounts/export-icon';
import { InfoIcon } from '../icons/accounts/info-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { TableWrapper } from '../table/table';
import Modal from '@/components/auth/modal';

export const RentalHome = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
        <ul className="flex">
          <li className="flex gap-2">
            <HouseIcon />
            <Link href={'/'}>
              <span>Home</span>
            </Link>
            <span> / </span>{' '}
          </li>

          <li className="flex gap-2">
            <UsersIcon />
            <span>Users</span>
            <span> / </span>{' '}
          </li>
          <li className="flex gap-2">
            <span>List</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold">All Accounts</h3>
        <div className="flex justify-between flex-wrap gap-4 items-center">
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
            <Input
              classNames={{
                input: 'w-full',
                mainWrapper: 'w-full',
              }}
              placeholder="Search users"
            />
            <SettingsIcon />
            <TrashIcon />
            <InfoIcon />
            <DotsIcon />
          </div>
          <div className="flex flex-row gap-3.5 flex-wrap">
            <Button color="primary" startContent={<ExportIcon />}>
              Export to CSV
            </Button>
          </div>
        </div>
        <div className="max-w-[95rem] mx-auto w-full bg-gray-100 rounded-lg">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4 px-6">
              <h1 className="text-xl font-bold">Rental Home</h1>
            </div>
            <div className="flex flex-wrap px-6 py-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Occupants</p>
                <p className="text-gray-500">2 Adults & Children</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Pet</p>
                <p className="text-gray-500">Yes/No</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Vehicle</p>
                <p className="text-gray-500">Yes/No</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Employment Status</p>
                <p className="text-gray-500">Full Time</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Job Title</p>
                <p className="text-gray-500">Carpenter</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Company</p>
                <p className="text-gray-500">Rogers</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Personal Income</p>
                <p className="text-gray-500">$43000</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
                <p className="font-bold text-gray-700">Household Income</p>
                <p className="text-gray-500">—</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
