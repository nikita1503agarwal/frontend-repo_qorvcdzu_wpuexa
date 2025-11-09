import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amelia R.',
    text: 'After a knee injury, I could barely run. Within 4 weeks I was back on the trail and pain-free. Incredible care!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Marcus T.',
    text: 'They listened carefully and explained everything. My back pain is finally under control.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Sophia L.',
    text: 'Professional, kind, and results-driven. The exercises made a huge difference in my daily comfort.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
  }
];

export default function Reviews() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Patient stories</h2>
          <div className="flex items-center gap-1 text-emerald-700">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
            ))}
            <span className="ml-2 text-sm font-medium">4.9/5 average rating</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-xl p-5 shadow border border-emerald-100">
              <div className="flex items-center gap-3 mb-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <p className="text-sm font-semibold text-gray-900">{r.name}</p>
              </div>
              <p className="text-gray-700">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
