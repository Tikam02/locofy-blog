import { useCallback } from "react";
import {
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import NavBar from "../components/nav-bar";
import DiscoverTheWorldSection from "../components/discover-the-world-section";

const HomePage = () => {
  const onWatchHighlightsCTAClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='featuredDestinationSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeaturedDestinationCTAClick = useCallback(() => {
    // Please sync "Blog article page" to the project
  }, []);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start gap-[0px] text-left text-base text-indigo-100 font-roboto">
      <div className="self-stretch bg-white shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] h-[90px] shrink-0 flex flex-col p-[2px_119px] box-border items-center justify-center lg:pl-[80px] lg:pr-[80px] lg:box-border md:pl-[40px] md:pr-[40px] md:box-border sm:pl-[24px] sm:pr-[24px] sm:box-border">
        <NavBar />
      </div>
      <div className="self-stretch relative h-[580px] shrink-0 mix-blend-multiply text-[73px] font-changa-one">
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[580px] object-cover"
          alt=""
          src="../unsplashjb8wahvhmoy@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#fff,_rgba(255,_255,_255,_0)_78.13%)] w-[1440px] flex flex-col items-start justify-start">
          <div className="w-[765px] h-[580px] shrink-0 flex flex-col p-[40px_120px_40px_140px] box-border items-start justify-center gap-[34px] lg:pl-[80px] lg:pr-[80px] lg:box-border md:w-[680px] md:pl-[40px] md:pr-[150px] md:box-border md:max-w-full sm:w-[428px] sm:pl-[24px] sm:pr-[24px] sm:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch relative tracking-[-0.01em] leading-[84px] inline-block md:text-[70px] md:leading-[76px] sm:text-[62px] sm:leading-[68px]">
                <span>Let’s talk</span>
                <span className="text-gray-500"> about your next trip!</span>
              </div>
              <div className="self-stretch relative text-[22px] leading-[36px] font-roboto text-gray-500 inline-block">
                Share your favorite travel destination and we will feature it in
                our next blog!
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[24px] mq350small:flex-col">
              <button className="cursor-pointer [border:none] p-[0] bg-indigo-100 relative rounded-[4px] w-[165.17px] h-[46px] shrink-0 hover:bg-blue">
                <div className="absolute w-[calc(100%_-_19.04px)] top-[13.5px] left-[9.52px] text-sm font-roboto text-white text-center inline-block">
                  Share your story
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[170.63px] h-[36px] shrink-0"
                onClick={onWatchHighlightsCTAClick}
              >
                <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute h-full w-[calc(100%_-_134.63px)] top-[0px] right-[134.63px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../ellipse-13.svg"
                  />
                  <img
                    className="absolute h-[calc(100%_-_22.19px)] w-[calc(100%_-_23.51px)] top-[11.26px] right-[10.66px] bottom-[10.94px] left-[12.85px] rounded-[2px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../polygon-1.svg"
                  />
                </button>
                <div className="absolute w-[calc(100%_-_46px)] top-[0px] left-[46px] text-sm leading-[36px] font-roboto text-gray-500 text-left inline-block">
                  Watch highlights
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch bg-white flex flex-row p-[107px_140px] box-border items-start justify-start gap-[0px] text-gray-500 lg:p-[80px] lg:box-border md:flex-col md:p-[60px_40px] md:box-border"
        data-scroll-to="featuredDestinationSection"
      >
        <div className="flex-1 flex flex-col p-[0px_40px_0px_0px] box-border items-start justify-start lg:pr-[0px] lg:box-border md:pr-[0px] md:box-border md:flex-[unset] md:self-stretch">
          <iframe
            className="self-stretch relative rounded-[8px] h-[338px] shrink-0 bg-[url(../public/unsplash87jymb9zfu@3x.png)] bg-cover bg-no-repeat bg-[top] md:w-[100%!important] md:h-[auto!important]"
            src={`https://www.youtube.com/embed/linlz7-Pnvw?rel=0&controls=0&autoplay=1&mute=1`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="flex-1 flex flex-col p-[30px] box-border items-start justify-start gap-[24px] md:p-[24px_0px] md:box-border md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <b className="self-stretch relative tracking-[0.06em] uppercase inline-block text-indigo-100">
              Featured Destination
            </b>
            <div className="self-stretch relative text-2xl leading-[36px] font-changa-one inline-block sm:text-xl">
              Our swiss adventure blog
            </div>
            <div className="self-stretch relative leading-[33px] inline-block">{`Visiting the swiss alps? Want to know the requirements on travelling to Switzerland during the pandemic? Our blog might help! `}</div>
          </div>
          <button
            className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[143.77px] h-[36px] shrink-0"
            onClick={onFeaturedDestinationCTAClick}
          >
            <div className="absolute w-[calc(100%_-_48px)] top-[0px] left-[48px] text-sm leading-[36px] font-roboto text-indigo-100 text-left inline-block">
              Watch Now
            </div>
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[0px] left-[0px] w-[36px] h-[36px]">
              <img
                className="absolute top-[0px] left-[0px] w-[36px] h-[36px]"
                alt=""
                src="../ellipse-131.svg"
              />
              <img
                className="absolute top-[11.19px] left-[12.82px] rounded-[2px] w-[12.6px] h-[13.93px]"
                alt=""
                src="../polygon-11.svg"
              />
            </button>
          </button>
        </div>
      </div>
      <DiscoverTheWorldSection discoverTheWorldTitle="Discover the world with us" />
      <div className="self-stretch relative h-[901.18px] shrink-0 text-center sm:h-[950px]">
        <img
          className="absolute top-[0px] right-[0px] w-full h-[901.18px] object-cover sm:h-[950px]"
          alt=""
          src="../rectangle-193@2x.png"
        />
        <div className="[position:relative!important] top-[74.03px] left-[auto!important] w-[657px] flex flex-col p-[20px] box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:p-[24px_0px] md:box-border md:ml-[auto] md:mr-[auto] md:[position:relative!important] md:left-[auto!important] md:w-[90%] sm:pl-[24px] sm:pr-[24px] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-[100%!important]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
            <b className="self-stretch relative tracking-[0.06em] uppercase inline-block">
              Let’s build a community
            </b>
            <div className="self-stretch relative text-2xl leading-[40px] font-changa-one text-gray-500 inline-block">
              Join our next destination
            </div>
          </div>
          <form className="self-stretch rounded-[12px] bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col p-[28px_30px] box-border items-start justify-start gap-[17px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch relative text-lg leading-[36px] font-changa-one text-gray-500 text-left inline-block">
                Share your travels
              </div>
              <div className="self-stretch relative text-base leading-[34px] font-roboto text-gray-300 text-left inline-block">
                Suggest a new travel destination that you want to see and we
                will feature it in our blog.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Destination name"
                  size="medium"
                  margin="none"
                />
              </div>
              <Autocomplete
                className="self-stretch"
                disablePortal
                options={["Norway", "India", "Italy", "Spain", "Bali"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="Country of Destination"
                    variant="outlined"
                    placeholder=""
                    helperText=""
                  />
                )}
                size="medium"
              />
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Your name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <FormControl className="self-stretch" variant="outlined">
                  <InputLabel color="primary">Shooting category</InputLabel>
                  <Select
                    color="primary"
                    size="medium"
                    label="Shooting category"
                  >
                    <MenuItem value="Landscape">Landscape</MenuItem>
                    <MenuItem value="People">People</MenuItem>
                    <MenuItem value="Seascape">Seascape</MenuItem>
                    <MenuItem value="Mountain Peaks">Mountain Peaks</MenuItem>
                    <MenuItem value="Transportation">Transportation</MenuItem>
                    <MenuItem value="Architecture">Architecture</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="self-stretch"
                  color="primary"
                  variant="outlined"
                  multiline
                  rows={4}
                  label="Describe what kind of photos you want to focus on"
                  margin="none"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-[0] bg-indigo-100 relative rounded-[4px] w-[222px] h-[46px] shrink-0 hover:bg-indigo-200 lg:bg-indigo-100">
              <div className="absolute w-[calc(100%_-_18.88px)] top-[13.5px] left-[9.52px] text-sm font-roboto text-white text-center inline-block">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col p-[83px_120px] box-border items-center justify-center gap-[30px] text-center lg:p-[80px] lg:box-border md:p-[40px] md:box-border sm:p-[30px_24px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
          <b className="self-stretch relative tracking-[0.06em] uppercase inline-block">
            catch up to our posts
          </b>
          <div className="self-stretch relative text-2xl leading-[40px] font-changa-one text-gray-500 inline-block">
            Recent story entries
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0px] text-left text-lg text-gray-500 font-changa-one lg:flex-col lg:w-[70%!important] lg:ml-[auto] lg:mr-[auto] md:w-[98%!important] md:ml-[auto] md:mr-[auto] sm:w-[100%!important] sm:ml-[auto] sm:mr-[auto]">
          <div className="self-stretch flex-1 flex flex-row p-[0px_20px] box-border items-center justify-center lg:p-[10px_0px] lg:box-border lg:flex-[unset] lg:self-stretch">
            <div className="flex-1 h-[476.11px] flex flex-col items-start justify-start gap-[0px]">
              <img
                className="self-stretch relative rounded-[8px_8px_0px_0px] max-w-full overflow-hidden h-[358.11px] shrink-0 object-cover sm:w-[100%!important] sm:h-[auto!important]"
                alt=""
                src="../unsplashrezbvcvaspi@2x.png"
              />
              <div className="self-stretch rounded-[0px_0px_8px_8px] bg-gray-100 flex flex-col p-[14px_24px] box-border items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[28px] sm:flex-row">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="self-stretch relative leading-[36px] inline-block">
                      Zermatt, Switzerland
                    </div>
                    <div className="self-stretch relative text-sm leading-[26px] font-roboto text-gray-300 inline-block">
                      Marvel on the beauty of the iconic Matterhorn. Find the
                      best places to stay that has the best views of this
                      peak...
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[48.87px] h-[48px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="../ellipse-132.svg"
                    />
                    <img
                      className="absolute h-[calc(100%_-_28.55px)] w-[calc(100%_-_31.26px)] top-[14.49px] right-[13.81px] bottom-[14.07px] left-[17.45px] rounded-[2px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="../polygon-12.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center lg:flex-[unset] lg:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch rounded-[8px] bg-gray-100 flex flex-row p-[10px_11px] box-border items-start justify-start gap-[20px] sm:flex-col">
                <img
                  className="self-stretch relative rounded-[4px] max-h-full w-[200px] shrink-0 object-cover sm:w-[100%!important] sm:h-[auto!important]"
                  alt=""
                  src="../unsplashc-zhkgezy3u@2x.png"
                />
                <div className="flex-1 flex flex-col p-[8px_0px_0px] box-border items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch relative leading-[36px] inline-block">
                    Tuscany, Italy
                  </div>
                  <div className="self-stretch relative text-sm leading-[26px] font-roboto inline-block text-gray-300">
                    <span>{`The amazing Tuscany is home to famous Renaissance art and architecture and a vast scenic landscape. `}</span>
                    <span className="text-indigo-100">view full blog...</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[8px] bg-gray-100 flex flex-row p-[10px_11px] box-border items-start justify-start gap-[20px] sm:flex-col">
                <img
                  className="self-stretch relative rounded-[4px] max-h-full w-[200px] shrink-0 object-cover sm:w-[100%!important] sm:[heigth:auto!important]"
                  alt=""
                  src="../unsplash-uinpffj7c@2x.png"
                />
                <div className="flex-1 flex flex-col p-[8px_0px_0px] box-border items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch relative leading-[36px] inline-block">
                    Kyoto, Japan
                  </div>
                  <div className="self-stretch relative text-sm leading-[26px] font-roboto inline-block text-gray-300">
                    <span>{`Kyoto is well known for its temples, gardens, Shinto shrines and wooden houses. It’s time to visit tokyo. `}</span>
                    <span className="text-indigo-100">view full blog...</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[8px] bg-gray-100 flex flex-row p-[10px_11px] box-border items-start justify-start gap-[20px] sm:flex-col">
                <img
                  className="self-stretch relative rounded-[4px] max-h-full w-[200px] shrink-0 object-cover sm:w-[100%!important] sm:h-[auto!important]"
                  alt=""
                  src="../unsplashpg5df4wy8m0@2x.png"
                />
                <div className="flex-1 flex flex-col p-[8px_0px_0px] box-border items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch relative leading-[36px] inline-block">
                    Lofoten Islands, Norway
                  </div>
                  <div className="self-stretch relative text-sm leading-[26px] font-roboto inline-block text-gray-300">
                    <span>{`Featuring razor-sharp peaks housing the arctic landscape. This astonishing island is perfect for your next postcard.  `}</span>
                    <span className="text-indigo-100">view full blog...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row p-[32px_120px] box-border items-start justify-center gap-[0px] text-xs text-gray-200 lg:p-[30px_80px] lg:box-border md:p-[29px_40px] md:box-border sm:p-[28px_24px] sm:box-border">
        <div className="flex-1 relative inline-block md:text-center">
          © 2022, Talking Travel. All Rights Reserved.
        </div>
        <div className="relative w-[280px] h-[16px] shrink-0 text-center md:hidden">
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute h-full w-[13.57%] top-[0%] left-[0%] text-xs font-roboto text-gray-200 text-center inline-block">
            Home
          </button>
          <a className="[text-decoration:none] absolute h-full w-[20.71%] top-[0%] left-[22.14%] text-[inherit] inline-block">
            Blog
          </a>
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute h-full w-[15.36%] top-[0%] left-[49.22%] text-xs font-roboto text-gray-200 text-center inline-block">
            Gallery
          </button>
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute h-full w-[26.74%] top-[0%] left-[73.26%] text-xs font-roboto text-gray-200 text-center inline-block">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
