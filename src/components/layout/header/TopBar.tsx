import { Link } from "react-router-dom";
import CartIcon from "../../../assets/icons/ui/cart.svg";
import NetworkStatusIcon from "../../../assets/icons/ui/network-status.svg";
import UserIcon from "../../../assets/icons/ui/user.svg";
import { useTheme } from "../../../hooks/useTheme";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex justify-between items-center text-[14px] font-(family-name:--font-anonymous) font-bold bg-white dark:bg-[#6B7A90] text-black dark:text-gray-300 py-2">
      <div className="flex flex-col">
        <p className="text-[12px]">Non-stop 24/7</p>
        <address className="not-italic">
          <a href="mailto:podpora@zabec.net">podpora@zabec.net</a>
        </address>
      </div>

      <div className="flex flex-col">
        <p className="text-[12px]">Delovniki 8:00-20:00</p>
        <address className="not-italic">
          <a href="tel:040333666">040 333 666</a>
        </address>
      </div>

      <div className="w-[139px] flex items-center gap-2">
        <img src={NetworkStatusIcon} alt="Stanje omrežja" className="w-4 h-4" />
        <span>Stanje omrežja</span>
      </div>

      <Link to="#" className="w-[101px] flex justify-between items-center">
        <img
          src={UserIcon}
          alt="Moj Žabec"
          className="w-4 h-4 brightness-0 dark:invert"
        />
        <span>Moj Žabec</span>
      </Link>

      <Link to="#" className="w-[94px] flex justify-between items-center">
        <img
          src={CartIcon}
          alt="Košarica"
          className="w-4 h-4 brightness-0 dark:invert"
        />
        <span>Košarica</span>
      </Link>

      <Link to="#" type="button">
        EN
      </Link>

      <button
        type="button"
        onClick={toggleTheme}
        className="w-[110px] cursor-pointer">
        {theme === "light" ? "Nočni način" : "Svetel način"}
      </button>
    </div>
  );
};

export default TopBar;
