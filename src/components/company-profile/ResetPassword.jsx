
const ResetPassword = () => {
  return (
    <form className="grid md:grid-cols-2 gap-y-4 gap-x-8">
        <div className="flex flex-col gap-2">
            <label htmlFor="newEmail" className="cursor-pointer text-sm">Current Password</label>
            <input className="md:w-full max-w-[400px] border border-black rounded-md p-2 outline-none" type="text" id="newEmail" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="newEmail" className="cursor-pointer text-sm">New Password</label>
            <input className="md:w-full max-w-[400px] border border-black rounded-md p-2 outline-none" type="text" id="newEmail" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="newEmail" className="cursor-pointer text-sm">Re-enter Password</label>
            <input className="md:w-full max-w-[400px] border border-black rounded-md p-2 outline-none" type="text" id="newEmail" />
        </div>
        <div className="flex justify-between items-end md:w-full max-w-[400px]">
            <button disabled={true} className="bg-[#FF0000] h-[50%] text-white text-sm py-[6px] px-7 rounded-md">Cancel</button>
            <button disabled={true} className="bg-[#FF5F15] h-[50%] text-white text-sm py-[6px] px-7 rounded-md">Save</button>
        </div>
    </form>
  )
}

export default ResetPassword