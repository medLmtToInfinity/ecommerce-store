"use client"
import { Tab } from "@headlessui/react"
import GalleryTab from "./gallery-tab"
import Image from "next/image"
 export default function Gallery( {images} ) {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {
                        images.map(image=>{
                            return <GalleryTab key={image.url} image={image} />
                        })
                    }
                </Tab.List>

            </div>
            <Tab.Panels className="aspect-square w-full">
                {
                    images.map(image => {
                        return (
                            <Tab.Panel key={image.url} >
                                <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
                                    <Image 
                                        alt=""
                                        fill
                                        src={image.url}
                                    />
                                </div>
                            </Tab.Panel>
                        )
                    })
                }
            </Tab.Panels>
        </Tab.Group>
    )
 }