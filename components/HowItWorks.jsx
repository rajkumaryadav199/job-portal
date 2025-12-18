import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-[#F9FAFB] px-6 py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* ===== HEADING ===== */}
        <h2 className="text-[36px] font-extrabold mb-14 ml-[45px] text-left">
          <span className="text-[#00AFE3]">How it</span>{" "}
          <span className="text-[#1F2933]">works.</span>
        </h2>

        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">

          {/* Card 1 */}
          <div className="mx-auto w-[260px] h-[260px] bg-white border-2 border-[#DBDFE4] rounded-2xl flex flex-col items-center justify-center text-center px-6">
            <Image
              src="/asset/icons/form.svg"
              alt="Fill details"
              width={64}
              height={64}
              className="mb-7"
            />
            <p className="text-[20px] font-extrabold text-[#1F2933] leading-snug">
              Fill in your details for your project
            </p>
          </div>

          {/* Card 2 */}
          <div className="mx-auto w-[260px] h-[260px] bg-white border-2 border-[#DBDFE4] rounded-2xl flex flex-col items-center justify-center text-center px-6">
            <Image
              src="/asset/icons/quotes.svg"
              alt="Receive quotes"
              width={64}
              height={64}
              className="mb-7"
            />
            <p className="text-[20px] font-extrabold text-[#1F2933] leading-snug">
              Receive quotes from Professionals
            </p>
          </div>

          {/* Card 3 */}
          <div className="mx-auto w-[260px] h-[260px] bg-white border-2 border-[#DBDFE4] rounded-2xl flex flex-col items-center justify-center text-center px-6">
            <Image
              src="/asset/icons/compare.svg"
              alt="Compare quotes"
              width={64}
              height={64}
              className="mb-7"
            />
            <p className="text-[20px] font-extrabold text-[#1F2933] leading-snug">
              Compare your quotes and enjoy great savings
            </p>
          </div>

        </div>

        {/* ===== BUTTON ===== */}
        <div className="mt-20 text-center">
          <button className="bg-[#10C87B] text-white text-[15px] font-semibold px-15 py-2 rounded-full shadow-lg hover:opacity-90 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
