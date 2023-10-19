import SettingLayout from '@/components/Layouts/SettingLayout'
export default function Layout({ children }: { children: React.ReactNode }) {
	return <SettingLayout title='Đổi Địa Chỉ Giao Hàng' back='/setting'>{children}</SettingLayout>;
}
