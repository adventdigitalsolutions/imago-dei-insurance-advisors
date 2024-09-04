/* eslint-disable @next/next/no-img-element */
function Hero() {
  return (
    <div className="relative bg-gray-50 w-full">
      <div className="bg-royal-blue-500 h-2/3  lg:h-full w-2/3 rounded-full absolute -top-12 -left-12 z-10 blur-3xl opacity-10"></div>
      <main className="lg:relative">
        <div className="mx-auto w-full pb-20 pt-16 text-center xlg:py-48 xl:text-left">
          <div className="px-6 sm:px- xl:w-2/3  flex flex-col gap-6 items-center xl:items-start">
            <div className="my-0 font-normal tracking-wide text-gray-900">
              <h1 className="text-5xl font-normal md:text-7xl lg:text-8xl">
                <span className="block xl:inline uppercase">Imago Dei</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                <span className="block xl:inline">Insurance Advisors</span>
              </h1>
            </div>
            <p className="mt-3 max-w-md text-xl text-gray-600 sm:text-3xl md:mt-5 md:max-w-3xl">Bringing a <span className="underline italic font-semibold"> Christian Worldview </span> to Health Benefits</p>
            <div className="flex flex-col gap-2">
              <p className="mt-3 max-w-md text-md text-gray-600 sm:text-2xl md:max-w-5xl">As a business owner, you are called to <span className="underline">love your people</span> and <span className="underline">steward your assets</span>.</p>
              <p className="mt-3 max-w-md text-md text-gray-500 sm:text-2xl md:max-w-5xl">We can help you save <span className="italic underline">20%-40%</span> on your employee health care plan.</p>
            </div>
            <div className="mt-10 sm:flex sm:justify-center xl:justify-start z-20 rounded-full shadow">
              <div className="rounded-full shadow">
                <a href="https://calendly.com/david-sog0/30min" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-4 lg:h-full xl:w-1/3">
          <img className="absolute inset-0 h-full w-full object-cover object-bottom" src="/images/family_01.jpg" alt=""/>
        </div>
      </main>
    </div>
  )
}

export default Hero
