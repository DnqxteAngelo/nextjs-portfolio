import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

export default function Hero() {
    return (
        <section className="py-12 xl:py-24 h-[40vh] xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="items-center md:flex justify-between gap-x-8">
                    <div className="flex flex-col items-center">
                        <div className="flex mb-8">
                            <div className="hidden md:flex">
                                <div className="ml-0.5 w-1 bg-primary me-4">
                                </div>
                            </div>
                            <div className="flex max-w-[600px] flex-col justify-center mx-auto 
                    xl:mx-0 text-center xl:text-left">
                                <div className="text-6xl font-bold text-primary">
                                    Angelo Serafino
                                </div>
                                <div className="text-lg uppercase font-semibold mt-4 text-muted-foreground
                    tracking-[4px]">
                                    App Developer
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0
                        mb-12">
                            <Link href='/Contact'>
                                <Button className="text-lg gap-x-2">
                                    Contact me <Send size={22} />
                                </Button>
                            </Link>
                            <Button variant={"secondary"} className="text-lg gap-x-2">
                                Download CV <Download size={22} />
                            </Button>
                        </div>
                    </div>        
                </div>
            </div>
        </section >
    )
}