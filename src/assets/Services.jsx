import React from "react";
import Delivery from "./icons/delivery";
import ReturnLogo from "./icons/returnLogo";
import RefundLogo from "./icons/refundLogo";
import WorldLogo from "./icons/worldLogo";

export default function Services() {
  const allServices = [
    {
      title: "Free shipping",
      description: "On orders over $50.00",
      logo: <Delivery />,
    },
    {
      title: "Very easy to return",
      description: "Just phone number",
      logo: <ReturnLogo />,
    },
    {
      title: "Worldwide delivery",
      description: "Fast delivery worldwide",
      logo: <WorldLogo />,
    },
    {
      title: "Refunds policy",
      description: "60 days return for any reason",
      logo: <RefundLogo />,
    },
  ];

  const [service, setService] = React.useState([]);

  React.useEffect(() => {
    setService(
      allServices.map((item) => {
        return (
          <div className="flex gap-4 items-center">
            <span>{item.logo}</span>
            <div className="flex flex-col gap-[2px]">
              <span className="font-semibold text-lg text-primary">
                {item.title}
              </span>
              <span>{item.description}</span>
            </div>
          </div>
        );
      })
    );
  }, []);

  return (
    <>
      <section class="lg:flex justify-between my-[52px] border grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-0 border-[#d2d4d8] rounded-2xl py-6 px-10">
        {service}
      </section>
    </>
  );
}
