'use client';
export default function Button({
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { linkgo: string }) {
	return (
		<button
			onClick={() => {
				window.open(props.linkgo);
			}}
			{...props}
		/>
	);
}
