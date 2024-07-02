import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input"

import { Send, Facebook, Mail, Phone } from "lucide-react";


export default function ContactPage(){
    return (
        <div className="min-h-screen p-10">
          <div className="flex flex-col md:flex-row justify-start gap-x-16 gap-y-8">
            <div className="">
              <div className="text-4xl font-bold">
                Contact Me
              </div>
              <p className="mt-4 text-lg">
                Got any questions for my service? Feel free to contact me!
              </p>
              <div className="mt-4">
                <Label>Name</Label>
                <Input type="text" placeholder="Enter your name..." className="w-[300px] mt-2"/>
              </div>
              <div className="mt-4">
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email..." className="w-[300px] mt-2"/>
              </div>
              <div className="mt-4">
                <Label>Your Message</Label>
                <Textarea placeholder="Type your message here." className="w-full md:w-[450px] h-[150px] mt-2"/>
              </div>
              <div className="flex w-full md:w-[450px] mt-4 justify-end">
                <div className="flex">
                  <Button className="flex items-center gap-x-2">
                    Send <Send size={18} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 mt-10">
              <div className="flex items-center gap-x-2 text-xl">
                <Facebook size={28}/> serafino.angelo.x
              </div>
              <div className="flex items-center gap-x-2 text-xl">
                <Mail size={28}/> serafinoangelo28@gmail.com
              </div>
              <div className="flex items-center gap-x-2 text-xl">
                <Phone size={28}/> +63 947 696 9997
              </div>
            </div>
          </div>
        </div>
    )
}