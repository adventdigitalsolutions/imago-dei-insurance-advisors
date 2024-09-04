/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export const Logos = (props) => {
  const { heading, logos } = {
    ...Logo3Defaults,
    ...props,
  };
  return (
    <section id="relume" className="flex flex-col justify-center overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="mx-auto mb-8 w-full px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-4xl font-bold leading-[1.2] md:text-6xl md:leading-[1.2]">
          {heading}
        </h1>
      </div>
      <ul role="list" className="px-5 m-1 flex lg:justify-center gap-4 py-5 overflow-auto whitespace-nowrap">
          {logos.map((logo, idx) => (
            <li key={idx} className="py-2 px-3 bg-t-med-brown rounded-2xl min-w-fit">
              <Link href={`#`} className="">
              <img
                  // key={id}
                  className="mx-7 shrink-0 md:mx-10 h-16"
                  src={logo.src}
                  alt={logo.alt}
                />
              </Link>
            </li>
          ))}
        </ul>
    </section>
  );
};

export const Logo3Defaults = {
  heading: "Our Partners",
  logos: [
    { src: "https://covenantchoice.org/wp-content/uploads/2023/05/CC_Primary_2CP_RGB.png", alt: "Covnenant Choice Logo" },
    { src: "//routethree.com/cdn/shop/files/Screenshot_2023-09-19_at_8.22.44_PM.png?v=1695180183&width=600", alt: "Route Three Logo" },
    { src: "https://cdn.prod.website-files.com/61511a250082c142bb64ed6f/6634c4217bf1edb9f60640ec_Untitled%20design%20(28).webp", alt: "Affilifit Logo" },
    { src: "https://covenantchoice.org/wp-content/uploads/2023/05/CEA_Primary_2CP_PMS.png", alt: "Christian Employers Alliance Logo" }
  ],
};

export default Logos
