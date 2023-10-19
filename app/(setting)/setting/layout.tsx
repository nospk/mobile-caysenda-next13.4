import SettingLayout from '@/components/Layouts/SettingLayout'
export default function Layout({ children }: { children: React.ReactNode }) {
	return <SettingLayout title='Cài Đặt' back='/account'>{children}</SettingLayout>;
}
