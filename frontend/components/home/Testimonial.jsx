"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import testimonials from "@/data/testimonials";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + ' "   ">' + "</span>";
    },
  };

  return (
    <div className="flex  items-center w-full lg:w-9/12 lg:px-0 lg:py-0  mt-32  justify-center flex-col  lg:mx-auto">
      <div className=" mt-8 w-full mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          className="w-full"
          pagination={pagination}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 4000, // Adjust the delay value as needed
            disableOnInteraction: false, // Enable autoplay even when user interactions occur`
          }}
          speed={600}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.id}`}>
              <TestimonialSlider
                name={testimonial.name}
                img={testimonial.imageUrl}
                head={testimonial.head}
                alt={testimonial.alt}
                message={testimonial.message}
                id={testimonial.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
