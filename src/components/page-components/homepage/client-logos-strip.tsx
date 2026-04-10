import Image from 'next/image';

const LOGOS = [
  {
    src: '/homepage_logos/logo-a20-consulting.webp',
    alt: 'A20 Consulting',
    width: 156,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-by-the-hand.webp',
    alt: 'By The Hand Dallas',
    width: 160,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-david-clark.webp',
    alt: 'David Clark',
    width: 400,
    height: 80,
  },
  {
    src: '/homepage_logos/logo-estelle-content-co.webp',
    alt: 'Estelle Content Co.',
    width: 334,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-freedom-support.webp',
    alt: 'Freedom Support',
    width: 160,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-hadley-designs.webp',
    alt: 'Hadley Designs',
    width: 304,
    height: 160,
  },
  { src: '/homepage_logos/logo-ifi.webp', alt: 'IFI', width: 160, height: 160 },
  {
    src: '/homepage_logos/logo-in-service.webp',
    alt: 'In Service',
    width: 260,
    height: 160,
  },
  { src: '/homepage_logos/logo-lcd.webp', alt: 'LCD', width: 190, height: 53 },
  {
    src: '/homepage_logos/logo-livryte.webp',
    alt: 'Livryte',
    width: 400,
    height: 111,
  },
  {
    src: '/homepage_logos/logo-maxxd.webp',
    alt: 'MAXXD',
    width: 400,
    height: 120,
  },
  {
    src: '/homepage_logos/logo-moccc.webp',
    alt: 'MOCCC',
    width: 269,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-munizzi-law.webp',
    alt: 'Munizzi Law Firm',
    width: 160,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-new-world.webp',
    alt: 'New World',
    width: 181,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-right-fit.webp',
    alt: 'Right Fit',
    width: 156,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-second-wind.webp',
    alt: 'Second Wind',
    width: 400,
    height: 83,
  },
  {
    src: '/homepage_logos/logo-upgrade.webp',
    alt: 'Upgrade',
    width: 160,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-ups-stores.webp',
    alt: 'The UPS Stores',
    width: 284,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-us-christian-chamber.webp',
    alt: 'US Christian Chamber',
    width: 160,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-freak-fast-home-buyers.webp',
    alt: 'Freak Fast Home Buyers',
    width: 160,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-ilantus-services.webp',
    alt: 'Ilantus Services',
    width: 400,
    height: 139,
  },
  {
    src: '/homepage_logos/logo-trinity-tubular-products.webp',
    alt: 'Trinity Tubular Products',
    width: 400,
    height: 136,
  },
  {
    src: '/homepage_logos/logo-xm-performance.webp',
    alt: 'XM Performance',
    width: 367,
    height: 160,
  },
  {
    src: '/homepage_logos/logo-faith-driven.png',
    alt: 'Faith Driven',
    width: 400,
    height: 225,
  },
] as const;

export const ClientLogosStrip = () => (
  <div className="flex items-center justify-center mb-16 py-8 border-y border-clinical-border/60">
    <div className="w-full max-w-5xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-16 items-center justify-items-center">
      {LOGOS.map((logo) => (
        <div
          key={logo.src}
          className="flex items-center justify-center h-12 w-full opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="max-h-12 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);
