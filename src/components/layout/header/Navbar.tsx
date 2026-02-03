import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import underlineIcon from "../../../assets/icons/ui/hover-underline.png";
import type { NavigationLink } from "../../../types";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const isHomeOrBlog = (to: string) => {
    if (
      to === "/" &&
      (location.pathname === "/" || location.pathname.startsWith("/blog"))
    ) {
      return true;
    }
    return location.pathname === to;
  };
  const links: NavigationLink[] = [
    { name: "DOMENE", to: "/domains" },
    { name: "GOSTOVANJE", to: "/hosting" },
    { name: "WORDPRESS", to: "/wordpress" },
    { name: "SPLETNE TRGOVINE", to: "/onlinestores" },
    { name: "VPS GOSTOVANJE", to: "/vpshosting" },
    { name: "ZNANJE IN NOVOSTI", to: "/" },
  ];

  return (
    <ul className="w-full max-w-[906px] flex justify-between list-none font-(family-name:--font-montserrat) font-extrabold text-sm">
      {links.map((link, index) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="relative dark:text-gray-300">
          {() => {
            const isVisible = isHomeOrBlog(link.to) || hoveredIndex === index;
            return (
              <div
                className="relative flex flex-col items-center pb-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <span className="relative z-10">{link.name}</span>

                <img
                  src={underlineIcon}
                  alt="underline"
                  className={`absolute top-11 w-full h-1 object-contain transition-opacity duration-300
                    ${isVisible ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>
            );
          }}
        </NavLink>
      ))}
    </ul>
  );
};

export default Navbar;
