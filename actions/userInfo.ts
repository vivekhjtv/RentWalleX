"use server";
import { db } from "@/lib/db";
import { auth } from "../auth";

export const userInfo = async () => {
  // const { data: session, status } = useSession()
  const session = await auth();
  const userEmail = session?.user?.email!;
  var email = userEmail;
  // if(session?.user.email != undefined){
  //     email = session.user.email;
  // }

  const result = await db.user_Info.findUnique({
    where: {
      email: email,
    },
    include: {
      Bank_Info: true,
    },
  });

  return result?.name;
};

export const userInfos = async () => {
  // const { data: session, status } = useSession()
  const session = await auth();
  const userEmail = session?.user?.email!;
  var email = userEmail;
  // if(session?.user.email != undefined){
  //     email = session.user.email;
  // }

  const result = await db.user_Info.findUnique({
    where: {
      email: email,
    },
    include: {
      Bank_Info: true,
    },
  });

  return result;
};
