'use client';
import Image from 'next/image';
import avatar from '@/public/avatarzalo.jpg';
import styles from './styles.module.css';
import Button from '@/components/Button';
export default async function Page() {

	return (
		<>
			<div className={styles.section}>
				<div className={styles.info}>
					<div className={styles.profile}>
						<div className={styles.avatar}>
							<Image
								className={styles.img}
								src={avatar}
								alt="Avatar"
								width="100"
								height="100"
							/>
						</div>
						<div className={styles.business}>
							<h1 className={styles.business_name}>
								Nomi<span className={styles.business_label}>Business</span>
							</h1>
							<div className={styles.business_type}>Mua sắm &amp; Bán lẻ</div>
							<Button
								type="button"
								className={styles.button}
								title="Nhắn tin qua Zalo"
								aria-pressed="false"
								onClick={() => {
									window.open('https://zalo.me/0947620336');
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 25 24"
									width="24"
									height="24"
								>
									<path
										fill="#ffffff"
										fillRule="evenodd"
										d="M16.2 4.563a8.315 8.315 0 0 0-3.687-.863 8.315 8.315 0 0 0-7.217 4.198 8.294 8.294 0 0 0 .08 8.342c.141.238.198.516.16.79l-.27 1.88v.08a.28.28 0 0 0 .28.24l1.922-.27h.17c.218 0 .432.06.62.17a8.315 8.315 0 0 0 10.452-1.603 8.299 8.299 0 0 0 1.959-7.103A8.295 8.295 0 0 0 16.2 4.563Zm-8.473-.774A9.517 9.517 0 0 1 12.513 2.5a9.518 9.518 0 0 1 7.55 3.753 9.496 9.496 0 0 1-4.017 14.558 9.518 9.518 0 0 1-8.408-.641l-1.882.27h-.21a1.483 1.483 0 0 1-1.472-1.69l.27-1.88A9.493 9.493 0 0 1 7.728 3.789ZM7.739 10a.6.6 0 0 1 .6-.6h6.347a.6.6 0 1 1 0 1.2H8.339a.6.6 0 0 1-.6-.6Zm0 3.5a.6.6 0 0 1 .6-.6h2.933a.6.6 0 1 1 0 1.2H8.34a.6.6 0 0 1-.6-.6Z"
										clipRule="evenodd"
									></path>
								</svg>
								Nhắn tin Zalo
							</Button>
						</div>
					</div>
					<div>
						<h2 className={styles.title}>Hồ sơ kinh doanh</h2>
						<ul>
							<li className={styles.profile__list_item}>
								<svg
									className={styles.svg}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 16 16"
									width="1em"
									height="1em"
								>
									<path
										fill="#667685"
										fillRule="evenodd"
										d="M8 1.853c-2.34 0-4.993 1.762-4.993 4.74 0 4.125 2.555 6.462 4.147 7.757l.001.001a1.343 1.343 0 0 0 1.69 0c1.593-1.296 4.148-3.633 4.148-7.758 0-2.966-2.407-4.74-4.993-4.74Zm-4.193 4.74c0-2.422 2.172-3.94 4.193-3.94 2.24 0 4.193 1.507 4.193 3.94 0 3.742-2.297 5.871-3.852 7.136a.543.543 0 0 1-.682 0c-1.555-1.264-3.852-3.394-3.852-7.136Zm2.906-.013a1.287 1.287 0 1 1 2.574 0 1.287 1.287 0 0 1-2.574 0ZM8 4.493a2.087 2.087 0 1 0 0 4.174 2.087 2.087 0 0 0 0-4.174Z"
										clipRule="evenodd"
									></path>
								</svg>
								1092D Đường 3/2 phường 12 Quận 11 Thành Phố Hồ Chí Minh
							</li>
							<li className={styles.profile__list_item}>
								<svg
									className={styles.svg}
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.607 5.37c.22-.17.494-.27.793-.27h15.2c.299 0 .574.1.793.27l-7.455 7.084a1.386 1.386 0 0 1-1.866 0L3.607 5.37ZM3.1 6.541V17.6a1.3 1.3 0 0 0 1.3 1.3h15.2a1.3 1.3 0 0 0 1.3-1.3V6.543l-7.137 6.782c-.972.92-2.544.92-3.515 0L3.1 6.543ZM4.4 3.9a2.5 2.5 0 0 0-2.5 2.5v11.2a2.5 2.5 0 0 0 2.5 2.5h15.2a2.5 2.5 0 0 0 2.5-2.5V6.4a2.5 2.5 0 0 0-2.5-2.5H4.4Z"
										fill="#667685"
									></path>
								</svg>
								<a
									className={styles.mail}
									href="mailto:bachhoangocminh@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									bachhoangocminh@gmail.com
								</a>
							</li>
						</ul>
						<div className="profile__description">
							Chuyên Phụ kiện tiểu cảnh, phụ kiện terrarium, cửa hàng hoa khô, phụ
							kiện sen đá. Nomi Chuyên cung cấp sản phẩm giá sỉ với giá thành cạnh
							tranh.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
