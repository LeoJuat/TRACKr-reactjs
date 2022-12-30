import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import MainHeader from "./MainHeader";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Landing = () => {
  return (
    <>
      <div className="flex sm:block">
        <MainHeader />
        <section className="h-full bg-center bg-cover md:fixed md:w-1/2 px-14 gradientGray xl:py-36 md:py-60 md:px-10 lg:py-60 sm:static sm:w-full sm:py-80 mobileL:py-72 mobileM:py-72">
          <div className="lg:mt-0 xl:mt-24">
            <p className="text-gray-400 font-[Caveat] xl:text-4xl lg:text-2xl md:text-3xl sm:text-3xl mobileL:text-3xl mobileM:text-3xl">
              01
            </p>
            <h1 className="mt-2 font-sans font-bold text-green-500 xl:text-5xl lg:text-3xl md:text-lg mobileL:text-2xl mobileM:text-2xl">
              Welcome to TRACKr!
            </h1>
            <p className="mt-4 font-semibold text-white md:leading-5 xl:mb-10 xl:text-lg lg:mb-5 lg:text-base md:text-base md:mb-5 sm:mb-8 mobileL:mb-8 mobileM:mb-8">
              TRACKr is a fitness site to help track everything from workouts to
              calories. Our goal is to help you track your progression in AND
              out of the gym! Track your calories, macros, and your progression
              every day, all in one place!
            </p>
            <Link
              to="/sign-up"
              className="font-semibold text-white transition-all duration-300 translate-y-20 border-2 border-green-500 rounded-md xl:px-8 xl:py-4 xl:text-base lg:px-4 lg:py-2 lg:text-sm md:text-sm md:px-2 md:py-2 hover:bg-green-500 sm:px-2 sm:py-2 mobileL:px-2 mobileL:py-2 mobileM:px-2 mobileM:py-2"
            >
              Join now!
            </Link>
          </div>
        </section>
      </div>
      <section className="md:grid md:grid-cols-2 sm:block">
        <Swiper
          className="w-full h-screen right"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={true}
        >
          <SwiperSlide>
            <img
              className="w-full h-full"
              src={require("../../imgs/proteinShake.webp")}
              alt="girl with protein shake"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full"
              src={require("../../imgs/ladder.webp")}
              alt="guy running ladder drills"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full"
              src={require("../../imgs/dumbellPull.webp")}
              alt="guy working out with ropes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full"
              src={require("../../imgs/girlRopes.webp")}
              alt="girl with workout ropes"
            />
          </SwiperSlide>
        </Swiper>

        <div className="w-full h-full py-40 bg-cover px-14 right scrollRope">
          <div className="mb-32">
            <p className="text-gray-400 font-[Caveat] sm:text-4xl mobileL:text-4xl sm:text-end mobileL:text-start mobileM:text-4xl">
              02
            </p>
            <h1 className="mt-2 font-sans font-bold text-green-500 sm:text-end mobileL:text-start mobileM:text-4xl mobileL:text-5xl md:text-3xl">
              Track your workouts
            </h1>
            <p className="mt-4 mb-10 text-lg font-semibold text-white">
              With TRACKr you can choose daily workout plans. You can record the
              number of sets, reps, and weight of your workouts. Track your
              progression to ensure you are pushing your limits every day.
            </p>
          </div>
          <p className="text-gray-400 font-[Caveat] text-4xl">03</p>
          <h1 className="mt-2 font-sans font-bold text-green-500 mobileM:text-4xl mobileL:text-5xl md:text-3xl">
            Eat healthy
          </h1>
          <p className="mt-4 mb-10 text-lg font-semibold text-white">
            It has never been easier to stay healthy! We help you stay on route
            by keeping track of your daily carbs, fat,and protein intake.
          </p>
        </div>

        <div className="w-full h-full py-48 bg-cover px-14 right girlFight">
          <div className="mb-32">
            <p className="text-gray-400 font-[Caveat] sm:text-4xl mobileL:text-4xl sm:text-end mobileL:text-start mobileM:text-4xl">
              04
            </p>
            <h1 className="mt-2 font-sans font-bold text-green-500 sm:text-end mobileL:text-start mobileM:text-4xl mobileL:text-5xl md:text-3xl">
              Easy to use
            </h1>
            <p className="mt-4 mb-10 text-lg font-semibold text-white">
              Our website is designed to be user-friendly and intuitive, making
              it easy for you to find what you need and accomplish your goals.
            </p>
          </div>
          <p className="text-gray-400 font-[Caveat] text-4xl">05</p>
          <h1 className="mt-2 font-sans font-bold text-green-500 mobileM:text-4xl md:text-3xl mobileL:text-5xl ">
            All in one place
          </h1>
          <p className="mt-4 mb-10 text-lg font-semibold text-white">
            Our app is the ultimate tool for achieving your fitness goals and
            maintaining a healthy lifestyle. Not only does it provide
            personalized workout plans and track your activity, but it also
            helps you monitor your daily caloric intake.
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
