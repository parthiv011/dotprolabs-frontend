import { HiOutlineCheck } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import { BackgroundTexture } from '../components/ui/background-texture';

export const About = () => {
  const src = '/assets/logo.png';
  const src2 = '/assets/uniswap.png';
  return (
    <section className="relative mt-44 px-14 py-6">
      <h1 className="font-machina text-4xl font-extrabold leading-10 text-white">
        Why <span className="text-[#E4B40D]">MoonEX?</span>
      </h1>
      <div className="overflow-x-clip px-12 py-6">
        <div className="w-[1180px] rounded-[20px] border border-[#F7F9FF05]">
          <BackgroundTexture classname="right-1 top-5 h-[580px]" />
          {/* TABLE */}
          <div className="px-3 py-3">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="font-conthrax border-b border-r border-[#D9D9D91A] px-6 py-4 text-center text-xl font-semibold text-[#E4B40D]">
                    Comparison
                  </th>
                  <th className="border-b border-r border-[#D9D9D91A] px-6 py-4 text-center">
                    <img src={src} alt="MoonEx" className="mx-auto max-h-16" />
                  </th>
                  <th className="border-b border-[#D9D9D91A] px-6 py-4 text-center">
                    <img
                      src={src2}
                      alt="Uniswap"
                      className="mx-auto max-h-12"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[69px]">
                  <td className="border-b border-r border-[#D9D9D91A] px-6 py-4 font-machina text-[#F0F0F0B2]">
                    1. Point no one
                  </td>
                  <td className="border-b border-r border-[#D9D9D91A]">
                    <HiOutlineCheck className="w-full text-5xl font-extrabold text-green-500" />
                  </td>
                  <td className="border-b border-[#D9D9D91A]">
                    <ImCross className="w-full text-3xl text-red-400" />
                  </td>
                </tr>
                <tr className="h-[69px]">
                  <td className="border-b border-r border-[#D9D9D91A] px-6 py-4 font-machina text-[#F0F0F0B2]">
                    1. Point no one
                  </td>
                  <td className="border-b border-r border-[#D9D9D91A]">
                    <HiOutlineCheck className="w-full text-5xl font-extrabold text-green-500" />
                  </td>
                  <td className="border-b border-[#D9D9D91A]">
                    <ImCross className="w-full text-3xl text-red-400" />
                  </td>
                </tr>
                <tr className="h-[69px]">
                  <td className="border-b border-r border-[#D9D9D91A] px-6 py-4 font-machina text-[#F0F0F0B2]">
                    1. Point no one
                  </td>
                  <td className="border-b border-r border-[#D9D9D91A]">
                    <HiOutlineCheck className="w-full text-5xl font-extrabold text-green-500" />
                  </td>
                  <td className="border-b border-[#D9D9D91A]">
                    <ImCross className="w-full text-3xl text-red-400" />
                  </td>
                </tr>
                <tr className="h-[69px]">
                  <td className="border-b border-r border-[#D9D9D91A] px-6 py-4 font-machina text-[#F0F0F0B2]">
                    1. Point no one
                  </td>
                  <td className="border-b border-r border-[#D9D9D91A]">
                    <HiOutlineCheck className="w-full text-5xl font-extrabold text-green-500" />
                  </td>
                  <td className="border-b border-[#D9D9D91A]">
                    <ImCross className="w-full text-3xl text-red-400" />
                  </td>
                </tr>
                <tr className="h-[69px]">
                  <td className="border-b border-r border-[#D9D9D91A] px-6 py-4 font-machina text-[#F0F0F0B2]">
                    1. Point no one
                  </td>
                  <td className="border-b border-r border-[#D9D9D91A]">
                    <HiOutlineCheck className="w-full text-5xl font-extrabold text-green-500" />
                  </td>
                  <td className="border-b border-[#D9D9D91A]">
                    <ImCross className="w-full text-3xl text-red-400" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
