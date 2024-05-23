import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className=" flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">
            <span>M</span>axlence <span>B</span>log
          </Link>
        </h1>
        <h3>
          <Link to="/login">Log in</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Sign Up</h1>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter username"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter email"
          />
          <input
            type="password"
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter Password"
          />
          <button className=" w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">
            Sign Up
          </button>
          <div className=" flex flex-col justify-center items-center space-x-4">
            <p> Already have an account?</p>
            <p className=" text-gray-500 hover:text-black">
              <Link to="/login">Go to Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
