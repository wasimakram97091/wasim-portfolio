import React from "react";

function PageHeading({ upperHeading, dawnHeading }) {
  return (
    <div className="mt-10 mb-5">
      <h2 className="text-sm sm:text-base text-gray-400 font-light my-3">{upperHeading}</h2>
      <h1 className=" text-xl sm:text-2xl font-serif my-3 ">{dawnHeading}</h1>
    </div>
  );
}

export default PageHeading;
