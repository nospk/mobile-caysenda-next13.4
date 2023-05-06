'use client';
export default function Custom404() {
	return (
		<>
			<div className="h-screen text-center flex flex-col items-center justify-center">
				<div>
					<h1 className="inline-block border-r-2 pr-5 font-semibold text-2xl leading-10">
						404
					</h1>
					<h2 className="inline-block pl-5 text-sm">This page could not be found.</h2>
				</div>
				<div className="mt-5">
					<button
						className="bg-[#f66d09] px-2 py-1 rounded-full text-white"
						onClick={() => {
							const win: Window = window;
							win.location = '/';
						}}
					>
						Trang Chủ
					</button>
				</div>
			</div>
		</>
	);
}
