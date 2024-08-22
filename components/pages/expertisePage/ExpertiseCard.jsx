import React from "react";

function ExpertiseCard({ divStyle, iconStyle, icon: Icon, headings, para }) {
  return (
    <div className={` px-6 py-8  border-b-2 ${divStyle} relative rounded-t-xl shadow-2xl my-20`}>
      <div className={`absolute -top-8 left-[40%] z-50`}>
        <Icon className={`text-7xl ${iconStyle}`} />
      </div>
      <div className="text-center">
        <h2 className="font-semibold text-lg my-4 uppercase">{headings}</h2>
        <p className="text-gray-500 text-sm font-light leading-7">{para}</p>
      </div>
    </div>
  );
}

export default ExpertiseCard;
