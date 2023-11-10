import SettingLayout from '@/components/Layouts/SettingLayout'
export default function Layout({ children }: { children: React.ReactNode }) {
	return <SettingLayout title='Quản Lý Địa Chỉ Giao Hàng' back='/setting'>{children}</SettingLayout>;
}
