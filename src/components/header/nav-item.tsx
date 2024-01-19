"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
	id: number;
	name: string;
	path: string;
}

const NavItem = ({id, name, path}: Props) => {
	const pathname = usePathname();
	const isActive = pathname.startsWith(path);

	return (
		<Link
			rel="noopener noreferrer"
			href={path}
			className={
				isActive
					? "font-bold flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
					: "font-normal flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
			}
		>
			{name}
		</Link>
	);
}

export default NavItem