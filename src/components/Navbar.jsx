
import { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className='pt-8 '>
            <div className='hidden md:block'>
                <nav className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-bold'>Siliconverse</h1>
                    </div>

                    <div className='flex justify-between items-center'>
                        <h2 className='px-5 text-lg font-normal'><Link to={'/'} className='links'>Home</Link></h2>
                        <h2 className='px-5 text-lg font-normal'><Link to={"/mission"} className='links'>Our mission</Link></h2>
                        <h2 className='px-5 text-lg font-normal'><Link to={"/about"} className='links'>About us</Link></h2>
                        <h2 className='px-5 text-lg font-normal'><Link to={"/interns"} className="links">Interns</Link></h2>
                        <h2 className='px-5 text-lg font-normal'><Link to={"/interns"} className='links'>Hire Interns</Link></h2>
                    </div>

                    <div className='flex justify-between items-center gap-5'>
                        <button className='border border-[#FF5F15] py-2 px-8 rounded-3xl text-black'>Signin</button>
                        <button className='bg-[#FF5F15] py-2 px-10 rounded-3xl text-white'>Create Account</button>
                    </div>
                </nav>


            </div>

            <section className='md:hidden relative'>
                <div className='flex justify-between w-full'>
                    <div>
                        <h1 className='text-2xl font-bold'>Siliconverse</h1>
                    </div>

                    <div className='text-4xl'>
                        <BiMenuAltLeft onClick={handleOpen}/>
                    </div>
                </div>

                {open && (
                    <div className='bg-[#FDEFE9] absolute w-full flex justify-center items-center flex-col gap-2 p-10'>
                        <h2 className='px-5 text-2xl font-semibold hover:underline'><Link to={'/'} className='links'>Home</Link></h2>
                        <h2 className='px-5 text-2xl font-semibold hover:underline'><Link to={"/mission"} className='links'>Our mission</Link></h2>
                        <h2 className='px-5 text-2xl font-semibold hover:underline'><Link to={"/about"} className='links'>About us</Link></h2>
                        <h2 className='px-5 text-2xl font-semibold hover:underline'><Link to={"/interns"} className="links">Interns</Link></h2>
                        <h2 className='px-5 text-2xl font-semibold hover:underline'><Link to={"/interns"} className='links'>Hire Interns</Link></h2>
                    </div>


                )}





            </section>
        </div>
    )
}

export default Navbar
