// import image from 

const Magazine = ()=>{
    const imageUrl = "../../images/circuits.avif"
    return(
        <section className="bg-white pt-8">
            <div className="flex justify-between">
                <h2 className="lg:text-3xl font-black text-[#FF5F15]">Siliconverse Magazine</h2>
                <div className="flex gap-4">
                    <button className="border py-[2px] px-6 text-lg font-semibold rounded-[50px] text-[#FF5F15] hover:bg-[#FF5F15] hover:text-white hover:border-none">Sign In</button>
                    <button className="py-[2px] px-6 text-lg font-semibold rounded-[50px] text-white bg-[#FF5F15] hover:border hover:bg-transparent hover:text-[#FF5F15]">Subscribe</button>
                </div>
            </div>
            <div style={{backgroundImage: `url(${imageUrl})`}} className="h-[100px] w-full  bg-cover ">
                <p></p>
            </div>
        </section>
    )
}

export default Magazine