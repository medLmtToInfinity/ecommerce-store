"use client"

import Image from "next/image"
import IconButton from "./icon-button"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"

export default function ProductCard( { data } ) {
    const previewModal = usePreviewModal();
    const cart = useCart()
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }
    const onPreview = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data)
    }
    const onAddToCart = (event) => {
        event.stopPropagation();
        cart.addItem(data)
    }
    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/*images & actions*/}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    alt="Image"
                    src={data?.images[0].url}
                    fill 
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex items-center justify-center gap-x-6">
                        <IconButton 
                            onClick={onPreview}
                            icon={<Expand size={20} />}
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} />}
                        />
                    </div>
                </div>
            </div>
            {/*Description*/}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-gray-500 text-sm">
                    {data.category.name}
                </p>
                <div className="flex items-center justify-between">
                    <Currency value={data?.price} />
                </div>
            </div>
        </div>
    )
}