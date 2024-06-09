import { images } from "../.."

const Mission = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-[40px] font-bold">Our Mission</h1>
            <p className="text-[12px] md:text-[16px]">Subheading for description or instructions</p>

            <p className="text-[16px] md:text-[20px]">Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</p>
          </div>
          <div className="">
            <img src={images.goal} alt="goal" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-0 justify-between">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-[40px] font-bold">Our Objectives</h1>
            <p className="text-[12px] md:text-[16px]">Subheading for description or instructions</p>

            <p className="text-[16px] md:text-[20px]">Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</p>
          </div>
          <div className="">
            <img src={images.goal} alt="goal" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission