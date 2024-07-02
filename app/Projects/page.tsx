import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"



export default function ProjectsPage(){
    return (
       <div className="mb-10">
        <div className="flex justify-center mt-8 text-6xl">
          My Works
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-x-16 gap-y-8">
          <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Arithmekids - Math Game for Kids</CardTitle>
            <CardDescription className="text-md">A mathematics mobile app game for kids. Made with Flutter.</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent>
            <Carousel className="p-2">
              <CarouselContent>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/mathgame/mathgame1.png" alt="" width={200} height={450}/>                 
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/mathgame/mathgame2.png" alt="" width={200} height={450}/>                 
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/mathgame/mathgame3.png" alt="" width={200} height={450}/>
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/mathgame/mathgame4.png" alt="" width={200} height={450}/>
                    </CardContent>
                  </Card>   
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          </Card>
          <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Fastfood Ordering Mobile App</CardTitle>
            <CardDescription className="text-md">A fastfood ordering mobile app that utilize QR code. Made with Flutter.</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent>
            <Carousel className="p-2">
              <CarouselContent>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/fastfood/fastfood1.png" alt="" width={200} height={450}/>      
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/fastfood/fastfood2.png" alt="" width={200} height={450}/>      
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/fastfood/fastfood3.png" alt="" width={200} height={450}/>
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/fastfood/fastfood4.png" alt="" width={200} height={450}/>
                    </CardContent>
                  </Card>   
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          </Card>
          <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl text-center">OnlyFriends - Social Media Mobile App</CardTitle>
            <CardDescription className="text-md">A social media mobile app inspired by OnlyFans. Made with Flutter.</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent>
            <Carousel className="p-2">
              <CarouselContent>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/onlyfriends/onlyfriends1.png" alt="" width={200} height={450}/>      
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/onlyfriends/onlyfriends2.png" alt="" width={200} height={450}/>      
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/onlyfriends/onlyfriends3.png" alt="" width={200} height={450}/>
                    </CardContent>
                  </Card>   
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex items-center justify-center p-2">
                    <CardContent>
                        <Image src="/img/onlyfriends/onlyfriends4.png" alt="" width={200} height={450}/>
                    </CardContent>
                  </Card>   
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          </Card>
        </div>
       </div>
    )
}