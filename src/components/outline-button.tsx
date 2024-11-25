export const OutlineButton = ({ title }: { title: string }) => {
  return (
    <button className="h-[47px] w-[150px] rounded-[100px] border-2 border-[#E4B40D] text-sm font-extrabold leading-4 text-[#E4B40D]">
      {title}
    </button>
  );
};
