import { useCallback } from "react";

const NavBar = () => {
  const onStoryTextClick = useCallback(() => {
    // Please sync "Blog article page" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-row items-center justify-between text-center text-sm text-gray-400 font-roboto">
      <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[100px] h-[64px] shrink-0 overflow-hidden">
        <img
          className="absolute h-[40.07%] w-[62.6%] top-[8.45%] right-[36.59%] bottom-[51.48%] left-[0.82%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector.svg"
        />
        <img
          className="absolute h-[36.12%] w-[95.93%] top-[55.1%] right-[0.62%] bottom-[8.77%] left-[3.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector1.svg"
        />
      </button>
      <div className="flex flex-row items-center justify-end gap-[18px]">
        <div className="relative w-[359px] h-[19px] shrink-0 md:hidden">
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[0%] left-[0%] text-sm font-roboto text-indigo-100 text-center inline-block">
            Home
          </button>
          <div
            className="absolute top-[0%] left-[27.58%] inline-block cursor-pointer"
            onClick={onStoryTextClick}
          >
            Story
          </div>
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[0%] left-[52.92%] text-sm font-roboto text-gray-400 text-center inline-block">
            Gallery
          </button>
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute w-[24.15%] top-[0%] left-[75.85%] text-sm font-roboto text-gray-400 text-center inline-block">
            Contact Us
          </button>
        </div>
        <img
          className="relative w-[46px] h-[46px] shrink-0 hidden lg:hidden md:flex md:w-[46px] md:h-[46px]"
          alt=""
          src="../group-3.svg"
        />
        <div className="relative border-r-[1px_solid_#eee] box-border w-[1px] h-[24.6px] shrink-0 md:hidden" />
        <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[20px] h-[20px] shrink-0">
          <img
            className="absolute h-[108.53%] w-[108.54%] top-[-5%] right-[-3.54%] bottom-[-3.53%] left-[-5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector2.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[24px] h-[24px] shrink-0">
          <img
            className="absolute h-[35.71%] w-[35.71%] top-[21.43%] right-[32.14%] bottom-[42.86%] left-[32.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector3.svg"
          />
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector4.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
