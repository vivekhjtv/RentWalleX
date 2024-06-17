
import { Input, Link, Navbar, NavbarContent } from '@nextui-org/react';
import React, { useState } from 'react';
import { FeedbackIcon } from '../icons/navbar/feedback-icon';
import { GithubIcon } from '../icons/navbar/github-icon';
import { SupportIcon } from '../icons/navbar/support-icon';
import { SearchIcon } from '../icons/searchicon';
import { BurguerButton } from './burguer-button';
import { NotificationsDropdown } from './notifications-dropdown';
import { UserDropdown } from './user-dropdown';
import { userInfo } from '../../../../../actions/userInfo';
import { auth } from '../../../../../auth';
import { SessionProvider, useSession } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper =  ({ children}: Props) => {
  const session = useSession();
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        style={{
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
        classNames={{
          wrapper: 'w-full max-w-full',
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          {/* <h5>Hi Zoey, <span className="text-2xl">Welcome Back</span></h5> */}
          <div>
            <SessionProvider>
            <h5>Hi {session.data?.user.name},</h5>
            </SessionProvider>
            <span className="text-2xl">Welcome Back</span>
          </div>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <div className="flex items-center gap-2 max-md:hidden"></div>

          <NotificationsDropdown />

          <div className="max-md:hidden"></div>

          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
