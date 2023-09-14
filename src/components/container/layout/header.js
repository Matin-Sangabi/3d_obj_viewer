const Header = () => {
  return (
    <header className="w-full py-2 px-5">
      <div className="w-full max-w-screen-2xl mx-auto container px-6 ">
        {" "}
        <div className="w-full flex items-center justify-between py-3 px-6 rounded-xl  bg-blue-100">
          <h1 className="text-[#17181A] text-2xl md:text-3 lg:text-3xl font-bold">
            CAD
          </h1>
          <span>3d viewer</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
