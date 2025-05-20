export default function About () {
  return (
    <div className="relative h-[906px] max-xxs:h-[682px] max-w-[1366px] w-full max-xxs:min-[375px]  max-xxs:mt-50 justify-self-center overflow-hidden order-2 max-xxs:order-3">
      <div className="flex-col content-center justify-self-center max-w-[1366px] max-xxs:max-w-[375px] h-[906px] max-xxs:h-[482px] max-xxs:px-[21px]">
        {/* First row */}
        <p className="font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white max-xxs:hidden">With a focus in fusing <span className="text-[#33F3FF]">strategy</span>,</p>
        <p className="font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white xxs:hidden">With a focus in fusing</p>
        {/* Second Row */}
        <BoxDesign />
        {/* Third Row */}
        <p className="font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white max-xxs:hidden">build and sustain market leaders</p>
        <p className="font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white self-center xxs:hidden"><span className="text-[#33F3FF]">&lt;technology / &gt;</span> to build and sustain market leaders</p>


        <p className="font-[montserrat] font-medium text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white text-center mt-20">this is</p>
        <p className="font-[montserrat] font-extrabold text-8xl/none max-xxs:text-4xl/none tracking-[-0.01em] text-center mt-25 max-xxs:mt-15 bg-clip-text bg-gradient-to-r from-[#33FFF3] via-[#ee9025] to-[#98E0FF] animate-color text-transparent">GrowthOps Asia</p>
      </div>

      <div className="w-[886px] max-xxs:w-[376px] h-[153px] max-xxs:h-[200px] rounded-[50%] ml-[-1600px] max-xxs:ml-[-500px] mt-[-600px] max-xxs:mt-[-300px] rotate-60 bg-gradient-to-r from-[#19B2A766] via-[#5EC9C147] to-[#07DDD066] blur-[154px] justify-self-center" />
      <div className="w-[886px] h-[153px] rounded-[50%] mr-[-1500px] rotate-60 bg-gradient-to-r from-[#19B2A766] via-[#5EC9C147] to-[#07DDD066] blur-[154px] justify-self-center" />
    </div>

  )
}

function BoxDesign () {
  return (
    <div className="flex flex-row justify-center">
      <p className="font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white self-center xxs:hidden"><span className="text-[#33F3FF]">strategy</span>, </p>
      <p className="relative w-[154px] max-xxs:w-[113px] h-[62px] max-xxs:h-[42px] content-center mr-2">
        <p className="w-[144px] max-xxs:w-[103px] h-[52px] max-xxs:h-[32px] content-center text-[#33FFF3] border-1 border-[#33FFF3] mx-auto font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em]">design</p>
        <span className="absolute top-0 left-0 size-[11px] bg-black border-1 z-500 border-[#33FFF3]" />
        <span className="absolute bottom-0 left-0 size-[11px] bg-black border-1 z-500 border-[#33FFF3]" />
        <span className="absolute top-0 right-0 size-[11px] bg-black border-1 z-500 border-[#33FFF3]" />
        <span className="absolute bottom-0 right-0 size-[11px] bg-black z-500 border-1 border-[#33FFF3]" />
      </p>

      <p className="font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white self-center xxs:hidden"> and</p>
      <p className="font-[montserrat] font-medium text-center text-[32px]/[44px] max-xxs:text-xl/none tracking-[-0.01em] text-white self-center max-xxs:hidden"> and <span className="text-[#33F3FF]">&lt;technology / &gt;</span> to</p>
    </div>
  )
}