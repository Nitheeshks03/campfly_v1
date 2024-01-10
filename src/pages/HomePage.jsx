import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute cover w-full top-0 left-0 z-10">
        <img src="/images/carousel_1.png" alt="carousel-1" />
      </div>
    </div>
  );
}

export default HomePage;
