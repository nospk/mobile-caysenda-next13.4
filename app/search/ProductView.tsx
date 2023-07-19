const ProductView:any = async () => {
	const topData = [];
	const bestSeller = [];

	return (
		<>
			<div className="py-3 text-lg font-semibold">
				<span className="">Sản phẩm nổi bật</span>
				<div className="content grid grid-cols-3">
					<div className="relative backdrop-blur-md">
						<img src="https://caysenda.vn/resources/upload/O1CN015Tt7Up2DiXuYlKVIG_!!2208433478643-0-cib.jpg" alt="" />
						<span className="absolute font-normal text-sm truncate">6 Mẫu, công chúa cổ tích bộ đồ chơi, hoạt hình, công chúa tuyết </span>
					</div>
				</div>
			</div>
			<div className="py-3 text-lg font-semibold">
				<span className="text-orange-600">Sản phẩm hot</span>
			</div>
		</>
	);
};
export default ProductView;
