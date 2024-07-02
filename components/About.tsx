import { createClient } from '@/utils/supabase/server';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { User, Phone, Mail, Cake, GraduationCap, MapPin } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Progress } from "@/components/ui/progress"
import { Separator } from './ui/separator';


// // Define the type for personal details
// interface PersonalDetails {
//     pd_name: string;
//     pd_phoneNumber: string;
//     pd_email: string;
//     pd_birthday: string;
//     pd_course: string;
//     pd_address: string;
// }

// interface SkillsDetails {
//     skill_category: number;
//     category_name: string;
//     skill_name: string;
// }

export default function About() {
//     const [infoData, setInfoData] = useState<PersonalDetails | null>(null);
//     const [skillData, setSkillData] = useState<SkillsDetails[] | null>(null);

//     useEffect(() => {
//         async function fetchInfoData() {
//             const headers = new Headers();
//             const supabase = createClient(headers);
//             const { data, error } = await supabase.from("tblpersonaldetails").select();
//             if (error) {
//                 console.error('Error fetching personal details:', error.message);
//             } else {
//                 if (data && data.length > 0) {
//                     setInfoData(data[0]);
//                 }
//             }
//         }
//         fetchInfoData();
//     }, []);

//     useEffect(() => {
//         async function fetchSkillData() {
//     const headers = new Headers(); // Create headers object
//     const supabase = createClient(headers); // Pass headers to createClient function

//     // Fetch data from tblskills table along with category_name from tblcategory
//     const { data, error } = await supabase
//         .from('tblskills')
//         .select(`
//             tblskills.*,
//             tblcategory:tblcategory_id(*)
//         `)
//         .eq('active', true) // Assuming you have an 'active' column to filter active skills
//         .order('skill_category'); // Assuming you want to order by skill_category

//     if (error) {
//         console.error('Error fetching skill details:', error.message);
//     } else {
//         if (data && data.length > 0) {
//             setSkillData(data); // Set the fetched skill data
//         }
//     }
// }

//         fetchSkillData();
//     }, []);

    return (
        <section className="py-12 xl:py-24 h-[20vh] xl:pt-12 bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="flex justify-center">
                <div className="flex container w-3/4 xl:w-1/2 justify-center">
                    <div className="flex-1">
                            <Carousel>
                                <CarouselContent>
                                    <CarouselItem>
                                        <Card>
                                            <CardContent className="flex items-center bg-secondary justify-center p-6">
                                                <div className="text-center xl:text-left">
                                                    <div className="text-3xl mb-4">Personal Details</div>
                                                    <Separator />
                                                    <div className="grid xl:grid-cols-2 gap-4 mt-4">
                                                        <div className="flex flex-col gap-x-4 gap-y-2 mx-auto xl:mx-0">
                                                            <div className='flex gap-2 text-xl'><User size={24} /> Angelo C. Serafino</div>
                                                            <div className='flex gap-2 text-xl'><Phone size={24} /> +63 947 696 9997</div>
                                                            <div className='flex gap-2 text-xl'><Mail size={24} /> serafinoangelo28@gmail.com</div>
                                                            <div className='flex gap-2 text-xl'><Cake size={24} /> July 28, 2002</div>
                                                            <div className='flex gap-2 text-xl'><GraduationCap size={24} /> Information Technology</div>
                                                            <div className='flex gap-2 text-xl'><MapPin size={24} /> Cagayan de Oro City, Philippines</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Card>
                                            <CardContent className="flex items-center bg-secondary justify-center p-6">
                                                <div className="text-center xl:text-left">
                                                    <div className="text-3xl mb-4">Skills</div>
                                                    <Separator />
                                                    <div className="grid xl:grid-cols-2 gap-4 mt-4">
                                                        <div className="flex flex-col gap-x-4 mx-auto xl:mx-0">
                                                            <div>
                                                                <span className="block text-xl mb-2">Backend Development - 21%</span>
                                                                <div className="relative pt-1">
                                                                    <Progress value={21} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="block text-xl mb-2">Frontend Development - 30%</span>
                                                                <div className="relative pt-1">
                                                                    <Progress value={30} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="block text-xl mb-2">UI/UX - 4%</span>
                                                                <div className="relative pt-1">
                                                                    <Progress value={4} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="block text-xl mb-2">Database - 14%</span>
                                                                <div className="relative pt-1">
                                                                    <Progress value={14} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

