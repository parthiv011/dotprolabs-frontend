import { BackgroundTexture } from '../components/ui/background-texture';

export const About = () => {
  return (
    <section className="relative mt-44 px-14 py-6">
      <h1 className="font-machina text-4xl font-extrabold leading-10 text-white">
        Why <span className="text-[#E4B40D]">MoonEX?</span>
      </h1>
      <div className="overflow-x-clip px-12 py-6">
        <div className="h-[584px] w-[1180px] rounded-[20px] border border-[#FFFFFF05]">
          <BackgroundTexture classname="right-1 top-5 h-[580px]" />
        </div>
      </div>
    </section>
  );
};
