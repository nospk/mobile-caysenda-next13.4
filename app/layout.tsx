import './globals.css';
import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
const fonter = Open_Sans({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-google',
});

export const metadata: Metadata = {
	title: {
		template: '%s - Cây Sen Đá - Nomi - Ngọc Minh',
		default: 'Cây Sen Đá - Nomi - Ngọc Minh',
		absolute: 'Cây Sen Đá - Nomi - Ngọc Minh',
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="vi">
			<body className={fonter.className}>{children}</body>
		</html>
	);
}
