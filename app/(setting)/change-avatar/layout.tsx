import SettingLayout from '@/components/Layouts/SettingLayout'
export default function Layout({ children }: { children: React.ReactNode }) {
	return <SettingLayout title='Đổi Hình Đại Diện' back='/setting'>{children}</SettingLayout>;
}
