// import Select from "react-select";

// const options = [
//   { value: "hub", label: "Hub" },
//   { value: "colab", label: "Colab" },
//   { value: "silicon", label: "Silicon" },
// ];

// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     border: "1px solid black",
//     borderRadius: "9999px",
//     padding: "0.2rem",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     padding: ".4rem",
//     cursor: "pointer",
//     backgroundColor: state.isSelected ? "#ddd" : "#fff",
//   }),
// };

function UserPreferences() {
  return (
    <div className=" border mx-6 my-12 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Your Preferences</h1>
      <p className="text-base font-normal mt-1 mb-2">
        Update your Company’s preferences to get the most relevant
        recommendations for you.
      </p>
      <hr className=" mt-4 border border-gray-300" />

      <h1 className="text-2xl font-bold mt-2">Goals</h1>
      <p className="text-base font-normal mt-1 mb-2">
        Get customized Talents recommendations by keeping your preferences
        updated.
      </p>

      <div className="flex gap-24 mt-6 mb-4">
        {/* <div>
          <h1>Organization type</h1>
          <Select options={options} styles={customStyles} />
        </div> */}

        <div>
          <h1 className="text-lg font-bold">Organization type </h1>
          <div className="relative inline-block w-full ">
            <select className="block appearance-none w-full bg-white border border-gray-300 text-[#FF5F15] cursor-pointer hover:border-gray-400 px-2 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline">
              <option value="1" className="">
                Hub
              </option>
              <option value="2" className="">
                colab
              </option>
              <option value="3" className="">
                silicon
              </option>
            </select>
            <div className="pointer-events-none border-2 w-8 h-8 mt-0.5 rounded-full absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548A1 1 0 016.613 7h6.773a1 1 0 01.797 1.552l-3.387 4.834a1 1 0 01-1.594 0L5.516 8.548z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold">Desired location</h1>
          <div className="relative inline-block w-full ">
            <select className="block appearance-none w-full bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline">
              <option value="1">Kaduna</option>
              <option value="2">Abuja</option>
              <option value="3">Lagos</option>
            </select>
            <div className="pointer-events-none border-2 w-8 h-8 mt-0.5 rounded-full absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548A1 1 0 016.613 7h6.773a1 1 0 01.797 1.552l-3.387 4.834a1 1 0 01-1.594 0L5.516 8.548z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold">Allow Magazines</h1>
          <div className="relative inline-block w-full ">
            <select className="block appearance-none w-full bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline">
              <option value="1">No</option>
              <option value="2">Yes</option>
            </select>
            <div className="pointer-events-none border-2 w-8 h-8 mt-0.5 rounded-full absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548A1 1 0 016.613 7h6.773a1 1 0 01.797 1.552l-3.387 4.834a1 1 0 01-1.594 0L5.516 8.548z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <hr className=" mt-4 border border-gray-300" />

      <h1 className="text-2xl mt-4 font-bold">Additional Infomation</h1>
      <h3 className="text-base font-normal mt-1 mb-2">
        What brings you to Siliconverse?
      </h3>

      <div className="grid grid-cols-3 gap-4 text-base">
        <div className="flex border w-[16.5rem]  py-6 h-fit px-2 items-center rounded-lg">
          <input className=" w-12 h-7 custom-checkbox" type="checkbox" />
          <h3>I&apos;m looking for post</h3>
        </div>

        <div className="flex w-[16.5rem]  py-6 items-center border h-fit px-2 rounded-lg">
          <input className="w-12 h-7 custom-checkbox" type="checkbox" />
          <h3>I want Openings</h3>
        </div>

        <div className="flex w-full  py-6 items-center border h-fit px-2 rounded-lg">
          <input type="checkbox" className="w-12 h-7 custom-checkbox" />
          <h3 className="">I want to post internship openings</h3>
        </div>

        <div className="flex w-[16.5rem]  py-6 items-center border h-fit px-2 rounded-lg">
          <input className="w-12 h-7 custom-checkbox" type="checkbox" />
          <h3>I want a volunteer</h3>
        </div>

        <div className="flex items-center border w-[16.5rem] h-fit pl-2 rounded-lg ">
          <input className="w-20 h-7 custom-checkbox" type="checkbox" />
          <textarea
            className="border rounded-md w-[200px] pt-4 pl-3 h-[4.4rem] m-1"
            placeholder="Something else..."
            name=""
            id=""
          ></textarea>
        </div>

        <div className=" flex justify-end cursor-pointer items-end">
          <div className=" bg-[#FF5F15]  text-white border w-fit h-fit px-2 rounded-lg py-4">
            <input
              className="w-28 cursor-pointer"
              type="button"
              value={"save"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPreferences;
