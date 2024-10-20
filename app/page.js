"use client"
// import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
 
  return (
    <div
      // className="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
      // data-hs-theme-click-value="dark"
      className="md:container"
    >
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 text-transparent bg-clip-text">
        {" "}
        <Typewriter
          options={{
            strings: ["Frontend developer", "Backend developer", "Teach Enthuastic" ,"Ai Intrested"],
            autoStart: true,
            loop: true,
            cursorClassName:'text-orange',
            cursor: "|",
            deleteSpeed:100	 
          }}
        />
      </h1>
    </div>
  );
}
