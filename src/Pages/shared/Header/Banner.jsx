import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="bg-purple-400">
      <div className="xl:h-[70vh] flex items-center justify-center">
        <div className="w-10/12 mx-auto hero-content flex-col justify-evenly lg:flex-row-reverse">
          <img
           data-aos="zoom-in"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
            src="rabbi.png"
            className="w-xs md:max-w-full bg-black rounded-xl bg-opacity-20"
          />
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-5xl font-bold">Hi, I am Rabbi</h1>
            <p className="py-6 text-xl">
              I am a <span className="text-blue-900">Web Developer</span> and{" "}
              <span className="text-red-800">Video Editor</span>
            </p>
            <a href="Fazle.pdf" download="Fazle Resume">
              <button className="btn btn-primary">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
