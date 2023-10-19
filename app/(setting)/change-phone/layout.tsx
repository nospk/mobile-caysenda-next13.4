import SettingLayout from '@/components/Layouts/SettingLayout'
export default function Layout({ children }: { children: React.ReactNode }) {
	return <SettingLayout title='Đổi Số Điện Thoại' back='/setting'>{children}</SettingLayout>;
}
