"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { useSession } from "next-auth/react";
import {auth} from "../../../auth"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "../../../schemas";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "../../../actions/login";
import { useSearchParams } from "next/navigation";
import Modal from "./modal";

export const LoginForm = () => {

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
    : "";  
    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error,setError] = useState<string | undefined>("");
    const [success,setSuccess] = useState<string | undefined>("");
    const [isPending,startTransition] = useTransition();
    const [modal,setModal] = useState(false);
    const [isChecked, setIsChecked] = useState(true);

    
    const handleCheckboxChange = (event:any) => {
      setIsChecked(event.target.checked);
    };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });






  const onSubmit = (values: z.infer<typeof LoginSchema>) => {

//  setModal(true);


    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
        .then((data:any) => {
          console.log(data);
          
          
          
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            console.log("open modalbhjgugu");
            
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });


  };

  return (
    <><CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="123456" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="john.doe@example.com"
                          type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field}
                          disabled={isPending}
                          placeholder="******" type="password" />
                      </FormControl>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      >
                        <Link href="/auth/reset">Forgot password?</Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )} />
              </>
            )}
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </Form>
    </CardWrapper>
    {/* <Modal isVisible={modal} onClose={()=>setModal(false)}   /> */}
 
    </>
  );
};
