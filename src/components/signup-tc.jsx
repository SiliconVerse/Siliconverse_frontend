import { Link } from "react-router-dom";
import SubmitButton from "./submit-btn";

function SignUpTC({ isLoading }) {
  return (
    <div className="text-white">
      <SubmitButton
        text={"Sign Up"}
        className={"talent-signup-button"}
        isLoading={isLoading}
      />
      <p>
        By signing up, you accept our{" "}
        <span className="text-primaryColor text-base md:text-lg drop-shadow-md font-roboto">
          terms and conditions
        </span>
      </p>
      <p>
        Already have an account?
        <Link to="/login">
          <span className="text-primaryColor text-base md:text-lg drop-shadow-md font-roboto">
            Log in
          </span>
        </Link>
      </p>
    </div>
  );
}
export default SignUpTC;
