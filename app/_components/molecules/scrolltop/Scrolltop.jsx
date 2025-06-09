'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Scrolltop = () => {

    const pathName = usePathname();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    return null;
}
