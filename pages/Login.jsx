import Logo from "../assets/images/pain_kulture_logo.png";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm border border-white rounded-sm px-5 py-10">
          <div className="flex flex-col items-center">
            <img src={Logo} className="w-15 h-auto"></img>
            <h2 className="mt-4 text-3      xl sm:text-4xl font-bold text-center">
              Welcome Back
            </h2>{" "}
          </div>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="flex flex-col py-5 gap-1 text-sm">
              <label className="">Email</label>
              <input
                type="email"
                className="bg-white/10 text-white py-1 px-1 border rounded-sm"
                required
              ></input>
              <div className="flex flex-row justify-between">
                <label className="">Password</label>
                <a href="/" className="text-blue-400">
                  Forgot Password?
                </a>
              </div>
              <div className="flex flex-row border bg-white/10 rounded-sm w-full items-center py-1 px-1">
                <input
                  type={showPassword ? "text" : "password"}
                  className=" text-white w-full outline-0"
                  required
                ></input>
                <FaEye onClick={togglePasswordVisibility} />
              </div>
              <button className="bg-blue-400 border border-blue-50 rounded-sm">
                Login
              </button>
            </form>

            <div className="flex flex-row text-sm justify-center gap-1">
              <p> Don't have an account?</p>
              <a href="/Register" className="text-blue-400">
                Register Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
