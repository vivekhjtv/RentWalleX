import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';
import React from 'react';
import { DarkModeSwitch } from './darkmodeswitch';
import { SignOut } from '../../../../../actions/signout';

export const UserDropdown = () => {
  const handleSignout = () => {
    SignOut();
}
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <div className="relative grid select-none items-center whitespace-nowrap rounded-full text-xs font-bold uppercase">
            <div className="absolute top-2/4 left-1.5 h-5 w-5 -translate-y-2/4">
              <img
                alt="Tania Andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-full w-full -translate-x-0.5 !rounded-full  object-cover object-center"
              />
            </div>
            <span className="ml-[30px]">
              <p className="block font-sans text-sm antialiased font-medium leading-none capitalize">
                Tania Andrew
              </p>
            </span>
          </div>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
        className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg py-4 px-4 border border-gray-200 dark:border-gray-700"
      >
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Signed in as</p>
          <p>zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem onClick={handleSignout} key="logout" color="danger" className="text-danger">
          Signout
        </DropdownItem>
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
