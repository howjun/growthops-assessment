export default function LandingPage() {
  return (
    <div className="h-screen content-center transform animate-landing">
      <div className="w-[1366px] h-[768px] max-xxs:w-full max-xxs:pt-[474px] pt-[340px] max-xxs:px-[24px] px-[80px] xxs:flex xxs:flex-row bg-[#33FFF3] mx-auto">
        <p className="xxs:w-[1206px] max-xxs:text-[53px]/[56px] mx-auto font-[montserrat] font-extrabold text-[128px]/[116px] tracking-normal text-white">We’re <br/>GrowthOps</p>

        <div className="px-[64px] max-xxs:px-[40px] py-[20px] max-xxs:mt-5 w-fit h-fit gap-[10px] rotate-[-9.47deg] bg-[#FFFFFF] rounded-[80px]">
          <p className="font-[montserrat] font-extrabold max-xxs:text-[40px]/none text-[96px]/[116px] tracking-normal text-[#33FFF3]">Asia</p>
        </div>
      </div>
    </div>

  )
}