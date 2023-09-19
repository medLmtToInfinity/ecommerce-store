"use client"
import { cn } from "@/lib/utils"
import {usePathname} from "next/navigation"
import Link from "next/link"

function MainNav( {data} ) {
    const pathname = usePathname()
    const routes = data.map(route => {
        return {
            href: `/category/${route.id}`,
            label: route.name,
            active: pathname === `/category/${route.id}`,
        }
    })
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map(route=> {
            return (
                <Link
                    href={route.href}
                    key={route.href}
                    className={cn("text-sm font-medium transition-colors hover:text-black", route.active ? "text-black" : "text-neutral-500")}
                >
                    {route.label}
                </Link>
            )
        })}
    </nav>
  )
}

export default MainNav