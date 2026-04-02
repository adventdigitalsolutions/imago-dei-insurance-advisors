interface PageHeaderProps {
	title: string;
	eyebrow?: string;
	subtitle?: string;
}

export function PageHeader({ title, eyebrow, subtitle }: PageHeaderProps) {
	return (
		<div className="w-full relative overflow-clip">
			<div className="py-16 md:py-28 px-6 bg-gradient-to-br from-navy via-medical-navy to-dark-blue border-b border-clinical-border/60">
				<div className="max-w-6xl mx-auto">
					<div className="max-w-5xl">
						{eyebrow && (
							<p className="text-medical-blue/80 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
								{eyebrow}
							</p>
						)}
						<h1 className="text-white text-5xl lg:text-7xl font-lora font-bold tracking-[-0.04em] mb-6 leading-tight">
							{title}
						</h1>
						{subtitle && (
							<p className="text-white/75 text-xl lg:text-2xl leading-relaxed max-w-2xl">
								{subtitle}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
