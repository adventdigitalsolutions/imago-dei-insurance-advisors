'use client'

import { useState } from "react";

export default function MenuBurger () {
	const [ariaExpanded, setAriaExpanded] = useState(false);

	return (
		<button
			className="button-two"
			aria-controls="primary-navigation"
			aria-expanded={ariaExpanded}
			onClick={() => setAriaExpanded(!ariaExpanded)}
		>
			<div className="hamburger">
				<span className="line top"></span>
				<span className="line middle"></span>
				<span className="line bottom"></span>
			</div>
		</button>
	);
};
