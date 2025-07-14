"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "@/app/actions" // Import the Server Action

interface FormData {
  name: string
  contactNo: string
  email: string
  hotelName: string
  location: string
  pincode: string
  city: string
  state: string
  numberOfRooms: string
  earlyCustomer: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNo: "",
    email: "",
    hotelName: "",
    location: "",
    pincode: "",
    city: "",
    state: "",
    numberOfRooms: "",
    earlyCustomer: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Call the Server Action
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.message || "Failed to submit form. Please try again.")
      }
    } catch (err) {
      console.error("Client-side error calling Server Action:", err)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-light text-gray-900 mb-4">Thank You!</h1>
          <p className="text-gray-600 font-light mb-8">
            Your information has been submitted successfully. We'll get back to you soon.
          </p>
          <Link href="/">
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-light">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
            <span className="text-xl sm:text-2xl font-light text-gray-900">SlateMate</span>
          </Link>
        </div>
      </header>

      {/* Contact Form */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 mb-6">Get in Touch</h1>
              <p className="text-lg sm:text-xl text-gray-600 font-light">
                Ready to transform your hotel management? Let's discuss your needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900">Personal Information</h3>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-white border-gray-200 rounded-xl"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactNo" className="text-sm font-medium text-gray-700">
                        Contact Number *
                      </Label>
                      <Input
                        id="contactNo"
                        type="tel"
                        required
                        value={formData.contactNo}
                        onChange={(e) => handleInputChange("contactNo", e.target.value)}
                        className="bg-white border-gray-200 rounded-xl"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-white border-gray-200 rounded-xl"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Hotel Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900">Hotel Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="hotelName" className="text-sm font-medium text-gray-700">
                      Hotel Name *
                    </Label>
                    <Input
                      id="hotelName"
                      type="text"
                      required
                      value={formData.hotelName}
                      onChange={(e) => handleInputChange("hotelName", e.target.value)}
                      className="bg-white border-gray-200 rounded-xl"
                      placeholder="Your hotel name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                      Location/Address *
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="bg-white border-gray-200 rounded-xl"
                      placeholder="Hotel address"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                        City *
                      </Label>
                      <Input
                        id="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="bg-white border-gray-200 rounded-xl"
                        placeholder="City"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                        State *
                      </Label>
                      <Input
                        id="state"
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        className="bg-white border-gray-200 rounded-xl"
                        placeholder="State"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">
                        Pincode *
                      </Label>
                      <Input
                        id="pincode"
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        className="bg-white border-gray-200 rounded-xl"
                        placeholder="000000"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900">Business Details</h3>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Number of Rooms *</Label>
                    <Select
                      value={formData.numberOfRooms}
                      onValueChange={(value) => handleInputChange("numberOfRooms", value)}
                    >
                      <SelectTrigger className="bg-white border-gray-200 rounded-xl">
                        <SelectValue placeholder="Select room count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-15">Less than 15 rooms</SelectItem>
                        <SelectItem value="11-30">11-30 rooms</SelectItem>
                        <SelectItem value="more-than-30">More than 30 rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-gray-700">
                      Are you ready to be our early customer? *
                    </Label>
                    <RadioGroup
                      value={formData.earlyCustomer}
                      onValueChange={(value) => handleInputChange("earlyCustomer", value)}
                      className="flex space-x-8"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="text-sm text-gray-700 cursor-pointer">
                          Yes, I'm ready
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="text-sm text-gray-700 cursor-pointer">
                          Not yet, but interested
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-light text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Information"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-xl font-light text-gray-900">SlateMate HMS</span>
            </div>
            <p className="text-gray-500 font-light text-sm">© 2025 SlateMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
