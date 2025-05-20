import { useState } from "react";
import type { Route } from "./+types/contact";
import { Form } from "react-router";
import Footer from "~/footer/footer";
import Navigation from "~/navigation/navigation";

interface Office {
  region: string;
  city: string; 
  contact?: string;
  email?: string;
  address?: string;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "This is the contact screen in technical assessment done by HowJun." },
  ];
}

export default function Contact() {
  const [readPolicy, setReadPolicy] = useState<boolean>(false);
  const enquiries = ["Become a Client", "Join the team", "Investor enquiry", "Others"];
  const offices: Office[] = [
    {
      region: 'asia',
      city: 'Kuala Lumpur',
      contact: '+60 3 2789 9038',
      email: 'my@growthops.asia',
      address: 'Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia'
    },
    {
      region: 'asia',
      city: 'Manila',
      contact: '+63 2 7586 4771',
      email: 'man@growthops.asia',
      address: 'KMC Solutions, 5F V Corporate Center, L.P. Leviste, Salcedo Village, Makati City 1227'
    },    
    {
      region: 'asia',
      city: 'Hong Kong',
      contact: '+852 2805 9009',
      email: 'hkg@growthops.asia',
      address: '29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong'
    },
    {
      region: 'asia',
      city: 'Singapore',
      contact: '+65 6220 8383',
      email: 'sg@growthops.asia',
      address: '1 Neil Rd, #02-02, Singapore 088804'
    },
    {
      region: 'middle east',
      city: 'United Arab Emirates',
      address: 'Building 1, Unit B304, Dubai Design District'
    },
  ]
  const asia = ['Hong Kong', 'Kuala Lumpur', 'Manila', 'Singapore'];
  const middleEast = ['United Arab Emirates'];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <main className="relative h-[2900px] max-xxs:h-full w-max-[1366px] w-full w-min-[375px] bg-black flex flex-col items-center overflow-hidden">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>

      <Navigation />
      
      <div className="max-w-[1366px] min-w-[375px] w-full h-[1326px] px-[80px] max-xxs:px-[23px] justify-self-center">
        <h1 className="mt-[173px] max-xxs:mt-[150px] font-[montserrat] font-extrabold text-8xl/[88px] max-xxs:text-5xl/[48px] max-xxs:tracking-normal tracking-[-0.02em] uppercase text-white">Contact us</h1>

        <p className="w-[587px] max-xxs:w-full mt-5 font-[montserrat] font-medium text-[32px]/[44px] max-xxs:text-xl/[24px] tracking-[-0.01em]">Let&rsquo;s create something awesome together</p>

        <Form onSubmit={handleFormSubmit} className="max-w-[793px] w-full h-fit mt-13">
          <p className="font-[montserrat] font-semibold text-sm/none tracking-normal text-[#999D9F]">Full name <span className="text-red-700">*</span></p>
          <input name="name" type="text" className="max-w-[381px] w-full h-[52px] mt-2 px-5 rounded-xl bg-[#0E1015] border-1 border-[#F5F5F53D] font-[montserrat]" required />

          <div className="grid grid-cols-2 max-xxs:grid-cols-1 gap-5 mt-10">
            <div>
              <p className="font-[montserrat] font-semibold text-sm/none tracking-normal text-[#999D9F]">Phone number <span className="text-red-700">*</span></p>
              <div className="relative flex flex-row mt-2">
                <select name="prefix" className="w-[94px] h-[52px] border-1 rounded-tl-xl rounded-bl-xl bg-[#0E1015] border-[#F5F5F53D] font-[montserrat] font-medium text-base/none tracking-normal text-center">
                  <option className="text-white" value="+60">+60</option>
                  <option className="text-white" value="+65">+65</option>
                </select>
              
                <input name="phone" type="number" className="max-w-[287px] w-full h-[52px] px-5 rounded-tr-xl rounded-br-xl bg-[#0E1015] border-1 border-[#F5F5F53D] font-[montserrat] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" required />
              </div>
            </div>

            <div>
              <p className="font-[montserrat] font-semibold text-sm/none tracking-normal text-[#999D9F]">Work email <span className="text-red-700">*</span></p>
              <input name="email" type="email" className="max-w-[381px] w-full h-[52px] mt-2 px-5 rounded-xl bg-[#0E1015] border-1 border-[#F5F5F53D] font-[montserrat]" required />
            </div>

          </div>

          <div className="mt-10">
            <p className="font-[montserrat] font-semibold text-sm/none tracking-normal text-[#999D9F]">I want to <span className="text-red-700">*</span></p>

            <div className="w-full flex xxs:flex-row max-xxs:flex-col gap-13 max-xxs:gap-0">
              {
                enquiries.map((item, index) => (
                  <label key={`enquiry-${index}`} className="flex w-fit items-center gap-3 mt-6 font-[montserrat] font-medium text-base/none tracking-normal text-white">
                    <input type="radio" name="enquiry" value={item} required />
                    {item}
                  </label>
                ))
              }
            </div>
          </div>

          <div className="mt-10">
            <p className="font-[montserrat] font-semibold text-sm/none tracking-normal text-[#999D9F]">Tell us more</p>
            <textarea name="content" className="w-full h-[230px] mt-2 px-5 py-5 rounded-xl bg-[#0E1015] border-1 border-[#F5F5F53D] font-[montserrat] resize-none" placeholder="Briefly describe your message here" />
          </div>

          <div className="flex flex-col gap-7 mt-12 ">
            <label className="flex flex-row gap-5 items-center font-[montserrat] font-medium text-sm/none tracking-normal text-white">
              <input name="subscribe" type="checkbox" className="size-[18px]" />
              I want to subscribe to the occasional insightful materials from GrowthOps. (optional)
            </label>

            <label className="flex flex-row gap-5 items-center">
              <input name="privacy" type="checkbox" className="size-[18px] bg-transparent" onClick={(e) => setReadPolicy(e.currentTarget.checked)} />
              <p className="font-[montserrat] font-medium text-sm/none tracking-normal text-white">I have read and agree to the website&rsquo;s <a className="font-bold underline">privacy policy</a>. <span className="text-red-700">*</span></p>
            </label>
          </div>

          <button type="submit" disabled={!readPolicy} className="flex px-[40px] py-[16px] gap-[20px] mt-10 bg-[#33FF85] border-1 border-white rounded-[48px] max-xxs:justify-self-center font-[montserrat] font-extrabold text-lg/none tracking-[0.02em] text-white shadow-[0_0_16px_rgba(255,51,102,0.5)] disabled:opacity-40">Submit</button>
        </Form>
      </div>


      <div className="max-w-[1366px] min-w-[375px] w-full px-[80px] max-xxs:px-[24px] max-xxs:mt-20">
        <h1 className="font-[montserrat] font-extrabold text-[88px]/none max-xxs:text-[35px]/none tracking-normal text-center uppercase text-[#FFFFFF]">our offices</h1>

        <div className="grid grid-cols-3 max-xxs:grid-cols-1 mt-12 gap-20 max-xxs:gap-15">
          {
            offices.map((item, index) => (
              <div key={`office-${index}`} className="flex flex-col justify-self-center w-[382px] max-xxs:w-[328px] h-[277px] max-xxs:h-fit rounded-3xl border-2 border-[#F5F5F514] px-[32px] py-[24px] gap-[24px] bg-[url(/app/contact/office-bg.png)] bg-cover bg-gradient-to-r from-[#0405068F] to-[#0405063D] shadow-[0_4px_24px_rgba(0,0,0,0.25)]]">
                <div>
                  <p className="font-[montserrat] font-semibold text-xs/none tracking-normal uppercase text-[#B4B4B4]">{item.region}</p>
                  <h2 className="mt-3 font-[montserrat] font-extrabold text-2xl/none tracking-normal text-[#07DDDA]" >{item.city}</h2>
                </div>

                <div className="h-fit flex flex-col gap-[12px]">
                  {
                    item.contact !== undefined ? 
                      <div className="flex gap-1">
                        <i className="size-[24px] fa-solid fa-phone text-base pr-3 text-[#B4B4B4]" />
                        <p className="font-[montserrat] font-medium text-base/none space-[8px] tracking-normal text-[#F5F5F5]">{item.contact}</p>
                      </div> : null
                  }
                  {
                    item.email !== undefined ? 
                      <div className="flex gap-1">
                        <i className="size-[24px] fa-solid fa-at text-base pr-3 text-[#B4B4B4]" />
                        <p className="font-[montserrat] font-medium text-base/none space-[8px] tracking-normal text-[#F5F5F5]">{item.email}</p>
                      </div> : null
                  }
                  {
                    item.address !== undefined ? 
                      <div className="flex gap-1">
                        <i className="size-[24px] fa-solid fa-location-dot text-base pr-3 text-[#B4B4B4]" />
                        <p className="font-[montserrat] font-medium text-base/[20px] space-[8px] tracking-normal text-[#F5F5F5]">{item.address}</p>
                      </div> : null
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <h2 className="mt-30 mb-[-200px] max-xxs:mb-0 max-w-[1366px] max-xxs:w-[327px] font-[montserrat] font-extrabold text-[88px]/[84px] max-xxs:text-[35px]/[40px] tracking-normal xxs:text-center uppercase text-[#FFFFFF]">Keep In Touch</h2>
      
      <div className="flex flex-col">
        <div className="absolute w-[1200px] h-[120px] mt-[-1100px] ml-[-1300px] rounded-[50%] bg-gradient-to-r from-[#FFDEE694] via-[#FF336666] to-[#D21C5599] rotate-25 blur-[100px] " />
        <div className="absolute w-[1200px] h-[150px] mt-[-1000px] ml-[-1500px] rounded-[50%] bg-gradient-to-r from-[#E9FFFA29] via-[#A7FBE758] to-[#116853] rotate-25 blur-[100px] " />
        <div className="absolute w-[1200px] h-[150px] mt-[-1600px] ml-[100px] rounded-[50%] bg-gradient-to-r from-[#FFDEE694] via-[#FF336666] to-[#D21C5599] rotate-205 blur-[100px] " />
        <div className="absolute w-[1200px] h-[150px] mt-[-1200px] ml-[300px] rounded-[50%] bg-gradient-to-r from-[#E9FFFA29] via-[#A7FBE758] to-[#116853] rotate-25 blur-[100px] " />
      </div>

      <div className="w-full px-[24px] flex flex-col gap-5 mt-[250px] mb-[-550px] items-center xxs:hidden">
        <p className="font-[montserrat] font-semibold text-sm/none tracking-normal uppercase text-[#666666]">Asia</p>
        {
          asia.map((item, index) => (
            <p key={`location-${index}`} className="font-[montserrat] font-normal text-base/none tracking-normal text-white">{item}</p>
          ))
        }

        <p className="font-[montserrat] font-semibold text-sm/none tracking-normal uppercase text-[#666666]">Middle East</p>
        {
          middleEast.map((item, index) => (
            <p key={`location-${index}`} className="font-[montserrat] font-normal text-base/none tracking-normal text-white">{item}</p>
          ))
        }
      </div>

      <Footer />
      
    </main>
  );
}