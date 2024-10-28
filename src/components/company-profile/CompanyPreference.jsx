import { useState, useEffect } from "react";

function CompanyPreference() {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [choosenCountry, setChoosenCountry] = useState("")

  useEffect(()=> {
    const fetchCountries = async ()=> {
      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries")
        if(!res.ok) throw new Error("Network error")
        const allData = await res.json()
        const data = allData.data
        setCountries(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCountries()
  }, [])

  const fetchStates = async (countryId)=> {
    try {
          const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({country: countryId})
          })
          const allData = await res.json()
          const data = allData.data.states
          setStates(data)
          setChoosenCountry(countryId)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCities = async (cityId) => {
    try {
      const res = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: choosenCountry,
          state: cityId
        })
      })
      const allData = await res.json()
      const data = allData.data
      setCities(data)
    }
    catch(err) {
      console.log(err)
    }
  }

  // fetchCities("Lagos state")

  const organizationType = ["Fintech", "Proptech", "Logistics", "Edutech", "Healthtech", "Gaming", "Hospitality", "Blockchain", "Large Cooperation", "SMEs"]

  const moreChecks = [
    "I want to hire Paid tech talents",
    "I want to hire volunteer tech talents",
    "I want to partner with siliconverse.",
    "I want my business to be featured on siliconverse.",
    "Something else",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Your preferences</h1>
      <p className="mb-4 text-base">
        Update your Company&apos;s preferences to get the most relevant
        recommendations for you.
      </p>
      <hr className="mb-4 border" />
      <p className="mb-4 text-base">
        Get customized Talents recommendations by keeping your preferences
        updated.
      </p>

      <h2 className="text-xl font-semibold mb-4">Organization type</h2>

      <div className="flex flex-wrap gap-6 md:items-center flex-col md:flex-row md:gap-10 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Organization type
          </label>
          <select className="w-64 p-2 py-3 border text-gray-500 shadow-md rounded-md">
            {
              organizationType.map((option, id) => <option key={id}>{option}</option> )
            }
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <select onChange={(e)=> {
            const selectedCountry = e.target.value
            fetchStates(selectedCountry)
          }} className="w-64 p-2 py-3 text-gray-500 border shadow-md rounded-md">
            <option value="">Select a Country</option>
              {
                countries.map((country, id) => <option key={id} value={country.country}>{country.country}</option>)
              }
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <select onChange={
            (e)=> {const selectedState = e.target.value
                  fetchCities(selectedState)
            }
          } 
          className="w-64 p-2 py-3 text-gray-500 border shadow-md rounded-md">
            <option value="">Select a State</option>
              {
                states.map((state, id) => <option key={id}>{state.name}</option>)
              }
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <select className="w-64 p-2 py-3 text-gray-500 border shadow-md rounded-md">
            <option value="">Select a City</option>
              {
                cities.map((city, id) => <option key={id}>{city}</option>)
              }
          </select>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">More Information</h2>
      <p className="text-gray-600 mb-2">What brings you to Siliconverse?</p>

      <div className="space-y-2">
        {moreChecks.map((option, index) => (
          <div key={index} className="flex pt-2 items-center">
            <input
              type="checkbox"
              className="mr-2 border-2 border-[#FF5F15] rounded w-4 h-4 p-1"
            />
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
