import Image from "next/image";

const Chat = () => {
  return (
    <div>
      <div className="flex flex-col p-4 ml-4 mt-4 gap-8 bg-white border  border-[#E5E7EB] rounded-2xl w-86 h-128 ">
        <h1 className="text-[22px] text-[#111928] font-medium">Chats</h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-4 relative">
            <div>
              <Image src="/user1.WEBP" alt="user1" width={56} height={56} />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[16px] text-[#111928] font-medium">
                Jacob Jones
              </h1>
              <p className="truncate text-[#4b5563] text-[14px] font-medium">
                See you tomorrow at the meeting!
              </p>
              <div className="flex gap-1 text-[12px] text-[#6b7280]">
                <p>.</p>
                <p>Dec 19, 2024</p>
              </div>
            </div>
            <div className="border rounded-full w-3.5 h-3.5 shrink-0 bg-[#22ad5c] border-[#22ad5c] absolute left-13 top-12 outline-3 outline-white"></div>
            <div className="border rounded-full  text-center text-white w-6.5 h-6.5 shrink-0 bg-[#375fc7] border-[#375fc7] absolute right-2 top-6 ">
              3
            </div>
          </div>
          <div className="flex justify-start p-3 items-center gap-4 relative">
            <div>
              <Image src="/user2.WEBP" alt="user2" width={56} height={56} />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[16px] text-[#111928] font-medium">
                Wilium Smith
              </h1>
              <p className=" text-[#4b5563] text-[14px] font-medium">
                Whats up?
              </p>
              <div className="flex gap-1 text-[12px] text-[#6b7280]">
                <p>Dec 19, 2024</p>
              </div>
            </div>
            <div className="border rounded-full w-3.5 h-3.5 shrink-0 bg-[#22ad5c] border-[#22ad5c] absolute left-13 top-15 outline-3 outline-white"></div>
          </div>
          <div className="flex justify-start p-2 items-center gap-4 ml-1 relative">
            <div>
              <Image src="/user3.WEBP" alt="user3" width={56} height={56} />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[16px] text-[#111928] font-medium">
                Johurul Haque
              </h1>

              <div className="flex gap-3 items-center text-[12px] text-[#6b7280]">
                <p className=" text-[#4b5563] text-[14px] font-medium">
                  Whats up?
                </p>
                <div className="flex gap-1 text-[12px] text-[#6b7280]">
                  <p>.</p>
                  <p>Dec 19, 2024</p>
                </div>
              </div>
            </div>
            <div className="border rounded-full w-3.5 h-3.5 shrink-0 bg-[#ff8d62] border-[#ff8d62] absolute left-13 top-12 outline-3 outline-white"></div>
          </div>
          <div className="flex justify-start ml-3 items-center gap-4 relative">
            <div>
              <Image src="/user4.WEBP" alt="user4" width={56} height={56} />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[16px] text-[#111928] font-medium">
                M. Chowdhury
              </h1>
              <p className=" truncate text-[#4b5563] text-[14px] font-medium">
                Where are you now ?
              </p>
              <div className="flex gap-1 text-[12px] text-[#6b7280]">
                <p>.</p>
                <p>Dec 19, 2024</p>
              </div>
            </div>
            <div className="border rounded-full w-3.5 h-3.5 shrink-0 bg-[#ff8d62] border-[#ff8d62] absolute left-11 top-12 outline-3 outline-white"></div>
            <div className="border rounded-full  text-center text-white w-6.5 h-6.5 shrink-0 bg-[#375fc7] border-[#375fc7] absolute right-2 top-6 ">
              2
            </div>
          </div>
          <div className="flex justify-start p-2 items-center gap-4 ml-1 relative">
            <div>
              <Image src="/user5.WEBP" alt="user5" width={56} height={56} />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[16px] text-[#111928] font-medium">
                Akagami
              </h1>

              <div className="flex gap-3 items-center text-[12px] text-[#6b7280]">
                <p className=" text-[#4b5563] text-[14px] font-medium">
                  Hey, how are you?
                </p>
                <div className="flex gap-1 text-[12px] text-[#6b7280]">
                  <p>.</p>
                  <p>Dec 19, 2024</p>
                </div>
              </div>
            </div>
            <div className="border rounded-full w-3.5 h-3.5 shrink-0 bg-[#ff8d62] border-[#ff8d62] absolute left-13 top-12 outline-3 outline-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
