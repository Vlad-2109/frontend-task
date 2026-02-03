import { Link } from "react-router-dom";

import type { PaymentMethod } from "../../../types/payment";
import {
  AmericanExpressIcon,
  ApplePayIcon,
  InvoiceIcon,
  MasterCardIcon,
  ValuIcon,
  VisaIcon,
} from "../../../assets/icons/payments";

const PAYMENT_METHODS: PaymentMethod[] = [
  { icon: AmericanExpressIcon, alt: "American Express kartica" },
  { icon: ApplePayIcon, alt: "Apple Pay" },
  { icon: MasterCardIcon, alt: "MasterCard kartica" },
  { icon: InvoiceIcon, alt: "Plačilo po fakturi" },
  { icon: ValuIcon, alt: "Valu plačilo" },
  { icon: VisaIcon, alt: "Visa kartica" },
];

const PaymentMethods = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="uppercase font-bold text-sm font-(family-name:--font-anonymous) text-white dark:text-gray-300 text-center mr-5">
        Možnosti plačila
      </h3>
      <div className="flex flex-wrap max-w-[228px] md:max-w-[480px] w-full md:flex-nowrap gap-5 mx-auto mb-5">
        {PAYMENT_METHODS.map(({ icon, alt }) => (
          <img key={alt} src={icon} alt={alt} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row mx-auto text-sm font-(family-name:--font-anonymous) text-white font-normal gap-0 md:gap-4">
        <p>Copyright © Zabec.net d.o.o.</p>
        <p className="hidden md:block">·</p>
        <p className="text-center md:text-left">Član skupine ZGroup</p>
      </div>
      <div className="flex justify-center max-w-[350px] md:max-w-[800px] flex-wrap md:flex-nowrap mx-auto text-sm font-(family-name:--font-anonymous) text-white font-normal gap-0 md:gap-4">
        <Link to="#">Splošni pogoji</Link>
        <p className="ml-3 md:ml-0">·</p>
        <p className="order-first md:order-none w-full text-center md:w-auto md:text-left">
          Cene vključujejo DDV in so v EUR
        </p>
        <p className="hidden md:block ml-3 md:ml-0">·</p>
        <Link to="#" className="ml-3 md:ml-0">
          Piškotki
        </Link>
        <p className="ml-3 md:ml-0">·</p>
        <Link to="#" className="ml-3 md:ml-0">
          Pogoji nakupa
        </Link>
      </div>
    </div>
  );
};

export default PaymentMethods;
