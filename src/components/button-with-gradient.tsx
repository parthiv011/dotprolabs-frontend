export const ButtonWithGradient = ({ title }: { title: string }) => {
  return (
    <button className="h-[47px] w-[150px] rounded-[100px] bg-[#E4B40D] bg-gradient-to-br from-[#E4B40D] to-[#FBD966] text-sm font-extrabold leading-4">
      {title}
    </button>
  );
};
