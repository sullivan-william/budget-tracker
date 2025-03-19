import SideNav from "../ui/sidenav";

export default function Layout({ children }) {
    return (
        <div>
            <div>
                <SideNav />
            </div>
            <div>{children}</div>
        </div>
    )
}