/* eslint-disable @next/next/no-img-element */
const Content2 = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-royal-blue-700 bg-opacity-5">
      <div className="">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img src={"/images/family_in_crosswalk.jpg"} className="w-full object-cover" alt={'family in crosswalk'} />
            <div className="hidden mt-10 md:flex justify-center z-20 rounded-full">
              <a href="#" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-royal-blue-700 md:px-10 md:py-4 lg:text-lg">Get a Free Consultation</a>
            </div>
          </div>
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-normal md:mb-6 md:text-7xl lg:text-8xl">
              Short Heading Goes Here
            </h2>
            <div className="prose">
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
                ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
                consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <p>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
                tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis
                lobortis at sit dictum eget nibh tortor commodo cursus.
              </p>
              <p>
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna
                nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
                consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
                adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
              </p>
            </div>
            <div className="mt-10 flex justify-center md:hidden z-20 rounded-full">
              <a href="#" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-royal-blue-700 md:px-10 md:py-4 md:text-lg">Get a Free Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2
