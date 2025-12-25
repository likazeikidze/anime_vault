import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#161921] flex justify-between items-center gap-2 flex-wrap sm:px-16 px-7 py-4">
      <p className="text-white font-bold">@2025 EpicAnimeVault</p>

      <Image
        src="/images/logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />

      <div className="flex items-center gap-5 sm:gap-6">
        <Image
          src="/icons/tiktok.svg"
          alt="Tiktok"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="/icons/instagram.svg"
          alt="Instagram"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="/icons/twitter.svg"
          alt="Twitter"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
