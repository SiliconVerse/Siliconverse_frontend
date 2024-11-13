import { CircleChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

function CompanyPreference() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [chosenCountry, setChosenCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries");
        if (!res.ok) throw new Error("Network error");
        const allData = await res.json();
        const data = allData.data;
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  const fetchStates = async (countryId) => {
    try {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country: countryId }),
      });
      const allData = await res.json();
      const data = allData.data.states;
      setStates(data);
      setChosenCountry(countryId);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async (cityId) => {
    try {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: chosenCountry,
          state: cityId,
        }),
      });
      const allData = await res.json();
      const data = allData.data;
      setCities(data);
    } catch (err) {
      console.log(err);
    }
  };

  // fetchCities("Lagos state")

  const organizationType = [
    "Fin-tech",
    "Prop-tech",
    "Logistics",
    "Edu-tech",
    "Health-tech",
    "Gaming",
    "Hospitality",
    "Blockchain",
    "Large Cooperation",
    "SMEs",
  ];

  const moreChecks = [
    "I want to hire Paid tech talents",
    "I want to hire volunteer tech talents",
    "I want to partner with SiliconVerse.",
    "I want my business to be featured on SiliconVerse.",
    "Something else",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Your preferences</h1>
      <p className="mb-4 text-base">
        Update your Company&apos;s preferences to get the most relevant recommendations for you.
      </p>
      <hr className="mb-4 border" />
      <p className="mb-4 text-base">
        Get customized Talents recommendations by keeping your preferences updated.
      </p>

      <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-4 my-5">
        <div className="space-y-1 w-full">
          <h2 className="font-bold">Organization Type</h2>

          <div className="relative inline-block">
            <select className="block appearance-none w-[200px] max-w-[250px] bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-sm leading-tight focus:outline-none focus:shadow-outline">
              {organizationType.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none mt-0.5 absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <CircleChevronDown size={24} />
            </div>
          </div>
        </div>
        <div className="space-y-1 w-full">
          <h2 className="font-bold">Country</h2>

          <div className="relative inline-block">
            <select
              onChange={(e) => fetchStates(e.target.value)}
              className="block appearance-none w-[200px] max-w-[250px] bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-sm leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select a Country</option>
              {countries.map((country, i) => (
                <option key={i}>{country.country}</option>
              ))}
            </select>
            <div className="pointer-events-none mt-0.5 absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <CircleChevronDown size={24} />
            </div>
          </div>
        </div>
        <div className="space-y-1 w-full">
          <h2 className="font-bold">State</h2>

          <div className="relative inline-block">
            <select
              onChange={(e) => fetchCities(e.target.value)}
              className="block appearance-none w-[200px] max-w-[250px] bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-sm leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select a state</option>
              {states.length === 0 ? (
                <option>No state</option>
              ) : (
                states.map((state, i) => <option key={i}>{state.name}</option>)
              )}
            </select>
            <div className="pointer-events-none mt-0.5 absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <CircleChevronDown size={24} />
            </div>
          </div>
        </div>
        <div className="space-y-1 w-full">
          <h2 className="font-bold">City/LGA</h2>

          <div className="relative inline-block">
            <select className="block appearance-none w-[200px] max-w-[250px] bg-white border text-[#FF5F15] cursor-pointer border-gray-300 hover:border-gray-400 px-2 py-2 pr-8 rounded-sm leading-tight focus:outline-none focus:shadow-outline">
              <option>Select a city</option>
              {cities.length === 0 ? (
                <option>No city</option>
              ) : (
                cities.map((city, i) => <option key={i}>{city}</option>)
              )}
            </select>
            <div className="pointer-events-none mt-0.5 absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
              <CircleChevronDown size={24} />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">More Information</h2>
      <p className="text-gray-600 mb-2">What brings you to SiliconVerse?</p>

      <div className="space-y-2">
        {moreChecks.map((option, index) => (
          <div key={index} className="flex pt-2 items-center">
            <input type="checkbox" className="mr-2 border-2 border-[#FF5F15] rounded w-4 h-4 p-1" />
            <label>{option}</label>
          </div>
        ))}
      </div>

      <div className="text-right">
        <button className="mt-6 bg-[#FF5F15] text-white px-12 py-2 rounded-md hover:bg-orange-600 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}

export default CompanyPreference;
