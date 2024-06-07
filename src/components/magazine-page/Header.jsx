import image from "../../images/circuits.avif"


const Header = ()=>{
    return(
        <header className="bg-white pt-8">
            <div className="flex min-[514px]:flex-row min-[514px]:justify-between flex-col items-center gap-4">
                <h2 className="lg:text-3xl font-black text-[#FF5F15]">Siliconverse Magazine</h2>
                <div className="flex gap-4 max-[306px]:flex-col">
                    <button className="border py-[2px] px-6 text-lg font-semibold rounded-[50px] text-[#FF5F15] hover:bg-[#FF5F15] hover:text-white hover:border-none">Sign In</button>
                    <button className="py-[2px] px-6 text-lg font-semibold rounded-[50px] text-white bg-[#FF5F15] hover:border hover:bg-transparent hover:text-[#FF5F15]">Subscribe</button>
                </div>
            </div>
            <div style={{backgroundImage: `url(${image})`}} className="mt-4 space-y-6 w-full pt-[138px] pb-[50px] bg-cover">
                <p className="md:text-4xl sm:text-2xl text-xl font-bold w-[600px] max-[628px]:w-full">Stay ahead with the latest tech updates from leading companies and organizations on our platform for Startups, SMEs, and Tech Talents, in partnership with Siliconverse Magazine</p>
                <p className="text-[#FF5F15] font-semibold text-lg">Connect to Interns and organizations</p>
            </div>
        </header>
    )
}

export default Header