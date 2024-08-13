const Creations = () => {
    const creations = [
      { id: 1, name: "Deep Earth", mobileBg: "bg-earth-mobile", desktopBg: "lg:bg-earth-desktop", darkBackground: true },
      { id: 2, name: "Night Arcade", mobileBg: "bg-arcade-mobile", desktopBg: "lg:bg-arcade-desktop", darkBackground: false },
      { id: 3, name: "Soccer Team VR", mobileBg: "bg-soccer-mobile", desktopBg: "lg:bg-soccer-desktop", darkBackground: false },
      { id: 4, name: "The Grid", mobileBg: "bg-grid-mobile", desktopBg: "lg:bg-grid-desktop", darkBackground: false },
      { id: 5, name: "From Up Above VR", mobileBg: "bg-above-mobile", desktopBg: "lg:bg-above-desktop", darkBackground: true },
      { id: 6, name: "Pocket Borealis", mobileBg: "bg-pocket-mobile", desktopBg: "lg:bg-pocket-desktop", darkBackground: true },
      { id: 7, name: "The Curiosity", mobileBg: "bg-curiosity-mobile", desktopBg: "lg:bg-curiosity-desktop", darkBackground: false },
      { id: 8, name: "Make it Fisheye", mobileBg: "bg-fisheye-mobile", desktopBg: "lg:bg-fisheye-desktop", darkBackground: false },
    ];
  
    // eslint-disable-next-line react/prop-types
    const CreationItem = ({ name, mobileBg, desktopBg, darkBackground }) => (
      <div className={`${mobileBg} ${desktopBg} group bg-no-repeat bg-cover flex justify-start items-end pl-6 pt-10 pb-4 sm:pl-10 sm:pt-16 lg:pt-[22rem] lg:pb-8`}>
        <h3 className={`text-white josefin-sans-300 text-2xl uppercase max-w-[7rem] leading-[1] ${darkBackground ? "group-hover:text-white" : "group-hover:text-black"}`}>
          {name}
        </h3>
      </div>
    );
  
    return (
      <section className="bg-white px-6 py-12 lg:py-20 lg:max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-row-2 gap-4 lg:gap-10">
          <h2 className="uppercase josefin-sans-300 text-center text-[2rem] lg:col-start-1 lg:col-end-2 lg:justify-self-start">
            our creations
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:max-w-[30rem] mx-auto md:max-w-none w-full lg:row-start-2 row-end-3 lg:col-start-1 lg:col-end-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {creations.slice(0, 4).map((creation) => (
                <CreationItem key={creation.id} {...creation} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {creations.slice(4, 8).map((creation) => (
                <CreationItem key={creation.id} {...creation} />
              ))}
            </div>
          </div>
          <button className="hover:bg-black hover:text-white lg:justify-self-end lg:col-start-3 lg:col-end-4 text-black border border-black flex justify-center items-center px-4 py-2 uppercase mx-auto lg:mx-0 w-[50%] sm:w-[30%] lg:w-[50%]">
            see all
          </button>
        </div>
      </section>
    );
  };
  
  export default Creations;
  