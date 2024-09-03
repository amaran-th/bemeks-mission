import Header from "./Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-background min-h-[100vh]">
      <Header />
      <div className="pt-10">{children}</div>
    </div>
  );
};

export default Layout;
