import Logo from "../assets/images/pain_kulture_logo.png";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate("/");
      }
    } catch (err) {
      console.error("An error occurred during login:", err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-6">
        <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm border border-white rounded-sm px-5 py-10">
          <div className="flex flex-col items-center">
            <img src={Logo} className="w-15 h-auto"></img>
            <h2 className="mt-4 text-3      xl sm:text-4xl font-bold text-center">
              Welcome Back
            </h2>{" "}
          </div>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="flex flex-col py-5 gap-1 text-sm"
              onSubmit={HandleLogin}
            >
              <label className="">Email</label>
              <input
                type="email"
                className="bg-white/10 text-white py-1 px-1 border rounded-sm"
                required
                onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
