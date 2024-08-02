import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../utils/links";
import NavbarAuth from "./navbar-auth";
import UserAvatar from "./UserAvatar";
import { useAuth } from "../hooks/userAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

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

  return (
    <div className="md:p-8 bg-[#FDEFE9] fixed z-[200] md:z-auto md:relative top-0 right-0 w-full">
      <nav className="hidden md:flex justify-between items-center">
        <Link
          to={"/"}
          className="block text-2xl font-bold">
          Siliconverse
        </Link>

        <div className="flex justify-between items-center gap-3 md:gap-5 font-semibold">
          {navLinks.map((navLink) => (
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
              {navLinks.map((navLink) => (
                <p
                  key={navLink.id}
                  className="px-5 text-lg font-semibold hover:underline hover:underline-offset-2"
                  onClick={() => handleClose(navLink.id)}>
                  {navLink.title}
                </p>
              ))}
              {!user && <NavbarAuth />}
            </div>
          </aside>
        )}
      </section>
    </div>
  );
};

export default Navbar;
