import Logo from "../assets/images/pain_kulture_logo.png";
import Card from "./Card";

function Hero() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center px-6 -mt-20">
        <img className="max-h-[80vh]" src={Logo}></img>
      </section>

      <section className=" flex flex-col items-center justify-center px-6 gap-20">
        <h1 className="text-3xl text-center sm:text-6xl">
          CHECK OUT OUR PRODUCTS
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <Card />
          <Card />
          <Card />
        </div>
        <button
          type="button"
          className="text-white bg-dark box-border border border-white rounded 
          hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs 
          font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition duration-300 hover:scale-105"
        >
          SHOP NOW
        </button>
      </section>
    </>
  );
}

export default Hero;
