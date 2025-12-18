import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#00AFE3] text-white px-6 sm:px-10 py-[80px]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT SECTION ================= */}
        <div className="flex flex-col items-start">

          {/* Trustpilot */}
          <div className="mb-6">
            <div className="inline-flex items-center bg-[#A8E4F6] px-4 h-[32px] rounded-full">

              <span className="text-[12px] font-semibold text-[#253238] mr-2">
                Excellent
              </span>

              {/* 5 boxed stars */}
              <div className="flex gap-[3px] mr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-[14px] h-[14px] bg-[#00B67A] rounded-[2px] flex items-center justify-center"
                  >
                    <Image
                      src="/asset/icons/star.svg"
                      alt="star"
                      width={9}
                      height={9}
                      className="invert brightness-0"
                    />
                  </div>
                ))}
              </div>

              {/* Trustpilot */}
              <div className="flex items-center gap-1">
                <Image
                  src="/asset/icons/star.svg"
                  alt="trustpilot"
                  width={14}
                  height={14}
                />
                <span className="text-[12px] text-black">
                  Trustpilot
                </span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.05]">
            Find Local
            <br />
            Services.
            <br />
            <span className="inline-block mt-2 text-black font-extrabold">
              Fast.
            </span>
          </h1>

          {/* Sub text */}
          <p className="mt-4 text-[14px] text-white/90 max-w-md">
            Get instant quotes from local professionals.
          </p>

          {/* Search */}
          <div className="mt-8 w-full max-w-[320px]">
            <div className="h-[52px] bg-white rounded-full px-5 flex items-center shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
              <input
                placeholder="Search for a service"
                className="flex-1 outline-none text-[14px] font-semibold text-black placeholder-[#6C6C6C]"
              />
              <Image
                src="/asset/icons/search (1).svg"
                alt="search"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>

     {/* ================= RIGHT SECTION ================= */}
<div className="pt-0 lg:pt-[72px] flex justify-start">
  <div className="max-w-[520px]">

    <p className="text-[15px] font-semibold mb-4">
      Popular Services:
    </p>

    <div className="flex flex-col gap-4">

      {/* Row 1 */}
      <div className="flex gap-4">
        {["Landscapers", "Patio Layers", "Private Tutors"].map(item => (
          <span
            key={item}
            className="px-4 py-[6px] w-[150px] text-[15px] text-center text-white 
                       rounded-full border-2 border-white font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-4">
        {["Fence & Gate Installers", "Personal Trainers"].map(item => (
          <span
            key={item}
            className="px-4 py-[6px] text-[15px] text-white 
                       rounded-full border-2 border-white font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex gap-4">
        {["Tree Surgeons", "Architects", "Painter Decorators"].map(item => (
          <span
            key={item}
            className="px-4 py-[6px] w-[250px] text-[15px] text-center text-white 
                       rounded-full border-2 border-white font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Row 4 */}
      <div className="flex gap-4">
        {["Airport Transfers", "Physics and Maths Tutors"].map(item => (
          <span
            key={item}
            className="px-4 py-[6px] text-[15px] text-white 
                       rounded-full border-2 border-white font-medium"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  </div>
</div>


      </div>
    </section>
  );
}
