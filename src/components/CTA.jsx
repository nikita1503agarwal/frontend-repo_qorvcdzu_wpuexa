import { PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to feel better?</h3>
            <p className="mt-2 text-emerald-50">Book your free 15-minute assessment and get a personalised treatment plan.</p>
          </div>
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-5 py-3 rounded-lg shadow hover:opacity-90">
            <PhoneCall className="w-5 h-5" /> Call now
          </a>
        </div>
      </div>
    </section>
  );
}
