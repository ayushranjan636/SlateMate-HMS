"use client"

import { useActionState } from "react"
import { adminLoginAction } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [state, formAction, isPending] = useActionState(adminLoginAction, {
    success: false,
    message: "",
  })

  useEffect(() => {
    if (state.success) {
      router.push("/admin/dashboard")
    }
  }, [state.success, router])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-extralight text-center text-gray-900">Admin Login</h1>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="mail@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          {state.message && <p className="text-sm text-red-600 text-center">{state.message}</p>}
          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md font-light text-lg"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
