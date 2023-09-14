import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
