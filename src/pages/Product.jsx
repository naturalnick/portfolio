import phoneImage from "../assets/phone-tomato-front.png";
import ProductNav from "../components/ProductNav";

export default function Product() {
	return (
		<div className="bg-[#D2CCA1] text-black min-h-screen">
			<ProductNav />
			<div className="container">
				<div className="hero min-h-screen">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img src={phoneImage} className="w-[350px]" />
						<div>
							<h2 className="font-josefinSans text-5xl font-bold">
								A Garden Notes App for Seed Starters and Plant
								Enthusiasts
							</h2>
							<p className="py-6">
								<ul className="leading-8">
									<li>Virtualize your seed packets</li>
									<li>Plant-by-plant journal entries</li>
									<li>Organize into plant groups</li>
									<li>
										Learn from past successes and failures
									</li>
								</ul>
							</p>
							<button className="btn btn-primary">
								See on App Store
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<button
						className="btn btn-link"
						onClick={() =>
							document.getElementById("my_modal_1").showModal()
						}
					>
						Privacy Policy
					</button>
					<dialog id="my_modal_1" className="modal">
						<div className="modal-box bg-white">
							<h3 className="font-bold text-lg">
								GrowNotes Privacy Policy
							</h3>
							<p className="py-4">
								(Press ESC key or click the button below to
								close)
							</p>

							<p>
								<strong>Effective Date:</strong> March 13, 2024
							</p>

							<p>
								This privacy policy explains our information
								practices related to GrowNotes, our garden
								journal app for iPhone devices with iOS 17+. We
								care deeply about your privacy and are dedicated
								to the transparent handling of your data.
							</p>
							<br />
							<h2 className="font-bold">
								Information We Collect
							</h2>
							<br />
							<ul>
								<li>
									<strong>Plants:</strong> We collect the
									names, photos and plant groups of each
									individual plant.
								</li>
								<li>
									<strong>Plant Journal Entries:</strong> We
									collect notes, observations, and any photos
									you choose to associate with individual
									plant entries.
								</li>
								<li>
									<strong>Device Information:</strong> For
									backup and troubleshooting purposes, we may
									collect basic device information such as
									your device type and operating system
									version.
								</li>
							</ul>
							<br />
							<h2 className="font-bold">
								How We Use Your Information
							</h2>
							<br />
							<ul>
								<li>
									<strong>
										Providing the App&apos;s Features:
									</strong>{" "}
									We use your information to operate the
									garden journal, including storing and
									displaying your notes and photos.
								</li>
								<li>
									<strong>Backup and Restoration:</strong>{" "}
									iCloud backup is enabled by default for the
									purposes of backing up and restoring your
									data across devices.
								</li>
								<li>
									<strong>Troubleshooting:</strong> Device
									information may be used (alongside your
									permission) to help resolve technical issues
									you might encounter with the app.
								</li>
								<li>
									<strong>App Improvement:</strong> We may
									analyze anonymized app usage data to gain
									insights and improve the app&apos;s
									functionality. This data will never include
									your personal notes.
								</li>
							</ul>
							<br />
							<h2 className="font-bold">
								How We Share Your Information
							</h2>
							<br />
							<ul>
								<li>
									<strong>Never:</strong> We will never share
									your data with third-party services or
									others without your consent (with the
									exception of legal reasons).
								</li>
								<li>
									<strong>For Legal Reasons:</strong> We may
									disclose your information if we have your
									consent or if we believe the disclosure is
									necessary to comply with the law, enforce
									our policies, or protect our rights,
									property, or safety.
								</li>
							</ul>
							<br />
							<h2 className="font-bold">Security</h2>
							<br />
							<p>
								We implement measures to protect your
								information. Data stored on your device is
								protected by the security systems of your
								iPhone. iCloud backup data is encrypted and
								stored on secure servers.
							</p>
							<br />
							<h2 className="font-bold">Third-Party Services</h2>
							<br />
							<p>
								Our app does not integrate with any third-party
								services other than our cloud backup provider,
								which adheres to strict security and privacy
								standards.
							</p>
							<br />
							<h2 className="font-bold">
								Children&apos;s Privacy
							</h2>
							<br />
							<p>
								Our app is not designed for use by children
								under 13 years of age. We do not knowingly
								collect personal information from children under
								13.
							</p>
							<br />
							<h2 className="font-bold">
								Changes to This Policy
							</h2>
							<br />
							<p>
								We may update our privacy policy from time to
								time. We&apos;ll always post changes within the
								app and may notify you via other channels if
								significant changes occur.
							</p>
							<br />
							<h2 className="font-bold">Contact Us</h2>
							<br />
							<p>
								If you have any questions regarding our privacy
								policy or have any issues with the app, please
								contact us on the{" "}
								<a href="/" className="text-blue underline">
									developer&apos;s site
								</a>{" "}
								using the contact form.
							</p>

							<div className="modal-action">
								<form method="dialog">
									{/* if there is a button in form, it will close the modal */}
									<button className="btn btn-neutral">
										Close
									</button>
								</form>
							</div>
						</div>
					</dialog>
					<p>Copyright © 2023 - Nick Schaefer</p>
				</div>
			</div>
		</div>
	);
}
