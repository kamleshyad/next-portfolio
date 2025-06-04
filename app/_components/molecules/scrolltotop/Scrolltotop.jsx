'use client'

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export const Scrolltotop = () => {

    const pathName = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathName])

    return null;
}
