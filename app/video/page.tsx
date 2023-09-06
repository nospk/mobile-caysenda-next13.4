import VideoPlayer from "@/components/VideoPlayer";

export default async function Page({ searchParams }: any) {
  const id: string = searchParams.id;

  return (
    <>
      <VideoPlayer id={id} />
      <div className="box-broder absolute bottom-0 flex w-[100vw] flex-shrink-0 flex-col text-white">
        aa
      </div>
    </>
  );
}
