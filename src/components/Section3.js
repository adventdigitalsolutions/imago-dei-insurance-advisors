/* eslint-disable @next/next/no-img-element */
const Content2 = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-royal-blue-700 bg-opacity-5">
      <div className="">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img src={"/images/headshot.png"} className="h-full w-auto object-cover" alt={'family in crosswalk'} />
          </div>
          <div>
            <h2 className="rb-5 mb-5 text-4xl font-normal md:mb-6 md:text-6xl lg:text-7xl">
              Hi, I&apos;m David Hemm
            </h2>
            <div className="prose space-y-6">
              <p>
                I am an expert in small business benefits. I understand the unique challenges that small business owners face to provide quality benefits at a price they can afford. I understand the complexities of the health insurance industry and know how to create solutions that meet the needs of each company I work with.
              </p>
              <p>
                A question I always ask is: What would it look like if we injected “integrity” into the healthcare system? Would it change anything? What would function differently? Is it possible to build plans and designs around that premise? These questions have been guiding my direction in how I pursue innovation.
              </p>
              <p>
                If we truly want to love our neighbor, then we should want what is best for them and their wellbeing. It also means we need to work hard to find solutions to our current problems. We won’t be able to help everyone, but we will help some, and that is something worth doing.
              </p>
            </div>
            <div className="mt-10 flex justify-center z-20 rounded-full">
              <a href="https://calendly.com/david-sog0/30min" target="_blank" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2
