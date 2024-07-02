"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
    const links = [
        { name: "Home", path: "/" }, 
        { name: "About", path: "/About"},
        { name: "Projects", path: "/Projects" },
        { name: "Blog", path: "/Blog" },
        { name: "Contact", path: "/Contact" },
    ]
    const path = usePathname();
    return (
        <nav>
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div
                    className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                >
                    <ul className="hidden justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {links.map((link, index) => {
                            return (
                                <Link className={`transform hover:scale-125 transition ease-out duration-300 relative uppercase hover:text-primary ${path === link.path ? 'font-bold text-primary scale-125' : 'text-muted-foreground'}`} href={link.path} key={index}>
                                    {link.name}
                                </Link>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
