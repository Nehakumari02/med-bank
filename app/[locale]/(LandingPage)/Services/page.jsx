import React from 'react'
import PriceTable from '@/components/PriceTable'
import SnackBar from '@/components/SnackBar'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const Services = ({params:{locale}}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("OurServices");
  return (
    <>
      <section className='pl-[38px] pr-[24px] md:pl-[156px]  md:pr-[95px]   w-full text-[#333333] font-DM-Sans flex flex-col items-center justify-center '>

        <div className=' relative  max-w-screen-lg w-full flex flex-col items-start pt-[24px] md:pt-[40px] lg:pt-[60px] '>
        <div className="absolute top-[28px] left-[-29px] md:top-[45px] lg:top-[68px]  md:left-[-54px]">
                <SnackBar text={"Services"} />
              </div>
          <div className='text-[14px] md:text-[18px]'>Our Services</div>
          <div className='flex flex-col gap-[27px] md:gap-[65px] lg:gap-[76px] pt-[6px] md:pt-[20px]'>
            <div className=' flex flex-col gap-[6px] md:gap-[20px]'>
              
              <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                DNA Sequencing
              </div >

              <div className='font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[36px]'>
              {t("service1")}
              </div>
            </div>
            <div className='flex flex-col gap-[6px] md:gap-[20px]'>
              <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                RNA Sequencing
              </div >

              <div className='font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[36px]'>
              {t("service2")}
              </div>
            </div>

            <div className='flex flex-col gap-[6px] md:gap-[20px]'>

              <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                Amplicon Sequencing
              </div >

              <div className='font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[36px]'>
                {t("service3")}
              </div>
            </div>
          </div>

        </div>

      </section>
      <div className="px-[10px] md:px-[50px] lg:px-[134px] pt-[24px] md:pt-[100px] w-full text-[#333333]">
        <table className="w-full">
          <thead className="">
            <tr className="gradient-table-head rounded-tl-[10px] rounded-tr-[10px] h-[80px] text-[10px] px-[20px] md:text-[20px] md:-[24px] flex items-center justify-between  ">
              <th className="font-sans font-normal  leading-[40px]">{t("tableHead1")}</th>
              <th className="font-sans font-normal  leading-[40px]">{t("tableHead2")}</th>
              <th className="font-sans font-normal  leading-[40px]">{t("tableHead3")}</th>
              <th className="font-sans font-normal leading-[40px]">{t("tableHead4")}</th>
            </tr>
          </thead>
          <tbody className="w-full hidden">
            <tr className=" h-[80px] font-sans font-medium text-[20px] text-[#333333] border-gradient-primary-light border-b-[4px] border-dashed ">
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333] border-b-[4px] border-dashed">
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333] border-b-[4px] border-dashed ">
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>

          </tbody>
        </table>
        <div className='w-full flex items-center justify-center font-DM-Sans font-bold text-[18px] md:text-[24px] lg:text-[40px] mt-[20px] py-[20px]'>Coming Soon...</div>
      </div>
    </>
  )
}

export default Services
