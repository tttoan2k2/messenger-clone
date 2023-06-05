"use client";

import Link from "next/link";
import clsx from "clsx";

import { FC } from "react";

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

const MobileItem: FC<MobileItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick,
}) => {
    const handlerClick = () => {
        if (onclick) {
            return onClick();
        }
    };

    return (
        <Link
            onClick={handlerClick}
            href={href}
            className={clsx(
                `
            group flex gap-x-3 text-sm leading-6 font-medium w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100
        `,
                active && "bg-gray-100 text-gray-800"
            )}
        >
            <Icon className="h-6 w-6" />
        </Link>
    );
};

export default MobileItem;
