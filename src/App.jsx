import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { useScrollY } from "./hooks/useScrollY";

export default function App() {
	const scrollY = useScrollY();
	return (
		<div>
			<Nav />
			<Hero scrollY={scrollY} />
			<About />
			<Projects />
			<Contact />
			<footer className="footer footer-center p-10 bg-[#FFC857] text-neutral rounded">
				<aside>
					<p className="mt-20">Copyright © 2023 - Nick Schaefer</p>
				</aside>
			</footer>
		</div>
	);
}
