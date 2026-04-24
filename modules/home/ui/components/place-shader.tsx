import React from "react";
import { ShaderBackground } from "./hero-shader";
import { Button } from "@/components/ui/button";

export const PlaceShader = () => {
	return (
		<div className="w-full">
			<ShaderBackground>
				{/* Content */}
				<main className="absolute top-1/2 left-4 sm:left-8 md:left-12 -translate-y-1/2 z-20 w-full max-w-[90%] sm:max-w-xl">
					<div className="text-left">
						{/* Badge */}
						<div
							className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-5 sm:mb-6 relative"
							style={{
								filter: "url(#glass-effect)",
							}}>
							<div className="absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-white/20 to-transparent rounded-full" />

							<span className="text-white/90 text-xs sm:text-sm font-light relative z-10">
								✨ VioCodes
							</span>
						</div>

						{/* Main Heading */}
						<h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-none tracking-tight text-white mb-5 sm:mb-6">
							<span className=" instrument font-semibold">Building Digital</span>{" "}
							<span className="font-semibold">Brand Experiences</span>
						</h1>

						{/* Description */}
						<p className="text-sm sm:text-base font-light text-white/70 leading-relaxed max-w-lg mb-6 sm:mb-8">
							At VioCodes, we craft modern websites, powerful digital
							experiences, and standout brand identities for startups, creators,
							and growing businesses. From sleek design to full-stack
							development, we turn ideas into premium digital products that
							leave a lasting impression.
						</p>

						{/* Buttons */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
							<Button variant="primary">Start Your Project</Button>
						</div>
					</div>
				</main>
			</ShaderBackground>
		</div>
	);
};
