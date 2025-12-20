import { MdAlternateEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const HandleNewsletter = async (e) => {
    e.preventDefault();
    console.log("Here ", email);
  };

  return (
    <section className="py-12 bg-gray-930 ">
      <div
        className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 px-4 sm:px-50 lg:px-50
"
      >
        {/* LEFT — Text + Form */}
        <div className="w[75%] lg:w-2/3">
          <h1 className="text-2xl md:text-2xl font-bold text-white">
            Sign up for our newsletter
          </h1>
          <p className="italic emphasis text-xs">
            Get exclusive promotions and offers to your email!
          </p>

          <form
            className="mt-5 sm:flex sm:max-w-md"
            onSubmit={HandleNewsletter}
          >
            <input
              className="block w-full px-5 py-2 outline-none border rounded bg-[#121212] text-white border-gray-600 focus:border-white focus:ring-1 focus:ring-white"
              type="email"
              placeholder="Your e-mail"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="w-full sm:w-auto sm:ml-4 mt-3 sm:mt-0 px-2 py-1 rounded font-medium text-white bg-blue-600 hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* RIGHT — Icons */}
        <div className="flex gap-5 text-white text-4xl">
          <a
            href="https://www.instagram.com/painkultureldn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            <IoLogoInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@painkultureldn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            <AiFillTikTok />
          </a>

          <a
            href="mailto:contact@painkulture.com?subject=PainKulture%20Inquiry&body=Hi%20PainKulture%20Team,"
            className="hover:text-gray-500 transition"
          >
            <MdAlternateEmail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
