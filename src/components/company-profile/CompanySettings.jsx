import google from '../../assets/google.svg'
import apple from '../../assets/apple.svg'
import fb from '../../assets/fb.svg'



function CompanySettings() {
  return <div>
    <div >
      <div className="space-y-10 rounded-2xl border-b-[4xl] border-gray-500  shadow-2xl  p-4">
        <div>
          <h1 className="text-xl font-bold">Account settings</h1>
          <p className="text-base">Manage your account login, social connections, security, and more</p>
        </div>
        <div className="w-full flex justify-between items-center md:w-[50%]">
          <div>
            <h1 className="text-xl font-bold">Email and password</h1>
            <h3>Email address</h3>
            <span className='text-sm text-[#FF5F15]'>siliconverse@gmail.com</span>
          </div>

          <div>
            <h1 className="text-xl font-bold">current password</h1>
            <span>**************</span>
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className="text-xl font-bold" >Social connections</h1>
          <p>For quick and easy access use your social accounts</p>

          <div className="w-full md:w-[50%] space-y-4">
            <div className="flex justify-between items-center">
              <div className='flex gap-3 items-center'>
                <img src={google} alt="google" />
                <h2>Google</h2>
              </div>
              <button className="px-4 py-2 rounded-md border border-gray-900">
                Connect
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className='flex gap-3 items-center'>
                <img src={apple} alt="apple" />
                <h2>Apple</h2>
              </div>
              <button className="px-4 py-2 rounded-md border border-gray-900">
                Connect
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className='flex gap-3 items-center'>
                <img src={fb} alt="fb" />
                <h2>Facebook</h2>
              </div>
              <button className="px-4 py-2 rounded-md border border-gray-900">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <h1 className="text-xl font-bold" >Deactivate account</h1>
          <p  className=''>Note deactivation takes two days</p>
        </div>
        <button className="px-4 py-2 rounded-md border bg-[#FF0000] text-white">
          Deactivate
        </button>
        <div>

        </div>
      </div>
    </div>

  </div>;
}
export default CompanySettings;
