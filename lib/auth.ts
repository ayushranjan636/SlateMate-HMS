import { cookies } from "next/headers"

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@slatemate.in"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "SlateMate@2024"
const SESSION_COOKIE_NAME = "admin_session"
const SESSION_MAX_AGE = 60 * 60 // 1 hour

export async function loginAdmin(email: string, password: string) {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // In a real app, you'd generate a secure token/session ID here
    const sessionToken = "super-secret-admin-token-" + Date.now() // Basic token for demo

    cookies().set(SESSION_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    })
    return { success: true }
  }
  return { success: false, message: "Invalid credentials" }
}

export async function isAuthenticated(): Promise<boolean> {
  const session = cookies().get(SESSION_COOKIE_NAME)
  return !!session?.value // Check if session cookie exists
}

export async function logoutAdmin() {
  cookies().delete(SESSION_COOKIE_NAME)
}
