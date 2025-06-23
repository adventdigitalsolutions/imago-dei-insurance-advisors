import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen w-full mt-12 relative">
      <div className="relative">
        <Image
          src="/people-chatting.png"
          alt="People Chatting"
          width={800}
          height={400}
          className="w-full h-auto rounded mb-4 max-h-[700px] object-cover"
        />
        <div className="absolute inset-0 rounded bg-royal-purple/70 pointer-events-none pl-32 text-white">
          <div className="mt-20 lg:mt-52">
            <div className="text-[100px] font-montserrat font-bold">
              Imago Dei
            </div>
            <div className="font-extralight text-[60px] mt-[-20px]">
              Insurance Advisors
            </div>
          </div>
          <div className="mt-10 text-3xl max-w-md font-medium">
            <div className="underline inline">Christian values</div> in a
            benefits plan you can trust
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h1 className="text-3xl font-bold text-blue-500 mb-2">Imago Dei</h1>
          <p className="text-xl text-gray-700">Insurance Advisors</p>
        </div>
      </div>
    </div>
  );
}
