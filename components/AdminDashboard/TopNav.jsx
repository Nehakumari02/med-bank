"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {plusIcon} from './Icons'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from "../../public/Images/Home/logo.png";

const TopNav = () => {
  const path = usePathname().split("/")[3];
  const pathToRedirect = usePathname().split("/").slice(2).join("/");
  const language = usePathname().split("/")[1];
  const router = useRouter();
  const [userId, setUserId] = useState(1234);

  const t = useTranslations("AdminTopNavBar");

  const updateLanguage = (newLanguage) => {
    // Create new URL with updated language
    const newPath = `/${newLanguage}/${pathToRedirect}`;
    
    // Redirect to the new URL
    router.push(newPath);
  };

  return (
    <>
    <div className='w-full h-[60px] md:h-[104px] bg-white p-[10px] md:p-[32px] text-[#333333] flex items-center justify-between border-b-[1px] border-[#3333331A]'>
      <div>
        {path=="Dashboard"?<span className='hidden md:block font-DM-Sans font-bold text-[28px] leading-[24px] '>{t("welcomeMsg")}</span>:<></>}
        <div className="w-[40px] h-[40px] md:hidden">
          <Image src={Logo} alt="Logo" className="h-[40px] w-[40px]"></Image>
        </div>
      </div>
      <div className='flex items-center gap-[12px] md:gap-[24px]'>
      <div className='flex items-center justify-center gap-[10px] w-[67px]'>
          <button onClick={() => updateLanguage("jn")} >
            <span className={`${language == "jn" ? "border-b-[2px] border-[#003E5C99] text-black" : "text-[#333333]"} font-sans font-normal pb-[4px]`}>JN</span>
          </button>
          <div className='border-r-[2px] h-[20px] border-black'></div>
          <button onClick={() => updateLanguage("en")} >
            <span className={`${language == "en" ? "border-b-[2px] border-[#003E5C99] text-black" : "text-[#333333]"} font-sans font-normal pb-[4px]`}>EN</span>
          </button>
        </div>
        <div>
          <button className='h-full flex items-center justify-center md:hidden pt-[2px]'>{hamburderMenuIcon}</button>
          {/* <div className={`flex flex-col  justify-between w-full gap-[16px]`}>
            <button
              onClick={() => router.push(`/${language}/${session.user.id}/Settings`)}
              className={`h-[40px] w-full flex items-center justify-start gap-[10px] py-[8px] pr-[12px] pl-[12px] ${path=="Settings"?"border-l-[1px] border-[#3E8DA7] rounded-[3px] bg-[#E8F3FE]":""}`}
            >
              {path=="Settings"?settingSelectedIcon:settingsIcon}
              <span className={`font-DM-Sans font-normal text-[16px] leading-[24px] ${path=="Settings"?"text-[#3E8DA7]":""}`}>{t("settings")}</span>
            </button>
            <button
              onClick={() => router.push(`/${language}/${session.user.id}/Logout`)}
              className={`h-[40px] w-full flex items-center justify-start gap-[10px] py-[8px] pr-[12px] pl-[12px]`}
            >
              {logOutIcon}
              <span className={`font-DM-Sans font-normal text-[16px] leading-[24px]  `}>{t("logout")}</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
    {/* <div className='w-full h-[40px] my-[8px] px-[10px] md:hidden flex items-center justify-between'>
      <div>
        {path=="Dashboard"?<span className='font-DM-Sans font-bold text-[18px] leading-[24px] '>{t("welcomeMsg")}</span>:<></>}
      </div>
      <Link href={`/${language}/${userId}/NewOrder`} className='h-[40px] w-[117px] rounded-[6px] flex items-center justify-center gap-[10px] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] leading-[20px] '>{plusIcon}{t("newOrder")}</Link>
    </div> */}
    </>
  )
}

export default TopNav

const hamburderMenuIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6H20.25M3.75 12H20.25M3.75 18H20.25" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
