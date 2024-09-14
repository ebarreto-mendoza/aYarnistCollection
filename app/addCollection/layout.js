import SideNav from "@/components/SideNav";

export default function Layout({children}) {
    return (
        <div className="flex h-screen ">
            <SideNav/>
            <div>{children}</div>
        </div>
    );
}