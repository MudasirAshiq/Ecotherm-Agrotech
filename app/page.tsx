'use client';

import { Leaf, Flame, TreePine, Droplets, Sun, Recycle, Users, Sprout, ShieldCheck, Factory, Home, Landmark, Zap, Cloud, Timer, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/ECOTHERM.png" 
              alt="Ecotherm Agrotech Logo" 
              width={240} 
              height={60} 
              className="object-contain h-auto w-[180px] lg:w-[230px]" 
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            <Link href="#about" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">About</Link>
            <Link href="#problem" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">The Problem</Link>
            <Link href="#solution" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">Our Solution</Link>
            <Link href="#products" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">Products</Link>
            <Link href="#market" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">Market</Link>
          </nav>
          <a href="#contact" className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">
            Contact Us
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pt-24 pb-32 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/seed/forest-biomass/1920/1080?blur=2"
              alt="Forest background"
              fill
              className="object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/95 to-stone-50"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-8">
              <Sprout className="h-4 w-4" />
              <span>Edinburgh-based Social Enterprise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight">
              Sustainable Fuel for <br className="hidden md:block" />
              <span className="text-emerald-600">Scotland&apos;s Future</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Producing wooden pellets from bio crops to support growing energy requirements, combat rural fuel poverty, and drive the transition to Net-Zero 2045.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#solution" className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                Discover Our Bio Crop
              </a>
              <a href="#about" className="bg-white text-stone-800 border border-stone-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-50 transition-all">
                Learn More
              </a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Who We Are & What We Do</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Ecotherm Agrotech is a pre-trading social enterprise based in Edinburgh. We seek to produce wooden pellets from bio crops as a sustainable fuel to support the growing energy requirements in Scotland.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our inspiration comes from the co-existing dearth and opportunity in the energy market today. We aim to programme our bio crop for regenerative bioenergy and circular forestry, building a business model on agroforestry and a community-owned biomass value chain.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-stone-900 text-xl mb-1">Net-Zero 2045</h4>
                  <p className="text-sm text-stone-500">Aligning with Scottish Gov goals</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-stone-900 text-xl mb-1">Community First</h4>
                  <p className="text-sm text-stone-500">Co-operative inspired governance</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Problem Section */}
        <motion.section 
          id="problem" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-stone-900 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenges We Face</h2>
              <p className="text-stone-400 text-lg">The current energy landscape in Scotland presents significant hurdles that demand innovative, local solutions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Factory className="h-8 w-8 text-amber-400" />,
                  title: "Import Dependency",
                  desc: "UK imports over 65% of its wood pellets, primarily from the US and the Baltics."
                },
                {
                  icon: <TreePine className="h-8 w-8 text-amber-400" />,
                  title: "Climate Risk",
                  desc: "Forest degradation from non-regenerative harvesting undermines Net Zero goals."
                },
                {
                  icon: <Home className="h-8 w-8 text-amber-400" />,
                  title: "Rural Fuel Poverty",
                  desc: "Nearly 20% of Scottish households experience energy poverty, especially in off-grid areas."
                },
                {
                  icon: <Zap className="h-8 w-8 text-amber-400" />,
                  title: "Fragmented Approaches",
                  desc: "No scalable model exists that integrates energy crop cultivation, carbon removal, and community benefit."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-amber-400/50 transition-colors"
                >
                  <div className="bg-stone-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Solution Section */}
        <motion.section 
          id="solution" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-emerald-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <Cloud className="h-8 w-8 text-emerald-600 mb-4" />
                    <h4 className="font-bold text-stone-900 mb-2">10x Carbon Sequestration</h4>
                    <p className="text-sm text-stone-600">Exceptional carbon capture compared to traditional forestry.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <Timer className="h-8 w-8 text-emerald-600 mb-4" />
                    <h4 className="font-bold text-stone-900 mb-2">Fastest Growth</h4>
                    <p className="text-sm text-stone-600">Ready for harvest in just 2-3 years among hardwood trees.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <Droplets className="h-8 w-8 text-emerald-600 mb-4" />
                    <h4 className="font-bold text-stone-900 mb-2">Arid Resilience</h4>
                    <p className="text-sm text-stone-600">Ability to grow and thrive even in arid conditions.</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <Flame className="h-8 w-8 text-emerald-600 mb-4" />
                    <h4 className="font-bold text-stone-900 mb-2">High Calorific Value</h4>
                    <p className="text-sm text-stone-600">Low moisture content makes it perfect for biomass pellets.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <Recycle className="h-8 w-8 text-emerald-600 mb-4" />
                    <h4 className="font-bold text-stone-900 mb-2">6x Regrowth</h4>
                    <p className="text-sm text-stone-600">Regrows from the same stump up to 6 times, promoting cost-effective forestry.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <Sun className="h-8 w-8 text-emerald-600 mb-4" />
                    <h4 className="font-bold text-stone-900 mb-2">Biodiversity Support</h4>
                    <p className="text-sm text-stone-600">Supports local biodiversity and pollinators due to its flowers.</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Game-Changing Bio Crop</h2>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  Our proposed bio crop for raw material is a revolutionary alternative to traditional forestry. It addresses the critical need for sustainable, locally-sourced biomass while actively regenerating the environment.
                </p>
                <div className="bg-emerald-600 text-white p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold mb-4">Intellectual Property</h3>
                  <p className="mb-6 opacity-90">
                    We are planning to apply for a trademark for Ecotherm Agrotech and a patent for our proprietary technology of producing wooden pellets from our chosen bio crop.
                  </p>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <ShieldCheck className="h-6 w-6" />
                    <span className="font-medium">Protecting our unique, fast-growing supply chain.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Products & Services */}
        <motion.section 
          id="products" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Products & Services</h2>
              <p className="text-stone-600 text-lg">A sustainable and circular economy model establishing a multi-output production system.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-stone-100 p-8 hover:bg-emerald-50 transition-colors"
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Flame className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Biomass Products</h3>
                <p className="text-stone-600 leading-relaxed">
                  High-quality biomass timber, lumbar, biomass chips, sustainable wooden pellets, and biochar.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-stone-100 p-8 hover:bg-emerald-50 transition-colors"
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Carbon Credits</h3>
                <p className="text-stone-600 leading-relaxed">
                  Carbon sequestration credits offered to carbon offset buyers or CSR-driven companies.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative overflow-hidden rounded-3xl bg-stone-100 p-8 hover:bg-emerald-50 transition-colors"
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Sprout className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Agroforestry Services</h3>
                <p className="text-stone-600 leading-relaxed">
                  Regenerative services collaborating with local farmers for intercropping the bio crop with food crops.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Market Section */}
        <motion.section 
          id="market" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-stone-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Market & Target Customers</h2>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  The UK biomass market is valued at £7.76 billion, with Scotland accounting for 20-25% of demand. Our initial target is to capture 5% of Scotland&apos;s biomass market.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Domestic Heating", desc: "Off-grid rural homes, starting with the Highlands & Islands where 33-47% face high heating costs.", icon: <Home className="h-5 w-5" /> },
                    { title: "Commercial & Industrial", desc: "Whisky distilleries, food processing, and agriculture needing stable, sustainable fuel.", icon: <Factory className="h-5 w-5" /> },
                    { title: "Public Sector Buildings", desc: "Schools, hospitals, and district heating systems.", icon: <Landmark className="h-5 w-5" /> },
                    { title: "B2B Suppliers", desc: "Biomass energy suppliers looking for local, reliable sources.", icon: <Users className="h-5 w-5" /> }
                  ].map((market, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 bg-emerald-200 text-emerald-800 p-2 rounded-lg h-fit">
                        {market.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-stone-900 mb-1">{market.title}</h4>
                        <p className="text-stone-600">{market.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Our Competitive Edge</h3>
                <p className="text-stone-600 mb-8">
                  Unlike competitors (Balcas Energy, Land Energy, UPM Biofuels) who rely on slow-growing traditional forestry or imported biomass, we offer:
                </p>
                <ul className="space-y-4">
                  {[
                    "Ultra-fast-growing, high-yield renewable alternative",
                    "Local cultivation reducing import reliance",
                    "Focus on fuel-poor, off-grid communities",
                    "Circular forestry model without deforestation",
                    "Agroforestry partnerships for farmer income"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
                      <span className="text-stone-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Team</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-16">
              Presently, we are a dedicated team of 3 driving Ecotherm Agrotech forward from its idea stage through rigorous market and policy research.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-stone-50 p-8 rounded-3xl border border-stone-100"
              >
                <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image src="https://picsum.photos/seed/founder/200/200" alt="Aamir Latief Wani" width={96} height={96} className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">Aamir Latief Wani</h3>
                <p className="text-emerald-600 font-medium mb-4">Founder</p>
                <p className="text-sm text-stone-500">Conducted extensive fieldwork and public building documentation in Edinburgh.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-stone-50 p-8 rounded-3xl border border-stone-100"
              >
                <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image src="https://picsum.photos/seed/researcher1/200/200" alt="Zarnain Manzoor" width={96} height={96} className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">Zarnain Manzoor</h3>
                <p className="text-emerald-600 font-medium mb-4">Research Lead</p>
                <p className="text-sm text-stone-500">Expertise in bio-energy policy and market competitor analysis.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-stone-50 p-8 rounded-3xl border border-stone-100"
              >
                <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image src="https://picsum.photos/seed/researcher2/200/200" alt="Plant Physiologist" width={96} height={96} className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">Faiza Lateef Wani</h3>
                <p className="text-emerald-600 font-medium mb-4">Scientific Lead</p>
                <p className="text-sm text-stone-500">Researching the scope, adaptability, and advantage of our bio-crop.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Image 
                  src="/images/ECOTHERM.png" 
                  alt="Ecotherm Agrotech Logo" 
                  width={240} 
                  height={60} 
                  className="object-contain h-auto w-[180px] lg:w-[230px]" 
                  priority
                />
              </div>
              <p className="mb-6 max-w-md leading-relaxed text-stone-400">
                An Edinburgh-based social enterprise producing sustainable wooden pellets from bio crops to support Scotland&apos;s growing energy requirements.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link href="#solution" className="hover:text-emerald-400 transition-colors">Our Solution</Link></li>
                <li><Link href="#products" className="hover:text-emerald-400 transition-colors">Products</Link></li>
                <li><Link href="#market" className="hover:text-emerald-400 transition-colors">Market</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Edinburgh, Scotland</li>
                <li>contact@ecothermagrotech.com</li>
                <li><a href="tel:+447880226165" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><Phone className="h-4 w-4" /> +44 7880 226165</a></li>
                <li><a href="https://wa.me/447880226165" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><MessageCircle className="h-4 w-4" /> +44 7880 226165</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Ecotherm Agrotech. All rights reserved.</p>
            <p>Patent Pending &bull; Trademark Applied</p>
          </div>
        </div>
        <p className="design-credit">
          <span>Designed by</span>
          <Image
            src="/images/quantafons_logo.jpg"
            alt="QuantaFONS Logo"
            width={70}
            height={22}
            priority
            className="design-logo"
          />
          <a href="https://www.quantafons.com" target="_blank" rel="noopener noreferrer">QuantaFONS</a>
        </p>
      </footer>
    </div>
  );
}
