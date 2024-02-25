import Navbar from "./_components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto w-full">
      <Navbar />
      {children}
    </section>
  );
}
