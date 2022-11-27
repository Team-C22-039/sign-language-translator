import React from "react";

function Main() {
  return (
    <div className="bg-[#E4E4E4]">
      <div className="container flex justify-around">
        <div className="container-img border-2 border-black m-28 p-52">
          <div className="">img nanti</div>
        </div>
        <div className="flex-col m-28 ">
          <div className="input_container">
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  Text ke Gambar :
                </label>
                <textarea
                  class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Masukkan Text"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="upload">
            <form class="flex items-center space-x-6 mt-10">
              <div class="shrink-0"></div>
              <label class="block">
                <input
                  type="file"
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 hover:cursor-pointer py-20"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
<></>;
export default Main;
