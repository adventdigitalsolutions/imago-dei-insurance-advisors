/* eslint-disable @next/next/no-img-element */
import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

const features = [
  {
    image: {
      src: "/images/checkup.png"
    },
    heading: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    image: {
      src: "/images/medical_building.png",
      alt: "Relume placeholder image 2",
    },
    heading: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    image: {
      src: "/images/medical_checklist.png",
      alt: "Relume placeholder image 3",
    },
    heading: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
]

const Section2 = () => {
  return (
    <section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="">
        <div className="rb-12 mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <div className="flex h-full flex-col">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h1 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">Short Header</h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40">
            <p className="md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            <div className="mt-10 sm:flex sm:justify-center xl:justify-end z-20 rounded-full">
              <a href="#" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-royal-blue-700 md:px-10 md:py-4 md:text-lg">Get a Free Consultation</a>
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
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <h2 className="mb-3 text-2xl md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
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

export default Section2
