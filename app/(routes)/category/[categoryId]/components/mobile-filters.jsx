"use client"

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react"
import Filter from "./filter";

export default function MobileFilters( {colors, sizes} ) {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20} />
            </Button>
            <Dialog open={open} onClose={onClose} as="div" className="relative z-40 lg:hidden">
                <div className="fixed bg-black bg-opacity-25 inset-0" />
                <div className="fixed z-40 inset-0 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>
                        <div className="p-4">
                        <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>

            </Dialog>
        </>
    )
}