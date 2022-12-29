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
      <div className="flex">
        <MainHeader />
        <section className="fixed w-1/2 h-full bg-center bg-cover py-36 px-14 gradientGray">
          <div className="mt-24">
            <p className="text-gray-400 font-[Caveat] text-4xl">01</p>
            <h1 className="mt-2 font-sans text-5xl font-bold text-green-500">
              Welcome to TRACKr!
            </h1>
            <p className="mt-4 mb-10 text-lg font-semibold text-white">
              TRACKr is a fitness site to help track everything from workouts to
              calories. Our goal is to help you track your progression in AND
              out of the gym! Track your calories, macros, and your progression
              every single day all in one place.
            </p>
            <Link
              to="/sign-up"
              className="px-8 py-4 font-semibold text-white translate-y-20 border-2 border-green-500 rounded-md"
            >
              Join now!
            </Link>
          </div>
        </section>
      </div>
      <section className="grid grid-cols-2">
        <Swiper
          className="w-full h-screen translate-y--80 right"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={true}
        >
          <SwiperSlide>
            <img
              className="top--40"
              src={require("../../imgs/proteinShake.webp")}
              alt="girl with protein shake"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../imgs/ladder.webp")}
              alt="guy running ladder drills"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../imgs/dumbellPull.webp")}
              alt="guy working out with ropes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../imgs/girlRopes.webp")}
              alt="girl with workout ropes"
            />
          </SwiperSlide>
        </Swiper>

        <div className="w-full h-full py-40 bg-cover px-14 right scrollRope">
          <div className="mb-32">
            <p className="text-gray-400 font-[Caveat] text-4xl text-end">02</p>
            <h1 className="mt-2 font-sans text-5xl font-bold text-green-500 text-end">
              Track your workouts
            </h1>
            <p className="mt-4 mb-10 text-lg font-semibold text-white">
              With TRACKr you can choose daily workout plans. You can record the
              number of sets, reps, and weight of your workouts. Track your
              progression to ensure you are pushing your limits every day.
            </p>
          </div>
          <p className="text-gray-400 font-[Caveat] text-4xl">03</p>
          <h1 className="mt-2 font-sans text-5xl font-bold text-green-500">
            Eat healthy
          </h1>
          <p className="mt-4 mb-10 text-lg font-semibold text-white">
            It has never been easier to stay healthy! We help you stay on route
            by keeping track of your daily carbs, fat,and protein intake.
          </p>
        </div>

        <div className="w-full h-full py-48 bg-cover px-14 right girlFight">
          <div className="mb-32">
            <p className="text-gray-400 font-[Caveat] text-4xl text-end">04</p>
            <h1 className="mt-2 font-sans text-5xl font-bold text-green-500 text-end">
              Easy to use
            </h1>
            <p className="mt-4 mb-10 text-lg font-semibold text-white">
              Our website is designed to be user-friendly and intuitive, making
              it easy for you to find what you need and accomplish your goals.
            </p>
          </div>
          <p className="text-gray-400 font-[Caveat] text-4xl">05</p>
          <h1 className="mt-2 font-sans text-5xl font-bold text-green-500 ">
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
