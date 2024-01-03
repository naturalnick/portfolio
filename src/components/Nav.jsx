import Nick_Schaefer_Resume from "../assets/Nick_Schaefer_Resume.pdf";

export default function Nav() {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost md:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 gap-2"
					>
						<LinkItems />
					</ul>
				</div>
				<a
					href="#"
					className="p-4 no-underline cursor-pointer text-gray-50 normal-case text-xl whitespace-nowrap"
				>
					<h1 className="font-josefinSans text-[#FFC857]">NNS</h1>
				</a>
			</div>
			<div className="navbar-end hidden md:flex">
				<ul className="menu menu-horizontal px-1">
					<LinkItems />
				</ul>
			</div>
		</div>
	);
}

function LinkItems() {
	return (
		<>
			<li className="justify-center">
				<a href="#about">About</a>
			</li>
			<li className="justify-center">
				<a href="#projects">Projects</a>
			</li>
			<li className="justify-center">
				<a href="#contact">Contact</a>
			</li>
			<div>
				<a
					href={Nick_Schaefer_Resume}
					className="btn btn-primary ms-3"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
			</div>
		</>
	);
}
