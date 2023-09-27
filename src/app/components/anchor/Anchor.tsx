import Button from "../button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Anchor = ({ action = null, url = null, text }: { action: any, url: string|null, text: string}) => {
    const pathname = usePathname()
    return (
        <li>
            {url ?
                < Link className={pathname == url ? "text-blue-500 transition-all duration-500"
                    : "text-gray-200 hover:text-white transition-all duration-500"} href={url}
                >
                    {text}
                </Link>
                :
                <Button func={action} text={text}></Button>
            }
        </li >
    )
}

export default Anchor;