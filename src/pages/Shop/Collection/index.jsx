import React from 'react'
import './style.css'
import Catalogue from './Catalogue'
import Image1 from '../assets/Silicon Tshirt 1 1.svg'
import Image2 from '../assets/Silicon Tshirt 2.svg'
import Image3 from '../assets/Silicon Tshirt 3 1.svg'
import Image4 from '../assets/Silicon Tshirt 4 1.svg'
import Image5 from '../assets/Silicon Cap-1 1.svg'
import Image6 from '../assets/Silicon Cap-2 1.svg'
import Image7 from '../assets/Silicon Tote Bag - 1 1.svg'
import Image8 from '../assets/Silicon Tote Bag - 2 1.svg'
import Image9 from '../assets/Silicon Tote Bag - 3 1.svg'
import Image10 from '../assets/Silicon Bottle -1 1.svg'
import Image11 from '../assets/Silicon Bottle Two - 3 1.svg'
import Image12 from '../assets/Silicon Bottle -2 1.svg'


function Collection() {
    // const catalogueOne = [
    //     { id: 1, image: Image1, name: 'White T-Shirt', price: "₦15,000",},
    //     { id: 2, image: Image2, name: 'Orange T-Shirt', price: "₦15,000",},
    //     { id: 3, image: Image3, name: 'White Hoodie', price: "₦20,000",},
    //     { id: 4, image: Image4, name: 'Orange Hoodie', price: "₦20,000",},


    // ]

    return (
        <div className="collection__main">
            <div className="collection__main__section">
                <div className="collection__section_one">
                    <div className="section_one_content">
                        <div className='section_one_1'>
                            <div className="section_one_text">
                                <p className="section_one_header"><strong>1. Branded T-Shirts: </strong></p>
                                <p className="section__one__text__content">Our Siliconverse-branded T-shirts are more than just clothing; they’re a statement. Made from soft, breathable fabric, these shirts come in various colors and sizes, making them perfect for any occasion. Whether you're attending a tech conference, hanging out with friends, or working from home, these tees will keep you comfortable while showcasing your affiliation with Siliconverse</p>
                            </div>
                        {/* {catalogueOne.map((catOne) =>{ */}
                            {/* return( */}
                                {/* <div key= {catOne.id}className="section_image_product"> */}
                                    {/* <Catalogue 
                                        image= {catOne.image}
                                        title= {catOne.name}
                                        price= {catOne.price}
                                    /> */}
                                    {/* <></> */}
                                {/* </div> */}

                            {/* );
                        })} */}
                            <div className="section_image_product">
                                <Catalogue 
                                    image= {Image1}
                                    title="White T-Shirt"
                                    price="₦15,000"
                                />
                                <Catalogue 
                                    image= {Image2}
                                    title="Orange T-Shirt"
                                    price="₦15,000"
                                />
                                <Catalogue 
                                    image= {Image3}
                                    title="White Hoodie"
                                    price="₦20,000"
                                />
                                <Catalogue 
                                    image= {Image4}
                                    title="Orange Hoodie"
                                    price="₦20,000"
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>

{/* second section */}
                <div className="collection__section_one">
                    <div className="section_one_content">
                        <div className='section_one_1'>
                            <div className="section_one_text">
                                <p className="section_one_header"><strong>2. Trendy Caps: </strong></p>
                                <p className="section__one__text__content">
                                In addition to our T-shirts, caps, and bags, we regularly feature limited-edition items and seasonal merchandise that celebrate the spirit of innovation and creativity. Stay tuned for exciting new arrivals that reflect the ever-evolving tech landscape.
</p>
                            </div>
                            <div className="section_image_product">
                                <Catalogue 
                                    image= {Image5}
                                    title="White Face-Cap"
                                    price="₦5,000"
                                />
                                <Catalogue 
                                    image= {Image6}
                                    title="Orange Face-Cap"
                                    price="₦5,000"
                                />
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            {/* third */}
            <div className="collection__section_one">
                    <div className="section_one_content">
                        <div className='section_one_1'>
                            <div className="section_one_text">
                                <p className="section_one_header"><strong>3. Eco-Friendly Bags:
                                </strong></p>
                                <p className="section__one__text__content">Our Siliconverse-branded T-shirts are more than just clothing; they’re a statement. Made from soft, breathable fabric, these shirts come in various colors and sizes, making them perfect for any occasion. Whether you're attending a tech conference, hanging out with friends, or working from home, these tees will keep you comfortable while showcasing your affiliation with Siliconverse</p>
                            </div>
                            <div className="section_image_product">
                                <Catalogue 
                                    image= {Image7}
                                    title="White Tote Bag"
                                    price="₦10,000"
                                />
                                <Catalogue 
                                    image= {Image9}
                                    title="Orange Tote Bag"
                                    price="₦10,000"
                                />
                                <Catalogue 
                                    image= {Image8}
                                    title="Black Tote Bag"
                                    price="₦10,000"
                                />
                               
                            </div>
                        </div>
                    </div>
                </div>

            {/* forth section */}
            <div className="collection__section_one">
                    <div className="section_one_content">
                        <div className='section_one_1'>
                            <div className="section_one_text">
                                <p className="section_one_header"><strong>4. Exclusive Merchandise:
                               </strong></p>
                                <p className="section__one__text__content">In addition to our T-shirts, caps, and bags, we regularly feature limited-edition items and seasonal merchandise that celebrate the spirit of innovation and creativity. Stay tuned for exciting new arrivals that reflect the ever-evolving tech landscape.
                                </p>
                            </div>
                            <div className="section_image_product">
                                <Catalogue 
                                    image= {Image10}
                                    title="White Bottle"
                                    price="₦7,500"
                                />
                                <Catalogue 
                                    image= {Image11}
                                    title="Orange Bottle"
                                    price="₦7,500"
                                />
                                <Catalogue 
                                    image= {Image12}
                                    title="Black Bottle"
                                    price="₦7,500"
                                />
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
    )
}

export default Collection
