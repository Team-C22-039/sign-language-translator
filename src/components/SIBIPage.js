import React from "react";

export default function MainContent() {
    return (
        <div className="flex flex-col font-Roboto gap-[10rem]">
            <div className="flex flex-col md:flex-row md:gap-x-[2rem] items-center">
                <img src="https://i.ibb.co/2KqYZ4n/couple-talking-using-sign-language.jpg" alt="BISINDO_1"
                    className="md:h-[20rem] md:w-[20rem] w-[15rem] h-[15rem]" />
                <div className="text-center md:text-left">
                    <h2 className="md:text-4xl md:font-bold md:tracking-wider duration-300 my-4 font-semibold text-2xl">Sejarah Bahasa Isyarat</h2>
                    <p className="duration-300">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eveniet
                        praesentium. Mollitia similique numquam, minus molestias reprehenderit quo velit
                        nihil!
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-x-[2rem] items-center">
                <img src="https://i.ibb.co/6D2grrg/image1.jpg" alt="BISINDO_2"
                    className="md:h-[20rem] md:w-[20rem] h-[15rem] w-[15rem] block md:hidden" a />
                <div className="text-center md:text-right items-start">
                    <h2 className="md:text-4xl md:font-bold md:tracking-wider duration-300 my-4 font-semibold text-2xl">Fungsi Bahasa Isyarat</h2>
                    <p className="duration-300">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eveniet
                        praesentium. Mollitia similique numquam, minus molestias reprehenderit quo velit
                        nihil!
                    </p>
                </div>
                <img src="https://i.ibb.co/6D2grrg/image1.jpg" alt="BISINDO_2"
                    className="md:h-[20rem] md:w-[20rem] h-[15rem] w-[15rem] hidden md:block" />
            </div>
        </div>
    )
}