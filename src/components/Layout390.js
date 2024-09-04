/* eslint-disable @next/next/no-img-element */
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export const Layout390 = (props) => {
  const { tagline, heading, description, cards } = {
    ...Layout390Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-8">
      <div className="container">
        <div className="mx-auto mb-12 w-full text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <dialog id="relume" class="px-[5%] py-16 md:py-24 lg:py-28">
        <div class="container">
          <div class="mx-auto w-full max-w-lg">
            <h2 class="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Short heading goes here
            </h2>
            <div class="prose">
              <div>
                <p>
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
                  ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
                  consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                </p>
                <p>
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
                  tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et.
                  Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                </p>
                <p>
                  Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
                  urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut
                  id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
                  tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
                  cursus diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
};

const Card = (card) => {
  return (
    <div className="grid auto-cols-fr grid-cols-1 border border-border-primary first-of-type:row-span-2 first-of-type:flex first-of-type:flex-col sm:grid-cols-2 lg:col-span-2 lg:first-of-type:col-span-1">
      <div className="block p-6 first-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
        <div>
          <p className="mb-2 font-semibold">{card.tagline}</p>
          <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {card.heading}
          </h2>
          <p>{card.description}</p>
        </div>
        <div className="mt-5 md:mt-6">
          <Button {...card.button}>{card.button.title}</Button>
        </div>
      </div>
      <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
        <img src={card.image.src} alt={card.image.alt} />
      </div>
    </div>
  );
};

export const Layout390Defaults = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cards: [
    {
      tagline: "Tagline",
      image: {
        src: "/images/medical_01.png",
        alt: "Relume placeholder image 1",
      },
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: "/images/medical_building.png",
        alt: "Relume placeholder image 2",
      },
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: "/images/medical_06.png",
        alt: "Relume placeholder image 3",
      },
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
