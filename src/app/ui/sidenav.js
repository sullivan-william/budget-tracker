import Link from 'next/link';

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Activity', href: '/dashboard/activity' },
    { name: 'Categories', href: '/dashboard/categories' }
]

export default function SideNav() {
    return (
        <>
            <h1>SideNav</h1>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}