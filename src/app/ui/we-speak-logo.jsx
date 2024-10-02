import Image from 'next/image';

export default function WeSpeakLogo() {
  return (
    <div
      className={`flex flex-row items-center`}
    >
      <Image src="/logo.webp" width={44} height={37} alt="We Speak Logo" />
      <Image src="/we.speak.webp" width={125} height={23} alt="We Speak Logo" />
    </div>
  );
}
