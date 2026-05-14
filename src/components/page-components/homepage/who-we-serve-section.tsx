import { getCopy } from '@/getCopy';

const WHO_WE_SERVE_ITEMS = [
	'whoWeServeSection.item1',
	'whoWeServeSection.item2',
	'whoWeServeSection.item3',
] as const;

export const WhoWeServeSection = () => (
	<div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
		<div className="max-w-6xl mx-auto">
			<div className="md:max-w-2xl">
				<h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8">
					{getCopy('whoWeServeSection.header')}
				</h2>
				<p className="text-sm font-semibold tracking-[0.2em] uppercase text-medical-blue mb-5">
					We serve scaling organizations like:
				</p>
				<ul className="flex flex-col gap-3 mb-8">
					{WHO_WE_SERVE_ITEMS.map((key) => (
						<li
							key={key}
							className="flex items-center gap-3 text-[1.05rem] sm:text-[1.12rem] text-muted-ink"
						>
							<span className="w-2 h-2 rounded-full bg-medical-blue flex-shrink-0" />
							<span>{getCopy(key)}</span>
						</li>
					))}
				</ul>
				<p className="text-[1.05rem] sm:text-[1.12rem] text-muted-ink leading-relaxed">
					{getCopy('whoWeServeSection.body')}
				</p>
			</div>
		</div>
	</div>
);
