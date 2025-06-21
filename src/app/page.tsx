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
          className="w-full h-auto rounded mb-4 max-h-4xl"
        />
        <div className="absolute inset-0 rounded bg-royal-purple/50 pointer-events-none" />
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
