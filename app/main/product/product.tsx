import Rectangle from './Rectangle.png';

interface Content {
  title: string;
  contents: string[];
}

export default function Product () {
  const contents: Content[] = [
    {
      title: 'Performance Marketing & Analytics',
      contents: ['Performance Media', 'Search Engine Optimisation', 'Web & App Analytics', 'Conversion Rate Optimisation Through Personalisation']
    },
    {
      title: 'Digital-First Creative',
      contents: ['Brand & Marketing Strategy', 'Content Hubs', 'Creative Services']
    },
    {
      title: 'Marketing Technology',
      contents: ['Technology Consulting', 'MarTech Deployment & Partnerships', 'Cloud Readiness & Migration', 'Mobile Development', 'Custom Web Development', 'Solution Architecture']
    },
    {
      title: 'Experience Design & Strategy',
      contents: ['Digital Transformation & Change Management', 'User Experience Strategy and Design']
    }
  ]

  const seeMoreBtn = () => {

  };

  return(
    <div className="flex-col max-w-[1366px] max-xxs:min-w-[375px] mt-[-379px] justify-self-center content-center order-3 max-xxs:order-2">
      <h1 className="font-[montserrat] font-extrabold text-[88px]/[84px] max-xxs:text-[35px]/none text-center tracking-normal text-white uppercase mt-100">what we do</h1>
      
      <div className="mx-[80px] max-xxs:mx-[21px] grid grid-cols-1 gap-[64px] mt-[100px]">
        {
          contents.map((content, index) => (
            <div key={`content-${index}`} className="xxs:h-[588px] grid grid-cols-3 max-xxs:grid-cols-1 gap-[64px] max-xxs:gap-[24px] xxs:odd:[&>*:nth-child(1)]:order-1 xxs:odd:[&>*:nth-child(2)]:order-2 xxs:even:[&>*:nth-child(1)]:order-2 xxs:even:[&>*:nth-child(2)]:order-1">

              <div className="w-[349px] max-xxs:w-[303px] flex-col flex gap-[24px] max-xxs:gap-[20px] self-center max-xxs:order-2">
                <div className="size-[48px] max-xxs:size-[40px] rounded-[30px] border-2 border-white content-center">
                  <p className="font-[montserrat] font-semibold text-xl/none max-xxs:text-lg/none tracking-normal text-white text-center">{(index + 1).toString().padStart(2, '0')}</p>
                </div>

                <h2 className="font-[montserrat] font-extrabold text-[40px]/none max-xxs:text-2xl/none tracking-normal">{content.title}</h2>

                <div className="grid grid-cols-1 gap-[16px]">
                  {
                    content.contents.map((item, index) => (
                      <p key={`item-${index}`} className="font-[montserrat] font-normal text-base/[24px] space-[8px] tracking-normal text-[#CCCCCC]">{item}</p>  
                    ))
                  }
                </div>

                <button onClick={seeMoreBtn} name={`btn-${index}`} className="w-fit py-[12px] px-[24px] border-white border-1 rounded-[48px] font-[montserrat] font-extrabold text-sm/none tracking-[0.02em] hover:cursor-pointer">See more</button>
              </div>

              <div className="col-span-2 max-xxs:order-1">
                <img src={Rectangle} alt='Rectangle' className='w-full h-full object-fill rounded-[20px]' />
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}