import { ChevronDown, PlusIcon } from 'lucide-react';
import { BackgroundTexture } from '../components/ui/background-texture';

export const FAQs = () => {
  return (
    <div className="px-56 py-6">
      <div className="rounded-xl bg-[#BBBBBB1A] px-6 py-2 text-center">
        <h1 className="border-b font-machina text-3xl font-extrabold text-[#E4B40D]">
          FAQs
        </h1>
        <div className="flex items-center justify-center">
          <p className="text-white">How do I get a Referral Code?</p>
          <PlusIcon className="text-white" />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white">
            Do I get a rewarded in tokens or ETH when I refer buyers?
          </p>
          <ChevronDown className="text-white" />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white">How do I get a Referral Code?</p>
          <PlusIcon className="text-white" />
        </div>
      </div>
    </div>
  );
};
