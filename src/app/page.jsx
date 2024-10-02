import WeSpeakLogo from '@/app/ui/we-speak-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="flex shrink-0 pl-40 rounded-lg bg-white h-[61px]">
        <WeSpeakLogo />
      </div>
      <div className="flex grow flex-col md:flex-row bg-customBackground">
        <div className="flex flex-col justify-center gap-6 rounded-lg md:w-2/5 md:pl-40">
        <p className={`text-xl text-gray-800 md:text-5xl md:leading-normal`}>
            <strong>Bienvenido a WeCount.</strong> Challenge técnico para {' '}
            <a href="https://www.wespeak.pro/" className="text-customPurple">
              WeSpeak
            </a>
          </p>
          <Link
            href="/counter"
            className="flex items-center gap-5 self-start rounded-lg bg-customPurple px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-300 md:text-base"
          >
            <span>Comenzar</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center md:w-3/5 md:pr-40">
          <Image
            src="/design.webp"
            width={1000}
            height={700}
            className="hidden md:block"
            alt="Design"
            />
        </div>
      </div>
    </main>
  );
}
