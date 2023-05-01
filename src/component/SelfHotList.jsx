import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import ItemModal from "../component/ItemModal";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Autoplay]);
function SelfHotList({ openModal, showModal, closeModal, id }) {
  let hot = useSelector((state) => state.hot);

  return (
    <>
      <div className="hot">
        <Swiper
          breakpoints={{
            // when window width is >= 320px (mobile)
            320: {
              slidesPerView: 2,
            },
            // when window width is >= 768px (tablet)
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1200px (desktop)
            1200: {
              slidesPerView: 4,
            },
          }}
          initialSlide={6}
          slidesPerView={4}
          spaceBetween={60}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {hot.map((a, i) => {
            return (
              <>
                <SwiperSlide key={i}>
                  <div className="hotList">
                    <span>{a.id}</span>
                    <div className="listImg">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/${a.img}`}
                        alt={a.title}
                      />
                    </div>
                    <div className="listTxt">{a.title}</div>
                    <Link to="#" onClick={openModal}>
                      <span>자세히보기</span>
                    </Link>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        {showModal && <ItemModal hot={hot} i={id} closeModal={closeModal} />}
      </div>
    </>
  );
}
export default SelfHotList;
