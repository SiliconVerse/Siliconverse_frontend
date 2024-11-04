const Spinner = ({ className }) => (
  <svg
    className={`w-5 h-5 mr-3 -ml-1 text-white ${className} animate-spin`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 0115.16-4.93A3.997 3.997 0 0112 8a3.997 3.997 0 01-3.16-1.93A8 8 0 014 12z"
    ></path>
  </svg>
);

export default Spinner;
