import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={50}
              className=""
            />
          </a>
          <p className="mt-6 text-white-400 leading-7 text-base font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex justify-center items-center gap-5 mt-6">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center bg-white rounded-full w-12 h-12 cursor-pointer"
              >
                <img src={icon.src} alt={icon.alt} height={24} width={24}></img>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((category) => {
            return (
              <div key={category.title} className="flex flex-col items-start">
                <h3 className="font-medium text-2xl font-montserrat mt-2 leading-normal">
                  {category.title}
                </h3>
                <ul className="flex flex-col items-start mt-6">
                  {category.links.map((link) => (
                    <li key={link.name} className="mt-2">
                      <a
                        href={link.link}
                        className="cursor-pointer text-white-400 leading-7 text-base font-montserrat sm:max-w-sm hover:text-slate-gray"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-4">
        <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={24}
            height={24}
            className="rounded-full m-0"
          />
          <p className="font-montserrat leading-normal">
            Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
