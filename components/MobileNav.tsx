import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggler from "./ThemeToggler";

export default function MobileNav() {
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/About" },
        { name: "Projects", path: "/Projects" },
        { name: "Blog", path: "/Blog" },
        { name: "Contact", path: "/Contact" },
    ]
    const path = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <div>
                    <ThemeToggler />
                </div>
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-32">
                        <div className="border-b">
                        <Logo />
                        </div>
                        <ul className="flex flex-col items-center gap-y-6">
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
            </SheetContent>
        </Sheet>
    )
}