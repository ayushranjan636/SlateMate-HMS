import { redirect } from "next/navigation"
import { checkAuthStatus, adminLogoutAction, getLeads } from "@/app/actions" // Import checkAuthStatus
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogOut } from "lucide-react"
import { format } from "date-fns" // Import format for date formatting

export default async function AdminDashboardPage() {
  const authenticated = await checkAuthStatus() // Use checkAuthStatus
  if (!authenticated) {
    redirect("/admin/login")
  }

  const { success, data: leads, message } = await getLeads()

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extralight text-gray-900">Admin Dashboard</h1>
        <form action={adminLogoutAction}>
          <Button variant="outline" className="font-light bg-transparent">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </form>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-light">Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {!success ? (
            <p className="text-red-600">{message || "Failed to load leads."}</p>
          ) : leads && leads.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Contact No.</TableHead>
                    <TableHead>Hotel Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Rooms</TableHead>
                    <TableHead>Early Customer</TableHead>
                    <TableHead>Submitted At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead: any) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.contact_no}</TableCell>
                      <TableCell>{lead.hotel_name}</TableCell>
                      <TableCell>{`${lead.location}, ${lead.city}, ${lead.state} - ${lead.pincode}`}</TableCell>
                      <TableCell>{lead.number_of_rooms}</TableCell>
                      <TableCell>{lead.early_customer ? "Yes" : "No"}</TableCell>
                      <TableCell>{format(new Date(lead.created_at), "PPP p")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <p className="text-gray-600">No leads found yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
