import { getCopy } from '@/getCopy';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image';

export const Footer = () => (
  <footer className="bg-gradient-to-br from-navy via-medical-navy to-dark-blue text-white py-16 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo Section */}
        <div className="flex flex-col">
          <div className="mb-8">
            <Image
              src="/imago-dei-logo.png"
              alt="Imago Dei Insurance Advisors"
              width={120}
              height={80}
              className="h-auto brightness-0 invert"
            />
          </div>
        </div>

        {/* Find us on social media */}
        <div>
          <h3 className="text-[0.82rem] font-semibold tracking-[0.18em] text-white/55 uppercase mb-6">
            {getCopy('footer.socialMediaHeader')}
          </h3>
          <div className="flex gap-4">
            <a
              target="_blank"
              href={getCopy('footer.linkedinUrl')}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              target="_blank"
              href={getCopy('footer.youtubeUrl')}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Subscribe to our YouTube channel"
            >
              <FaYoutube size={24} />
            </a>
            <a
              target="_blank"
              href={getCopy('footer.instagramUrl')}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              target="_blank"
              href={getCopy('footer.facebookUrl')}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-[0.82rem] font-semibold tracking-[0.18em] text-white/55 uppercase mb-6">
            {getCopy('footer.solutionsHeader')}
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/business-solutions"
                className="text-white/72 text-[1rem] hover:text-white transition-colors"
              >
                {getCopy('footer.businessSolutions')}
              </a>
            </li>
          </ul>
        </div>

        {/* Who we are */}
        <div>
          <h3 className="text-[0.82rem] font-semibold tracking-[0.18em] text-white/55 uppercase mb-6">
            {getCopy('footer.whoWeAreHeader')}
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/about"
                className="text-white/72 text-[1rem] hover:text-white transition-colors"
              >
                {getCopy('footer.about')}
              </a>
            </li>
            <li>
              <a
                href="/our-team"
                className="text-white/72 text-[1rem] hover:text-white transition-colors"
              >
                {getCopy('footer.ourTeam')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-16 pt-8 border-t border-white/15">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex items-center text-white/72 text-[1rem]">
            <FaEnvelope className="mr-3 text-white/80" />
            <a
              href={`mailto:${getCopy('footer.email')}`}
              className="hover:text-white transition-colors"
            >
              {getCopy('footer.email')}
            </a>
          </div>
          <div className="flex items-center text-white/72 text-[1rem]">
            <FaPhone className="mr-3 text-white/80" />
            <a
              href={`tel:${getCopy('footer.phone')}`}
              className="hover:text-white transition-colors"
            >
              {getCopy('footer.phone')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
