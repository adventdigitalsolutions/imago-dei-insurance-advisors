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

type FooterProps = {
  minimal?: boolean;
  disclaimer?: string;
};

export const Footer = ({ minimal = false, disclaimer }: FooterProps) => (
  <footer
    className="text-white py-10 px-8"
    style={{ backgroundColor: '#2b4c9d' }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[200px_auto_auto] md:justify-between gap-x-12 gap-y-8 items-start">
        {/* Logo Section */}
        <div className="h-[130px] w-[200px] overflow-hidden md:self-center">
          <Image
            src="/logo_for_blue_bg.svg"
            alt="Imago Dei Insurance Advisors"
            width={200}
            height={200}
            className="-mt-[34px] h-[200px] w-[200px] max-w-none"
          />
        </div>

        {!minimal && (
          <>
        {/* Find us on social media */}
        <div>
          <h3 className="text-[0.82rem] font-semibold tracking-[0.18em] text-white/55 uppercase mb-4">
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

        {/* Contact Form */}
        <div>
          <h3 className="text-[0.82rem] font-semibold tracking-[0.18em] text-white/55 uppercase mb-4">
            Get in Touch
          </h3>
          <p className="text-white/75 text-sm mb-4">
            Have a question? Our team is happy to help.
          </p>
          <a
            href="https://imagodei.fillout.com/t/4F1vNHJmbdus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#29418f] transition-colors hover:bg-white/90"
          >
            Contact Us
          </a>
          <p className="mt-3 text-white/70 text-sm">
            Read our{' '}
            <a href="/privacy-policy" className="underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </div>
          </>
        )}
        {minimal && disclaimer && (
          <p className="md:col-span-2 text-white/70 text-sm leading-relaxed self-center">
            {disclaimer}
          </p>
        )}
      </div>

      {/* Contact Information */}
      <div className={`${minimal ? 'mt-6' : 'mt-8'} pt-6 border-t border-white/15`}>
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
          <div className="flex items-center text-white/72 text-[1rem]">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center text-white/72 text-[1rem]">
            <div>
              Powered by{' '}
              <a
                href="https://adventds.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                adventds.org
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-white/70 text-sm">
        Insurance services provided by David Hemm, Licensed Insurance Agent.
      </p>
    </div>
  </footer>
);
