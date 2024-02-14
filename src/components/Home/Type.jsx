import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Assalomu alaykum  Bugun biz sizlar bilan Zahiriddin Muhammad Boburning hayoti va ijodi haqida tanishib chiqamiz",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
