"use client"
import { db } from "@/lib/db"
import { useSession } from "next-auth/react"
export const payment = async () => {
    const { data: session, status } = useSession()
    var email = "";
    if(session?.user.email != undefined){
        email = session.user.email;
    }

  const result = await db.user_Info.findUnique({
        where:{
            email:email
        },
        include:{
            Bank_Info:true,
        }
    })

    return result;
    
}