/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";

const features = [
  {
    image: {
      src: "/images/skyscrapers.jpg",
      alt: "Relume placeholder image 3",
    },
    heading: "Are you making a cultural impact?",
    description:
      "Business owners have the ability to make a tremendous impact on society and culture. Through the impact of businesses: cities, counties, and nations can be transformed in a real tangible way. Yet, business owners find themselves in a difficult spot. Health insurance is becoming too expensive for many employers as costs continue to rise. Many feel their only option is to pass along costs to their employees and offer less valuable plans to keep up with these rising costs. Business owners who really care about their employees are looking for options.",
  },
  {
    image: {
      src: "/images/open_bible.jpg"
    },
    heading: "Does your employee benefits program align with your mission and values?",
    description:
      "Does your employee benefits program stand for the same things you stand for? Do you seek to align everything you do through a Christian worldview? Imago Dei will help you provide a health benefits package that works with your mission, not against it.",
  },
  {
    image: {
      src: "/images/workers.jpg",
      alt: "Relume placeholder image 2",
    },
    heading: "Are you investing in the well-being of your employees?",
    description:
      "Do you view your calling as an employer to love your neighbor well? Our employees are the ones we are to steward and care for while they are in our charge. Imago Dei will work with you to provide the best healthcare options for your employees to provide a superior healthcare option in a price range they can actually afford.",
  },
]

const PartnerFeatures = () => {
  return (
    <section id="features1" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="">
        <div className="rb-12 mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <div className="flex h-full flex-col md:mt-40">
            <p className="mb-3 font-semibold md:mb-4">Your Benefits Partner</p>
            <h1 className="text-5xl font-normal md:text-7xl lg:text-8xl">Imago Dei Works <span className="italic">With</span> You</h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40 gap-4">
            <p className="md:text-md">Employers who partner with Imago Dei Insurance Advisors are bringing on a teammate. On average, we save employers 20% on their premium costs while implementing a long-term strategy to keep their costs low and their plans rich. We will give you the peace of mind knowing that you are not only bringing superior health benefits to your employees, but staying in compliance with regulators.</p>
            <p className="md:text-md">We will continue to bring you more value through access to our HR technology and benefits integration with assistance in payroll administration and tax filings for deductions. Let our team help you win the day for your employees and remove much of the unnecessary burden of the time and money for your company. We want to find employers who are ready to save money, implement superior healthcare options, and steward their employees well.</p>
            <div className="mt-10 sm:flex sm:justify-center xl:justify-end z-20 rounded-full">
              <a href="https://calendly.com/david-sog0/30min" target="_blank" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
            </div>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-12 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx("w-full", {
                "md:mt-[25%]": index === 1,
                "md:mt-[50%]": index === 2,
              })}
            >
              <div className="rb-6 mb-6 w-full md:mb-8">
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="aspect-[3/2] w-full object-cover rounded-md"
                />
              </div>
              <h2 className="mb-3 text-2xl font-semibold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {feature.heading}
              </h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerFeatures
