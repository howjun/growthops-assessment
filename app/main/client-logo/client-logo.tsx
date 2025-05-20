import Img_0_1 from './Img_0_1.png';
import Img_0_2 from './Img_0_2.png';
import Img_0_3 from './Img_0_3.png';
import Img_0_4 from './Img_0_4.png';
import Img_0_5 from './Img_0_5.png';
import Img_0_6 from './Img_0_6.png';
import Img_0_7 from './Img_0_7.png';
import Img_0_8 from './Img_0_8.png';
import Img_0_9 from './Img_0_9.png';
import Img_0_10 from './Img_0_10.png';
import Img_0_11 from './Img_0_11.png';
import Img_1_1 from './Img_1_1.png';
import Img_1_2 from './Img_1_2.png';
import Img_1_3 from './Img_1_3.png';
import Img_1_4 from './Img_1_4.png';
import Img_1_5 from './Img_1_5.png';
import Img_1_6 from './Img_1_6.png';
import Img_1_7 from './Img_1_7.png';
import Img_1_8 from './Img_1_8.png';
import Img_1_9 from './Img_1_9.png';
import Img_1_10 from './Img_1_10.png';
import Img_1_11 from './Img_1_11.png';
import Img_2_1 from './Img_2_1.png';
import Img_2_2 from './Img_2_2.png';
import Img_2_3 from './Img_2_3.png';
import Img_2_4 from './Img_2_4.png';
import Img_2_5 from './Img_2_5.png';
import Img_2_6 from './Img_2_6.png';
import Img_2_7 from './Img_2_7.png';
import Img_2_8 from './Img_2_8.png';
import Img_2_9 from './Img_2_9.png';
import Img_2_10 from './Img_2_10.png';
import Img_2_11 from './Img_2_11.png';
import { useEffect, useRef } from 'react';

export default function ClientLogo () {
  const logoRow1 = [Img_0_1, Img_0_2, Img_0_3, Img_0_4, Img_0_5, Img_0_6, Img_0_7, Img_0_8, Img_0_9, Img_0_10, Img_0_11];
  const logoRow2 = [Img_1_1, Img_1_2, Img_1_3, Img_1_4, Img_1_5, Img_1_6, Img_1_7, Img_1_8, Img_1_9, Img_1_10, Img_1_11];
  const logoRow3 = [Img_2_1, Img_2_2, Img_2_3, Img_2_4, Img_2_5, Img_2_6, Img_2_7, Img_2_8, Img_2_9, Img_2_10, Img_2_11];

  return (
    <div className="relative flex flex-col h-[643px] max-w-[1366px] w-full max-xxs:min-w-[375px] mt-13 justify-self-center content-center order-6">
      <h2 className="max-w-[1000px] w-full max-xxs:w-[327px] font-[montserrat] font-extrabold text-[88px]/none max-xxs:text-[35px]/none tracking-normal text-center self-center uppercase"><span className='border-1 bg-gradient-to-r bg-clip-text text-transparent from-[#9747FF] to-[#6da1e6]'><span className='rounded-[50%] border-1 border-[#9747FF]'>super</span></span> proud to work with</h2>  

      <div className="grid grid-rows-3 gap-5 mt-28">
        <div className="flex flex-row gap-[32px] animate-logo overflow-hidden">
          {
            logoRow1.map((logo, index) => (
              <img key={`logo-${index}`} className='w-[160px] max-xxs:w-[124px] h-[62px] max-xxs:h-[48px] brightness-68' src={logo} alt={`logo-${index}`} />
            ))
          }
        </div>

        <div className="flex flex-row gap-[32px] overflow-hidden">
          {
            logoRow2.map((logo, index) => (
              <img key={`logo-${index}`} className='w-[160px] max-xxs:w-[124px] h-[62px] max-xxs:h-[48px] brightness-68' src={logo} alt={`logo-${index}`} />
            ))
          }
        </div>

        <div className="flex flex-row gap-[32px] overflow-hidden">
          {
            logoRow3.map((logo, index) => (
              <img key={`logo-${index}`} className='w-[160px] max-xxs:w-[124px] h-[62px] max-xxs:h-[48px] brightness-68' src={logo} alt={`logo-${index}`} />
            ))
          }
        </div>
      </div>

      <div className='relative w-[280px] max-xxs:w-[48px] h-[405px] max-xxs:h-[216px] mt-[-300px] max-xxs:mt-[-200px] bg-gradient-to-r from-[#010101] to-[#01010100]' />
      <div className='relative w-[280px] max-xxs:w-[48px] h-[405px] max-xxs:h-[216px] mt-[-400px] max-xxs:mt-[-210px] bg-gradient-to-r from-[#01010100] to-[#010101] self-end' />
    </div>
  )
}