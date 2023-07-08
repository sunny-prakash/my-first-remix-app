import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "My Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className='h-screen w-full bg-slate-700'>
			<h2 className='font-bold text-7xl text-blue-400'>
				first remix page
			</h2>
		</div>
	);
}
