import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useScrollY } from "./hooks/useScrollY";
import SectionMarker from "./components/SectionMarker";

export default function App() {
	const scrollY = useScrollY();
	return (
		<div>
			<div id="top" className="flex flex-col min-h-screen">
				<Nav />
				<Hero />
				<SectionMarker hidden={scrollY > 150} />
			</div>

			<About />
			<Projects />
			<Contact />
			<footer className="footer footer-center p-10 bg-[#FFC857] text-neutral rounded">
				<aside>
					<p>Copyright © 2023 - All rights reserved by Nick Schaefer</p>
				</aside>
				<a href="#top" className="btn btn-neutral">
					Return To Top
				</a>
			</footer>
		</div>
	);
}
