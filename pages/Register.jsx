import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Logo from "../assets/images/pain_kulture_logo.png";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Register() {
  const { session, signUpNewUser } = UserAuth();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => setShowPassword1(!showPassword1);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();

  const HandleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password)
    ) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        console.log("User registered successfully:", result.data);
        navigate("/");
      }
    } catch (err) {
      console.error("Registration failed:", result.error);
    } finally {
      console.log("Registration process completed.");
    }

    console.log("Success");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-6">
        <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm border border-white rounded-sm px-5 py-10">
          <div className="flex flex-col items-center">
            <img src={Logo} className="w-15 h-auto"></img>
            <h2 className="mt-4 text-3      xl sm:text-4xl font-bold text-center">
              Register
            </h2>{" "}
          </div>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="flex flex-col py-5 gap-1 text-sm"
              onSubmit={HandleRegister}
            >
              <label className="">Email</label>
              <input
                type="email"
                className="bg-white/10 text-white py-1 px-1 border rounded-sm"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <label className="">Password</label>
              <div className="flex flex-row border bg-white/10 rounded-sm w-full items-center py-1 px-1">
                <input
                  type={showPassword ? "text" : "password"}
                  className=" text-white w-full outline-0"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <FaEye onClick={togglePasswordVisibility} />
              </div>

              <label className="">Confirm Password</label>
              <div className="flex flex-row border bg-white/10 rounded-sm w-full items-center py-1 px-1">
                <input
                  type={showPassword1 ? "text" : "password"}
                  className=" text-white w-full outline-0"
                  required
                  onChange={(e) => setconfirmPassword(e.target.value)}
                ></input>
                <FaEye onClick={togglePasswordVisibility1} />
              </div>

              <button className="bg-blue-400 border border-blue-50 rounded-sm  ">
                Register
              </button>
            </form>

            <div className="flex flex-row text-sm justify-center gap-1">
              <p> Already have an account?</p>
              <a href="/Login" className="text-blue-400">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
