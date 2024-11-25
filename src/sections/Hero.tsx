import { ButtonWithGradient } from '../components/button-with-gradient';
import { Navbar } from '../components/Navbar';
import { OutlineButton } from '../components/outline-button';

export const Hero = () => {
  const src = '/assets/grain.jpg';
  return (
    <section className="relative h-screen bg-[#071624] px-14 py-6">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 m-auto h-[200px] w-[400px] -rotate-[14.21deg] border border-[rgba(72,72,72,0.36)]"></div>

        {/* <div className="hero-ring"></div>
        <div className="hero-ring"></div>
        <div className="hero-ring"></div> */}
      </div>
      <Navbar />
      <div className="relative z-10">
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
      </div>
    </section>
  );
};
