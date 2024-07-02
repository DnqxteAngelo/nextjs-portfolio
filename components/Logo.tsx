import Link from "next/link";

import { Atom } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-primary"><Atom size={30}/></h1>
          </Link>
        </div>
    )
}