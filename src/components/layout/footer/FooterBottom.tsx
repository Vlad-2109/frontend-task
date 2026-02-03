import { Link } from "react-router-dom";
import ArrowTop from "../../../assets/icons/ui/arrow-top.png";
import LineFooter from "../../../assets/icons/ui/line-footer.png";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import type { FooterSection } from "../../../types";
import PaymentMethods from "./PaymentMethods";

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Storitve",
    links: [
      { name: "Domene", to: "#" },
      { name: "Gostovanje", to: "#" },
      { name: "E-mail", to: "#" },
      { name: "Spletne trgovine", to: "#" },
      { name: "Wordpress", to: "#" },
      { name: "VPS gostovanje", to: "#" },
    ],
  },
  {
    title: "Sodelovanje",
    links: [
      { name: "Partnerstvo in sodelovanje", to: "#" },
      { name: "Parterski program za prodajo domen", to: "#" },
      { name: "Zaposlimo", to: "#" },
    ],
  },
  {
    title: "Strežniško okolje",
    links: [
      { name: "Podatkovni centri", to: "#" },
      { name: "Kapacitete in strežniki", to: "#" },
      { name: "Zakaj Zabec?", to: "#" },
    ],
  },
  {
    title: "Podjetje",
    links: [
      { name: "Vizitka", to: "#" },
      { name: "Lokacija", to: "#" },
    ],
  },
  {
    title: "Žabji sorodniki",
    links: [
      { name: "SPRD.digital", to: "#" },
      { name: "DAT-IT", to: "#" },
      { name: "resentia", to: "#" },
      { name: "WooNinja", to: "#" },
    ],
  },
];

const FooterBottom = () => {
  const scrollToTop = useScrollToTop();

  return (
    <div className="bg-[#002A00] py-10 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row w-full max-w-[1216px] mx-auto gap-15 md:gap-10 lg:gap-15 xl:gap-20 font-normal text-sm font-(family-name:--font-anonymous) text-white dark:text-gray-300 pl-10 xl:pl-0">
        {FOOTER_SECTIONS.map((section) => (
          <nav key={section.title} aria-labelledby={`footer-${section.title}`} className="flex flex-col gap-2">
            <h3 id={`footer-${section.title}`} className="uppercase font-bold">{section.title}</h3>
            {section.links.map((link) => (
              <Link key={link.name} to={link.to}>
                {link.name}
              </Link>
            ))}
          </nav>
        ))}

        <div
          className="flex flex-col gap-3 cursor-pointer self-end md:self-auto"
          onClick={scrollToTop}>
          <img src={ArrowTop} alt="Na vrh" className="w-10 h-10" />
          <p className="underline w-[72px]">Na vrh</p>
        </div>
      </div>
      <img
        src={LineFooter}
        alt="Line"
        className="w-full max-w-[80%] mx-auto my-7"
      />
      <PaymentMethods />
    </div>
  );
};

export default FooterBottom;
