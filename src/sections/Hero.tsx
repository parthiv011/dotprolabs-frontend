import { ButtonWithGradient } from '../components/button-with-gradient';
import { Navbar } from '../components/Navbar';
import { OutlineButton } from '../components/outline-button';
import { BackgroundTexture } from '../components/ui/background-texture';
import { HeroOrbit } from '../components/ui/hero-orbit';
import { StarIcon } from '../components/ui/star-icon';

export const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#071624] px-14 py-6">
      <BackgroundTexture classname="right-1/2 top-0" />
      <BackgroundTexture classname="left-1/2 top-52 h-[720px]" />

      <div className="h[1584.49px] absolute inset-0 -left-[660px] -top-[367px] w-[2559.54px] overflow-x-clip">
        <div className="absolute inset-0 m-auto h-[1032.06px] w-[2378.98px] rotate-[14.21deg] rounded-full border border-[rgba(72,72,72,0.36)]"></div>
        <div className="absolute inset-0 m-auto h-[748.24px] w-[1724.75px] rotate-[14.21deg] rounded-full border border-[rgba(72,72,72,0.36)]"></div>
        <div className="absolute inset-0 m-auto h-[514.99px] w-[1187.08px] rotate-[14.21deg] rounded-full border border-[rgba(72,72,72,0.36)]"></div>
        <HeroOrbit size={800} rotation={-75}>
          <StarIcon classname="h-28 w-28">
            <img src="/assets/star-img.png" alt="Star" />
          </StarIcon>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={118}>
          <StarIcon classname="h-28 w-28">
            <img src="/assets/star3.png" alt="Star" />
          </StarIcon>
        </HeroOrbit>
        <HeroOrbit size={400} rotation={20}>
          <StarIcon classname="h-16 w-16">
            <img src="/assets/star2.png" alt="Star" />
          </StarIcon>
        </HeroOrbit>
      </div>
      <Navbar />

      {/* content */}

      <div className="relative z-10 flex flex-1 items-center">
        <div className="flex max-w-[906px] flex-col">
          <div className="mb-8">
            <h1 className="font-machina text-[75px] font-extrabold leading-[72px] text-white">
              Trusted Multi-Chain <span className="text-[#E4B40D]">DEX</span>{' '}
              Platform
            </h1>
            <p className="font-machina text-2xl font-normal leading-8 text-[#9E9E9E]">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
          </div>
          <div className="flex gap-6">
            <ButtonWithGradient title="Connect Wallet" />
            <OutlineButton title="Trade Crypto" />
          </div>
        </div>
        <div className="h-[259px] w-[259px] rounded-full bg-[#E4B40D] bg-gradient-to-tl from-[#E4B40D] to-[#FBD966] text-white"></div>
      </div>
    </section>
  );
};
