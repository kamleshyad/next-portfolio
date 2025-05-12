'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {

    const pathname  = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    const createBreadcrumbName = (segment) => {
        return decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
    };

    return (
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 space-x-2">
        <Link href="/">Home</Link>
        {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLast = index === pathSegments.length - 1;
            return (
            <span key={href}>
                {'\u203A'}
                {isLast ? (
                    <span>{createBreadcrumbName(segment)}</span>
                ) : (
                    <Link href={href}>{createBreadcrumbName(segment)}</Link>
                )}
            </span>
            );
        })}
    </nav>
    )
}
