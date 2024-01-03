import PropTypes from "prop-types";
import burble from "../assets/burble.png";
import generateThumbnails from "../assets/generate-thumbnails-code.png";
import mockexDashboard from "../assets/mockex-dashboard.png";
import naybiz from "../assets/naybiz.png";
import twilighter from "../assets/twilighter.png";

export default function Projects() {
	return (
		<div
			id="projects"
			className="flex flex-col items-center min-h-screen p-5 bg-teal-600"
		>
			<p className="text-xl font-semibold underline underline-offset-2 pb-6">
				Projects
			</p>
			<div className="container md:columns-2 xl:columns-3 gap-10">
				<Project
					image={naybiz}
					title="Naybiz"
					description={
						<>
							My first official SaaS app built with React, Bootstrap and
							Firebase - Naybiz gives community managers a seamless
							solution to registering and educating their residents. The
							streamlined email notification system, powered by a
							Transactional Email API, ensures a frictionless resident
							registration process without necessitating logins.
							<br />
							<br />
							1+ active users
						</>
					}
					videoLink="https://www.youtube.com/watch?v=8e0kK4cCC0c&t=1s"
					siteLink="https://www.naybiz.com"
				/>
				<Project
					image={mockexDashboard}
					title="Mock Exchange"
					description={
						<>
							Crafted with React.js for the front-end and Python for the
							back-end, this full-stack portfolio application enables
							users to trade stocks with simulated funds, accessing
							real-time stock data through external REST APIs and
							tracking portfolio changes after purchases.
						</>
					}
					sourceLink="https://github.com/naturalnick/mock-exchange"
				/>
				<Project
					image={burble}
					title="Burble"
					description={
						<>
							Enabling real-time updates for client messages and user
							statuses, this full-stack chat application utilizes the
							SocketIO framework, with a Python Flask back-end and a
							JavaScript React front-end, offering a dynamic and
							responsive user experience.
						</>
					}
					sourceLink="https://github.com/naturalnick/chat-app"
				/>
				<Project
					image={generateThumbnails}
					title="Thumbnail Generator Extension for Firebase"
					description={
						<>
							A cloud function for generating image thumbnails from
							videos uploaded to Firebase deployed as a free extension on
							Firebase Extensions Hub. This was a freelance project
							converted into something I hope people will find useful.
							<br />
							<br />
							30+ installs
						</>
					}
					sourceLink="https://github.com/naturalnick/firebase-extension-generate-thumbnails"
					siteLink="https://extensions.dev/extensions/nickschaefer/storage-generate-thumbnails"
				/>
				<Project
					image={twilighter}
					title="Twilighter"
					description={
						<>
							Facilitating tweet searches and random tweet generation,
							this full-stack web application utilizes internal API
							endpoints on the server, which communicated with
							Twitter&apos;s API to retrieve tweet data. <br /> <br />
							Retired due to restricted Twitter API.
						</>
					}
					sourceLink="https://github.com/naturalnick/twilighter"
				/>
			</div>
			<p className="text-2xl animate-bounce mt-24">
				I can&apos;t wait to show you what&apos;s next!
			</p>
		</div>
	);
}

function Project({
	image,
	title,
	description,
	demoLink,
	siteLink,
	sourceLink,
	videoLink,
}) {
	return (
		<div className="mb-10">
			<div className="card bg-base-100 shadow-xl">
				<figure>
					<img src={image} alt="title" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p className="text-sm">{description}</p>
					<div className="card-actions justify-end">
						{sourceLink && (
							<a href={sourceLink} target="_blank" rel="noreferrer">
								<button className="btn btn-neutral">Source Code</button>
							</a>
						)}
						{siteLink && (
							<a href={siteLink} target="_blank" rel="noreferrer">
								<button className="btn btn-neutral">View Site</button>
							</a>
						)}
						{demoLink && (
							<a href={demoLink} target="_blank" rel="noreferrer">
								<button className="btn btn-neutral">Demo</button>
							</a>
						)}
						{videoLink && (
							<a href={videoLink} target="_blank" rel="noreferrer">
								<button className="btn btn-neutral">Video</button>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

Project.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	sourceLink: PropTypes.string,
	siteLink: PropTypes.string,
	demoLink: PropTypes.string,
	videoLink: PropTypes.string,
};
