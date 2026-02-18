import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div className={"py-12 px-4 sm:py-20 w-full text-center relative"}>
      <h1 className="text-6xl lg:text-7xl tracking-tighter mb-10 font-bold ">
        Projects
      </h1>

      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          Created with technologies i use everyday for software development.
        </p>
      )}
    </div>
  );
}

export default Heading;
