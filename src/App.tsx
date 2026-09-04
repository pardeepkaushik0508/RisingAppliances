import { useState, useEffect } from 'react';

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function PhoneIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MailIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function ClockIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function ArrowRightIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ChevronDownIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function StarIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.115 1.523 5.845L.057 23.944a.5.5 0 0 0 .614.614l6.289-1.648A11.942 11.942 0 0 0 12 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.818a9.817 9.817 0 0 1-5.001-1.368l-.359-.213-3.722.976.994-3.623-.233-.372A9.825 9.825 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
    </svg>
  );
}

function BoltIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function TagIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2563EB] shadow-md">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" fill="#F47B20" opacity="0.9" />
          <path d="M12 7L7 10v5l5 3 5-3v-5L12 7z" fill="white" />
        </svg>
      </div>
      <div>
        <div
          className={`font-bold text-[17px] leading-tight tracking-tight ${dark ? 'text-white' : 'text-[#153C84]'}`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Rising
        </div>
        <div className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#F47B20] leading-tight">
          Appliances
        </div>
      </div>
    </div>
  );
}

// ─── TopBar ───────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="bg-[#153C84] text-white text-[13px] py-2">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-[#F47B20] transition-colors">
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>+91 12345 67890</span>
          </a>
          <a href="mailto:support@risingappliances.in" className="hidden sm:flex items-center gap-1.5 hover:text-[#F47B20] transition-colors">
            <MailIcon className="w-3.5 h-3.5" />
            <span>support@risingappliances.in</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-blue-200">
          <ClockIcon className="w-3.5 h-3.5 text-[#F47B20]" />
          <span className="hidden sm:inline">Mon–Sat: 8am – 8pm &nbsp;|&nbsp; Sun: 10am – 5pm</span>
          <span className="sm:hidden">Mon–Sat 8am–8pm</span>
        </div>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

const NAV_LINKS = ['Home', 'About Us', 'Services', 'Gallery', 'Contact'];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100'}`}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 flex items-center justify-between h-[68px] lg:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={link === 'Services' ? '#services' : link === 'Gallery' ? '#gallery' : link === 'Contact' ? '#booking' : '#'}
              className="text-[15px] font-medium text-[#172033] hover:text-[#2563EB] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden lg:inline-flex items-center gap-2 bg-[#F47B20] text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-[#e06b10] transition-colors shadow-md shadow-orange-100"
        >
          Book Service <ArrowRightIcon />
        </a>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span className={`block h-0.5 bg-[#172033] rounded transition-all origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-[#172033] rounded transition-all ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 bg-[#172033] rounded transition-all origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-5">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={link === 'Services' ? '#services' : link === 'Gallery' ? '#gallery' : link === 'Contact' ? '#booking' : '#'}
              className="flex items-center py-3.5 text-[15px] font-medium text-[#172033] border-b border-gray-50 hover:text-[#2563EB] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-4 flex items-center justify-center gap-2 bg-[#F47B20] text-white px-5 py-3.5 rounded-xl font-semibold text-[15px]"
            onClick={() => setMenuOpen(false)}
          >
            Book Service <ArrowRightIcon />
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-[#F5F8FC] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch min-h-0 lg:min-h-[88vh]">

          {/* Left */}
          <div className="flex flex-col justify-center py-12 lg:py-20">
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Trusted Home Appliance Experts
            </div>

            <h1
              className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-[#172033] leading-[1.08] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Fast, Reliable<br />
              <span className="text-[#2563EB]">Home Appliance</span><br />
              Repair in Your Area
            </h1>

            <p className="text-[17px] text-[#64748B] leading-relaxed mb-8 max-w-[480px]">
              Rising Appliances provides professional AC, water purifier, refrigerator, washing machine, and chimney repair and maintenance services — delivered by trained technicians, right at your doorstep.
            </p>

            <div className="flex flex-col gap-2.5 mb-8">
              {['Experienced Technicians', 'Genuine Spare Parts', 'Transparent Pricing'].map(point => (
                <div key={point} className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2563EB] flex-shrink-0">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[15px] font-medium text-[#172033]">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-[#1d53d2] transition-colors shadow-xl shadow-blue-200"
              >
                Book a Service
              </a>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 border-2 border-[#153C84] text-[#153C84] px-6 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-[#153C84] hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="w-4 h-4 text-[#F59E0B]" />)}
              </div>
              <span className="text-[13px] text-[#64748B]">Highly rated by our customers on Google</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center lg:items-stretch py-8 lg:py-0">
            <div className="relative w-full rounded-2xl lg:rounded-none overflow-hidden bg-[#153C84] lg:h-full min-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1649769069590-268b0b994462?w=900&h=1000&fit=crop&auto=format"
                alt="Professional technician with repair tools ready for service"
                className="w-full h-full object-cover object-center opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#153C84]/60 via-[#153C84]/10 to-transparent" />
            </div>

            {/* Booking card */}
            <div className="absolute bottom-6 left-3 right-3 sm:left-auto sm:right-auto sm:-left-10 sm:bottom-10 bg-white rounded-2xl shadow-2xl p-5 sm:w-[320px] z-10">
              <h2 className="font-bold text-[#172033] text-[15px] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Book a Service
              </h2>
              <form className="space-y-3" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="sr-only" htmlFor="hero-name">Your Name</label>
                  <input
                    id="hero-name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="hero-phone">Phone Number</label>
                  <input
                    id="hero-phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="hero-service">Select Service</label>
                  <select
                    id="hero-service"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  >
                    <option value="">Select Service</option>
                    <option>Water Purifier Repair</option>
                    <option>AC Repair &amp; Service</option>
                    <option>Chimney Repair</option>
                    <option>Refrigerator Repair</option>
                    <option>Washing Machine Repair</option>
                    <option>Other Appliance Service</option>
                  </select>
                </div>
                <div>
                  <label className="sr-only" htmlFor="hero-location">Area / Location</label>
                  <input
                    id="hero-location"
                    type="text"
                    placeholder="Area / Location"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="hero-msg">Message (optional)</label>
                  <textarea
                    id="hero-msg"
                    placeholder="Message (optional)"
                    rows={2}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F47B20] text-white py-3 rounded-lg font-semibold text-[14px] hover:bg-[#e06b10] transition-colors"
                >
                  Request Service
                </button>
                <p className="text-[11px] text-[#64748B] text-center">Your details are safe. We never share your information.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TrustMetrics ─────────────────────────────────────────────────────────────

const STATS = [
  { value: '800+', label: 'Happy Customers' },
  { value: '15+', label: 'Years Experience' },
  { value: '1200+', label: 'Repairs Completed' },
  { value: '24/7', label: 'Customer Support' },
];

function TrustMetrics() {
  return (
    <section className="bg-[#153C84] py-12" aria-label="Trust statistics">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className={`text-center ${i < STATS.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-[12px] font-semibold text-blue-200 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const points = [
    {
      title: 'Certified & Skilled Technicians',
      desc: 'Our team is trained and certified to handle all major home appliance brands with precision and expertise.',
    },
    {
      title: 'Professional Service Process',
      desc: 'We follow a structured diagnosis-to-repair process ensuring your appliance is fixed correctly the first time.',
    },
    {
      title: 'Customer-Focused Support',
      desc: 'From booking to post-service follow-up, we prioritize your satisfaction at every step of the journey.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-[#F5F8FC]" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1784269273416-bb59288be8d4?w=700&h=875&fit=crop&auto=format"
                alt="Rising Appliances professional technician in service workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#F47B20] text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-3xl font-bold leading-none mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>15+</div>
              <div className="text-[12px] font-semibold leading-tight">Years of<br />Trusted Service</div>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">About Rising Appliances</div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033] leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Professional Appliance Care You Can Depend On
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-8">
              Rising Appliances has been delivering reliable, professional home appliance repair and maintenance services for over a decade. Our skilled technicians use genuine parts and follow industry-best practices to ensure lasting results — bringing your appliances back to peak performance quickly and affordably.
            </p>
            <div className="space-y-5 mb-9">
              {points.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#172033] mb-0.5">{p.title}</div>
                    <div className="text-[14px] text-[#64748B] leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-xl font-semibold text-[15px] hover:bg-[#2563EB] hover:text-white transition-colors"
            >
              Know More About Us <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ValueCards ───────────────────────────────────────────────────────────────

const VALUE_CARDS = [
  {
    Icon: BoltIcon,
    title: 'Fast Response Time',
    desc: 'We understand appliance emergencies. Our team responds quickly to book your service and dispatch a technician at the earliest available slot.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Expert Technicians',
    desc: 'Every technician is trained, experienced, and verified — giving you complete peace of mind that your appliance is in capable hands.',
  },
  {
    Icon: TagIcon,
    title: 'Transparent Pricing',
    desc: "No hidden charges, no surprises. We share a clear estimate before starting any repair so you're always in control of what you spend.",
  },
];

function ValueCards() {
  return (
    <section className="py-14 bg-[#F5F8FC]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-5">
          {VALUE_CARDS.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors duration-200">
                <Icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="font-bold text-[#172033] text-[17px] mb-2.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{title}</h3>
              <p className="text-[#64748B] text-[14px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FeaturedService ──────────────────────────────────────────────────────────

const WP_BULLETS = ['Filter Replacement', 'Water Testing', 'Membrane Cleaning', 'Leak Repair', 'Routine Maintenance'];

function FeaturedService() {
  return (
    <section className="bg-[#153C84] py-16 lg:py-24 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-[#F47B20]/15 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-2 border-white/10 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Our Speciality</div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Expert Water Purifier Repair &amp; Service
            </h2>
            <p className="text-blue-200 text-[16px] leading-relaxed mb-8">
              Clean water is essential for your family's health. Our certified technicians provide comprehensive RO and water purifier servicing — from filter replacements to membrane cleaning and leak repairs — ensuring your purifier delivers safe, quality water every day.
            </p>
            <ul className="space-y-3 mb-9">
              {WP_BULLETS.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F47B20] flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white font-medium text-[15px]">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-[#F47B20] text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-[#e06b10] transition-colors"
            >
              Explore Water Purifier Service <ArrowRightIcon />
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-[#1a4898]" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?w=800&h=600&fit=crop&auto=format"
                alt="Technician performing water purifier and appliance maintenance"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full border-4 border-[#F47B20]/25" />
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full border-4 border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Water Purifier Repair & Service',
    desc: 'Complete RO servicing, filter replacement, and water quality restoration for all major purifier brands.',
    img: 'https://images.unsplash.com/photo-1659456553707-14712bb27032?w=600&h=380&fit=crop&auto=format',
    alt: 'Water purifier and RO system service tools',
  },
  {
    title: 'AC Repair & Service',
    desc: 'Expert air conditioner repair, deep cleaning, gas refilling, and preventive maintenance for all brands.',
    img: 'https://images.unsplash.com/photo-1579881703056-7675d4386cf9?w=600&h=380&fit=crop&auto=format',
    alt: 'Air conditioning unit being serviced',
  },
  {
    title: 'Chimney Repair & Service',
    desc: 'Kitchen chimney deep cleaning, motor repair, filter replacement, and full performance restoration.',
    img: 'https://images.unsplash.com/photo-1642979430180-e676c2235ce2?w=600&h=380&fit=crop&auto=format',
    alt: 'Modern kitchen chimney exhaust hood',
  },
  {
    title: 'Refrigerator Repair & Service',
    desc: 'Cooling issues, compressor repair, gas charging, door seal replacement, and complete diagnostics.',
    img: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=600&h=380&fit=crop&auto=format',
    alt: 'Modern refrigerator in kitchen',
  },
  {
    title: 'Washing Machine Repair',
    desc: 'Drum issues, motor faults, water leaks, PCB repair, and complete washing machine servicing.',
    img: 'https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=600&h=380&fit=crop&auto=format',
    alt: 'Appliance repair tools and equipment',
  },
  {
    title: 'Other Home Appliance Services',
    desc: 'Microwave, geyser, dishwasher, mixer, and other home appliance repair and maintenance services.',
    img: 'https://images.unsplash.com/photo-1556912102-ea493a2a5b93?w=600&h=380&fit=crop&auto=format',
    alt: 'Kitchen appliances and home equipment',
  },
];

function Services() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F8FC]" id="services">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Our Services</div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Home Appliances We Repair &amp; Service
          </h2>
          <p className="text-[#64748B] text-[16px] leading-relaxed">
            From ACs to water purifiers, our skilled technicians provide dependable repair and servicing for all your essential home appliances.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="overflow-hidden bg-[#F5F8FC]" style={{ aspectRatio: '16/10' }}>
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#172033] text-[16px] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.title}</h3>
                <p className="text-[#64748B] text-[13px] leading-relaxed mb-4">{s.desc}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-[#2563EB] text-[13px] font-semibold group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1649769069590-268b0b994462?w=600&h=450&fit=crop&auto=format',
    alt: 'Technician ready with professional repair tools',
    label: 'General Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?w=600&h=450&fit=crop&auto=format',
    alt: 'Technician working on electrical and AC systems',
    label: 'AC Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1784269273416-bb59288be8d4?w=600&h=450&fit=crop&auto=format',
    alt: 'Electronics and appliance repair workshop',
    label: 'Repair Workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1642979430180-e676c2235ce2?w=600&h=450&fit=crop&auto=format',
    alt: 'Kitchen chimney cleaning and service',
    label: 'Chimney Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=600&h=450&fit=crop&auto=format',
    alt: 'Refrigerator repair and maintenance',
    label: 'Refrigerator Repair',
  },
  {
    src: 'https://images.unsplash.com/photo-1625148230889-8195e85aae6b?w=600&h=450&fit=crop&auto=format',
    alt: 'Technician using power tools for appliance repair',
    label: 'Washing Machine Repair',
  },
];

function Gallery() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="gallery">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Service Gallery</div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Our Work in Action
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY.map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#153C84]" style={{ aspectRatio: '4/3' }}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#153C84]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute bottom-4 left-4 text-white text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F47B20]" />
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTABanner ────────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#2563EB] py-14">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-3xl lg:text-[42px] font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Facing an Appliance Breakdown?
        </h2>
        <p className="text-blue-100 text-[16px] mb-9 max-w-lg mx-auto leading-relaxed">
          Get quick and professional appliance service from Rising Appliances. Available 6 days a week to restore your home.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#booking" className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-blue-50 transition-colors shadow-lg">
            Book Service
          </a>
          <a href="tel:+911234567890" className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-white/10 hover:border-white transition-colors">
            <PhoneIcon className="w-4 h-4" /> Call Now
          </a>
          <a href="https://wa.me/911234567890" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-[#20c058] transition-colors">
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── WhyChooseUs ──────────────────────────────────────────────────────────────

const BENEFITS = [
  'Fast Response Time',
  'Experienced Technicians',
  'Genuine Spare Parts',
  'Clear & Upfront Pricing',
  'Quality Workmanship',
  'Dedicated Customer Support',
];

function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F8FC]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-2xl overflow-hidden bg-[#e2e8f0]" style={{ aspectRatio: '4/5' }}>
            <img
              src="https://images.unsplash.com/photo-1625148230889-8195e85aae6b?w=700&h=875&fit=crop&auto=format"
              alt="Professional Rising Appliances technician at work using power tools"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Why Choose Rising Appliances</div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033] leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Reliable Service. Professional Technicians. Better Peace of Mind.
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-9">
              When your appliance breaks down, you need a service partner you can trust completely. Rising Appliances combines technical expertise with genuine care for your home and your time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[#172033] font-medium text-[14px]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ServiceProcess ───────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    title: 'Book Your Service',
    desc: 'Call, WhatsApp, or fill in our online booking form. Pick your preferred date and time slot.',
  },
  {
    num: '02',
    title: 'Technician Visit',
    desc: 'A verified technician arrives at your home on schedule with the right tools and spare parts.',
  },
  {
    num: '03',
    title: 'Diagnosis & Repair',
    desc: 'The technician diagnoses the issue, provides a clear estimate, and completes the repair.',
  },
  {
    num: '04',
    title: 'Quality Check',
    desc: 'We test the appliance thoroughly before leaving, ensuring it runs perfectly before we go.',
  },
];

function ServiceProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">How It Works</div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Simple. Fast. Reliable.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={i} className="relative bg-[#F5F8FC] rounded-2xl p-6 border border-gray-100 h-full">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-11 -right-2.5 text-[#2563EB]/20 text-2xl z-10 select-none">›</div>
              )}
              <div className="text-[44px] font-bold text-[#2563EB]/12 mb-3 leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {s.num}
              </div>
              <div className="w-8 h-0.5 bg-[#F47B20] mb-4" />
              <h3 className="font-bold text-[#172033] text-[16px] mb-2.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.title}</h3>
              <p className="text-[13px] text-[#64748B] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ServicePromise ───────────────────────────────────────────────────────────

function ServicePromise() {
  const promises = [
    {
      title: 'Verified Technicians',
      desc: 'All our technicians are background-checked, trained, and wear branded uniforms for easy identification.',
    },
    {
      title: 'Genuine Spare Parts',
      desc: 'We use only original or OEM-grade parts so your appliance continues to perform as intended by the manufacturer.',
    },
    {
      title: 'Post-Service Follow-Up',
      desc: 'We follow up after every repair to confirm your satisfaction and ensure the appliance is functioning correctly.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F5F8FC]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Our Service Promise</div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033] leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Quality Service You Can Count On
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-8">
              Every repair carried out by Rising Appliances is backed by our commitment to quality workmanship and genuine customer care. We stand behind our work — if you face any issue related to our service, we will make it right.
            </p>
            <div className="space-y-4">
              {promises.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-blue-50 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#153C84] flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#172033] mb-0.5">{p.title}</div>
                    <div className="text-[13px] text-[#64748B] leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-[#e2e8f0]" style={{ aspectRatio: '4/5' }}>
            <img
              src="https://images.unsplash.com/photo-1659456553707-14712bb27032?w=700&h=875&fit=crop&auto=format"
              alt="Professional technician with quality repair tools and equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BookingForm ──────────────────────────────────────────────────────────────

function BookingForm() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="booking">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:pt-4">
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Book a Service</div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033] leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Schedule Your Appliance Repair Today
            </h2>
            <p className="text-[#64748B] text-[16px] leading-relaxed mb-9">
              Fill in the form and our team will confirm your booking promptly. Home service is available Monday through Saturday, 8am to 8pm.
            </p>
            <div className="space-y-5">
              {[
                { bg: '#153C84', Icon: PhoneIcon, label: 'Call Us Directly', val: '+91 12345 67890', href: 'tel:+911234567890' },
                { bg: '#25D366', Icon: WhatsAppIcon, label: 'WhatsApp Us', val: '+91 12345 67890', href: 'https://wa.me/911234567890' },
                { bg: '#2563EB', Icon: MailIcon, label: 'Email Us', val: 'support@risingappliances.in', href: 'mailto:support@risingappliances.in' },
              ].map(({ bg, Icon, label, val, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[12px] text-[#64748B]">{label}</div>
                    <div className="font-semibold text-[#172033] group-hover:text-[#2563EB] transition-colors">{val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-7 lg:p-9 border border-gray-100">
            <h3 className="font-bold text-[#172033] text-[20px] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Request a Service
            </h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#172033] mb-1.5" htmlFor="book-name">Full Name</label>
                  <input
                    id="book-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#172033] mb-1.5" htmlFor="book-phone">Phone Number</label>
                  <input
                    id="book-phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#172033] mb-1.5" htmlFor="book-service">Service Required</label>
                <select
                  id="book-service"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] text-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                >
                  <option value="">Select a service</option>
                  <option>Water Purifier Repair</option>
                  <option>AC Repair &amp; Service</option>
                  <option>Chimney Repair</option>
                  <option>Refrigerator Repair</option>
                  <option>Washing Machine Repair</option>
                  <option>Other Appliance Service</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#172033] mb-1.5" htmlFor="book-location">Location / Area</label>
                <input
                  id="book-location"
                  type="text"
                  placeholder="Your area or locality"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#172033] mb-1.5" htmlFor="book-date">Preferred Date</label>
                <input
                  id="book-date"
                  type="date"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] text-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#172033] mb-1.5" htmlFor="book-msg">Message</label>
                <textarea
                  id="book-msg"
                  placeholder="Describe the issue (optional)"
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F47B20] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#e06b10] transition-colors shadow-lg shadow-orange-100"
              >
                Book Service Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'Pune',
    text: 'The technician was professional, on time, and fixed my RO purifier in under an hour. Really happy with the quality and care from Rising Appliances.',
  },
  {
    name: 'Rahul Verma',
    location: 'Mumbai',
    text: 'Booked an AC service and the team was excellent. Thorough, explained everything clearly, and the pricing was completely transparent. Highly recommend.',
  },
  {
    name: 'Anita Desai',
    location: 'Thane',
    text: 'My washing machine was making a loud noise. Rising Appliances diagnosed and fixed it the same day. Excellent service and very reasonable charges.',
  },
];

function GoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F8FC]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Customer Reviews</div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            What Our Customers Say
          </h2>
          <p className="text-[#64748B] text-[15px] max-w-lg mx-auto">
            Real feedback from homeowners who trusted Rising Appliances with their appliance repair needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-4 h-4 text-[#F59E0B]" />)}
              </div>
              <p className="text-[#172033] text-[14px] leading-relaxed mb-5 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0">
                  {t.name[0]}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#172033] text-[13px]">{t.name}</div>
                  <div className="text-[11px] text-[#64748B]">{t.location}</div>
                </div>
                <GoogleG />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[13px] text-[#64748B]">
          More reviews on Google. Space reserved for Google Reviews widget integration.
        </p>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'What appliance repair services do you provide?',
    a: 'Rising Appliances provides professional repair and servicing for water purifiers (RO), air conditioners, chimneys, refrigerators, washing machines, microwaves, geysers, and other home appliances.',
  },
  {
    q: 'Do you provide AC repair and servicing?',
    a: 'Yes. We offer complete AC services including repair, deep cleaning, gas refilling, filter cleaning, and preventive maintenance for all major brands and models of split and window ACs.',
  },
  {
    q: 'Can I book water purifier repair at home?',
    a: 'Absolutely. Our technicians visit your home for all water purifier and RO system repairs, filter replacements, membrane cleaning, and routine maintenance services.',
  },
  {
    q: 'Do you repair refrigerators and washing machines?',
    a: 'Yes. We repair all major refrigerator and washing machine brands, handling issues such as cooling failure, drum faults, motor problems, water leaks, and PCB repairs.',
  },
  {
    q: 'How can I book a technician?',
    a: "You can book a technician by calling us, sending a WhatsApp message, or filling in the online booking form on this page. Our team will confirm your appointment quickly, usually within a few hours.",
  },
  {
    q: 'Which areas do you serve?',
    a: 'Rising Appliances currently serves select residential areas. Please contact us to confirm coverage for your specific location. We are continuously expanding our service reach.',
  },
  {
    q: 'Do you provide emergency appliance repair?',
    a: 'We do our best to accommodate urgent repair requests. Contact us directly by phone or WhatsApp for the fastest response on emergency service needs.',
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">FAQ</div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-2.5">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-[#F5F8FC] rounded-2xl border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#172033] text-[14px] sm:text-[15px] leading-snug">{faq.q}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-[#2563EB] flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-[#64748B] text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ServiceAreas ─────────────────────────────────────────────────────────────

const AREAS = [
  'Andheri', 'Bandra', 'Borivali', 'Thane', 'Navi Mumbai', 'Pune',
  'Wakad', 'Hinjewadi', 'Viman Nagar', 'Kothrud', 'Hadapsar', 'Pimpri',
  'Chinchwad', 'Nashik', 'Aurangabad', 'Nagpur',
];

function ServiceAreas() {
  return (
    <section className="py-14 lg:py-20 bg-[#F5F8FC]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">Coverage</div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#172033] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Appliance Repair Service Areas
          </h2>
          <p className="text-[#64748B] text-[15px] max-w-lg mx-auto">
            We serve homes across multiple locations. Contact us to confirm service availability in your area.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {AREAS.map((area, i) => (
            <a
              key={i}
              href="#"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#2563EB]/25 bg-white text-[#2563EB] text-[13px] font-medium hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {area}
            </a>
          ))}
        </div>
        <p className="text-center mt-5 text-[12px] text-[#64748B]">
          These are representative placeholder locations. Actual service areas will be updated as coverage expands.
        </p>
      </div>
    </section>
  );
}

// ─── FinalCTA ─────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="bg-[#172033] py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F47B20]/40 to-transparent" />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 text-center relative z-10">
        <div className="inline-block bg-[#F47B20]/15 text-[#F47B20] text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-5">
          Ready to Help
        </div>
        <h2 className="text-[38px] lg:text-[52px] font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Need Appliance Repair?
        </h2>
        <p className="text-gray-400 text-[16px] mb-10 max-w-md mx-auto leading-relaxed">
          Book a service today and our expert technician will be at your doorstep, ready to help.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#1d53d2] transition-colors shadow-2xl shadow-blue-900/40"
          >
            Book Service
          </a>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-[15px] hover:border-white/40 hover:bg-white/5 transition-colors"
          >
            <PhoneIcon className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://wa.me/911234567890"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#20c058] transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-gray-400">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo dark />
            <p className="text-[13px] leading-relaxed mt-4 mb-6">
              Rising Appliances is your trusted partner for professional home appliance repair and maintenance, delivering quality service right at your doorstep.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: 'Facebook', letter: 'f' },
                { label: 'Instagram', letter: 'in' },
                { label: 'Twitter', letter: 'tw' },
              ].map(({ label, letter }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[11px] font-bold hover:bg-[#2563EB] transition-colors text-white"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-[12px] uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-[13px] hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[12px] uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              {['Water Purifier Repair', 'AC Repair & Service', 'Chimney Repair', 'Refrigerator Repair', 'Washing Machine Repair'].map(s => (
                <li key={s}>
                  <a href="#" className="text-[13px] hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[12px] uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+911234567890" className="flex items-start gap-2.5 hover:text-white transition-colors group">
                  <PhoneIcon className="w-4 h-4 text-[#F47B20] mt-0.5 flex-shrink-0" />
                  <span className="text-[13px]">+91 12345 67890</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@risingappliances.in" className="flex items-start gap-2.5 hover:text-white transition-colors">
                  <MailIcon className="w-4 h-4 text-[#F47B20] mt-0.5 flex-shrink-0" />
                  <span className="text-[13px]">support@risingappliances.in</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="w-4 h-4 text-[#F47B20] mt-0.5 flex-shrink-0" />
                <span className="text-[13px]">Mon–Sat: 8am – 8pm<br />Sunday: 10am – 5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-gray-500">
          <span>&copy; 2024 Rising Appliances. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating Buttons ─────────────────────────────────────────────────────────

function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+911234567890"
        aria-label="Call Rising Appliances"
        className="fixed bottom-[88px] left-4 lg:bottom-6 z-50 w-14 h-14 rounded-full bg-[#153C84] text-white flex items-center justify-center shadow-xl hover:bg-[#1a4898] transition-colors"
      >
        <PhoneIcon className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/911234567890"
        aria-label="WhatsApp Rising Appliances"
        className="fixed bottom-[88px] right-4 lg:bottom-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#20c058] transition-colors"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-2xl">
        <a
          href="tel:+911234567890"
          className="flex-1 flex items-center justify-center gap-1.5 border-2 border-[#2563EB] text-[#2563EB] py-3 rounded-xl font-semibold text-[14px] min-h-[44px]"
        >
          <PhoneIcon className="w-4 h-4" /> Call
        </a>
        <a
          href="#booking"
          className="flex-1 flex items-center justify-center bg-[#F47B20] text-white py-3 rounded-xl font-semibold text-[14px] min-h-[44px]"
        >
          Book Service
        </a>
      </div>
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F8FC] text-[#172033]">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <About />
        <ValueCards />
        <FeaturedService />
        <Services />
        <Gallery />
        <CTABanner />
        <WhyChooseUs />
        <ServiceProcess />
        <ServicePromise />
        <BookingForm />
        <Testimonials />
        <FAQ />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
