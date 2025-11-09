import { CheckCircle2, HeartPulse, MoveUpRight, Brain, Dumbbell } from 'lucide-react';

const benefits = [
  {
    icon: HeartPulse,
    title: 'Rapid Pain Relief',
    desc: 'Hands-on therapy and targeted exercises to quickly calm symptoms and restore function.'
  },
  {
    icon: Brain,
    title: 'Root-Cause Diagnosis',
    desc: 'Thorough movement assessment to uncover what’s really driving your pain.'
  },
  {
    icon: Dumbbell,
    title: 'Personalised Plan',
    desc: 'A step-by-step plan built for your goals, lifestyle, and injury history.'
  },
  {
    icon: MoveUpRight,
    title: 'Lasting Results',
    desc: 'Education and prevention strategies so you stay strong and pain-free.'
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why choose our physiotherapy clinic?</h2>
            <p className="mt-3 text-gray-600 text-lg">We combine expert clinicians, evidence-based care, and warm customer service to help you feel better, faster.</p>
            <ul className="mt-6 space-y-3">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['shoulder', 'knee', 'back', 'post-op'].map((tag, i) => (
              <div key={tag} className="rounded-2xl overflow-hidden shadow-lg border border-emerald-100">
                <img
                  src={`https://images.unsplash.com/photo-1584467735871-2a9f4bca7f9b?q=80&w=800&auto=format&fit=crop`}
                  alt="Physiotherapy treatment"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm font-medium text-gray-900">{['Shoulder Rehab','Knee Pain','Lower Back','Post-Op Rehab'][i]}</p>
                  <p className="text-xs text-gray-600">Targeted care for {tag} concerns</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
