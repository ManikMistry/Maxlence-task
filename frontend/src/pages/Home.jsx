import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" px-8 md:px-[200px]">
        {[1, 1, 1, 1, 1].map((i, index) => (
          <HomePost key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
