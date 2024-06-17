"use server"
import { db } from "@/lib/db"

export const getMembershipTypes = async () =>{
    const result = await db.membership_Plans.findMany();
    return result;
}