
function CompanyPreference() {

  const moreChecks = [
    "I want to hire Paid tech talents",
    "I want to hire volunteer tech talents",
    "I want to partner with siliconverse.",
    "I want my business to be featured on siliconverse.",
    "Something else",
  ];

  const states = ['Abia State', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'Federal Capital Territory']
  
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

      <div className="flex gap-6 md:items-center flex-col md:flex-row md:gap-10 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Organization type
          </label>
          <select className="w-64 p-2 py-3 border text-gray-500 shadow-md rounded-md">
            <option>Corporation</option>
            <option>investor</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <select className="w-64 p-2 py-3 text-gray-500 border shadow-md rounded-md">
              {
                states.map((state, id) => <option key={id}>{state}</option>)
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
