export const NavBar = () => {
  return (
    <nav className="bg-slate-700 drop-shadow sticky top-0 z-50">
      <div className="container mx-auto p-5 flex justify-between ">
        {/* Left section of navbar */}
        <div className="flex space-x-8">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            About
          </a>
        </div>
        {/* Right section of navbar */}
        <div className="flex space-x-8">
          <a href="#" className="text-white">
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
};
