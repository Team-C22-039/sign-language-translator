import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ASLAlphabet.css";
import Alphabet from "./Alphabet";

const ASLAlphabet = () => {
    return (
        <div className="bg-gray-200 text-center p-16 h-screen">
            <div id="titleText">
                <p className="font-normal text-4xl lg:text-5xl px-10">
                    ASL Alphabet
                </p>
                <p className="font-normal text-xl p-2">
                    Source: 
                </p>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {/* A-J */}
                <SwiperSlide>
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
                        <Alphabet alpha="A"/>
                        <Alphabet alpha="B"/>
                        <Alphabet alpha="C"/>
                        <Alphabet alpha="D"/>
                        <Alphabet alpha="E"/>
                        <Alphabet alpha="F"/>
                        <Alphabet alpha="G"/>
                        <Alphabet alpha="H"/>
                        <Alphabet alpha="I"/>
                        <Alphabet alpha="J"/>
                    </div>
                </SwiperSlide>
                {/* K-T */}
                <SwiperSlide>
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
                        <Alphabet alpha="K"/>
                        <Alphabet alpha="L"/>
                        <Alphabet alpha="M"/>
                        <Alphabet alpha="N"/>
                        <Alphabet alpha="O"/>
                        <Alphabet alpha="P"/>
                        <Alphabet alpha="Q"/>
                        <Alphabet alpha="R"/>
                        <Alphabet alpha="S"/>
                        <Alphabet alpha="T"/>
                    </div>
                </SwiperSlide>

                {/* U-Z */}
                <SwiperSlide>
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
                        <Alphabet alpha="U"/>
                        <Alphabet alpha="V"/>
                        <Alphabet alpha="W"/>
                        <Alphabet alpha="X"/>
                        <Alphabet alpha="Y"/>
                        <Alphabet alpha="Z"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ASLAlphabet