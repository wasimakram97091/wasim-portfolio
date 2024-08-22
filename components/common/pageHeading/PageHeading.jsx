import React from "react";

function PageHeading({ upperHeading, dawnHeading }) {
  return (
    <div className="my-10">
      <h2 className="text-sm text-gray-400 font-light my-3">{upperHeading}</h2>
      <h1 className=" text-xl font-serif my-3 ">{dawnHeading}</h1>
    </div>
  );
}

export default PageHeading;
