import PropTypes from "prop-types";
import appScreenshots from "../assets/4000_app_screenshots.png";
import burble from "../assets/burble.png";
import generateThumbnails from "../assets/generate-thumbnails-code.png";
import grownotes from "../assets/grownotes.png";
import hoadir from "../assets/hoadir.png";
import mockexDashboard from "../assets/mockex-dashboard.png";
import naybiz from "../assets/naybiz.png";

export default function Projects() {
    return (
        <div
            id="projects"
            className="flex flex-col items-center p-5 bg-teal-600"
        >
            <p className="text-3xl font-semibold underline-offset-2 pb-20">
                Projects
            </p>
            <div className="container grid lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
                <Project
                    image={hoadir}
                    title="HOA Directory"
                    description={
                        <>
                            A platform dedicated to fostering transparency and
                            honesty in Homeowners Associations. Built with the
                            latest React Router v7 as a framework, the
                            application places a heavy emphasis on SEO
                            optimization to maximize visibility. With growing
                            traffic and user engagement, the platform is
                            positioned to evolve into a comprehensive SaaS
                            solution for HOA management and communication.
                        </>
                    }
                    siteLink="https://hoa.directory"
                />
                <Project
                    image={grownotes}
                    title="GrowNotes - Garden Journal"
                    description={
                        <>
                            GrowNotes is a garden journal mobile app built with
                            React Native. Add plants and add journal entries to
                            track and remember key plant care events. Gardening
                            is all about learning and GrowNotes makes it easy to
                            remember important planting tasks. Available on
                            iPhone now.
                        </>
                    }
                    appLink={
                        "https://apps.apple.com/us/app/grownotes/id6479220212"
                    }
                    siteLink={"https://www.grow-notes.com/"}
                />
                <Project
                    image={appScreenshots}
                    title="White Mountain 4000-footer Tracker"
                    description={
                        <>
                            There are 48 4000-ft summits in the White Mountains
                            in New Hampshire and lots of hikers make it a goal
                            to hike all of them including me. With the app you
                            can log information about your hikes such as
                            weather, companions, etc and upload photos. It also
                            features a map-view of the area with custom markers
                            showing a unique perspective of your progress.
                            <br />
                            <br />
                            Built with Swift, SwiftUI and SwiftData and
                            published on the App Store for iOS 17+.
                        </>
                    }
                    appLink={
                        "https://apps.apple.com/us/app/white-mountain-4000ft-tracker/id6476589208"
                    }
                    sourceLink={"https://github.com/naturalnick/Summits"}
                />
                <Project
                    image={naybiz}
                    title="Circle Tree Condominiums Management Console (Formerly Naybiz)"
                    description={
                        <>
                            My first official SaaS app built with React,
                            Bootstrap and Firebase - Naybiz gives community
                            managers a seamless solution to registering and
                            educating their residents. The streamlined email
                            notification system, powered by a Transactional
                            Email API, ensure a frictionless resident
                            registration process.
                            <br />
                            <br />1 active community
                        </>
                    }
                    videoLink="https://www.youtube.com/watch?v=8e0kK4cCC0c&t=1s"
                />
                <Project
                    image={generateThumbnails}
                    title="Thumbnail Generator Extension for Firebase"
                    description={
                        <>
                            A cloud function for generating image thumbnails
                            from videos uploaded to Firebase deployed as a free
                            extension on Firebase Extensions Hub. This was a
                            freelance project converted into something I hope
                            people will find useful.
                            <br />
                            <br />
                            100+ installs
                        </>
                    }
                    sourceLink="https://github.com/naturalnick/firebase-extension-generate-thumbnails"
                    siteLink="https://extensions.dev/extensions/nickschaefer/storage-generate-thumbnails"
                />
                <Project
                    image={mockexDashboard}
                    title="Mock Exchange"
                    description={
                        <>
                            Crafted with React.js for the front-end and Python
                            for the back-end, this full-stack portfolio
                            application enables users to trade stocks with
                            simulated funds, accessing real-time stock data
                            through external REST APIs and tracking portfolio
                            changes after purchases.
                        </>
                    }
                    sourceLink="https://github.com/naturalnick/mock-exchange"
                />
                <Project
                    image={burble}
                    title="Burble"
                    description={
                        <>
                            Enabling real-time updates for client messages and
                            user statuses, this full-stack chat application
                            utilizes the SocketIO framework, with a Python Flask
                            back-end and a JavaScript React front-end, offering
                            a dynamic and responsive user experience.
                        </>
                    }
                    sourceLink="https://github.com/naturalnick/chat-app"
                />
            </div>
            <p className="text-2xl animate-bounce mt-[100px]">
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
    appLink,
    siteLink,
    sourceLink,
    videoLink,
}) {
    return (
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
                            <button className="btn btn-neutral">
                                Source Code
                            </button>
                        </a>
                    )}
                    {siteLink && (
                        <a href={siteLink} target="_blank" rel="noreferrer">
                            <button className="btn btn-neutral">
                                View Site
                            </button>
                        </a>
                    )}
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noreferrer">
                            <button className="btn btn-neutral">Demo</button>
                        </a>
                    )}
                    {appLink && (
                        <a href={appLink} target="_blank" rel="noreferrer">
                            <button className="btn btn-neutral">
                                App Store
                            </button>
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
    );
}

Project.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.element,
    sourceLink: PropTypes.string,
    siteLink: PropTypes.string,
    demoLink: PropTypes.string,
    appLink: PropTypes.string,
    videoLink: PropTypes.string,
};
