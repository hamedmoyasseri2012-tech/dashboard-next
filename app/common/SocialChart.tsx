"use client"
import { HiDotsHorizontal } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { VscTwitter } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { TfiVimeo } from "react-icons/tfi";
import { SlSocialFacebook } from "react-icons/sl";

const SocialChart = () => {
  return (
    <div className="flex flex-col p-6 ml-4 mt-4 gap-4 bg-white border  border-[#E5E7EB] rounded-2xl w-86 h-98 overflow-x-hidden scroll-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[22px] font-medium text-[#111928]">Top Channels</h1>
        <i className="text-[16px] text-[#d0d4d8]">
          <HiDotsHorizontal />
        </i>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-133">
          <thead>
            <tr className="text-left text-[#8a8f96] text-sm">
              <th>SOURCE</th>
              <th>VISITORS</th>
              <th>REVENUES</th>
              <th>SALES</th>
              <th>CONVERSION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sx font-medium border-b mx-4 border-[#e5e7eb]">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <i className="border rounded-full p-1.5 bg-[#e5e7eb] border-[#e5e7eb]">
                    <FcGoogle />
                  </i>
                  <span>Google</span>
                </div>
              </td>

              <td>3.5K</td>
              <td className="text-[#10b981]">$4,220.00</td>
              <td>3456</td>
              <td>2.59%</td>
            </tr>
            <tr className="text-sx font-medium border-b mx-4 border-[#e5e7eb]">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <i className="border rounded-full p-1.5 bg-black text-white border-[#e5e7eb]">
                    <VscTwitter />
                  </i>
                  <span>X.com</span>
                </div>
              </td>
              <td>3.5K</td>
              <td className="text-[#10b981]">$4,220.00</td>
              <td>3456</td>
              <td>2.59%</td>
            </tr>
            <tr className="text-sx font-medium border-b mx-4 border-[#e5e7eb]">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <i className="border rounded-full p-1.5 bg-black text-white border-[#e5e7eb]">
                    <FaGithub />
                  </i>
                  <span>Github</span>
                </div>
              </td>
              <td>3.5K</td>
              <td className="text-[#10b981]">$4,220.00</td>
              <td>3456</td>
              <td>2.59%</td>
            </tr>
            <tr className="text-sx font-medium border-b mx-4 border-[#e5e7eb]">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <i className="border rounded-full p-1.5 bg-[#4dc3ff] text-white border-[#4dc3ff]">
                    <TfiVimeo />
                  </i>
                  <span>Vimeo</span>
                </div>
              </td>
              <td>3.5K</td>
              <td className="text-[#10b981]">$4,220.00</td>
              <td>3456</td>
              <td>2.59%</td>
            </tr>
            <tr className="text-sx font-medium border-b mx-4 border-[#e5e7eb]">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <i className="border rounded-full p-1.5 bg-[#375fc7] text-white border-[#375fc7]">
                    <SlSocialFacebook />
                  </i>
                  <span>Facebook</span>
                </div>
              </td>
              <td>3.5K</td>
              <td className="text-[#10b981]">$4,220.00</td>
              <td>3456</td>
              <td>2.59%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialChart;
