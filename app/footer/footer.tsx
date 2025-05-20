import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Footer() {
  const footerTabs = ['Services', 'Works', 'Insights', 'Careers', 'Contact Us'];
  const location = useLocation();

  return (
    <div className="relative w-full h-[310px] mt-140 order-8 ">
      {
        location.pathname === '/contact' ? 
          <div className="flex flex-row gap-[40px] w-fit max-xxs:w-[265px] max-xxs:hidden mx-auto flex-wrap justify-center">
            {
              footerTabs.map((tab, index) => (
                <p key={`item-${index}`} className="font-[montserrat] font-medium text-base/none tracking-normal text-white hover:cursor-pointer">{tab}</p>
              ))
            }
          </div>
          :
          <div className="flex flex-row gap-[40px] w-fit max-xxs:w-[265px] mx-auto flex-wrap justify-center">
            {
              footerTabs.map((tab, index) => (
                <p key={`item-${index}`} className="font-[montserrat] font-medium text-base/none tracking-normal text-white hover:cursor-pointer">{tab}</p>
              ))
            }
          </div>
      }


      <div className="relative flex flex-row gap-[75px] w-fit mx-auto mt-15">
        <i className='fa-brands fa-linkedin-in text-xl hover:cursor-pointer' />
        <i className='fa-brands fa-facebook-f text-xl hover:cursor-pointer' />
        <i className='fa-brands fa-instagram text-xl hover:cursor-pointer' />
        <i className='fa-brands fa-youtube text-xl hover:cursor-pointer' />
      </div>

      <div className="relative flex flex-row w-full self-center mt-20">
        <div className="relative w-[1366px] max-xxs:w-[375px] h-fit flex flex-row max-xxs:flex-col max-xxs:gap-10 mx-auto items-center">
          <p className="font-[montserrat] font-semibold text-xs/normal tracking-normal uppercase text-[#6F7176] w-[900px] pl-[80px] max-xxs:hidden hover:cursor-default">© Copyright GrowthOps. All rights reserved.</p>
          <p className={`font-[montserrat] font-medium text-xs/none max-xxs:tracking-[0.08em] tracking-normal text-center text-white w-[300px] hover:cursor-pointer ${location.pathname === '/contact' ? 'max-xxs:hidden' : null}`}><i className="fa-solid fa-arrow-up-right-from-square font-normal text-xs/none tracking-[0.08em]" />  Go to global GrowthOps website</p>
          <p className={`font-[montserrat] font-medium text-xs/none tracking-normal text-right text-white hover:cursor-pointer ${location.pathname === '/contact' ? 'max-xxs:hidden' : null}`}>Privacy policy</p>
        </div>
      </div>

      <div className="relative w-[1366px] max-xxs:w-[375px] mt-[-500px] max-xxs:mt-[-600px] h-[553px] flex flex-col justify-self-center overflow-hidden">
        <div className="absolute h-full w-full">
          <div className="absolute left-[-1364px] max-xxs:left-[-189px] top-[127px] size-[4155px] max-xxs:size-[755px] border rounded-[5000px] border-[#FF3366]" />
          <div className="absolute left-[-1364px] max-xxs:left-[-189px] top-[73px] size-[4155px] max-xxs:size-[755px] border rounded-[5000px] border-[#FF3366]" />
          <div className="absolute left-[-1364px] max-xxs:left-[-189px] size-[4155px] max-xxs:size-[755px] border rounded-[5000px] border-[#FF3366]" />
        </div>
      </div>
    </div>
  )
}