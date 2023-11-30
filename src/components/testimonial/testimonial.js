import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Farhat Fanae",
    review:
      "If I talk about Tabasum's personality she is just crazy about learning new things, besides as her sister I can say that she is wonderful; she has a really diffirent personlity compare to other members of my family. I hope a happy life full of happiness for my dear sister. ",
  },
  {
    avatar: AVTR2,
    name: "Monema Ahmadi",
    review:
      "To talk about my freind Tabasum's personlity, I evaluated her as a kind, beautiful and hardworking girl. she always tries hard to achieve the goals she has planned for herself. I hope she can achieve her goals as soon as possible.I believe that she will be a successful woman.",
  },
  {
    avatar: AVTR3,
    name: "Shakiba Mehrgan",
    review:
      "Describing my best friend's personality is somehow hard for me, because she is the most polite girl I have ever seen. She is so patient at all and solves her problems with her self.She prefers to be an independent woman who does not need anyone. I am so glad to have a friend like Tabasum.",
  },
  {
    avatar: AVTR4,
    name: "Zakia Ahmadi",
    review:
      "ّI really like Tabasum's personality. She has alot of perfect points such as helping others in any situation. One thing that I honestly don't like about her is that she is kind of Introverted person opposite of me, however it can be a strength for her in her life. Lucky to have you dear.",
  },
];

function test() {
  return (
    <section id="testimonials">
      <h5>How people evaluate my personality </h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial1">
              <div className="client__avatar">
                <img src={avatar} alt="AVATAR" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default test;
