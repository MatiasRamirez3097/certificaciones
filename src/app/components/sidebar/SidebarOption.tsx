"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarOption = ({ icon, text, url }: { icon: React.ReactNode, text: string, url: string }) => {
    const pathname = usePathname()
    return <Link href={url} aria-label="dashboard"
        className={pathname == url ? "relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400" : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"}>
        {icon}
        <span className="-mr-1 font-medium">{text}</span>
    </Link>
}

export default SidebarOption