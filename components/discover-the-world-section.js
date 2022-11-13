import DestinationCards from "../components/destination-cards";

const DiscoverTheWorldSection = ({ discoverTheWorldTitle = "Title" }) => {
  return (
    <div className="self-stretch bg-white flex flex-col p-[24px_119px_70px] box-border items-center justify-start gap-[48px] text-center text-base text-indigo-100 font-roboto lg:p-[40px_80px_60px] lg:box-border md:pl-[40px] md:pr-[40px] md:box-border sm:pl-[24px] sm:pr-[24px] sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <b className="self-stretch relative tracking-[0.06em] uppercase inline-block">
          Join our adventures
        </b>
        <div className="self-stretch relative text-2xl leading-[40px] font-changa-one text-gray-500 inline-block sm:text-xl">
          {discoverTheWorldTitle}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0px] text-lg text-gray-500 font-changa-one md:flex-col md:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0px] lg:w-full md:flex-[unset] md:self-stretch sm:flex-col">
          <div className="flex-1 flex flex-col p-[16px] box-border items-center justify-center gap-[10px] w-[25%!important] md:p-[8px_16px_30px_0px] md:box-border md:w-[50%!important] sm:p-[20px] sm:box-border sm:w-[100%!important] sm:flex-[unset] sm:self-stretch">
            <DestinationCards icelandCardImage="../iceland-card-image@2x.png" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch relative leading-[36px] inline-block">
                Iceland
              </div>
              <div className="self-stretch relative text-sm font-roboto text-indigo-100 inline-block h-[14.95px] shrink-0">
                Discover
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-[16px] box-border items-center justify-center gap-[10px] w-[25%!important] md:p-[8px_0px_30px_16px] md:box-border md:w-[50%!important] sm:p-[20px] sm:box-border sm:w-[100%!important] sm:flex-[unset] sm:self-stretch">
            <img
              className="self-stretch relative rounded-[8px] max-w-full overflow-hidden h-[317.05px] shrink-0 object-cover"
              alt=""
              src="../italy-card-image@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch relative leading-[36px] inline-block">
                Italy
              </div>
              <div className="self-stretch relative text-sm font-roboto text-indigo-100 inline-block h-[14.95px] shrink-0">
                Discover
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[0px] lg:w-full md:flex-[unset] md:self-stretch sm:flex-col">
          <div className="flex-1 flex flex-col p-[16px] box-border items-center justify-center gap-[10px] w-[25%!important] md:p-[0px_16px_30px_0px] md:box-border md:w-[50%!important] sm:p-[20px] sm:box-border sm:w-[100%!important] sm:flex-[unset] sm:self-stretch">
            <img
              className="self-stretch relative rounded-[8px] max-w-full overflow-hidden h-[317.05px] shrink-0 object-cover"
              alt=""
              src="../dubai-card-image@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch relative leading-[36px] inline-block h-[36px] shrink-0">
                Dubai
              </div>
              <div className="self-stretch relative text-sm font-roboto text-indigo-100 inline-block h-[14.95px] shrink-0">
                Discover
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-[16px] box-border items-center justify-center gap-[10px] w-[25%!important] md:p-[0px_0px_30px_16px] md:box-border md:w-[50%!important] sm:p-[20px] sm:box-border sm:w-[100%!important] sm:flex-[unset] sm:self-stretch">
            <img
              className="self-stretch relative rounded-[8px] max-w-full overflow-hidden h-[317.05px] shrink-0 object-cover"
              alt=""
              src="../patagonia-card-image@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch relative leading-[36px] inline-block h-[36px] shrink-0">
                Patagonia
              </div>
              <div className="self-stretch relative text-sm font-roboto text-indigo-100 inline-block h-[14.95px] shrink-0">
                Discover
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverTheWorldSection;
