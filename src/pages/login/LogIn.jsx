import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./logIn.css";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/userAuth";
import SubmitButton from "../../components/submit-btn";
import { sendEmailVerification } from "firebase/auth";
import PasswordViewer from "../../components/password-viewer";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { signin } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { user } = await signin(formData.email, formData.password);
      if (!user.emailVerified) {
        await sendEmailVerification(user, {
          url: "https://siliconverse-frontend.vercel.app/login",
        });
        toast.info("Please check your mail for verification");
        return;
      }
      setErrorMessage("");
      toast.success("Logged in successfully 🎉", { position: "top-center" });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container flex items-center justify-center flex-col  p-7 md:p-11 lg:p-14 min-h-[calc(100vh-106px) font-roboto w-full">
      <div className="login-form rounded-lg gap-5 md:gap-10  bg-black/20 relative flex flex-col-reverse md:flex-row w-full justify-between">
        <div className="hidden absolute left-1/2 -translate-x-1/2 md:translate-x-0 top-4 md:left-4 bg-primaryColor border-2 border-white capitalize rounded-lg p-3 font-roboto text-white text-center w-fit text-sm">
          <p>Silicon Verse</p>
        </div>
        {/* logo */}

        <div className="mt-10 text-white w-full">
          <p className="text-center font-bold text-red-500 text-lg">
            {errorMessage && errorMessage}
          </p>
          <div className="form-titles">
            <h2 className="font-bold text-xl">Log in</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="text-black"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <PasswordViewer
              name={"password"}
              label={"Password"}
              value={formData.password}
              setPassword={handleChange}
            />

            <div>
              <span className="text-primaryColor">Forgot Password?</span>
              <SubmitButton
                text="Login"
                isLoading={isLoading}
              />
              <p className="text-center">
                Don't have an account?
                <NavLink to="/signup">
                  <span className="text-primaryColor"> Sign up</span>
                </NavLink>
              </p>
            </div>
          </form>
        </div>

        <div className="rounded-lg text-sm md:text-base bg-primaryColor/60 p-4 text-white mx-auto flex flex-col gap-4 items-center justify-center w-full text-center">
          <h3 className="text-center font-roboto font-bold text-xl md:text-xl">
            Welcome to Siliconverse
          </h3>
          <p>
            Siliconverse is a tech space for tech talents, who wish to look for
            internship, jobs and further their knowledge on the tech space.{" "}
            <br /> Siliconverse is a tech space for tech talents, who wish to
            look for internship, jobs and further their knowledge on the tech
            space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
