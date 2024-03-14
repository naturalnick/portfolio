export default function ProductNav() {
	return (
		<div id="top" className="navbar bg-[#D2CCA1]">
			<div className="navbar-start">
				<span className="p-4 no-underline cursor-pointer text-gray-50 normal-case text-xl whitespace-nowrap">
					<h1 className="font-josefinSans text-[#0F9F9B]">
						<a href="/grownotes">GrowNotes</a>
					</h1>
				</span>
			</div>
			<div className="navbar-end">
				<a
					href="/"
					className="rounded bg-[#0F9F9B] px-4 py-2 text-[11pt] font-medium text-[#D2CCA1]"
				>
					Developer
				</a>
			</div>
		</div>
	);
}
