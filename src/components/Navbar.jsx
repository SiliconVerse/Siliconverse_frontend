import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../utils/links";
import NavbarAuth from "./navbar-auth";
import UserAvatar from "./UserAvatar";
import { useAuth } from "../hooks/userAuth";
import MagazineNav from "./user-profile/MagazineNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = (link) => {
    setOpen(false);
    navigate(link);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // const nvLinks = navLinks

  return (
    <>
    {
      location.pathname === "/magazine" ? (
          <MagazineNav navLinks={navLinks} />
      ) : (
        <div className="md:p-8 bg-[#FDEFE9] fixed z-[100] md:relative top-0 right-0 w-full drop-shadow-md">
        <nav className="hidden md:flex justify-between items-center">
          <Link
            to={"/"}
            className="block text-2xl font-bold">
            Siliconverse
          </Link>
  
          <div className="flex justify-between items-center gap-3 md:gap-5 font-semibold">
            {navLinks.slice(0, 4).map((navLink) => (
              <Link
                key={navLink.id}
                to={navLink.id}
                className="links">
                {navLink.title}
              </Link>
            ))}
          </div>
  
          {user && <UserAvatar />}
          {!user && <NavbarAuth />}
        </nav>
  
        {/* Mobile Navbar */}
        <section className="md:hidden relative">
          <div className="flex justify-between items-center border-b-2 border-white h-[90px] px-5">
            <div>
              <Link
                to="/"
                className="text-2xl font-bold">
                Siliconverse
              </Link>
            </div>
  
            <div className="flex gap-3">
              {user && <UserAvatar />}
              <BiMenuAltLeft
                onClick={handleOpen}
                size={36}
              />
            </div>
          </div>
  
          {open && (
            <aside className="absolute w-full flex justify-center items-center flex-col gap-2 p-10 z-[200] top-[90px] h-[calc(100vh-90px)] bg-[#FDEFE9]">
              <div className="flex justify-center items-center flex-col">
                <ul className="flex flex-col gap-5 items-center justify-center">
                  {navLinks.map((navLink) => (
                    <li
                      key={navLink.id}
                      className="px-5 text-lg font-semibold hover:underline hover:underline-offset-2"
                      onClick={() => handleClose(navLink.id)}>
                      {navLink.title}
                    </li>
                  ))}
                </ul>
                {!user && <NavbarAuth />}
              </div>
            </aside>
          )}
        </section>
      </div>
      )
    }
    </>
  );
};

export default Navbar;
