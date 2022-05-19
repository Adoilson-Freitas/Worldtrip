import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";

SwiperCore.use([Navigation, Pagination]);

interface ContinentsData {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface CarouselProps {
  data: ContinentsData[];
}

export default function Carousel({ data }: CarouselProps) {
  return (
    <>
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
      >
        {data &&
          data.map((continent) => (
            <SwiperSlide key={continent.id}>
              <SlideItem
                slug={continent.id}
                name={continent.name}
                description={continent.description}
                image={continent.carrouselImage}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
