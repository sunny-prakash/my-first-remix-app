import type { ReactNode } from "react";
export function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='h-screen w-full bg-blue-500 font-mono'>{children}</div>
	);
}
