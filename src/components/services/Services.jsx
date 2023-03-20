import React from "react";
import { MdOutlineLocalShipping, MdAddCall } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";

const card_items = [
  {
    title: "Free Shipping",
    desc: "Deliver all over the country",
    icon: (
      <MdOutlineLocalShipping className="bg-black text-white rounded-full text-5xl mr-2 p-1" />
    ),
    bg : "bg-green-100"
  },
  {
    title: "Secured Payment",
    desc: "secure payment options ",
    icon: (
      <RiSecurePaymentFill className="bg-black text-white rounded-full text-5xl mr-2 p-1" />
    ),
    bg : "bg-red-100"
  },
  {
    title: "Easy Retrun ",
    desc: "30-Day return policy",
    icon: (
      <BsFillBoxFill className="bg-black text-white rounded-full text-5xl mr-2 p-1" />
    ),
    bg : "bg-yellow-100"
  },
  {
    title: "Support",
    desc: "On demand support",
    icon: (
      <MdAddCall className="bg-black text-white rounded-full text-5xl mr-2 p-1" />
    ),
    bg : "bg-pink-100"
  },
];

const Services = () => {
  return (
    <div className="flex justify-center items-center my-20 gap-2">
      {card_items.map((item, index) => {
        return (
          <div className={`flex justify-center items-center rounded p-8 w-[20%] ${item.bg}`}>
            <div>{item.icon}</div>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="font-thin text-sm">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
