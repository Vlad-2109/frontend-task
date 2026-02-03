import Logo from "../../../assets/images/logo.png";
import Banner from "./Banner";
import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <>
      <header className="hidden lg:block dark:bg-[#6B7A90]">
        <Banner />
        <div className=" mx-auto py-5 flex lg:gap-10 xl:gap-25 lg:max-w-[950px] xl:max-w-[1216px] items-center">
          <img
            src={Logo}
            alt="Žabec Company Logo"
            className="w-[88px] h-[88px]"
          />
          <nav className="flex-1 max-w-[955px] h-[88px] flex flex-col justify-between">
            <TopBar />
            <Navbar />
          </nav>
        </div>
      </header>
      <HamburgerMenu />
    </>
  );
};

export default Header;
