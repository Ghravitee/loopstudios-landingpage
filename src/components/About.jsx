import mobileInteractive from "../images/mobile/image-interactive.jpg";
import desktopInteractive from "../images/desktop/image-interactive.jpg";

const About = () => {
  return (
    <section className="bg-white px-6 py-12 lg:py-20 lg:max-w-[75rem] mx-auto sm:max-w-[40rem] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:relative">
        <img
          src={mobileInteractive}
          alt="A person using virtual reality"
          className="md:hidden block"
        />
        <img
          src={desktopInteractive}
          alt="A person using virtual reality"
          className="hidden md:block "
        />
        <div className="bg-white p-4 lg:pl-[4.5rem] lg:pr-[3rem] py-6 lg:py-20 lg:w-[50%] flex justify-center items-center flex-col gap-4 lg:absolute -bottom-20 right-32">
          <h2 className="uppercase josefin-sans-300 text-black text-[2rem] text-center lg:text-left leading-[1] sm:text-[2.3rem] md:text-[2.5rem] lg:text-[2.7rem]">
            The leader in interactive VR
          </h2>
          <p className="text-Dark-Gray text-center lg:text-left alata-regular max-w-[30rem]">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
