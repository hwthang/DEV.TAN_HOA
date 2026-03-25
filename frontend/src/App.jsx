import React, { useState } from "react";
import {
  AlbumLg,
  AlbumMb,
  AlbumMd,
  Background1,
  FaqLg,
  FaqMb,
  FaqMd,
  HighlightLg,
  HighlightMb,
  LogoTanHoa,
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  TeamLg,
  TeamMb,
  TeamMd,
  TimelineLg,
  TimelineMb,
  TimelineMd,
} from "./assets/images";
import { ChevronRight, CircleQuestionMark, Flame, Menu, X } from "lucide-react";
import { scrollToId } from "./utils";
const MENU = [
  { id: "hero", label: "Trang chủ" },
  { id: "intro", label: "Giới thiệu" },
  { id: "team", label: "Đội hình" },
  { id: "timeline", label: "Lịch trình" },
  { id: "album", label: "Thư viện" },
];

const SECTIONS = [
  { id: "team", lg: TeamLg, md: TeamMd, mb: TeamMb },
  { id: "timeline", lg: TimelineLg, md: TimelineMd, mb: TimelineMb },
  { id: "highlight", lg: HighlightLg, md: HighlightMb, mb: HighlightMb },
  { id: "album", lg: AlbumLg, md: AlbumMd, mb: AlbumMb },
  { id: "faq", lg: FaqLg, md: FaqMd, mb: FaqMb },
];

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleScrollToId = (id) => {
    scrollToId(id);
    setOpenMenu(false);
  };

  return (
    <div className="relative z-0">
      <div className="sticky top-0 z-90 h-0 w-full transition-all duration-[500ms]">
        <div className="absolute top-0 h-24 w-full bg-[#00003F]/90 backdrop-blur-sm shadow-md">
          <div className="h-full w-full flex items-center justify-between px-8 lg:px-16">
            <div className="h-20 w-full flex items-center justify-start gap-4" onClick={() => handleScrollToId("hero")}>
              <img src={LogoTanHoa} className="h-full object-contain" />
            </div>
            <div className="hidden lg:flex w-full items-center justify-end gap-8 text-white">
              {MENU.map((item) => (
                <div key={item.id}>
                  <button onClick={() => handleScrollToId(item.id)} className="cursor-pointer font-semibold">
                    {item.label}
                  </button>
                </div>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf23eKXxUlXN1muzNQ5KUKvVkkgZpp5TOEHcYBumfY-I4TNig/viewform"
                target="blank"
                className="cursor-pointer font-semibold"
              >
                Liên hệ
              </a>
            </div>
            <div className="flex lg:hidden text-white ">
              {openMenu ? (
                <div onClick={handleCloseMenu}>
                  <X />
                </div>
              ) : (
                <div onClick={handleOpenMenu}>
                  <Menu />
                </div>
              )}
            </div>
          </div>
          <div
            className={`${
              openMenu ? "max-h-100" : "max-h-0"
            } overflow-hidden transition-all duration-500 lg:hidden flex flex-col gap-2 bg-[#00003F] backdrop-blur-sm text-white`}
          >
            {MENU.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToId(item.id)}
                className="text-left px-4 py-2 hover:bg-blue-950 transition"
              >
                {item.label}
              </button>
            ))}
            <div className="text-left px-4 py-2 hover:bg-blue-950 transition">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf23eKXxUlXN1muzNQ5KUKvVkkgZpp5TOEHcYBumfY-I4TNig/viewform"
                target="blank"
              >
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="hero" className="pt-24 min-h-screen h-screen relative z-0">
          <div className={`absolute top-0 w-full h-full -z-10 `}>
            <img src={Background1} className="h-full w-full object-cover" />
          </div>
          <div className="h-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6">
              <div
                className="uppercase text-3xl md:text-5xl lg:text-6xl bg-linear-to-r bg-gradient-to-r 


from-[#0046C8] 
via-[#005ADC] 
via-[#0064DC] 
via-[#008CE1] 
via-[#0096D7] 
via-[#00AAD7] 
via-[#23BEDC] 
via-[#2DAAD7] 
via-[#41CDE6] 
to-[#41CDE6] 
bg-clip-text text-transparent font-gajra"
              >
                Tháng Thanh Niên 2026
              </div>
              <div className="text-white md:text-xl font-semibold">
                Nhiệt huyết - Xung kích - Tình nguyện - Sáng tạo
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf23eKXxUlXN1muzNQ5KUKvVkkgZpp5TOEHcYBumfY-I4TNig/viewform"
                target="blank" className="w-fit flex gap-2 border px-8 h-12 items-center border-white rounded-full text-white font-semibold md:text-xl hover:bg-white hover:text-[#0000A0] transition-all duration-800">
                Tham gia đội hình ngay bây giờ <ChevronRight size={32} />
              </a>
            </div>
            <div className="absolute bottom-10 left-10 bg-[#00003F]/80 h-16 px-12 flex items-center font-semibold rounded-full text-white cursor-pointer">
              <span className="hidden md:inline"  onClick={() => handleScrollToId("faq")}>Câu hỏi thường gặp </span>
              <CircleQuestionMark className="md:hidden" />
            </div>
            <div className="absolute bottom-10 right-10 bg-[#00003F]/80 h-16 px-12 flex items-center font-semibold rounded-full text-white cursor-pointer"  onClick={() => handleScrollToId("highlight")}>
              <span className="hidden md:inline"> Hoạt động tiêu biểu</span>{" "}
              <Flame className="md:hidden" />
            </div>
          </div>
        </div>
        <div
          id="intro"
          className="min-h-screen pt-30 bg-gray-100 md:px-24 px-8 pb-12"
        >
          <div className="md:grid grid-cols-3 h-full gap-8 flex flex-col">
            <div className="col-span-2 flex bg-white flex items-center justify-center rounded-xl min-h-24">
              <div className="text-4xl lg:text-7xl font-extrabold uppercase py-8 font-gajra text-[#0000A0]">
                Tháng này có gì?
              </div>
            </div>
            <div className="row-span-2  relative">
              <img
                src={Pic1}
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 flex items-center justify-center h-10 bg-[#0000A0] rounded-lg font-semibold text-white">
                Tình nguyện
              </div>
            </div>
            <div className=" row-span-3 rounded-xl relative">
              <img
                src={Pic2}
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 flex items-center justify-center h-10 bg-[#0000A0] rounded-lg font-semibold text-white">
                Nhiệt huyết
              </div>
            </div>
            <div className=" row-span-2 relative">
              <img
                src={Pic3}
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 flex items-center justify-center h-10 bg-[#0000A0] rounded-lg font-semibold text-white">
                Xung kích
              </div>
            </div>
            <div className="h-60 relative">
              <div className="h-60 overflow-hidden rounded-xl">
                <img
                  src={Pic4}
                  className="h-full w-full object-cover scale-220"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 flex items-center justify-center h-10 bg-[#0000A0] rounded-lg font-semibold text-white">
                Sáng tạo
              </div>
            </div>
            <div className="col-span-2 text-blue-800 font-semibold">
              Thiết thực chào mừng kỷ niệm 95 năm Ngày thành lập Đoàn TNCS Hồ
              Chí Minh (26/3/1931 - 26/3/2026). Tháng 3 này, hãy cùng Chi đoàn
              khu phố Tân Hòa thắp lên ngọn lửa nhiệt huyết, sẵn sàng xung kích
              trên mọi mặt trận để cùng chào mừng Tháng Thanh niên 2026. Tháng
              Thanh niên là hoạt động thường niên của Chi đoàn, các phần việc
              trong Tháng Thanh niên luôn thu hút sự quan tâm và sự tham gia
              nhiệt tình của các thế hệ đoàn viên Chi đoàn. Hứa hẹn Tháng Thanh
              niên 2026 sẽ tiếp tục mang đến một hành trình bức phá của tuổi trẻ
              thế hệ mới năm nay. Bạn đã sẵn sàng tham gia vào đội hình Tháng
              Thanh niên 2026 Chi đoàn khu phố Tân Hòa chưa?{" "}
            </div>
          </div>
        </div>

        {SECTIONS.map((item) => (
          <div className="w-full" id={item.id}>
            <img
              className="object-cover w-full h-full hidden md:hidden lg:block"
              src={item.lg}
            />
            <img
              className="object-cover w-full h-full hidden md:block lg:hidden"
              src={item.md}
            />
            <img
              className="object-cover w-full h-full  md:hidden lg:hidden"
              src={item.mb}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
