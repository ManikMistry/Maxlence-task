import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";

const CreatePost = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = () => {
    let updatedCategories = [...categories];
    console.log(categories)
    updatedCategories.push(category);
    setCategory("");
    setCategories(updatedCategories);
  };

  const deleteCategory = (i) => {
    let updatedCategories = [...categories];
    updatedCategories.splice(i);
    setCategories(updatedCategories);
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="px-6 md:px-[200px] mt-8">
          <h1 className=" font-bold md:text-2xl text-xl mt-8">Create a post</h1>
          <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
            <input
              className="px-4 py-4 outline-none"
              type="text"
              placeholder="Post Tiltle"
            />
            <input className="px-4" type="file" />
            <div className="flex flex-col">
              <div className="flex items-center space-x-4 md:space-x-8">
                <input
                  className="px- py-2 outline-none "
                  placeholder="Enter post category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <div
                  className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
                  onClick={addCategory}
                >
                  Add
                </div>
              </div>
              <div className=" flex px-4 mt-3">
                {categories?.map((e, i) => (
                  <div
                    className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md "
                    key={i}
                  >
                    <p>{e}</p>
                    <p
                      className=" text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                      onClick={deleteCategory(i)}
                    >
                      <ImCross />
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <textarea
              rows={15}
              cols={30}
              className=" px-4 py-2 outline-none"
              placeholder="Enter post description"
            />
            <button className="bg-black w-full md:w-[20%] mx-auto text-white px-4 py-2 md:text-lg">
              Create
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CreatePost;
