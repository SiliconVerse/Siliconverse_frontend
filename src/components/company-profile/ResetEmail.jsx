
const ResetEmail = () => {
  return (
    <form className="space-y-3 md:w-[480px]">
        <div className="space-y-2">
            <label htmlFor="newEmail" className="cursor-pointer text-sm">New Email</label>
            <input className="w-full border border-black rounded-md p-2 outline-none" type="text" id="newEmail" />
        </div>
        <div className="space-y-2">
            <label htmlFor="newEmail" className="cursor-pointer text-sm">Password</label>
            <input className="w-full border border-black rounded-md p-2 outline-none" type="text" id="newEmail" />
        </div>
        <div className="flex flex-wrap-reverse gap-2 justify-between">
            <button disabled={true} className="bg-[#FF0000] text-white text-sm py-[6px] px-7 rounded-md">Cancel</button>
            <button disabled={true} className="bg-[#FF5F15] text-white text-sm py-[6px] px-7 rounded-md">Save</button>
        </div>
    </form>
  )
}

export default ResetEmail