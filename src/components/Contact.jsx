import { useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState();

	function sendEmail() {
		if (checkForErrors()) console.log("send email");
	}

	function checkForErrors() {
		const newErrors = {};
		if (!name) newErrors.name = "Name is required.";
		if (!email) newErrors.email = "Email is required.";
		if (!message) newErrors.message = "Message is required.";

		if (Object.entries(newErrors).length > 0) {
			setErrors(newErrors);
			return true;
		}
		return false;
	}

	function handleChange(e) {
		if (e.target.name === "name") {
			setName(e.target.value);
			if (errors?.name) delete errors.name;
			return;
		}
		if (e.target.name === "email") {
			setEmail(e.target.value);
			if (errors?.email) delete errors.email;
			return;
		}

		if (e.target.name === "message") {
			setMessage(e.target.value);
			if (errors?.message) delete errors.message;
			return;
		}
	}

	return (
		<div
			id="contact"
			className="flex items-center min-h-screen p-5 bg-gradient-to-b from-teal-600 via-teal-600 to-[#FFC857]"
		>
			<div className="container card bg-slate-100 text-neutral shadow-xl max-w-lg">
				<div className="card-body">
					<p className="text-xl font-semibold underline underline-offset-2 pb-6">
						Contact Me
					</p>
					<p className="pb-3">
						Whether you&apos;re looking to hire a software developer, want
						to brainstorm ideas or collaborations, or have something else
						you&apos;d like to discuss - feel free to reach out!
					</p>
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
						placeholder="Name"
						className="input input-bordered w-full bg-white"
						disabled
					/>
					{errors?.name && (
						<small className="text-red-500">{errors.name}</small>
					)}
					<input
						type="text"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="Email"
						className="input input-bordered w-full bg-white"
						disabled
					/>
					{errors?.email && (
						<small className="text-red-500">{errors.email}</small>
					)}
					<textarea
						value={message}
						name="message"
						onChange={handleChange}
						placeholder="Message"
						className="textarea textarea-bordered w-full bg-white"
						draggable
						disabled
					/>
					{errors?.message && (
						<small className="text-red-500">{errors.message}</small>
					)}
					<button
						onClick={sendEmail}
						className="btn btn-primary max-w-xs"
						disabled
					>
						Send
					</button>
					<p>
						Still setting up this form... In the meantime, reach me on
						social media.
					</p>
				</div>
			</div>
		</div>
	);
}
