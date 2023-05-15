'use client';
import { useRouter } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';
import {
	AiOutlineLeft,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineShareAlt,
	AiOutlineHome,
} from 'react-icons/ai';

export default function Page() {
	const router = useRouter();
	const opticalVariants = {
		0: 'bg-opacity-0',
		10: 'bg-opacity-10',
		20: 'bg-opacity-20',
		30: 'bg-opacity-40',
		40: 'bg-opacity-40',
		50: 'bg-opacity-50',
		60: 'bg-opacity-60',
		80: 'bg-opacity-80',
		100: 'bg-opacity-100',
	};
	const [change, setChange] = useState<boolean>(false);
	const [opacity, setOpacity] = useState<keyof typeof opticalVariants>(0);
	const handleNavigation = useCallback((e: Event, change: boolean) => {
		const window = e.currentTarget as Window;
		if (window.scrollY == 0 || !window.scrollY) {
			setOpacity(0);
			setChange(false);
		}
		if (window.scrollY > 200) {
			if (change == false) setChange(true);
		} else {
			if (change == true) setChange(false);
		}

		if (window.scrollY > 50) setOpacity(10);
		if (window.scrollY > 100) setOpacity(20);
		if (window.scrollY > 150) setOpacity(30);
		if (window.scrollY > 200) setOpacity(40);
		if (window.scrollY > 250) setOpacity(50);
		if (window.scrollY > 300) setOpacity(60);
		if (window.scrollY > 400) setOpacity(80);
		if (window.scrollY > 500) setOpacity(100);
	}, []);

	useEffect(() => {
		console.log('loading')
		window.addEventListener('scroll', (event: Event) => handleNavigation(event, change));

		return () => {
			window.removeEventListener('scroll', (event: Event) => handleNavigation(event, change));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleNavigation]);
	return (
		<div
			className={`flex sticky top-0 z-50 w-full h-[9vw] bg-[#f8f8f8] ${
				opticalVariants[opacity]
			} ${change ? ' text-black' : 'text-white'}`}
		>
			<div
				onClick={() => router.back()}
				className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw]  left-[2.4vw] rounded-full ${
					change ? '' : 'bg-[rgba(0,0,0,0.3)]'
				}`}
			>
				<AiOutlineLeft className="w-[5vw] h-[5vw] " />
			</div>
			<div
				onClick={() => router.push('/search')}
				className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw]  right-[38.4vw] rounded-full ${
					change ? '' : 'bg-[rgba(0,0,0,0.3)]'
				}`}
			>
				<AiOutlineSearch className="w-[5vw] h-[5vw] " />
			</div>
			<div
				onClick={() => router.push('/cart')}
				className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw] right-[26.4vw] rounded-full ${
					change ? '' : 'bg-[rgba(0,0,0,0.3)]'
				}`}
			>
				<AiOutlineShoppingCart className="w-[5vw] h-[5vw] " />
			</div>
			<div
				className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw] right-[14.4vw] rounded-full ${
					change ? '' : 'bg-[rgba(0,0,0,0.3)]'
				}`}
			>
				<AiOutlineShareAlt className="w-[5vw] h-[5vw] " />
			</div>
			<div
				onClick={() => router.push('/')}
				className={`absolute flex flex-col shrink-0 justify-center items-center top-[0.5vw] w-[8vw] h-[8vw] right-[2.4vw] rounded-full ${
					change ? '' : 'bg-[rgba(0,0,0,0.3)]'
				}`}
			>
				<AiOutlineHome className="w-[5vw] h-[5vw] " />
			</div>
		</div>
	);
}
