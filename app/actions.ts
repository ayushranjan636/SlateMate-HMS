"use server"

import { google } from "googleapis"
import { createClient } from "@supabase/supabase-js"
import { loginAdmin, logoutAdmin, isAuthenticated } from "@/lib/auth" // Import auth functions

// Google Sheets Environment Variables
const GOOGLE_SERVICE_ACCOUNT_EMAIL =
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "slatemate@slate-450617.iam.gserviceaccount.com"
const GOOGLE_PRIVATE_KEY =
  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") ||
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBQlu2vpsvbfj6\nCArX0Oc0h/TSPxxVumoj3Ixs5c2Xt68FEV/0RpvbnDM3oJrZLld7XaskEPvakMGg\nWIQB4WN1I9Jgu88L8Anh+bOigsXqUTHepgXHsIBwtLYH359OXsufKwmIdyeJSCaC\nVq+1jj+ZqQ1n2lejlUKWCQ9e54yclVcs6Lxszd+Dii8Uhb5ncw2DbsoWtXogR4vC\nItUiIcULAE7rLw9Y7W+RH8Hktbu2wsxoOmfsqovs+Hgc7UgkEsLtU1Xz27yQEYMV\nT4ynXDUumcmHlFNuNYtTQmZi4ffaJsJwn8TZQpk7FhSyHLpQc0hEhcXkctkdRH02\nMMXomRjFAgMBAAECggEAGupKVPnYKb41Lg1aBT3w6rNXThjAB33TiR8O555cXcQ/\n5ILLoaexB+AYj1IXftEiGepXt0QwFKaTG5PNqWgMg/nzM3RfR5hXUq4wwxyswmTV\n1IkRcQLh6yXKhu+GrlGBe69wv8gTLN7Bjjwocy6r05NkbJGkzFbd/oCl2rUriNBT\nAP1JVONSH3/Zl80L4OND3SKLvR84XmDEmyWtNAIDI+VpKqnfTUQfl4R5MuwWgQf9\nFbHLnHokMdAbm4K3kWVpkXhYZKrVmUXfeIRE8aosKyWaS23qtzrNBhdV1bAB04su\nE2jeHk6fyFETDWO10fESdrXQJL2MQwkREDI1Ve3EWQKBgQDrBLagWbyueQay3BZI\nEt4ZxJPGPQyBNd3hMXroV06kMv04mbvZo5/b2tkdVUyJ70JK1MDDkxRCirVc34u3\nm37j9LC/1+WI4V6ozhknH4+vWLLfkcVzD8AF3g6Cw06yuTqThxEnHL+soIzwRtTe\nKe2PZJMxY/Do7QcLVm5luO8giwKBgQDSgz+2jk8OEhseEKacLFRYwwhQxCFGBUAg\n0POuXfwLrgTHEntmkpigh879gb5hvyrYcGjeyyZDqdTIh1fK3pAV5q/igFGvjnCj\nr8M6wBZUgnBOjCMu+3u0ERAHFZETxwLWc8lmBQDH302bApXpHkUgYGqn85YV8WBG\n9pK1OQUF7wKBgQCaW4onX0kRvuOrbeokhF/jxLzaIxandt24Hmt/VniMWAEAv9gl\nZdaE7ARVw8R1g/OieoHw8hUIb1oXGawGd9armfbMydw0PvGRJWxXyd7xZ+xz8qYg\noGOadvJI6EY0FHxokPmvGq65jumClsMQ97DT0VbrxZxhH+zUgXwYy5IjaQKBgGOO\ncslRUA3lfjGfyku3oz4.LmWT+/BzdzqN11C1XgfgCp5jHT0LQ2dYEwpNG856bDbk\nIpSLGtORM/KKH3jv/NB+wtupt/gAs0CWVQwp3+Wjsp1TJSiJAp3MG/pdtrjVu3/U\nToETCKV98+PFO0R+bk67inVXe7lw6Alnf0Z5aui9AoGANtkTmoGVPak1Te2yAPDX\nqP1HcF1TprMws/Dc/w3UzRZ4XAsY/mw4s6u5+3X/yieLtC8Sz6iEIfvr3+WF1XaV\n74wBQs3cq01XWmqxG6AwWOBd4uFMxvzpU3O41NHkyW17LHlSRXZjzBtmyyxG8NN9\nql6ikTGpP4XtjgXLQ5EjfZY=\n-----END PRIVATE KEY-----\n"
const GOOGLE_SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || "1xWN-A0uTtBBhNucD2xWg6bK6OitvrCDGmfOi9SxwhTY" // Your provided spreadsheet ID

// Supabase Environment Variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

// Initialize Supabase client (server-side)
const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) : null

export async function submitContactForm(formData: any) {
  let googleSheetsSuccess = false
  let supabaseSuccess = false
  let errorMessage = ""

  // 1. Submit to Google Sheets
  if (GOOGLE_SERVICE_ACCOUNT_EMAIL && GOOGLE_PRIVATE_KEY && GOOGLE_SPREADSHEET_ID) {
    try {
      const auth = new google.auth.JWT(
        GOOGLE_SERVICE_ACCOUNT_EMAIL,
        undefined, // keyFile
        GOOGLE_PRIVATE_KEY,
        ["https://www.googleapis.com/auth/spreadsheets"],
      )

      const sheets = google.sheets({ version: "v4", auth })

      const values = [
        [
          formData.name,
          formData.contactNo,
          formData.email,
          formData.hotelName,
          formData.location,
          formData.pincode,
          formData.city,
          formData.state,
          formData.numberOfRooms,
          formData.earlyCustomer,
          new Date().toISOString(), // Timestamp
        ],
      ]

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: GOOGLE_SPREADSHEET_ID,
        range: "Sheet1!A:J", // Adjust range as needed
        valueInputOption: "RAW",
        requestBody: {
          values: values,
        },
      })

      if (response.status === 200) {
        googleSheetsSuccess = true
      } else {
        errorMessage += `Google Sheets API error: ${response.statusText}. `
        console.error("Google Sheets API error:", response.statusText)
      }
    } catch (error: any) {
      errorMessage += `Failed to submit to Google Sheets: ${error.message || "Unknown error"}. `
      console.error("Error submitting to Google Sheets:", error.message || error)
    }
  } else {
    errorMessage += "Google Sheets credentials missing. Skipping Google Sheets submission. "
    console.warn("Google Sheets credentials missing. Skipping Google Sheets submission.")
  }

  // 2. Insert into Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase.from("leads").insert({
        name: formData.name,
        contact_no: formData.contactNo,
        email: formData.email,
        hotel_name: formData.hotelName,
        location: formData.location,
        pincode: formData.pincode,
        city: formData.city,
        state: formData.state,
        number_of_rooms: formData.numberOfRooms,
        early_customer: formData.earlyCustomer === "yes", // Convert to boolean
      })

      if (error) {
        errorMessage += `Supabase insertion error: ${error.message}. `
        console.error("Supabase insertion error:", error)
      } else {
        supabaseSuccess = true
        console.log("Supabase insertion successful:", data)
      }
    } catch (error: any) {
      errorMessage += `Failed to insert into Supabase: ${error.message || "Unknown error"}. `
      console.error("Error inserting into Supabase:", error.message || error)
    }
  } else {
    errorMessage += "Supabase client not initialized. Skipping Supabase insertion. "
    console.warn("Supabase client not initialized. Skipping Supabase insertion.")
  }

  if (googleSheetsSuccess || supabaseSuccess) {
    return { success: true, message: "Form submitted successfully to selected databases!" }
  } else {
    return { success: false, message: errorMessage || "Failed to submit form to any database." }
  }
}

// New Server Action for Admin Login
export async function adminLoginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const result = await loginAdmin(email, password)
  if (!result.success) {
    return { success: false, message: result.message }
  }
  return { success: true }
}

// New Server Action for Admin Logout
export async function adminLogoutAction() {
  await logoutAdmin()
  return { success: true }
}

// New Server Action to fetch leads
export async function getLeads() {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    return { success: false, message: "Unauthorized", data: [] }
  }

  if (!supabase) {
    return { success: false, message: "Supabase client not initialized.", data: [] }
  }

  try {
    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching leads from Supabase:", error)
      return { success: false, message: error.message, data: [] }
    }

    return { success: true, data: data }
  } catch (error: any) {
    console.error("Unexpected error fetching leads:", error)
    return { success: false, message: error.message || "An unexpected error occurred.", data: [] }
  }
}

// Wrapper for isAuthenticated to be an async Server Action
export async function checkAuthStatus() {
  return await isAuthenticated()
}
