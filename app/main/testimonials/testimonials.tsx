import { useState } from "react"

export default function Testimonials() {
  const [tabSelected, setTabSelected] = useState<string>("Telco");

  const setTab = (tab: string) => {
    setTabSelected(tab);
  };

  return (
    <div className="relative flex flex-col h-[867px] max-xxs:h-[1000px] w-full max-w-[1366px] max-xxs:min-w-[375px] mt-55 justify-self-center content-center overflow-hidden order-5">
      <h1 className="max-xxs:w-[327px] font-[montserrat] font-extrabold text-[88px]/[84px] max-xxs:text-[35px]/[40px] tracking-normal text-center self-center uppercase text-[#FFFFFF]">what clients say</h1>

      <div className="relative mt-23 self-center border-[1px] rounded-[30px] p-[6px] border-[#2B2B2B] w-fit">
        <button className={`font-[montserrat] rounded-[30px] py-[12px] px-[20px] gap-[10px] text-base/none tracking-normal hover:cursor-pointer ${tabSelected === 'Telco' ? 'bg-[#07DDDA] font-bold text-black': 'font-normal text-[#FFFFFF]'}`} onClick={()=>setTab('Telco')}>Telco</button>
        <button className={`font-[montserrat] rounded-[30px] py-[12px] px-[20px] gap-[10px] text-base/none tracking-normal hover:cursor-pointer ${tabSelected === 'Insurance' ? 'bg-[#07DDDA] font-bold text-black': 'font-normal text-[#FFFFFF]'}`} onClick={()=>setTab('Insurance')}>Insurance</button>
        <button className={`font-[montserrat] rounded-[30px] py-[12px] px-[20px] gap-[10px] text-base/none tracking-normal hover:cursor-pointer ${tabSelected === 'Fintech' ? 'bg-[#07DDDA] font-bold text-black': 'font-normal text-[#FFFFFF]'}`} onClick={()=>setTab('Fintech')}>Fintech</button>
        <button className={`font-[montserrat] rounded-[30px] py-[12px] px-[20px] gap-[10px] text-base/none tracking-normal hover:cursor-pointer ${tabSelected === 'IT' ? 'bg-[#07DDDA] font-bold text-black': 'font-normal text-[#FFFFFF]'}`} onClick={()=>setTab('IT')}>IT</button>
      </div>

      <div className="grid grid-cols-10 w-[1000px] max-xxs:w-full mt-15 self-center">
        <p className="font-[montserrat] font-bold text-[40px]/none tracking-[-0.01em] text-[#07DDDA] max-xxs:ml-[4px]">&ldquo;</p>
        
        <div className="col-span-9 ">
          <p className="font-[montserrat] font-medium text-2xl/[36px] max-xxs:text-xl/[32px] max-xxs:mr-13 tracking-[-0.01em]">
            Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.
          </p>

          <p className="font-[montserrat] font-bold text-base/none tracking-normal text-white mt-15">Jasmine Lee</p>
          <p className="font-[montserrat] font-normal text-base/none tracking-normal text-[#CCCCCC] mt-4">[Position], [Company Name]</p>
        </div>
      </div>

      <div className="w-[300px] h-[550px] self-center mr-[-1400px] max-xxs:mr-[-400px] mt-[-350px] max-xxs:mt-[-500px] rotate-120 rounded-[50%] bg-gradient-to-r from-[#E9FFFA29] via-[#A7FBE758] to-[#116853] blur-[154px]" />
    </div>
  )
}