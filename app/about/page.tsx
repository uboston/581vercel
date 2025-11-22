import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#D4A574] via-[#C19A6B] to-[#A67C52] py-20 px-5 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-[#F5E6D3] drop-shadow-lg">About Payem</h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 px-5 bg-[#F5E6D3]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="w-full h-96 bg-gradient-to-br from-[#D4A574] to-[#C19A6B] rounded-lg flex items-center justify-center text-[#F5E6D3] text-2xl font-semibold shadow-lg">
                  Payem
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#8B6F47] mb-6">Welcome to My World</h2>
                <div className="space-y-4 text-[#5C4A35] text-lg leading-relaxed">
                  <p>
                    Based in the beautiful city of Pleasant Grove, Utah, I am passionate about 
                    capturing life&apos;s most precious moments through the lens of my camera. My 
                    Persian heritage influences my artistic vision, bringing warmth, depth, and 
                    a unique perspective to every photograph.
                  </p>
                  <p>
                    With a style inspired by the desert landscapes, golden sunsets, and the rich 
                    earth tones of my cultural background, I strive to create images that tell 
                    stories and evoke emotions. Every session is an opportunity to create 
                    something beautiful and timeless.
                  </p>
                  <p>
                    Whether it&apos;s a wedding, family portrait, or special event, I approach each 
                    project with dedication, creativity, and an eye for detail. My goal is to 
                    provide you with photographs that you&apos;ll treasure for a lifetime.
                  </p>
                </div>
                <div className="mt-8 text-right">
                  <p className="text-[#A67C52] italic text-xl">— Payem</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

