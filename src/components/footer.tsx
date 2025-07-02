import { getCopy } from '@/getCopy';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import Image from 'next/image';

export const Footer = () => (
  <footer className="bg-white text-black py-16 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo Section */}
        <div className="flex flex-col">
          <div className="mb-8 text-center">
            <Image
              src="/imago-dei-logo.png"
              alt="Imago Dei Insurance Advisors"
              width={200}
              height={80}
              className="h-auto m-auto"
            />
          </div>
        </div>

        {/* Find us on social media */}
        <div>
          <h3 className="text-lg md:text-xl font-medium text-royal-purple mb-6">
            {getCopy('footer.socialMediaHeader')}
          </h3>
          <div className="flex gap-4">
            <a
              href={getCopy('footer.twitterUrl')}
              className="text-royal-purple hover:text-blue-600 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href={getCopy('footer.instagramUrl')}
              className="text-royal-purple hover:text-blue-600 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href={getCopy('footer.linkedinUrl')}
              className="text-royal-purple hover:text-blue-600 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href={getCopy('footer.facebookUrl')}
              className="text-royal-purple hover:text-blue-600 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF size={32} />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg md:text-xl font-medium text-royal-purple mb-6">
            {getCopy('footer.solutionsHeader')}
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/individual-solutions"
                className="text-slate-gray hover:text-black transition-colors text-md md:text-lg"
              >
                {getCopy('footer.individualSolutions')}
              </a>
            </li>
            <li>
              <a
                href="/business-solutions"
                className="text-slate-gray hover:text-black transition-colors text-md md:text-lg"
              >
                {getCopy('footer.businessSolutions')}
              </a>
            </li>
          </ul>
        </div>

        {/* Who we are */}
        <div>
          <h3 className="text-lg md:text-xl font-medium text-royal-purple mb-6">
            {getCopy('footer.whoWeAreHeader')}
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/about"
                className="text-slate-gray hover:text-black transition-colors text-md md:text-lg"
              >
                {getCopy('footer.about')}
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="text-slate-gray hover:text-black transition-colors text-md md:text-lg"
              >
                {getCopy('footer.ourTeam')}
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-slate-gray hover:text-black transition-colors text-md md:text-lg"
              >
                {getCopy('footer.faq')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-16 pt-8 border-t border-gray-300">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex items-center text-slate-gray text-md md:text-lg">
            <FaEnvelope className="mr-3 text-royal-purple" />
            <a
              href={`mailto:${getCopy('footer.email')}`}
              className="hover:text-black transition-colors"
            >
              {getCopy('footer.email')}
            </a>
          </div>
          <div className="flex items-center text-slate-gray text-md md:text-lg">
            <FaPhone className="mr-3 text-royal-purple" />
            <a
              href={`tel:${getCopy('footer.phone')}`}
              className="hover:text-black transition-colors"
            >
              {getCopy('footer.phone')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
