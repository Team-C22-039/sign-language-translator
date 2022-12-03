import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ASLAlphabet.css";

const ASLAlphabet = () => {
    return (
        <div className="bg-gray-200 text-center p-16 h-auto">
            <div id="titleText">
                <p className="font-normal text-5xl px-10">
                    ASL Alphabet
                </p>
                <p className="font-normal text-xl p-2">
                    Source: 
                </p>
            </div>
            <Swiper
                spaceBetween={15}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {/* A-J */}
                <SwiperSlide>
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
                        <div>
                            <img
                                src="../images/Alphabet-img/a.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">A</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/b.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">B</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/c.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">C</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/d.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">D</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/e.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">E</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/f.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">F</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/g.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">G</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/h.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">H</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/i.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">I</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/j.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">J</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* K-T */}
                <SwiperSlide>
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
                        <div>
                            <img
                                src="../images/Alphabet-img/k.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">K</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/l.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">L</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/m.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">M</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/n.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">N</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/o.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">O</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/p.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">P</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/q.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">Q</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/r.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">R</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/s.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">S</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/t.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">T</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* U-Z */}
                <SwiperSlide>
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
                        <div>
                            <img
                                src="../images/Alphabet-img/u.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">U</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/v.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">V</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/w.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">W</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/x.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">X</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/y.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">Y</p>
                        </div>
                        <div>
                            <img
                                src="../images/Alphabet-img/z.jpg"
                                className="h-40 w-40 aspect-square"
                                alt="alphabet-img"
                                id="imageResult"
                            />
                            <p className="text-xs lg:text-base">Z</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ASLAlphabet