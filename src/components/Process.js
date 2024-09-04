"use client";

import { Button, Heading, useMediaQuery } from "@relume_io/relume-ui";
import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const Layout486 = (props) => {
  const { features } = {
    ...Layout486Defaults,
    ...props,
  };

  const ref = useRef(null);
  const isTablet = useMediaQuery("(max-width: 991px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const featureCount = features.length;
  const numbers = Array.from({ length: featureCount }, (_, index) => index + 1);
  // const y = isTablet
  //   ? useTransform(
  //       scrollYProgress,
  //       [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
  //       ["0%", "-25%", "-25%", "-50%", "-50%", "-50%", "-75%"],
  //     )
  //   : useTransform(
  //       scrollYProgress,
  //       [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
  //       ["0%", "-25%", "-25%", "-50%", "-50%", "-75%"],
  //     );
  const y = useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
        ["0%", "-25%", "-25%", "-50%", "-50%", "-75%"],
      );

  return (
    <section ref={ref} className="px-[5%] py-16 md:py-24 lg:py-28">
      <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">Our Process</h3>
      <div className="container relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
        <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
          <h1 className="text-[6rem] font-semibold leading-[1] md:text-[14rem]">0</h1>
          <motion.div className="text-center" style={{ y }}>
            {numbers.map((number, index) => (
              <h1 key={index} className="text-[6rem] font-semibold leading-[1] md:text-[14rem]">
                {number}
              </h1>
            ))}
          </motion.div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ ...feature }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const animatedWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const width = useTransform(animatedWidth, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col items-start justify-center py-8 md:py-0">
      <div className="mt-10 flex text-[6rem] font-bold leading-[1] md:mt-0 md:hidden md:text-[14rem]">
        {feature.number}
      </div>
      <div ref={ref} className="mb-8 mt-8 h-0.5 w-full bg-neutral-lighter md:mt-0">
        <motion.div className="h-0.5 w-8 bg-neutral-black" style={{ width }} />
      </div>
      <p className="mb-3 font-semibold md:mb-4">{feature.tagline}</p>
      <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
        {feature.heading}
      </h2>
      <p className="md:text-md">{feature.description}</p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
      <div className="mt-10 sm:flex sm:justify-center xl:justify-start z-20">
        <div className="rounded-full shadow">
          <a href="https://calendly.com/david-sog0/30min" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export const Layout486Defaults = {
  features: [
    {
      number: "01",
      tagline: "Tagline",
      heading: "Book An Appointment",
      description:
        "We will get to know you, your company mission, your company goals, and how to align a benefits strategy to your mission.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      number: "02",
      tagline: "Tagline",
      heading: "Benefits Design",
      description:
        "We will work to craft a benefits strategy that is purposeful, and better stewards your financial contributions for yourself and your employees.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      number: "03",
      tagline: "Tagline",
      heading: "Design Rollout",
      description:
        "We will work together to educate your employees, enroll each emplyee in their new benefits, and explain their benefits for maximum utilization",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      number: "04",
      tagline: "Tagline",
      heading: "Ongoing Support",
      description:
        "Our agency will work side by side with you from start to finish. We will continue to monitor the plan design throughout the year. Yes, Semper Reformanda applies here, too",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};
