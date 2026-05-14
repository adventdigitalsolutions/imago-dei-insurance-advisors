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
  <footer className="text-white py-16 px-8" style={{ backgroundColor: '#2b4c9d' }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo Section */}
        <div className="flex flex-col">
          <div className="mb-8">
            <Image
              src="/logo_for_blue_bg.svg"
              alt="Imago Dei Insurance Advisors"
              width={200}
              height={134}
              className="h-auto"
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

        {/* Contact Form */}
        <div className="md:col-span-2">
          <h3 className="text-[0.82rem] font-semibold tracking-[0.18em] text-white/55 uppercase mb-6">
            Get in Touch
          </h3>
          <form
            action="https://formspree.io/f/mnjoeqqg"
            method="POST"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            <input
              type="text"
              name="Name"
              placeholder="Name"
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
            />
            <input
              type="text"
              name="Company"
              placeholder="Company"
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
            />
            <input
              type="text"
              name="Number of Employees"
              placeholder="Number of Employees"
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
            />
            <input
              type="text"
              name="State"
              placeholder="State"
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
            />
            <textarea
              name="Comments"
              placeholder="How can we help?"
              rows={3}
              className="sm:col-span-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 bg-medical-blue hover:bg-medical-blue/90 text-white font-semibold text-sm rounded-lg px-6 py-2.5 transition-colors"
            >
              Send Message
            </button>
          </form>
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
          <div className="flex items-center text-white/72 text-[1rem]">
            <div>
              Powered by{' '}
              <a
                href="https://adventds.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                AdventDS.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
