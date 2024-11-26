import { ChevronDown, PlusIcon } from 'lucide-react';
import { BackgroundTexture } from '../components/ui/background-texture';

export const FAQs = () => {
  return (
    <div className="mb-44 overflow-x-clip px-56 py-6">
      <BackgroundTexture classname="h-[500px] right-1/2" />
      {/* <BackgroundTexture classname="h-[500px] w-[500px]" /> */}
      <div className="rounded-[10px] bg-[#F7F9FF05] text-center">
        <h1 className="border-b border-[#BBBBBB1A] px-12 py-6 font-machina text-3xl font-extrabold text-[#E4B40D]">
          FAQs
        </h1>
        <div className="flex items-center justify-between border-b border-[#BBBBBB1A] px-12 py-4">
          <p className="text-[18px] font-medium leading-5 text-white">
            How do I get a Referral Code?
          </p>
          <div className="flex size-11 items-center justify-center rounded-full bg-[#D9D9D91A]">
            <PlusIcon className="text-white" />
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-[#BBBBBB1A] px-12 py-4">
          <div className="flex flex-col items-start justify-start py-4">
            <p className="mb-6 text-[18px] leading-5 text-white">
              Do I get a rewarded in tokens or ETH when I refer buyers?
            </p>
            <p className="mb-3 text-[15px] leading-4 text-[#BAB8B8]">
              You receive your rewards in ETH instantly once someone you refer
              makes a transaction!
            </p>
          </div>
          <div className="flex size-11 items-center justify-center rounded-full bg-[#D9D9D91A]">
            <ChevronDown className="text-white" />
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-[#BBBBBB1A] px-12 py-4">
          <p className="text-[18px] font-medium leading-5 text-white">
            How do I get a Referral Code?
          </p>
          <div className="flex size-11 items-center justify-center rounded-full bg-[#D9D9D91A]">
            <PlusIcon className="text-white" />
          </div>
        </div>
        <div>
          <br />
        </div>
      </div>
    </div>
  );
};
