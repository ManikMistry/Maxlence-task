import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
    <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/login">Login</Link></h3>
    <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/register">Register</Link></h3>
    <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={"/profile/"}>Profile</Link></h3>
    <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/write">Write</Link></h3>
    <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={"/myblogs/"}>My blogs</Link></h3>
    <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>

    </div>
  )
}

export default Menu