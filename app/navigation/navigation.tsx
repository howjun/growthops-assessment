import { useState } from 'react';
import bars from './bars.png';
import logo from './logo.png';

export default function Navigation () {
  const [isNavSelected, setIsNavSelected] = useState<boolean>(false);
  const navTabs = ['services', 'work', 'insights', 'careers', 'contact'];

  const menuClicked = () => {
    console.log('Button Pressed');
    setIsNavSelected(!isNavSelected);
  };

  return (

    <div>
      {
        isNavSelected ? 
          <div className='absolute top-0 left-1/2 z-50 pt-[12px] -translate-x-1/2 h-[768px] max-w-[1366px] w-full max-xxs:h-[667px] bg-gradient-to-r from-[#0405068F] to-[#04050666] border-2 border-[#F5F5F514] backdrop-blur-sm shadow-[0_0_24px_rgba(0,0,0,0.25)]'>
            <div className='flex flex-row mx-auto justify-between max-w-[1270px] max-xxs:min-w-[375px] h-[69px] mt-[24px] max-xxs:mt-[2px] px-[32px] max-xxs:px-[15px]'>
              <img src={logo} alt='logo' className='size-[40px]' />

              <div className='h-[40px] flex-row flex items-center gap-2 hover:cursor-pointer' onClick={menuClicked}>
                <p className='font-[montserrat] font-bold text-sm/none tracking-normal uppercase text-white max-xxs:hidden'>close</p>
                <i className='fa-solid fa-xmark text-[24px] self-center max-xxs:mr-[15px]' />
              </div>
            </div>

            <div className='flex flex-col gap-14 mx-auto justify-between max-w-[1270px] max-xxs:min-w-[375px] px-[32px] mt-7'>
                {
                  navTabs.map((tab) => (
                    <p className='font-[montserrat] font-black text-[64px]/none max-xxs:text-[48px]/none tracking-normal text-right uppercase hover:cursor-default'>{tab}</p>
                  ))
                }
            </div>
          </div>
        :
          <div className='absolute top-0 left-0 w-full z-50 pt-[24px] max-xxs:pt-[6px]'>
            <div className='flex flex-row mx-auto items-center justify-between w-[1270px] max-xxs:w-full h-[69px] max-xxs:h-[60px] px-[32px] max-xxs:px-[6px] rounded-[64px] bg-gradient-to-r from-[#0405068F] to-[#04050666] border-2 border-[#F5F5F514]'>
              <img src={logo} alt='logo' className='size-[40px] max-xxs:ml-[10px]' />

              <div className='h-[40px] flex-row flex items-center gap-2 hover:cursor-pointer' onClick={menuClicked}>
                <p className='font-[montserrat] font-bold text-sm/none tracking-normal uppercase text-white max-xxs:hidden'>menu</p>
                <img src={bars} alt='bars' className='h-[21px] w-[25px] max-xxs:size-[20px] max-xxs:mr-[20px]' />
              </div>
            </div>
          </div>
      }
    </div>
  )
}