'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './breadcrumb.module.scss';

export const Breadcrumb = () => {

    const pathName = usePathname();
    const pathSegments = pathName.split('/').filter(Boolean);

    const buildHref = (index) => {
        return '/' + pathSegments.slice(0, index + 1).join('/');
    };

    const formatSegment = (segment) => {
        const decoded = decodeURIComponent(segment).replace(/-/g, ' ');
        return decoded.charAt(0).toUpperCase() + decoded.slice(1);
    };
    
    return (
        <div className={styles.breadcreumbsec}>
            <nav aria-label="breadcrumb">
                <ul className="unset">
                    <li>
                        <Link href="/">Home</Link>  
                    </li>
                    {pathSegments.map((segment, index) => {
                        const isLast = index === pathSegments.length - 1;
                        const href = buildHref(index);

                        return (
                            <li key={index}>
                                {isLast ? (
                                    <span>
                                        {formatSegment(segment)}
                                    </span>
                                ) : (
                                    <Link href={href}>
                                        {formatSegment(segment)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}
