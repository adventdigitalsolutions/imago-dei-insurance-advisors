interface PageHeaderProps {
	title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
	return (
		<div className="w-full relative overflow-clip">
			<div className="relative">
				<div className="p-8 py-14 md:py-24 md:p-20 bg-gradient-to-br from-navy via-medical-navy to-dark-blue flex items-end border-b border-clinical-border/60">
					<h1 className="text-white text-5xl lg:text-7xl font-lora font-bold tracking-[-0.04em] w-full max-w-5xl">
						{title}
					</h1>
				</div>
			</div>
		</div>
	);
}
