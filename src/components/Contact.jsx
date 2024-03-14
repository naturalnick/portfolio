import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState();
	const [formSent, setFormSent] = useState(false);

	useEffect(() => {
		if (formSent && email !== "") {
			setFormSent(false);
			console.log("setFormSentfalse");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [email]);

	async function sendEmail() {
		if (formValid()) {
			await addMailForEmailTrigger(name, email, message);
			setFormSent(true);
			resetForm();
		}
	}

	async function addMailForEmailTrigger(name, email, message) {
		await addDoc(collection(db, "mail"), {
			to: import.meta.env.VITE_TO_EMAIL,
			message: {
				subject: "Porfolio Contact Form - " + name,
				html: `
						<p><b>Name:</b> ${name}</p>
						<p><b>Email:</b> ${email}</p>
						<p><b>Message:</b> ${message}</p>
						<br /><br />
						<p>Submitted via the contact form at <a href="https://nschaefer.com/">nschaefer.com</a></p>
						`,
			},
		});
	}

	function resetForm() {
		setName("");
		setEmail("");
		setMessage("");
	}

	function formValid() {
		const newErrors = {};
		if (!name) newErrors.name = "Name is required.";
		if (!email) newErrors.email = "Email is required.";
		if (!message) newErrors.message = "Message is required.";

		if (Object.entries(newErrors).length > 0) {
			setErrors(newErrors);
			return false;
		}
		return true;
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
			className="flex items-center p-5 pt-20 bg-gradient-to-b from-teal-600 via-teal-600 to-[#FFC857]"
		>
			<div className="container card bg-slate-100 text-neutral shadow-xl max-w-lg">
				<div className="card-body">
					<p className="text-xl font-semibold underline underline-offset-2 pb-4">
						I&apos;m All Ears
					</p>
					<p className="pb-3">
						Fill out this form to contact me for app support,
						employment opportunities, collaborations, etc...
					</p>
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
						placeholder="Name"
						className="input input-bordered w-full bg-white"
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
					/>
					{errors?.message && (
						<small className="text-red-500">{errors.message}</small>
					)}
					<button
						onClick={sendEmail}
						className="btn btn-primary max-w-xs"
					>
						Send
					</button>
					{formSent && <p>Form successfully submitted.</p>}
				</div>
			</div>
		</div>
	);
}
