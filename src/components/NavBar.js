/* eslint-disable @next/next/no-img-element */
import MenuBurger from "./MenuBurger"
export default function NavBar () {

  return (
    <header className="bg-royal-blue-700 bg-opacity-10 w-full" x-data="{expanded: false}">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0 flex gap-8 items-center">
            <a href="/" title="" className="">
              <img className="w-auto h-32 hover:border-[1px] hover:border-yellow-300" src="/images/imago-dei-logo.png" alt="" />
            </a>
          </div>

          <div className="hidden md:flex lg:items-center lg:space-x-4 lg:justify-end lg:ml-auto">
            <a href="/about" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:border-[1px] hover:border-yellow-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              About Us
            </a>

            <a href="/resources" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-lg font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:border-[1px] hover:border-yellow-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              Resources
            </a>

            <div className="sm:flex sm:justify-center xl:justify-start z-20">
              <div className="rounded-full shadow">
                <a href="https://calendly.com/david-sog0/30min" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300">Book An Appointment</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <MenuBurger/>
          </div>
        </div>
      </div>
    </header>
  )
}
