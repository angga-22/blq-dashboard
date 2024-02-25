"use client";
import Card from "@/app/_components/Card";
import { useSwiperCollection } from "./index.hook";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Typography from "@/app/_components/Typography";
type Props = {};

const SwiperCollection = (_props: Props) => {
  const { collectionData } = useSwiperCollection();
  return (
    <section className=" mx-auto flex w-[420px] lg:w-[920px]">
      <div className="w-[30%]">
        <Typography variant="h3">품절임박! 마지막 수량 한정특가 상품</Typography>
        <Typography variant="h6" restClass="text-12">
          고민하면 품절!
        </Typography>
      </div>
      <Swiper
        breakpoints={{
          420: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          920: {
            slidesPerView: 3,
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
        className="w-[70%]"
      >
        {collectionData?.items?.slice(0, 5).map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <Card props={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SwiperCollection;
