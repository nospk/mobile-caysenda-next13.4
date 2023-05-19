import FlexTwoColView from '@/components/FlexTwoColView';

export const Wrapper = async ({
	data,
	banners,
	keyWords,
}: {
	data: Promise<any>;
	banners: Promise<any>;
	keyWords: Promise<any>;
}) => {
	const getData = await data
	const getBanner = await banners
	const getKeyWords = await keyWords
	return <FlexTwoColView data={getData} banners={getBanner} keyWords={getKeyWords} />;
	//return <div>dwada</div>
};
export default Wrapper;
