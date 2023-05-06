import type { FC } from 'react';
import { IconMenu } from '@/components/Icon';
import styles from './Footer.module.css';
import Link from 'next/link';
const Footer: FC = () => {
	return (
		<>
			<div className={styles.footer}>
				<Link href="/">
					<div className={styles.tab_item}>
						<IconMenu src="/iconHome.png" alt="Home" className={styles.img_home} />
					</div>
				</Link>
				<Link href="/video">
					<div className={styles.tab_item}>
						<IconMenu src="/iconVideos.png" alt="Camera" className={styles.img_menu} />
						<span className={styles.text_menu}>Videos SP</span>
					</div>
				</Link>
				<Link href="/chat">
					<div className={styles.tab_item}>
						<IconMenu src="/iconChat.png" alt="Message" className={styles.img_menu} />
						<span className={styles.text_menu}>Nhắn Tin</span>
					</div>
				</Link>
				<Link href="/cart">
					<div className={styles.tab_item}>
						<IconMenu src="/iconCart.png" alt="Cart" className={styles.img_menu} />
						<span className={styles.text_menu}>Giỏ Hàng</span>
					</div>
				</Link>
				<Link href="/account">
					<div className={styles.tab_item}>
						<IconMenu src="/iconPerson.png" alt="Account" className={styles.img_menu} />
						<span className={styles.text_menu}>Cá Nhân</span>
					</div>
				</Link>
			</div>
		</>
	);
};
export default Footer;
