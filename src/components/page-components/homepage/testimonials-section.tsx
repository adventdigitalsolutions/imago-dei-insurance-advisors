import { getCopy } from '@/getCopy';

const TESTIMONIALS = [
	{
		quote:
			"David and Adam found creative solutions to help us manage rising healthcare costs. They're far more engaged than the typical broker who just sends a renewal with a big increase. They're responsive, approachable, and truly proactive.",
		author: 'Jordan Gandy',
		title: 'Owner, The UPS Stores',
	},
	{
		quote:
			"We've valued our partnership with Imago Dei, especially as a growing ministry. David and Adam guided us thoughtfully through onboarding and have provided steady, responsive support as our team has grown. Their mission-aligned approach has been a perfect fit.",
		author: 'Austin Bowyer',
		title: 'Co-Founder & CEO, By the Hand Dallas',
	},
	{
		quote:
			'David made a complex process very simple, and working with a fellow Christian gave me real peace of mind. I would highly recommend him for any benefits needs.',
		author: 'Justin Munizzi',
		title: 'Managing Partner, Munizzi Law Firm',
	},
];

export const TestimonialsSection = () => (
	<div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
		<div className="max-w-6xl mx-auto">
			<h2 className="font-lora text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-medical-navy text-center mb-14">
				{getCopy('credibilitySection.header')}
			</h2>

			{/* Logo placeholder */}
			<div className="flex items-center justify-center mb-16 py-6 border-y border-clinical-border/60">
				<p className="text-muted-ink/40 text-sm italic text-center">
					Client logos coming soon
				</p>
			</div>

			<p className="text-sm font-semibold tracking-[0.22em] uppercase text-medical-blue text-center mb-10">
				{getCopy('credibilitySection.testimonialsHeader')}
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{TESTIMONIALS.map((t) => (
					<div
						key={t.author}
						className="bg-medical-sky/40 rounded-2xl p-8 border border-clinical-border flex flex-col"
					>
						<svg
							className="w-8 h-8 text-medical-blue/30 mb-5 flex-shrink-0"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
						</svg>
						<p className="text-muted-ink text-[1rem] leading-relaxed flex-1 mb-6">
							&ldquo;{t.quote}&rdquo;
						</p>
						<div>
							<p className="font-semibold text-medical-navy text-[0.95rem]">
								&mdash; {t.author}
							</p>
							<p className="text-muted-ink/70 text-[0.88rem]">{t.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
);
