import React from "react";
const WordingSection = (): JSX.Element => {
  return (
    <section className="w-full md:w-2/5 md:max-w-135 text-white">
      <h1 className="text-center md:text-left text-3xl md:text-h1 font-bold leading-9 md:leading-14">
        Learn to code by
        <br />
        watching others
      </h1>
      <p className="text-center md:text-left text-base font-medium leading-7 my-8 pr-11">
        See how experienced developers solve problems in real-time. <br />
        Watching scripted tutorials is great, but understanding how developers
        think is invaluable.
      </p>
    </section>
  );
};

export default WordingSection;
