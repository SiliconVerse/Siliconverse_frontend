
const MediaConnects = () => {
  return (
    <div className="w-full space-y-3 pt-4 lg:pr-20 md:pr-10 sm:pr-8 pb-7 pl-5 rounded-lg border border-b-4 border-gray-300">
        <div className="flex justify-between items-center">
            <h3>Google</h3>
            <button className="text-sm px-8 py-[6px] border border-black rounded-lg hover:bg-black hover:text-white duration-700 transition-all">Connect</button>
        </div>
        <div className="flex justify-between items-center">
            <h3>Apple</h3>
            <button className="text-sm px-8 py-[6px] border border-black rounded-lg hover:bg-black hover:text-white duration-700 transition-all">Connect</button>
        </div>
        <div className="flex justify-between items-center">
            <h3>Facebook</h3>
            <button className="text-sm px-8 py-[6px] border border-black rounded-lg hover:bg-black hover:text-white duration-700 transition-all">Connect</button>
        </div>
    </div>
  )
}

export default MediaConnects