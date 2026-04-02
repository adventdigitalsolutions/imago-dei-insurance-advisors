import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';
import Link from 'next/link';

export const LeadMagnetSection = () => (
	<div className="bg-gradient-to-r from-navy via-medical-navy to-royal-purple py-20 sm:py-28 px-6">
		<div className="max-w-4xl mx-auto text-center">
			<p className="text-sm font-semibold tracking-[0.22em] uppercase text-pale-blue mb-4">
				{getCopy('leadMagnetSection.eyebrow')}
			</p>
			<h2 className="font-lora text-3xl sm:text-5xl font-bold tracking-[-0.04em] text-white leading-tight mb-6">
				{getCopy('leadMagnetSection.header')}
			</h2>
			<p className="text-[1.05rem] sm:text-[1.15rem] text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
				{getCopy('leadMagnetSection.body')}
			</p>
			<div>
				<Link
					href="https://drive.google.com/file/d/1ql4pfL2aTYz_W3SpN_usStRD7VAhmBt8/view?usp=sharing"
					target="_blank"
				>
					<Button
						variant="deepBlue"
						className="min-h-14 px-8 text-[1.05rem] border border-white/50"
					>
						{getCopy('leadMagnetSection.buttonText')}
					</Button>
				</Link>
				<p className="mt-3 text-white/55 text-[0.88rem]">
					{getCopy('leadMagnetSection.subNote')}
				</p>
			</div>
		</div>
	</div>
);
