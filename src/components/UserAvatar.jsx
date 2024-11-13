import { useEffect, useRef, useState } from "react";
import profileBigImg from "../assets/Generic-Profile-Image.webp";
import { useAuth } from "../hooks/userAuth";
import UserMenu from "./UserMenuLinks";

function UserAvatar() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const modalRef = useRef();
  const { user } = useAuth();

  // Helper function for closing the modal on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setOpenUserMenu(!openUserMenu);
  };
  return (
    <section className="relative cursor-pointer">
      <div className="h-10 aspect-square rounded-full overflow-hidden border-2 border-white">
        <img
          src={user?.profilePicture ?? profileBigImg}
          alt="Profile Picture"
          className="w-full h-full object-cover object-top"
          onClick={handleClick}
        />
      </div>

      {openUserMenu && <UserMenu componentRef={modalRef} closeModal={handleClick} />}
    </section>
  );
}
export default UserAvatar;
