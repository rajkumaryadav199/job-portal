const sharedImg = "https://images.unsplash.com/photo-1524594154906-cf3d5f7a2b8b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1";

const jobs = [
  { title: "Tree Surgeon", img: sharedImg },
  { title: "Landscaper", img: sharedImg },
  { title: "Personal Trainer", img: sharedImg },
  { title: "Driveways", img: sharedImg },
];

export default function PopularJobs() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-primary">Popular</span> <span className="text-gray-900">jobs.</span>
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="rounded-xl overflow-hidden shadow-md relative h-64"
          >
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${job.img})` }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/25">
              <h3 className="text-white font-semibold">{job.title}</h3>
              <button className="mt-2 bg-white text-sm px-3 py-1 rounded">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
