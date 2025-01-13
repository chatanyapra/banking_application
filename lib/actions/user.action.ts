'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {

    } catch (error) {
        console.log("Error signing in user: ", error);
    }
}
export const signUp = async (userData: SignUpParams) => {
    try {
        const { email, password, firstName, lastName } = userData;
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );
        const session = await account.createEmailPasswordSession(email, password);

        (await cookies()).set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        
        parseStringify(newUserAccount);
        return newUserAccount;

    } catch (error) {
        console.log("Error signing up user: ", error);
    }
}
export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();
        return parseStringify(user);
    } catch (error) {
        console.log("Error getting logged in user: ", error);
        
    }
}
