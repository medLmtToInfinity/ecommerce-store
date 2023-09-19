import { Tab } from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function GalleryTab({image}) {
    return (
        <Tab className="relative aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {
                ( {selected} ) => {
                    return (
                        <>
                            <span className="absolute w-full h-full inset-0 overflow-hidden aspect-square rounded-md">
                                <Image 
                                    fill
                                    src={image.url}
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </span>
                            <span className={cn(
                                "rounded-md absolute inset-0 ring-2 ring-offset-2",
                                selected ? "ring-black" : "ring-transparent"
                            )} />
                        </>
                    )
                }
            }
        </Tab>
    )
}