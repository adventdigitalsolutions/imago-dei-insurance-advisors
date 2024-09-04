/* eslint-disable @next/next/no-img-element */
const Hero2 = () => {

  return (
    <section id="relume" className="px-[5%] bg-royal-blue-700 bg-opacity-5">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 py-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className=">mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Imago Dei</h2>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">Insurance Advisors</h3>
            <p className="mt-3 max-w-md text-xl text-gray-600 sm:text-3xl md:mt-5 md:max-w-3xl"><span className="underline italic font-semibold">Christian Values</span> in a Benefits Plan You Can Trust</p>
            <div className="flex flex-col gap-2">
              <p className="mt-3 max-w-md text-md text-gray-600 sm:text-2xl md:max-w-5xl">Helping Christian businesses honor Christ by creating healthcare benefit
              solutions that provide superior healthcare at a lower cost.</p>
              <p className="mt-3 max-w-md text-md text-gray-500 sm:text-2xl md:max-w-5xl">We can help you save <span className="italic underline">20%-40%</span> on your employee health care plan.</p>
            </div>
            <div className="mt-10 sm:flex sm:justify-center xl:justify-start z-20">
              <div className="rounded-full shadow">
                <a href="https://calendly.com/david-sog0/30min" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
              </div>
            </div>
          </div>
          <div>
            <img src={'/images/family_01_short.jpg'} className="w-full object-cover rounded-sm" alt={'family'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2
