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

          {/* Header */}
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">LL</div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Luminéa Life</h1>
                <p className="text-xs text-slate-500">Personalized wellness, perfected with science & AI</p>
              </div>
            </div>
            <nav className="flex gap-4 items-center text-sm">
              <a href="#products" className="hover:underline">Products</a>
              <a href="#team" className="hover:underline">Team</a>
              <a href="#consult" className="px-4 py-2 rounded-lg bg-slate-900 text-white">Request Review</a>
            </nav>
          </header>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Luminéa Life — Illuminate your best self</h2>
              <p className="text-lg text-slate-600 max-w-xl mt-4">We combine clinical evidence and AI to create personalized supplement plans that evolve with you. Start with premium, research-led hero blends and unlock better recovery, sharper focus, sustained energy, and balanced stress response.</p>
              <div className="mt-6 flex gap-4">
                <a href="#products" className="px-5 py-3 bg-slate-900 text-white rounded-lg shadow-lg">Explore Products</a>
                <a href="#consult" className="px-5 py-3 border border-slate-300 rounded-lg">Request Review</a>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img alt="Lifestyle" src="https://images.unsplash.com/photo-1526403224747-1c0b7b0f7f71?auto=format&fit=crop&w=1200&q=60" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </section>

          {/* Products */}
          <section id="products" className="mt-20">
            <h3 className="text-2xl font-bold">Hero Products</h3>
            <p className="text-slate-600 mt-1">Four premium blends — built for performance, recovery, focus and balance.</p>
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

          {/* Team */}
          <section id="team" className="mt-20">
            <h3 className="text-2xl font-bold">Founding Team</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow text-center">
                <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto flex items-center justify-center text-xl font-bold">V</div>
                <h4 className="mt-3 font-semibold">Vishnu</h4>
                <p className="text-xs text-slate-500">Founder — Product, AI & Clinical Strategy</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow text-center">
                <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto flex items-center justify-center text-xl font-bold">H</div>
                <h4 className="mt-3 font-semibold">Hari</h4>
                <p className="text-xs text-slate-500">Co-founder — Marketing & Accounts</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow text-center">
                <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto flex items-center justify-center text-xl font-bold">N</div>
                <h4 className="mt-3 font-semibold">Nithi</h4>
                <p className="text-xs text-slate-500">Co-founder — UX & Design</p>
              </div>
            </div>
          </section>

          {/* Consult Form */}
          <section id="consult" className="mt-20">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold">Request Clinical Review</h3>
              <p className="mt-2 text-slate-100 max-w-xl">Send us your dossier and book a short advisory call with our clinical partners. Paid advisory and full protocol design available for pilot studies and formulation review.</p>
              <form className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                <input placeholder="Full name" className="p-3 rounded text-slate-900" />
                <input placeholder="Email" className="p-3 rounded text-slate-900" />
                <select className="p-3 rounded text-slate-900">
                  <option>Type of review</option>
                  <option>Safety & dosing</option>
                  <option>Pilot design</option>
                  <option>Full advisory</option>
                </select>
                <textarea placeholder="Short message (optional)" className="md:col-span-3 p-3 rounded text-slate-900" />
                <button type="submit" className="md:col-span-3 bg-white text-indigo-700 py-3 rounded font-semibold">Request Review</button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Luminéa Life. All rights reserved.</p>
            <p className="mt-2">Disclaimer: Products and services are not intended to diagnose, treat, cure or prevent any disease. Always consult a licensed clinician before starting any supplement regimen.</p>
          </footer>

        </div>
      </main>
    </>
  )
}
