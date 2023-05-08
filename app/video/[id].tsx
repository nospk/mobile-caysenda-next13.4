import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useRef } from 'react';
interface PageProps {
	[pageProps: string]: any;
	videosId: string | string[] | undefined;
}
export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
	const _props: PageProps = {
		videosId: context.query.id ? context.query.id : '',
	};
	return {
		props: _props,
	};
};
const VideoPlay = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const vidRef = useRef<HTMLVideoElement | null>(null);
	const linkVideo = `https://caysenda.vn/resources/video/${props.pageProps.videosId}.mp4`;
	const handlePlay = () => {
		vidRef.current?.play();
	};
	const handlePause = () => {
		vidRef.current?.pause();
	};
    const handleToggleVideo = () => (vidRef.current?.paused ? handlePlay() : handlePause());

	return (
		<>
			<video ref={vidRef} autoPlay muted style={{ height: '100%' }} onClick={handleToggleVideo}>
				<source src={linkVideo} type="video/mp4" />
			</video>
		</>
	);
};
export default VideoPlay;
