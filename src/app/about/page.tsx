import Image from 'next/image';
import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';

export default function AboutPage() {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <PageHeader title={getCopy('whoWeAreSection.header')} />

      {/* Mission & Values Section */}
      <div className="w-full py-16 lg:py-24 bg-medical-sky/45">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-lora text-3xl lg:text-4xl font-bold text-ink mb-6 md:mb-14">
                  {getCopy('whoWeAreSection.missionTitle')}
                </h2>
                <p className="text-lg lg:text-xl text-muted-ink leading-relaxed sm:whitespace-pre-line">
                  {getCopy('whoWeAreSection.missionSubtitle')}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-end lg:justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="/people-chatting.png"
                  alt="Healthcare advisors in discussion"
                  width={400}
                  height={300}
                  className="w-full h-[320px] rounded-2xl object-cover border border-clinical-border shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alignment Question Section */}
      <div className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl text-muted-ink leading-loose">
                {getCopy('whoWeAreSection.alignmentQuestion')}
              </p>

              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-muted-ink leading-relaxed">
                  <span className="text-medical-blue font-semibold">
                    {getCopy('whoWeAreSection.companyName')}
                  </span>{' '}
                  {getCopy('whoWeAreSection.companyDescription')}{' '}
                  <span className="font-semibold text-ink">
                    {getCopy('whoWeAreSection.healthBenefits')}
                  </span>{' '}
                  <span className="sm:whitespace-pre-line">
                    {getCopy('whoWeAreSection.missionAlignment')}
                  </span>
                </p>
              </div>
            </div>

            {/* Right CTA */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center bg-medical-sky/45 border border-clinical-border rounded-2xl px-8 py-10 w-full max-w-sm">
                <Button variant="deepBlue" className="text-lg px-8 py-4">
                  {getCopy('whoWeAreSection.ctaButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
