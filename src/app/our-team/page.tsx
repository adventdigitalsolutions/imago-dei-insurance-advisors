import { PageHeader } from '@/components/page-header';
import { getCopy } from '@/getCopy';
import Image from 'next/image';

export default function OurTeamPage() {
  const teamMembers = getCopy('ourTeamPage.teamMembers');

  return (
    <div className="mt-24">
      {/* Hero Section */}
      <PageHeader title={getCopy('ourTeamPage.title')} />

      {/* Team Members Section */}
      <div className="bg-medical-sky/45">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex gap-6 flex-col sm:flex-row">
          {Object.entries(teamMembers).map(([key, member]) => {
            const { name, bio, headshot } = member as unknown as {
              name: string;
              bio: string;
              headshot: string;
            };

            return (
              <div
                key={key}
                className="mb-8 w-full sm:w-1/2 p-10 bg-white rounded-2xl h-fit text-center border border-clinical-border shadow-sm"
              >
                <div className="w-full">
                  <Image
                    src={headshot}
                    alt={`${name} headshot`}
                    width={160}
                    height={160}
                    className="rounded-full mt-2 object-cover mx-auto border border-clinical-border"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-lora text-2xl text-medical-navy font-semibold mt-8">
                    {name}
                  </h3>
                  <p className="text-muted-ink mb-4 mt-4 leading-relaxed">
                    {bio.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < bio.split('\n').length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
