// import Image from "next/image";
// const jobs = [
//   { title: "Tree Surgeon", img:'asset/images/tree.jpg' },
//   { title: "Landscaper", img: 'asset/images/land.jpg' },
//   { title: "Personal Trainer", img: 'asset/images/personal.jpg' },
//   { title: "Driveways", img: 'asset/images/driver.jpg' },
// ];

 
  
// export default function PopularJobs() {
//   return (
//       <section className="py-16">
//       {/* Header aligned with cards */}
//       <div className="max-w-[1150px] mx-auto flex justify-between items-center mb-10 px-4">
//         <h2 className="text-[34px] font-extrabold tracking-tight">
//           <span className="text-[#00AFE3]">Popular</span>{" "}
//           <span className="text-[#253238]">jobs.</span>
//         </h2>

//         {/* Arrow capsule aligned with last card */}
//       <div className="flex justify-end mt-10">
//   <div className="flex items-center bg-[#7DD6F1] rounded-full px-2 py-1 shadow-md">

//     {/* Left arrow */}
//     <button className="w-8 h-8 flex items-center justify-center">
//       <Image
//         src="/asset/icons/arrow-left.svg"
//         alt="Previous"
//         width={8}
//         height={8}
//       />
//     </button>

//     {/* Right arrow */}
//     <button className="w-8 h-8 flex items-center justify-center">
//       <Image
//         src="/asset/icons/arrow-right.svg"
//         alt="Next"
//         width={8}
//         height={8}
//       />
//     </button>

//   </div>
// </div>
//          {/* <div className="flex justify-end mt-15">
//     <div className="flex items-center bg-[#7DD6F1] rounded-full px-2 py-1">
//       <button className="w-8 h-8 flex items-center justify-center text-[#253238] text-xl font-bold">
//         ‹
//       </button>
//       <button className="w-8 h-8 flex items-center justify-center text-[#253238] text-xl font-bold">
//         ›
//       </button>
//     </div>
//   </div> */}
//   </div>

//       {/* Cards container */}
//       <div className="max-w-[1150px] mx-auto px-4">
//         <div className="flex justify-between">
//           {jobs.map((job) => (
//             <div
//               key={job.title}
//               className="relative bg-[#00AFE3] w-[260px] h-[320px] rounded-2xl"
//             >
//               {/* Title */}
//               <div className="pt-6 pl-10">
//                 <h3 className="text-white font-semibold text-sm">
//                   {job.title}
//                 </h3>
//               </div>

//               {/* Image */}
//               <div
//                 className="absolute bottom-0 right-0
//                            w-[225px] h-[255px]
//                             rounded-tl-xl rounded-br-xl
//                             rounded-tr-none rounded-bl-none overflow-hidden
//                            bg-cover bg-bottom"
//                 style={{ backgroundImage: `url(${job.img})` }}
//               >
//                 {/* Explore button */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
//                   <button className="bg-white text-[#253238] text-sm font-bold px-6 py-2 rounded-full shadow">
//                     Explore
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Carousel dots */}
//       <div className="flex justify-center items-center gap-4 mt-12">
//         <span className="w-10 h-2.5 rounded-full bg-[#253238]"></span>
//         <span className="w-3 h-3 rounded-full bg-[#253238]"></span>
//         <span className="w-3 h-3 rounded-full bg-[#253238]"></span>
//         <span className="w-3 h-3 rounded-full bg-[#253238]"></span>
//       </div>
//     </section>
//   );
// }
   import Image from "next/image";

const jobs = [
  { title: "Tree Surgeon", img: "asset/images/tree.jpg" },
  { title: "Landscaper", img: "asset/images/land.jpg" },
  { title: "Personal Trainer", img: "asset/images/personal.jpg" },
  { title: "Driveways", img: "asset/images/driver.jpg" },
];

export default function PopularJobs() {
  return (
    <section className="py-16">
      {/* Header aligned with cards */}
      <div className="max-w-[1150px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 px-4">
        <h2 className="text-[34px] font-extrabold tracking-tight mb-6 sm:mb-0">
          <span className="text-[#00AFE3]">Popular</span>{" "}
          <span className="text-[#253238]">jobs.</span>
        </h2>

        {/* Arrow capsule aligned */}
        <div className="flex justify-end w-full sm:w-auto">
          <div className="flex items-center bg-[#7DD6F1] rounded-full px-2 py-1 shadow-md">
            {/* Left arrow */}
            <button className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/asset/icons/arrow-left.svg"
                alt="Previous"
                width={8}
                height={8}
              />
            </button>
            {/* Right arrow */}
            <button className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/asset/icons/arrow-right.svg"
                alt="Next"
                width={8}
                height={8}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Cards container */}
      <div className="max-w-[1150px] mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto no-scrollbar py-2">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex-shrink-0 relative bg-[#00AFE3] w-[260px] h-[320px] rounded-2xl"
            >
              {/* Title */}
              <div className="pt-6 pl-6">
                <h3 className="text-white font-semibold text-sm">{job.title}</h3>
              </div>

              {/* Image */}
              <div
                className="absolute bottom-0 right-0 w-[225px] h-[255px] rounded-tl-xl rounded-br-xl overflow-hidden bg-cover bg-bottom"
                style={{ backgroundImage: `url(${job.img})` }}
              >
                {/* Explore button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <button className="bg-white text-[#253238] text-sm font-bold px-6 py-2 rounded-full shadow">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <span className="w-10 h-2.5 rounded-full bg-[#253238]"></span>
        <span className="w-3 h-3 rounded-full bg-[#253238]"></span>
        <span className="w-3 h-3 rounded-full bg-[#253238]"></span>
        <span className="w-3 h-3 rounded-full bg-[#253238]"></span>
      </div>
    </section>
  );
}
