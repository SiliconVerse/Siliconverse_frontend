import { Search, User } from "lucide-react"
import { Link } from "react-router-dom"

const MagazineNav = ({navLinks}) => {
  return (
    <header className="bg-primaryColor">
        <div className="border-b py-2 px-20 flex justify-between items-center">
            <div className="p-4 border border-white rounded-sl w-fit text-white">Silicon Verse</div>
            <div className="flex gap-2 text-white items-center">
                <User />
                <h3>Hello Margaret</h3>
            </div>
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="flex justify-between py-2 px-20 ">
            <div className="flex items-center bg-white rounded-sl w-[80%] px-4">
                <label htmlFor="search"><Search /></label>
                <input type="text" id="search" placeholder="Search" className="outline-none px-4 py-1 bg-transparent" />
            </div>
            <button className="text-white bg-black rounded-sl py-3 px-4">Search</button>
        </form>
        <ul className="flex justify-between px-20 py-5">
            {
                navLinks.slice(4, 13).map(navLink => <li key={navLink.id} className="text-white py-2 hover:border-b hover:font-semibold"><Link to={navLink.id}>{navLink.title}</Link></li>)
            }
        </ul>
    </header>
  )
}

export default MagazineNav