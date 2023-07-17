"use client"
import type { FC } from 'react';
import { VscTrash } from 'react-icons/vsc';
import KeyWord from '@/components/KeyWord';
import { useState } from 'react';
import KeyWordService from '@/services/KeyWord.service';

const HistoryView = async (props:any) => {
	const [textUserSearchs, settextUserSearchs] = useState([
		'Quần',
		'Áo',
		'Bàn Chải',
		'Kem',
		'Balo 1',
		'Balo 2',
		'Balo 3',
		'Balo Abc 1',
		'Balo Abc 2',
		'Balo Abc 3',
		'Balo Abc 4',
	]);
	const textEveryBodySearchs = await KeyWordService.getKeyWordCardData({orderBy :'RAND', limit: '5'});

	const listUserSearch = textUserSearchs.map((textSearch) => (
		<KeyWord key={textSearch} keyword={textSearch} />
	));

	const listEveryBodSearch = textEveryBodySearchs.data.map((textSearch:any) => (
		<KeyWord key={textSearch} keyword={textSearch} />
	));
	return (
		<>
			<div className="py-3 flex flex-row justify-center">
				<span className="flex-1 text-lg font-semibold">Lịch Sử Tìm Kiếm</span>
				<VscTrash size={24} className="order-last" onClick={() => settextUserSearchs([])} />
			</div>
			<div className="flex flex-row flex-wrap gap-4">{listUserSearch}</div>
			<div className="py-3 flex flex-row justify-center">
				<span className="flex-1 text-lg font-semibold">Mọi Người Đang Tìm Kiếm</span>
			</div>
			<div className="flex flex-row flex-wrap gap-4">{listEveryBodSearch}</div>
		</>
	);
};
export default HistoryView;
