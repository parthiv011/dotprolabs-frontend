import {
  DollarSignIcon,
  PhoneOffIcon,
  Settings2Icon,
  ShieldCheckIcon,
} from 'lucide-react';
import { Card } from '../components/ui/card';

export const Features = () => {
  const features = [
    {
      logo: DollarSignIcon,
      title: 'Cheapest TXs',
      description:
        'Exchange popular digital currencies at the cheapest possible transaction price',
    },
    {
      logo: ShieldCheckIcon,
      title: 'CerTik',
      description:
        'We are Audited by Certik. CertiK is the leading security-focused ranking platform to ',
    },
    {
      logo: PhoneOffIcon,
      title: 'No Contract sales',
      description: 'No contract sells to fund the marketing wallets',
    },
    {
      logo: Settings2Icon,
      title: 'CrossDex Support',
      description:
        'Exchange popular digital currencies at the cheapest possible transaction price',
    },
  ];

  return (
    <div className="mb-28">
      <h1 className="text-center font-machina text-5xl font-extrabold text-white">
        Our
        <span className="text-[#E4B40D]"> Features</span>
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-8 px-32 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          return (
            <Card
              key={index}
              logo={feature.logo}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};
