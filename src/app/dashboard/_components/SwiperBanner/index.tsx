"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { FC, memo } from "react";
import { useSwiperComp } from "./index.hook";

const SwiperComponent: FC = () => {
  const { bannerData } = useSwiperComp();
  return (
    <section className="mx-auto flex w-[420px] flex-col items-center justify-center lg:w-full">
      <Swiper
        breakpoints={{
          420: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          920: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="w-full"
      >
        {bannerData.map((item) => {
          return (
            <SwiperSlide key={item.mainBannerId}>
              <div
                style={{
                  background: `url(${item.pcImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                }}
                className="h-[220px] lg:h-[300px]"
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export const SwiperBanner = memo(SwiperComponent);
