/* eslint-disable @next/next/no-img-element */
export const Footer4 = (props) => {
  const { logo, footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  };
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-royal-blue-700 bg-opacity-10">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href={logo.url} className="lg:justify-self-start">
            <img src={'/images/imago-dei-logo.png'} alt={logo.alt} className="inline-block" />
          </a>
          <div></div>
          {/* {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold">
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          ))} */}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank">
                <img src={link.icon} alt="" className="h-16 w-16" />
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          {/* <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline decoration-black underline-offset-1 ">
                <a href={link.url} className="h-12">{link.title}</a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export const Footer4Defaults = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "Link One", url: "#" },
        { title: "Link Two", url: "#" },
        { title: "Link Three", url: "#" },
        { title: "Link Four", url: "#" },
        { title: "Link Five", url: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "https://www.facebook.com/profile.php?id=61557799479420", icon: '/images/facebook.png' },
    { url: "https://www.linkedin.com/company/imago-dei-insurance-advisors/posts/?feedView=all", icon: '/images/linkedin.png' },
    { url: "https://www.youtube.com/@imagodeinsurance", icon: '/images/youtube.png' },
  ],
  footerText: "© 2024 Imago Dei Insurance Advisors. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};