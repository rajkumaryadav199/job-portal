export default function HowItWorks() {
  return (
    <section className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-extrabold mb-8">
        <span className="text-primary">How it</span> <span className="text-gray-900">works.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          "Fill in your details for your project",
          "Receive quotes from Professionals",
          "Compare your quotes and enjoy great savings",
        ].map((text, i) => (
          <div key={text} className="bg-white border border-gray-200 rounded-2xl p-8 text-center h-56 flex flex-col items-center justify-center">
            <div className="mb-6">
              {i === 0 && (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11V3h6v8" stroke="var(--brand-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="var(--brand-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {i === 1 && (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="var(--brand-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20c0-3.31 2.69-6 6-6h0" stroke="var(--brand-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {i === 2 && (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5h18v12H3z" stroke="var(--brand-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 9h8" stroke="var(--brand-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>

            <p className="font-extrabold text-gray-900 text-lg leading-tight max-w-xs">{text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="btn-success">Get Started</button>
      </div>
    </section>
  );
}
