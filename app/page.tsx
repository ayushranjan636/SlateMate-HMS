"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Bed,
  Shirt,
  Bell,
  Calendar,
  BarChart3,
  MessageSquare,
  Users,
  ChefHat,
  Globe,
  Crown,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react"
import Link from "next/link"

export default function SlateMateHMS() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl sm:text-2xl font-light text-gray-900">SlateMate</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Features
            </Link>
            <Link href="#modules" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Modules
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Contact
            </Link>
          </nav>
          <Link href="/contact">
            <Button className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2 rounded-full font-light text-sm sm:text-base">
              Book Demo
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-gray-50 to-white rounded-full blur-3xl opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 sm:mb-8 px-4 sm:px-6 py-2 text-sm font-light border-gray-200 bg-white"
            >
              Hotel Management
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extralight text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
              Redefining
              <br />
              <span className="font-light bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Hotel Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed font-light max-w-3xl mx-auto px-4">
              A premium, modular system that empowers luxury hotels to operate effortlessly and pay only for what they
              use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-base sm:text-lg"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-base sm:text-lg border-gray-200 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Visual - Responsive Dashboard */}
        <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">Hotel Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Live</span>
                    </div>
                  </div>

                  {/* Dashboard Content - Responsive Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* Metrics Column */}
                    <div className="lg:col-span-1 grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
                      <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">87%</div>
                        <div className="text-xs sm:text-sm text-gray-600">Occupancy</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">24</div>
                        <div className="text-xs sm:text-sm text-gray-600">Check-ins</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">₹2.4L</div>
                        <div className="text-xs sm:text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>

                    {/* Recent Activities Column - Improved */}
                    <div className="lg:col-span-2 bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm sm:text-base font-medium text-gray-900">Recent Activities</h4>
                        <div className="text-xs text-gray-500">Live Updates</div>
                      </div>
                      <div className="space-y-3 sm:space-y-4 max-h-48 sm:max-h-64 overflow-y-auto">
                        <div className="flex items-start space-x-3 p-2 sm:p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              Room 301 - Cleaned
                            </div>
                            <div className="text-xs text-gray-500">2 minutes ago</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-2 sm:p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              Guest Request - Extra Towels
                            </div>
                            <div className="text-xs text-gray-500">5 minutes ago</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-2 sm:p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              Maintenance - AC Unit 205
                            </div>
                            <div className="text-xs text-gray-500">12 minutes ago</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-2 sm:p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              Laundry - Suite 501 Ready
                            </div>
                            <div className="text-xs text-gray-500">18 minutes ago</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-2 sm:p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              Low Stock Alert - Minibar
                            </div>
                            <div className="text-xs text-gray-500">25 minutes ago</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Room Status Column */}
                    <div className="lg:col-span-1 bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Room Status</div>
                      <div className="space-y-2 sm:space-y-3">
                        {[
                          { room: "101", status: "green" },
                          { room: "102", status: "yellow" },
                          { room: "103", status: "green" },
                          { room: "104", status: "red" },
                          { room: "105", status: "green" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-medium text-gray-900">{item.room}</span>
                            <div
                              className={`w-3 h-3 rounded-full ${
                                item.status === "green"
                                  ? "bg-green-500"
                                  : item.status === "yellow"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification Cards - Responsive */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-32 sm:w-40 h-16 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3">
                <div className="flex items-center space-x-2">
                  <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-gray-900 truncate">VIP Arrival</div>
                    <div className="text-xs text-gray-500 truncate">Suite 501 - 3:30 PM</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-28 sm:w-36 h-16 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3">
                <div className="flex items-center space-x-2">
                  <Package className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-gray-900 truncate">Low Stock</div>
                    <div className="text-xs text-gray-500 truncate">Minibar items</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-3 sm:-left-6 w-28 sm:w-32 h-14 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3">
                <div className="flex items-center space-x-2">
                  <Shirt className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-gray-900 truncate">Laundry</div>
                    <div className="text-xs text-gray-500 truncate">Ready for pickup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 sm:mb-8">
              Luxury Meets Intelligence
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light mb-8 sm:mb-12 px-4">
              We understand premium hotels demand flawless operations and exceptional guest care.
            </p>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 mx-4">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-light text-gray-900">"You only pay for what you use."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-4 sm:mb-6">
              Core Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">Essential tools for luxury hotel management</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Feature Tiles - Responsive */}
            {[
              {
                icon: Package,
                title: "Inventory Management",
                description: "Track every item from minibar stock to luxury linen in real time with automated alerts.",
              },
              {
                icon: Bed,
                title: "Room Status & Lost & Found",
                description: "Live updates on room status with automated lost & found logs and guest notifications.",
              },
              {
                icon: Shirt,
                title: "Laundry Monitoring",
                description: "Seamless tracking of guest laundry, staff uniforms, and housekeeping loads.",
              },
              {
                icon: Bell,
                title: "Events & Alerts",
                description: "Real-time notifications for VIP arrivals, guest requests, and urgent issues.",
              },
              {
                icon: Calendar,
                title: "Task Management",
                description: "Automated housekeeping, maintenance, and service reminders with smart scheduling.",
              },
              {
                icon: BarChart3,
                title: "Analytics & Reports",
                description: "Comprehensive insights on revenue, occupancy, staff efficiency, and guest feedback.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Promise */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight mb-12 sm:mb-20">Our Premium Promise</h2>

            <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
              {[
                {
                  icon: Check,
                  title: "Modular & Flexible",
                  description: "Choose only what you need. No clutter, no waste.",
                },
                {
                  icon: Crown,
                  title: "Tailored Experience",
                  description: "Customized to your hotel's unique standards.",
                },
                {
                  icon: Sparkles,
                  title: "Pay As You Scale",
                  description: "Only pay for active modules, scale anytime.",
                },
                {
                  icon: MessageSquare,
                  title: "24/7 Support",
                  description: "Dedicated assistance whenever you need it.",
                },
              ].map((promise, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                    <promise.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">{promise.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 font-light">{promise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional Modules */}
      <section id="modules" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-4 sm:mb-6">
              Optional Add-Ons
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">
              Extend your system with additional capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { icon: MessageSquare, name: "Guest Feedback System" },
              { icon: Users, name: "Staff Management" },
              { icon: ChefHat, name: "Kitchen Management" },
              { icon: Globe, name: "Booking Integration" },
              { icon: Crown, name: "VIP & Loyalty Tools" },
            ].map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <module.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
                </div>
                <p className="text-xs sm:text-sm lg:text-base font-light text-gray-900 leading-tight">{module.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 sm:mb-8">
            Ready to redefine hotel management?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join the future of luxury hospitality with SlateMate HMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-base sm:text-lg"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-base sm:text-lg border-gray-200 bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-gray-100 py-12 sm:py-16 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-light text-gray-900">SlateMate HMS</span>
              </div>
              <p className="text-gray-600 font-light mb-4 sm:mb-6">Luxury Hotel Management System</p>
              <div className="space-y-2 sm:space-y-3 text-gray-600 font-light text-sm sm:text-base">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>Headquarter: Nirmaan IIT Madras Chennai TN - 600036</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>contact@slatemate.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>+91 90258 67204</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 font-light text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4 sm:mb-6">Legal</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 font-light text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            {/* New Admin Login Button */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4 sm:mb-6">Admin</h4>
              <Link href="/admin/login">
                <Button
                  variant="outline"
                  className="w-full justify-center bg-transparent border-gray-200 text-gray-600 hover:text-gray-900 font-light"
                >
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 font-light text-sm sm:text-base">© 2025 SlateMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
