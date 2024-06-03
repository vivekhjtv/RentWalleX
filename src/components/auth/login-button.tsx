"use client";
import { Redirect } from 'next'
import { useRouter } from 'next/navigation';
import React from 'react'

interface LoginButtonProps{
    children:React.ReactNode,
    mode?:"modal" | "redirect",
    asChild?: boolean
}

export const LoginButton = ({children,mode="redirect",asChild}:LoginButtonProps) => {

    const router = useRouter();

    const onClick = () => {
      router.push("/auth/login");
    };

  return (
    <span onClick={onClick} className="cursor-pointer">
        {children}
    </span>
  )
}
