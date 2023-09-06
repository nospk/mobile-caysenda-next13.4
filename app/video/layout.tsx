export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-black w-[100vw] h-[100dvh] flex justify-center items-center">{children}</div>;
}
