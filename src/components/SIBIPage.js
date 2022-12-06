import React from "react";

export default function MainContent() {
    return (
        <div className="flex flex-col font-Roboto gap-[10rem]">
            <div className="flex flex-col md:flex-row md:gap-x-[2rem] items-center">
                <img src="https://i.ibb.co/2KqYZ4n/couple-talking-using-sign-language.jpg" alt="BISINDO_1"
                    className="xl:w-[50vh] md:w-[40vw] w-[90vw]" />
                <div className="text-justify md:text-left w-[90vw]">
                    <h2 className="md:text-4xl md:font-bold md:tracking-wider duration-300 my-4 font-semibold text-2xl">Sejarah Bahasa Isyarat</h2>
                    <p className="duration-300 md:text-lg text-base">
                        Sejarah mencatat, bahasa isyarat telah digunakan sejak abad ke-17, sebagai bahasa visual atau metode komunikasi.
                        Meski referensi bentuk komunikasi menggunakan gerakan tangan sendiri sebenarnya sudah ada sejak abad ke-5 SM di Yunani.
                        Salah satu referensi tertulis paling awal untuk bahasa isyarat adalah dari Cratylus karya Plato, di mana Socrates mengatakan “Jika kita tidak memiliki suara atau lidah, dan ingin mengekspresikan sesuatu satu sama lain, bukankah kita mencoba membuat tanda dengan menggerakkan tangan, kepala, dan seluruh tubuh kita, seperti yang dilakukan orang bodoh saat ini?”
                        Keberadaan bahasa isyarat sebagai sesuatu yang dibutuhkan disadari pula oleh seorang dokter bernama Geronimo Cardano dari Padua, Italia, pada abad ke-16. Dokter Cardano adalah orang yang mengajarkan bahasa isyarat untuk kali pertama. Caranya dengan mencocokkan simbol pada hal-hal yang dilihat.<span> ━ </span>
                        <a href="https://www.kelaspintar.id/blog/inspirasi/cari-tahu-sejarah-bahasa-isyarat-di-dunia-17608/#:~:text=Sejarah%20mencatat%2C%20bahasa%20isyarat%20telah,ke-5%20SM%20di%20Yunani."
                            className="underline hover:text-blue-400">source</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-x-[2rem] items-center">
                <img src="https://i.ibb.co/6D2grrg/image1.jpg" alt="BISINDO_2"
                    className="w-[90vw] block md:hidden" a />
                <div className="text-justify md:text-right items-start w-[90vw]">
                    <h2 className="md:text-4xl md:font-bold md:tracking-wider duration-300 my-4 font-semibold text-2xl">Fungsi Bahasa Isyarat</h2>
                    <p className="duration-300 md:text-lg text-base">
                        Bahasa Isyarat merupakan bahasa yang mengutamakan komunikasi manual, bahasa tubuh, dan gerak bibir, bukannya suara, untuk berkomunikasi.
                        Bahasa ini digunakan oleh tunarungu atau orang tuli, biasanya dengan mengkombinasikan bentuk tangan, orientasi dan gerak tangan, lengan, dan tubuh, serta ekspresi wajah.
                        Bentuknya pun berbeda-beda di tiap negara.<span> ━ </span>
                        <a href="https://www.kelaspintar.id/blog/inspirasi/cari-tahu-sejarah-bahasa-isyarat-di-dunia-17608/#:~:text=Sejarah%20mencatat%2C%20bahasa%20isyarat%20telah,ke-5%20SM%20di%20Yunani."
                            className="underline hover:text-blue-400">source</a>
                    </p>
                </div>
                <img src="https://i.ibb.co/6D2grrg/image1.jpg" alt="BISINDO_2"
                    className="md:w-[40vw] hidden md:block" />
            </div>
        </div>
    )
}