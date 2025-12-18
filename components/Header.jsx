 
    export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-8 py-4 max-w-[1280px] mx-auto">
        
        {/* LEFT: Logo + Nav */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <img
            src="/asset/icons/logo.svg"
            alt="Localists"
            className="h-7 w-auto"
          />

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="flex items-center gap-1 cursor-pointer text-[#253238] font-extrabold">
              <span>Explore Our Services</span>
              <img
                src="/asset/icons/chevron-down.svg"
                className="w-3 h-3 mt-[2px] ml-1"
                alt=""
              />
            </a>

            <a className="flex items-center gap-1 cursor-pointer text-[#253238] font-extrabold">
              <span>Advice</span>
              <img
                src="/asset/icons/chevron-down.svg"
                className="w-3 h-3 mt-[2px] ml-1"
                alt=""
              />
            </a>
          </nav>
        </div>

        {/* RIGHT: Search + Auth */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <input
              placeholder="Search for a service"
              className="text-sm outline-none w-[160px] placeholder-[#6C6C6C] "
            />
            <img
              src="/asset/icons/search.svg"
              alt="Search"
              className="w-4 h-4 opacity-60"
            />
          </div>

          {/* Login */}
          <a className="text-sm text-[#1E2A2E] cursor-pointer ">
            Login
          </a>

          {/* Sign Up */}
          <button className="flex items-center gap-2 bg-[#00AFE3] text-white px-4 py-2 rounded-full text-sm  ">
            <img
              src="/asset/icons/user.svg"
              alt="User"
              className="w-4 h-4"
            />
            Sign Up
          </button>

        </div>
      </div>
    </header>
  );
}
   