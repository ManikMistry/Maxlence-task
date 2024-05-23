import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            veritatis!
          </h1>
          <div className=" flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@manik mistry</p>
          <div className="flex space-x-2">
            <p>15/01/2023</p>
            <p>16:65</p>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXxPiNMwTaPCIVobBSbMn_a79aoQDC97QSGwibSFjsOX_sE4aI2tZREveNtMnLgS0-1U"
          className="w-full mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo
          vitae nam dicta accusantium consectetur beatae corporis maxime sequi
          corrupti eos, rem placeat maiores numquam a consequatur impedit magnam
          voluptas quam modi fugit culpa provident veniam. Consectetur atque
          explicabo harum ut dicta, non exercitationem deleniti minus,
          voluptate, adipisci quis neque?
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gary-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gary-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className=" mt-6 mb-4">Comments:</h3>
          {[1, 1, 1].map((i, index) => (
            <div className="px-2 py-2 bg-gray-200 rounded-lg my-2" key={index}>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@arunpratik</h3>
                <div className="flex justify-center items-center space-x-4 ">
                  <p className="text-gray-500 text-sm">15/01/2023</p>
                  <p className="text-gray-500 text-sm">16:65</p>
                  <div className=" flex items-center justify-center space-x-2">
                    <p>
                      <BiEdit />
                    </p>
                    <p>
                      <MdDelete />
                    </p>
                  </div>
                </div>
              </div>
              <p className="px-2 mt-2">Nice info.</p>
            </div>
          ))}
        </div>
          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input className="md:w-[90%] w-full outline-none px-4 mt-4 md:mt-0 pb-2 border-b-2" type="text" placeholder="write a comment"/>
            <button className="bg-black text-white px-3 py-2 md:w-[20%] mt-4 md:mt-0 rounded-sm">Add Comment</button>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
