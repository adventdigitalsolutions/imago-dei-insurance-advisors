interface PageHeaderProps {
	title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
	return (
		<div className="w-full relative overflow-clip">
			<div className="relative">
				<div className="p-8 py-12 md:py-20 md:p-20 bg-gradient-to-r from-royal-purple to-royal-purple/30 sm:to-royal-purple/0 flex items-center justify-center">
					<h1 className="text-white text-4xl lg:text-6xl font-montserrat font-bold tracking-[4px] w-full max-w-5xl uppercase">
						{title}
					</h1>
				</div>
			</div>
		</div>
	);
}
