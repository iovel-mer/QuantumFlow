"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Users, MapPin, Clock } from "lucide-react"
import { Header } from "../components/Header/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Whether you have questions, feedback, or partnership ideas — we're here to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[{
              icon: Mail,
              title: "General Inquiries",
              description: "For general questions about our services and company.",
              email: "info@example.com",
              phone: "+1 (800) 123-4567",
              hours: "Monday – Friday, 9 AM – 5 PM EST"
            },
            {
              icon: Phone,
              title: "Technical Support",
              description: "For technical issues, product help, and troubleshooting.",
              email: "support@example.com",
              phone: "+1 (800) 987-6543",
              hours: "Available 24/7"
            },
            {
              icon: Users,
              title: "Partnerships & Media",
              description: "For business collaborations, press inquiries, and media requests.",
              email: "partnerships@example.com",
              phone: "+1 (800) 765-4321",
              hours: "Monday – Friday, 10 AM – 4 PM EST"
            }].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <item.icon className="h-5 w-5 text-indigo-600" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-700">
                  <p>Email: <a href={`mailto:${item.email}`} className="text-indigo-600 hover:underline">{item.email}</a></p>
                  <p>Phone: <a href={`tel:${item.phone}`} className="text-indigo-600 hover:underline">{item.phone}</a></p>
                  <p className="text-gray-500 flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {item.hours}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="h-fit bg-white shadow-md border border-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
              <CardDescription>Fill in the form and we'll get back to you promptly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Choose a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Write your message here..." className="min-h-[120px]" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full text-base font-medium">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Locations */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { city: "New York (HQ)", address: ["123 Tech Avenue", "New York, NY 10001", "USA"] },
              { city: "London", address: ["45 Innovation Street", "London EC1A 1BB", "UK"] },
              { city: "Singapore", address: ["78 Silicon Road", "Singapore 018906", "Singapore"] }
            ].map((loc, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <MapPin className="h-6 w-6 mx-auto text-indigo-600 mb-2" />
                  <CardTitle className="text-lg font-medium">{loc.city}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  {loc.address.map((line, i) => <p key={i}>{line}</p>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Response Time */}
        <Card className="max-w-2xl mx-auto bg-indigo-50 border-indigo-200 shadow-sm">
          <CardHeader>
            <CardTitle>Our Response Times</CardTitle>
            <CardDescription>We aim to reply quickly to every message.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-gray-800 space-y-2">
            <p><strong>Live Chat:</strong> Immediate during working hours</p>
            <p><strong>Email:</strong> Within 4 hours for urgent requests, 24 hours otherwise</p>
            <p><strong>Phone:</strong> Minimal wait time during business hours</p>
            <p><strong>Business:</strong> Within 1 business day</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Page
