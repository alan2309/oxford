"use server";

import { cookies } from "next/headers";

/**
 * CONFIGURATION: SET YOUR 6-DIGIT PIN HERE
 * Since this is a Server Action, this value is NEVER sent to the browser.
 * It is completely invisible in the developer panel/inspect.
 */
const SITE_PIN = "130901"; 

export async function verifyPin(enteredPin: string) {
  if (enteredPin === SITE_PIN) {
    const cookieStore = await cookies();
    
    // Set a cookie that expires in 24 hours
    // This is more secure than localStorage as it can be httpOnly
    cookieStore.set("oxford_tech_access", "true", {
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
      httpOnly: true, // Prevents client-side JS from reading it
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    
    return { success: true };
  }
  
  return { success: false };
}

export async function checkAuthStatus() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("oxford_tech_access");
  return auth?.value === "true";
}
