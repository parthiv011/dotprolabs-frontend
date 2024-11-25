import { twMerge } from 'tailwind-merge';

export const BackgroundTexture = ({ classname }: { classname?: string }) => {
  const src = '/assets/grain.jpg';
  return (
    <div
      className={twMerge(
        'pointer-events-none absolute h-[580px] w-[1600px] bg-[#E4B40d] opacity-20 [mask-image:radial-gradient(40%_50%_at_center,black,transparent)]',
        classname
      )}
    >
      <div
        className={'absolute inset-0 -z-30 opacity-0'}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
};
