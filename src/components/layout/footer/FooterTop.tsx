import FacebookIcon from "../../../assets/icons/social/facebook.png";
import LinkedinIcon from "../../../assets/icons/social/linkedin.png";
import TwitterIcon from "../../../assets/icons/social/twitter.png";
import Location from "../../../assets/icons/ui/location.svg";
import NetworkStatus from "../../../assets/icons/ui/network-status.svg";
import ShieldStandard from "../../../assets/icons/ui/shield-standard.svg";
import Tap from "../../../assets/icons/ui/tap.svg";
import Logo from "../../../assets/images/logo.png";
import type { FooterFeature, SocialLink } from "../../../types";

const FOOTER_FEATURES: FooterFeature[] = [
  {
    icon: ShieldStandard,
    alt: "Najvišji standardi varnosti",
    text: "Najvišji standardi varnosti",
  },
  { icon: Tap, alt: "Zadovoljni uporabniki", text: "Zadovoljni uporabniki" },
  {
    icon: Location,
    alt: "Slovenski ponudnik gostovanja",
    text: "Slovenski ponudnik gostovanja",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: FacebookIcon, alt: "Facebook", href: "#" },
  { icon: TwitterIcon, alt: "Twitter", href: "#" },
  {
    icon: LinkedinIcon,
    alt: "LinkedIn",
    href: "#",
  },
];

const FooterTop = () => {
  return (
    <div className="bg-[#ECF3ED] py-20 dark:bg-[#6B7A90] dark:text-gray-300">
      <div className="flex flex-col w-full max-w-[1216px] mx-auto gap-10 md:gap-20 px-15 xl:px-0">
        <div className="flex w-full flex-col md:flex-row gap-10 lg:gap-18 xl:gap-35">
          <img
            src={Logo}
            alt="Žabec Company Logo"
            className="w-[88px] h-[88px] mx-auto md:mx-0"
          />
          {FOOTER_FEATURES.map((feature) => (
            <div key={feature.alt} className="flex flex-col items-center gap-4">
              <img
                src={feature.icon}
                alt={feature.alt}
                className="w-[80px] h-[80px]"
              />
              <p className="text-sm font-(family-name:--font-anonymous) font-bold">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse lg:flex-row md:flex-row w-full gap-10 lg:gap-10 xl:gap-15">
          <div className="flex gap-10 lg:gap-5 xl:gap-5 self-center">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-8 h-8 brightness-0 dark:invert"
                />
              </a>
            ))}
          </div>
          <div className="lg:w-[200px] xl:w-[270px] flex flex-col items-center gap-4 text-sm font-(family-name:--font-anonymous)">
            <p className="uppercase font-bold">Telefonska podpora</p>
            <div className="flex flex-col items-center">
              <address className="uppercase font-normal">
                01 / <a href="tel:6001050">600 10 50</a>
              </address>
              <p className="font-normal">Delovniki: 8:00-20:00</p>
            </div>
          </div>
          <div className="lg:w-[200px] xl:w-[270px] flex flex-col items-center gap-4 text-sm font-(family-name:--font-anonymous)">
            <p className="uppercase font-bold">TPodpora po e-pošti</p>
            <address className="flex flex-col items-center">
              <a href="mailto:info@zabec.net" className="font-normal underline">
                info@zabec.net
              </a>
              <p className="font-normal">Non-stop 24/7</p>
            </address>
          </div>
          <div className="lg:w-[200px] xl:w-[270px] flex flex-col items-center gap-4">
            <p className="uppercase text-[14px] font-(family-name:--font-anonymous) font-bold">
              Stanje omrežja
            </p>
            <img src={NetworkStatus} alt="Stanje omrežja" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
