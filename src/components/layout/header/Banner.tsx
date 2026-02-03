import { Link } from "react-router-dom";
import { CountdownTimer } from "./CountdownTimer";

const PROMOTION_END_DATE = new Date("2026-02-20T00:00:00");

const Banner = () => {
  return (
    <div className="h-10 flex px-4 pl-[37%] bg-[#6cb63f] font-(family-name:--font-anonymous) text-white">
      <div className="w-full max-w-[492px] h-10 flex items-center justify-between text-sm font-bold">
        <p className="flex items-center gap-2">
          Akcija domen .si še
          <CountdownTimer promotionEndDate={PROMOTION_END_DATE} />
        </p>
        <Link to="#">PREVERI ZDAJ!</Link>
      </div>
    </div>
  );
};

export default Banner;
