import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  logo: LucideIcon;
}

export const Card = ({ logo: Logo, title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#FFFFFF0D] bg-[#FFFFFF0D] px-6 py-4">
      <div className="mt-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D91A]">
        <Logo className="size-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold leading-8 text-[#ECF1F0]">
          {title}
        </h3>
        <p className="mt-4 font-normal text-[#B6B6B6]">{description}</p>
      </div>
    </div>
  );
};
