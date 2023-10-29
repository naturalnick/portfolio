import bioPic from "../assets/me.jpg";

export default function About() {
	return (
		<div
			id="about"
			className="lg:flex min-h-screen p-5 bg-gradient-to-b from-[#0C4A6E] via-[#0C4A6E] to-teal-600"
		>
			<div className="basis-2/4 p-20">
				<p className="text-xl font-semibold underline underline-offset-2 pb-6">
					About Me
				</p>

				<p className="pb-5">
					I&apos;m a full-stack software engineer with a passion for
					simplicity. As a minimalist I find joy in distilling complex
					problems into elegantly straightforward solutions.
				</p>

				<p className="pb-5">
					The vast and dynamic nature of software development fuels my
					curiosity, and I embrace each challenge as an opportunity to
					expand my skills.
				</p>
				<p className="pb-5">
					Lately my time is spread between learning Swift and SwiftUI for
					iOS development and my startup Naybiz, a web app for community
					managers.
				</p>

				<p className="pb-5">
					🌱 In my free time, you can find me in my garden or hiking a
					mountain in the White Mountain National Forest.
				</p>

				{/* <p className="pb-5">
					I&apos;m eager to connect with like-minded enthusiasts and am on
					the lookout for exciting collaborations.
				</p> */}

				<p className="pb-3">
					Here are some of the technical skills I bring to the table:
				</p>
				<div>
					<kbd className="kbd">HTML</kbd>
					<kbd className="kbd">CSS</kbd>
					<kbd className="kbd">Javascript</kbd>
					<kbd className="kbd">React</kbd>
					<kbd className="kbd">React Native</kbd>
					<kbd className="kbd">Python</kbd>
					<kbd className="kbd">Flask</kbd>
					<kbd className="kbd">Bootstrap</kbd>
					<kbd className="kbd">TailwindCSS</kbd>
					<kbd className="kbd">PostgreSQL</kbd>
					<kbd className="kbd">Firebase</kbd>
					<kbd className="kbd">Swift</kbd>
					<kbd className="kbd">SwiftUI</kbd>
				</div>
			</div>
			<div className="basis-2/4 flex flex-row justify-center">
				<div>
					<img
						src={bioPic}
						alt="Bio Pic"
						className="rounded-full max-w-[500px] object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
