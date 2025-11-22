import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#D4A574] via-[#C19A6B] to-[#A67C52] py-32 px-5 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B98B] opacity-30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-[#F5E6D3] mb-4 drop-shadow-lg">
              Capturing Life&apos;s Beautiful Moments
            </h1>
            <p className="text-2xl text-[#F5E6D3] opacity-95 mb-8">
              Professional Photography in Pleasant Grove, Utah
            </p>
            <div className="text-6xl animate-spin-slow inline-block">☀️</div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 px-5 bg-[#F5E6D3]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#8B6F47] text-center mb-12 relative pb-4">
              Featured Work
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#E8B98B] to-transparent"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                  <div className="w-full h-72 bg-gradient-to-br from-[#D4A574] to-[#C19A6B] flex items-center justify-center text-[#F5E6D3] text-xl font-semibold">
                    Image {num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-5 bg-gradient-to-b from-[#F0DCC0] to-[#F5E6D3]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#8B6F47] text-center mb-12 relative pb-4">
              Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#E8B98B] to-transparent"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2 border-t-4 border-[#E8B98B]">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Portrait Photography</h3>
                <p className="text-[#5C4A35] leading-relaxed">Beautiful portraits that capture your essence</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2 border-t-4 border-[#E8B98B]">
                <div className="text-5xl mb-4">💍</div>
                <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Wedding Photography</h3>
                <p className="text-[#5C4A35] leading-relaxed">Memorable moments from your special day</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2 border-t-4 border-[#E8B98B]">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Family Sessions</h3>
                <p className="text-[#5C4A35] leading-relaxed">Cherished family memories</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2 border-t-4 border-[#E8B98B]">
                <div className="text-5xl mb-4">🌄</div>
                <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Event Photography</h3>
                <p className="text-[#5C4A35] leading-relaxed">Documenting your important events</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
