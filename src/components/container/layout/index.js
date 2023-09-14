import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Header />
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
