export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>header</div>
      {children}
    </>
  );
}
