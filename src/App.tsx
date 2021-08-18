import React from "react";
import WordingSection from "./components/WordingSection";
import FormSection from "./components/FormSection";

const App = (): JSX.Element => {
  const post = () => {
    const message = JSON.stringify({
      error: false,
      message: "Hello World",
    });

    window?.top?.postMessage(message, "*");
  };
  console.log(window.top);
  return (
    <div>
      <button className="bg-red-default p-6" onClick={() => post()}>
        Click
      </button>
    </div>
    // <div className="w-full min-h-screen bg-image bg-red-default px-6 py-20 md:py-0 flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-11">
    //   {/* <WordingSection />
    //   <FormSection /> */}
    // </div>
  );
};

export default App;
