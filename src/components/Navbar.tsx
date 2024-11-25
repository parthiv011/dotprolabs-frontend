import { ButtonWithGradient } from './button-with-gradient';

export const Navbar = () => {
  const src = '/assets/logo.png';
  return (
    <header className="flex items-center justify-between">
      <div>
        <img src={`${src}`} alt="Logo" />
      </div>
      <ul className="flex gap-16">
        <li>
          <a
            href=""
            className="text-lg font-extrabold leading-5 text-[#E4B40D]"
          >
            Home
          </a>
        </li>
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
      <ButtonWithGradient title="Connet Wallet" />
    </header>
  );
};
