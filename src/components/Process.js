"use client";

import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const Layout486 = (props) => {
  const { features } = {
    ...Layout486Defaults,
    ...props,
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const featureCount = features.length;
  const numbers = Array.from({ length: featureCount }, (_, index) => index + 1);

  const y = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    ["0%", "-20%", "-20%", "-40%", "-40%", "-60%", "-60%", "-80%"],
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
      <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
        {feature.heading}
      </h2>
      <p className="md:text-3xl">{feature.description}</p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
      <div className="mt-10 sm:flex sm:justify-center xl:justify-start z-20">
        <div className="rounded-full shadow">
          <a href="https://calendly.com/david-sog0/30min" target="_blank" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
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
      tagline: "Learn",
      heading: "Get To Know Your Business",
      description:
        "We will get to know you, your company mission, and your company goals. We will look at your overall circumstances, including the number of employees, demographics, type of business, and budget, and then determine how to align a benefits strategy to your needs.",
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
      tagline: "Evaluate",
      heading: "Assess Your Current Plan and Review Options",
      description:
        "We will review your current insurance plan, learn what you like about it, and what you want to change based on your employee's preferences and needs. We will then identify what the ideal plan looks like, including necessary, important, and desired features.",
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
      tagline: "Develop",
      heading: "Develop Your Customized Plan",
      description:
        "Imago Dei is independent, we can shop across multiple carriers and insurance styles. We will craft a unique and custom plan tailored to achieve your goals within your budget, and provide the desired benefits for employees.",
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
      tagline: "Implement",
      heading: "Implementation & Compliance",
      description:
        "We will make sure all compliance requirements are met, and assist you in completing the applications. We will set up the enrollment portal and provide training for you and your employees. We will incorporate your existing technology for seamless integration.",
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
      number: "05",
      tagline: "Support",
      heading: "Ongoing Support and Strategy",
      description:
        "We will several years ahead to create long-term strategies for maintaining cost efficiency. Our continuous support includes quarterly reviews, new hire enrollments, terminations, COBRA compliance, prescription plan compliance, ACA compliance, and assistance with claims issues. We can provide HR solutions to provide support for compliance and tax filings.",
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
