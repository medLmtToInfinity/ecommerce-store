"use client"
import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavbarAtion() {
    const cart = useCart();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const router = useRouter();
    if(!isMounted) return null
    return (
        <div className="ml-auto flex items-center gap-x-2">
            <Button onClick={() => router.push("/cart")} className="flex items-center bg-black rounded-full px-4 py-2">
                <ShoppingBag 
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-white text-sm font-medium">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}