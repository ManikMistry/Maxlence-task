const ProfilePosts = () => {
  return (
    <div className=" w-full flex mt-8 space-x-5 border p-3 rounded-sm">
    {/* left */}
    <div className=" w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXxPiNMwTaPCIVobBSbMn_a79aoQDC97QSGwibSFjsOX_sE4aI2tZREveNtMnLgS0-1U" alt="" className=" h-full w-full object-cover"/>
    </div>
    {/* Right */}
    <div className="flex flex-col w-[65%]">
    <h1 className=" text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
    </h1>
    <div className=" flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
        <p>@manik mistry</p>
        <div className="flex space-x-2">
            <p>15/01/2023</p>
            <p>16:65</p>
        </div>
    </div>
    <p className="text-sm md:text-lg ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam inventore quos eos repellat sunt expedita Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quidem autem et nulla, molestias accusantium eos! Perferendis sapiente eius consectetur.</p>
    </div>
</div>
  )
}

export default ProfilePosts