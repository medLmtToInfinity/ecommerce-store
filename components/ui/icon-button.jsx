import { cn } from "@/lib/utils";

export default function IconButton({ onClick, className, icon }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
                className
            )}
        >
            {icon}
        </button>
    )
}