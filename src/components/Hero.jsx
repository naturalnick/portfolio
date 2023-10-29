import SocialLink from "./SocialLink";

export default function Hero() {
	return (
		<div className="hero flex-grow">
			<div className="hero-content text-center mt-[-200px]">
				<div>
					<h1 className="text-7xl font-semibold pb-2 font-josefinSans">
						I&apos;m Nick Schaefer
					</h1>
					<p className="text-lg font-josefinSans">
						Nature Enthusiast & Software Developer
					</p>
					<div className="flex justify-center gap-3 py-4">
						<SocialLink name="linkedin" />
						<SocialLink name="github" />
						<SocialLink name="goodreads" />
						<SocialLink name="instagram" />
						<SocialLink name="spotify" />
						<SocialLink name="youtube" />
					</div>
				</div>
			</div>
		</div>
	);
}
