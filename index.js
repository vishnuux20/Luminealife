import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luminéa Life — Personalized Wellness</title>
        <meta name="description" content="Luminéa Life — Personalized wellness, perfected with science & AI" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 antialiased">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">LL</div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Luminéa Life</h1>
                <p className="text-xs text-slate-500">Personalized wellness, perfected with science & AI</p>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Luminéa Life — Illuminate your best self</h2>
              <p className="text-lg text-slate-600 max-w-xl mt-4">We combine clinical evidence and AI to create personalized supplement plans that evolve with you. Start with premium, research-led hero blends and unlock better recovery, sharper focus, sustained energy, and balanced stress response.</p>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-white to-slate-50 border border-slate-100">
                <img alt="Lifestyle" src="https://images.unsplash.com/photo-1526403224747-1c0b7b0f7f71?auto=format&fit=crop&w=1200&q=60" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold">Hero Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold bg-gradient-to-br from-blue-500 to-indigo-600">FO</div>
                <h4 className="mt-4 font-semibold text-lg">Focus & Gut–Brain Blend</h4>
                <p className="text-sm text-slate-600 mt-2">Calm alertness and sharper memory for peak performance.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold bg-gradient-to-br from-cyan-500 to-teal-600">EN</div>
                <h4 className="mt-4 font-semibold text-lg">Energy & Metabolism Booster</h4>
                <p className="text-sm text-slate-600 mt-2">Cellular energy and metabolic resilience without buzz.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold bg-gradient-to-br from-orange-400 to-amber-600">RE</div>
                <h4 className="mt-4 font-semibold text-lg">Recovery & Repair Blend</h4>
                <p className="text-sm text-slate-600 mt-2">Faster recovery, less soreness, better training ROI.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold bg-gradient-to-br from-emerald-400 to-green-600">AD</div>
                <h4 className="mt-4 font-semibold text-lg">Adaptogen & Stress Support</h4>
                <p className="text-sm text-slate-600 mt-2">Balanced stress response and deeper sleep.</p>
              </div>
            </div>
          </section>

          <footer className="mt-12 text-center text-slate-500 text-sm">
            <p>© Luminéa Life. All rights reserved.</p>
            <p className="mt-2">Disclaimer: Products and services are not intended to diagnose, treat, cure or prevent any disease. Always consult a licensed clinician before starting any supplement regimen.</p>
          </footer>

        </div>
      </main>
    </>
  )
}
