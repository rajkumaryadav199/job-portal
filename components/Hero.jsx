export default function Hero() {
  return (
    <section className="bg-primary text-white px-8 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="pill text-xs" style={{background:'#e6f9ff'}}>
            <strong style={{color:'#007b9a'}}>Excellent</strong> ★★★★★ Trustpilot
          </span>
          <h1 className="text-5xl font-bold mt-4 leading-tight text-white">
            Find Local Services.
            <br />
            <span className="text-black bg-white px-2 py-1 rounded">Fast.</span>
          </h1>
          <p className="mt-4 text-sm text-white/90">
            Get instant quotes from local professionals.
          </p>

          <div className="mt-6">
            <div className="hero-search w-full max-w-xl flex items-center gap-3">
              <input
                className="flex-1 border-0 outline-none bg-transparent text-gray-900"
                placeholder="Search for a service"
              />
              <button className="btn-primary">Search</button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-start justify-end">
          {[
            "Landscapers",
            "Patio Layers",
            "Private Tutors",
            "Fence & Gate Installers",
            "Personal Trainers",
            "Tree Surgeons",
            "Architects",
            "Painter Decorators",
            "Airport Transfers",
            "Physics and Maths Tutors",
          ].map((item) => (
            <span
              key={item}
              className="bg-white text-primary px-3 py-1 rounded-full text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
