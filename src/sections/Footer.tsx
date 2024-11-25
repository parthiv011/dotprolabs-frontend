import { SiReddit, SiTelegram, SiX } from 'react-icons/si'; // Adjust based on your setup

export const Footer = () => {
  const src = '/assets/logo.png';
  return (
    <footer className="flex items-center justify-between bg-[#051422] px-20 py-24">
      <div>
        <img src={`${src}`} alt="Logo" />
      </div>
      <ul className="flex gap-16">
        <li>
          <a href="" className="text-lg font-extrabold leading-5 text-white">
            About Us
          </a>
        </li>
        <li>
          <a href="" className="text-lg font-extrabold leading-5 text-white">
            Roadmap
          </a>
        </li>
        <li>
          <a href="" className="text-lg font-extrabold leading-5 text-white">
            FAQs
          </a>
        </li>
        <li>
          <a href="" className="text-lg font-extrabold leading-5 text-white">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-6">
        <p className="text-lg font-extrabold leading-5 text-white">
          Contact <span className="text-[#E4B40D]">Us</span>
        </p>
        <div className="flex gap-4 text-white">
          <SiTelegram />
          <SiReddit />
          <SiX />
        </div>
      </div>
    </footer>
  );
};
