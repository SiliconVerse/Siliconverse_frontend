import { useEffect, useState } from "react";
import ArrowDown from "../../assets/ArrowDown.png"
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

// https://countriesnow.space/api/v0.1/countries/state/cities
// https://countriesnow.space/api/v0.1/countries/states
// https://countriesnow.space/api/v0.1/countries

function UserPreferences() {
  const organizationType = ["Fintech", "Proptech", "Logistics", "Edutech", "Healthtech", "Gaming", "Hospitality", "Blockchain", "Large Cooperation", "SMEs"]
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [choosenCountry, setChoosenCountry] = useState("")

  useEffect(()=> {
    const fetchCountries = async ()=>{
      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries")

        if(!res.ok) throw new Error("Netweork error was not ok")

        const data = await res.json()
        const countriesData = data.data
        setCountries(countriesData)

        // console.log(allData)
      } catch(err){
        console.log("Error", err)
      }
    }

    fetchCountries()
  }, [])

  const fetchStates = async (countryId)=> {
    try {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries/states",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({country: countryId})
      })
      if(!res.ok) throw new Error("Network was not ok")
      const data = await res.json()
      const statesData = data.data.states
      // const statesData = allData.states
      setStates(statesData)
      
      setChoosenCountry(countryId)
      // console.log(statesData)
      // console.log(states)
    } catch (error) {
      console.log("Error", error)
    }
  }

  const fetchCities = async (statesId) => {
    try {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({country: choosenCountry, state: statesId})
      })
      if(!res.ok) throw new Error("Network was not ok")
        const data = await res.json()
      const citiesData = data.data
      // console.log(data)
      setCities(citiesData)
    } catch (error) {
      console.log("Error", error)
    }
  }
  
  const purposes = ["I want a  Paid tech Job", "I want a Volunteer tech job", "I want to partner with Siliconverse", "I want to partner with Siliconverse", "I want to advertise on Silicon Magazine"]
  
  return (
    <div className=" rounded-lg border border-b-4 border-gray-300 p-10 space-y-6">
      <div className="border-b border-[#00000080] pb-6 space-y-2">
          <h1 className="md:text-2xl text-[20px] font-bold text-black">Your Preferences</h1>
          <p className="text-base">Update your Company’s preferences to get the most relevant recommendations for you.</p>
      </div>

      <div className="space-y-4 border-b border-[#00000080] pb-6">
        <div className="space-y-2">
          <h1 className="md:text-2xl text-[20px] font-bold text-black">Goals</h1>
          <p className="text-base ">Get customized Talents recommendations by keeping your preferences updated.</p>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="space-y-1">
            <h2 className="font-bold">Organixation Type</h2>

            <div className="relative inline-block w-[150px]">
            <select className="block appearance-none w-full bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline">
            {
            organizationType.map((opt, i) => <option key={i}>{opt}</option>)
            }
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
          <div className="space-y-1">
            <h2 className="font-bold">Country</h2>

            <div className="relative inline-block w-[150px]">
            <select
              onChange={(e)=> fetchStates(e.target.value)}
              className="block appearance-none w-full bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline">
              <option>Select a Country</option>
              {
                countries.map((country, i) => <option key={i}>{country.country}</option>)
              }
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
          <div className="space-y-1">
            <h2 className="font-bold">State</h2>

            <div className="relative inline-block w-[150px]">
            <select 
              onChange={(e)=> fetchCities(e.target.value)}
              className="block appearance-none w-full bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline">
              <option>Select a state</option>
              {
                states.length === 0 ? <option>No state</option> : (states.map((state, i) => <option key={i}>{state.name}</option>))
              }
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
          <div className="space-y-1">
            <h2 className="font-bold">Country</h2>

            <div className="relative inline-block w-[150px]">
            <select className="block appearance-none w-full bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline">
              <option>Select a city</option>
            {
            cities.length === 0 ? <option>No city</option> : (cities.map((city, i) => <option key={i}>{city}</option>))
            }
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
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="md:text-2xl text-[20px] font-bold">Additional Infomation</h2>
          <p className="text-base">What brings you to Siliconverse?</p>
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            purposes.map((purpose, id) => (
              <div key={id} className="w-full flex items-center gap-4 border p-4 rounded-xl">
                <input className="custom-checkbox" type="checkbox" />
                <h3>{purpose}</h3>
              </div>
            ))
          }
          <div className="flex items-center border w-full h-fit pl-2 rounded-lg ">
            <input className="custom-checkbox" type="checkbox" />
            <textarea
              className="border outline-none rounded-md w-full pt-4 pl-3 h-[4.4rem] m-1"
              placeholder="Something else..."
              name=""
              id=""
            />
          </div>
          <button disabled={true} className="w-[50%]">Save</button>
        </form>
      </div>
    </div>
  );
}

export default UserPreferences;
