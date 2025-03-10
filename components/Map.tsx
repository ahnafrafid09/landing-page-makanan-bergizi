import React from "react";

const Map = () => {
  const position = "-6.174328281879584, 106.8276752961911";
  return (
    <section className="w-full h-[500px]">
      <iframe
        className="w-full h-full"
        src={`https://www.google.com/maps?q=${position}&output=embed`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
