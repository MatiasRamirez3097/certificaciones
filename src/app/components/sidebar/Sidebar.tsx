import SidebarOption from "./SidebarOption"
import links from '../../../utils/links'

const Sidebar = () => {
    return <div id="sideNav" className="lg:block hidden bg-black w-64 h-screen rounded-none border-none">
        <div className="p-4 space-y-4">
            {
                links.map((item, index) => {
                    return <SidebarOption icon={item.icon} url={item.url} text={item.text} key={index} />
                })
            }
        </div>
    </div>
}

export default Sidebar