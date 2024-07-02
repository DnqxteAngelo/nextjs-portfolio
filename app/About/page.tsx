import Image from "next/image"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"

import { User, Phone, Mail, Cake, GraduationCap, MapPin } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function About() {
    return (
        <div className="flex min-h-screen">
        <div className="grid grid-cols-1 xl:grid-cols-4 p-10 x gap-x-8 gap-y-8">  
            <div className="h-[250px] col-span-1 justify-items-center">
                <div className="p-2 flex justify-center items-center">
                    <Image src="/img/angelo.jpg" alt="" width={230} height={300} className="rounded-lg"/>
                </div>
            </div>
            <Card className="h-[750] xl:h-[500px] col-span-2">
                <CardTitle className="text-4xl p-6">
                    About Me
                </CardTitle>
                <Separator />
                <CardContent className="gap-x-4 p-4">
                    <Card className="mb-4">
                        <CardContent className="flex p-4">
                            <div className="text-left">
                                <div className="text-xl text-justify">
                                    Hi! I'm an app developer who loves building cool and easy-to-use apps. I work on both the looks and the guts of apps, making sure they run smoothly and look great. I enjoy solving tricky problems and always try to learn new things in tech. Let's create something awesome together!
                                </div>
                                </div>
                        </CardContent>
                    </Card>
                    <Card className="">
                    <CardContent className="flex p-2">
                            <div className="text-left">
                                <div className="text-xl mb-2">Personal Details</div>
                                    <div className="grid xl:grid-cols-2 gap-4 mt-2">
                                        <div className="flex flex-col gap-x-4 gap-y-2 mx-auto xl:mx-0">
                                            <div className='flex gap-2 text-lg text-muted-foreground'><User size={24} /> Angelo C. Serafino</div>
                                            <div className='flex gap-2 text-lg text-muted-foreground'><Phone size={24} /> +63 947 696 9997</div>
                                            <div className='flex gap-2 text-lg text-muted-foreground'><Mail size={24} /> serafinoangelo28@gmail.com</div>
                                            
                                        </div>
                                        <div className="flex flex-col gap-x-4 gap-y-2 mx-auto xl:mx-0">
                                            <div className='flex gap-2 text-lg text-muted-foreground'><Cake size={24} /> July 28, 2002</div>
                                            <div className='flex gap-2 text-lg text-muted-foreground'><GraduationCap size={24} /> Information Technology</div>
                                            <div className='flex gap-2 text-lg text-muted-foreground'><MapPin size={24} /> Cagayan de Oro City, Philippines</div>
                                        </div>
                                    </div>
                                </div>
                        </CardContent>
                        </Card>
                </CardContent>
            </Card>
            <Card className="h-[500px] col-span-1">
                <CardTitle className="text-4xl p-6">Skills</CardTitle>
                <Separator />
                <CardContent>
                <div className="text-center xl:text-left">
                                    <div className=" gap-4 mt-2">
                                        <div className="flex flex-col gap-x-4 mx-auto xl:mx-0">
                                            <div>
                                                <span className="block text-sm ">HTML5, CSS - 60%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={60} />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="block text-sm  mt-4">PHP - 45%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={45} />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="block text-sm  mt-4">JavaScript, TypeScript - 25%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={25} />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="block text-sm  mt-4">ReactJS - 10%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={10} />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="block text-sm mt-4">Dart - Flutter - 20%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={20} />
                                                </div>
                                            </div>    
                                            <div>
                                                <span className="block text-sm mt-4">MySQL - 35%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={35} />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="block text-sm mt-4">Washing Dishes - 95%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={95} />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="block text-sm mt-4">Mobile Legends - 69%</span>
                                                <div className="relative pt-1">
                                                    <Progress value={69} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </CardContent>
            </Card>
        </div>
        </div>
    )
}