import PropTypes from "prop-types";

export default function SectionMarker({ hidden }) {
	return (
		<div className="flex justify-center relative top-[35%]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				hidden={hidden}
				className="animate-bounce"
			>
				<path d="M6 9l6 6 6-6" />
			</svg>
		</div>
	);
}

SectionMarker.propTypes = {
	hidden: PropTypes.bool,
};
