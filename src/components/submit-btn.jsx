import React from "react";
import Spinner from "./spinner";

const SubmitButton = ({ text, isLoading, className }) => {
  return (
    <button
      className={
        "flex gap-4 text-center justify-center items-center " + className
      }
      type="submit"
      disabled={isLoading}>
      {!isLoading && text}
      {isLoading && <Spinner />}
    </button>
  );
};

export default SubmitButton;
