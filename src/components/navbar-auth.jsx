import { Link } from "react-router-dom";

function NavbarAuth() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-16 md:mt-0">
      <Link
        to="/login"
        className="border border-primaryColor py-2 px-8 rounded-3xl text-black">
        Signin
      </Link>
      <Link
        to="/signup"
        className="hidden lg:inline bg-primaryColor py-2 px-10 rounded-3xl text-white">
        Create Account
      </Link>
    </div>
  );
}
export default NavbarAuth;
