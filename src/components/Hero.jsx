import { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, User, Phone, Mail, CalendarDays, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', concern: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Physiotherapy Free Assessment Request');
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPrimary Concern: ${form.concern}`
    );
    setSubmitted(true);
    window.location.href = `mailto:clinic@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Trusted local physiotherapy
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Move pain-free with personalised physiotherapy care
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Get a free 15-minute assessment to find the root cause of your pain and a clear plan to feel better, faster.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Same-week appointments
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Evidence-based treatment
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Insurance accepted
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6 text-gray-600">
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop','https://images.unsplash.com/photo-1540190057400-4f78603f7bfd?q=80&w=200&auto=format&fit=crop','https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'].map((src, i) => (
                  <img key={i} src={src} alt="happy patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <p className="text-sm"><span className="font-semibold text-gray-900">1,200+ patients</span> relieved and moving better</p>
            </div>
          </div>

          <div>
            <div className="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="w-5 h-5 text-emerald-600" />
                <p className="text-sm text-gray-700">Book your free 15-minute assessment</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <textarea
                  name="concern"
                  required
                  value={form.concern}
                  onChange={handleChange}
                  placeholder="What can we help you with? (e.g., knee pain, post-op rehab)"
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Request my free assessment <ArrowRight className="w-4 h-4" />
                </button>
                {submitted && (
                  <p className="text-emerald-700 text-sm text-center">Thanks! We’ll be in touch shortly.</p>
                )}
                <p className="text-xs text-gray-500 text-center">No spam. We’ll only use your details to confirm your appointment.</p>
              </form>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                HIPAA-compliant and privacy-first
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
