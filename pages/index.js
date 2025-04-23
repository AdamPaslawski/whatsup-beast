import Image from 'next/image'
import serverImage from '/public/ChatGPT Image Apr 23, 2025, 06_55_04 PM.png' // update path if needed

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">System Down</h1>
        
        <div className="mb-4">
          <Image
            src={serverImage}
            alt="A server being bribed with cookies"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>

        <p className="text-lg text-gray-600">
          Our servers chose chaos today. We are bribing them with cookies to behave again. <br />
          Back in a jiffy!
        </p>
      </div>
    </div>
  );
}
