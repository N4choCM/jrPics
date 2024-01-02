import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useContext } from "react";
import { AppStateContext } from "../../state/AppProvider";

const Footer = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<footer className="margin-footer mt-5">
			<div
				className={
					appStateContext?.state.isDarkMode
						? "bg-footer-dark"
						: "bg-footer-light"
				}
			>
				<div className="container">
					<div className="row d-flex flex-column flex-md-row gap-5 py-5">
						<div className="d-none d-lg-flex col-12 col-lg d-flex flex-lg-column justify-content-center align-items-center text-white gap-5">
							<Link
								to="https://www.instagram.com/juanramon.campos/"
								className="text-white social-hover"
								target="_blank"
							>
								<FaInstagram
									className={
										!appStateContext?.state.isDarkMode
											? "text-dark social-hover large-social-icon-lg"
											: "text-white social-hover large-social-icon-lg"
									}
								/>
							</Link>
							<Link
								to="https://www.facebook.com/profile.php?id=100087924643423"
								className="text-white social-hover"
								target="_blank"
							>
								<FaFacebookSquare
									className={
										!appStateContext?.state.isDarkMode
											? "text-dark social-hover large-social-icon-lg"
											: "text-white social-hover large-social-icon-lg"
									}
								/>
							</Link>
							<img
								className={
									!appStateContext?.state.isDarkMode
										? "footer-logo d-lg-none"
										: "footer-logo d-lg-none"
								}
								src={logo}
								alt="logo"
							/>
						</div>
						<div
							className={
								!appStateContext?.state.isDarkMode
									? "d-none col-12 col-lg d-lg-flex justify-content-center mt-4"
									: "d-none col-12 col-lg d-lg-flex justify-content-center mt-4"
							}
						>
							<img className="footer-logo" src={logo} alt="logo" />
						</div>
						<div
							className={
								appStateContext?.state.isDarkMode
									? "col-12 col-lg text-white d-flex justify-content-center align-items-center flex-column"
									: "col-12 col-lg text-dark d-flex justify-content-center align-items-center flex-column"
							}
						>
							<h4 className="text-decoration-underline mt-4">Contacto</h4>
							<p>
								<span>
									<MdOutlineMailOutline
										className={
											appStateContext?.state.isDarkMode
												? "me-1 text-white email-icon-size"
												: "me-1 text-dark email-icon-size"
										}
										aria-hidden="true"
									/>{" "}
									jrfln4@yahoo.es
								</span>
							</p>
						</div>
						<div className="d-lg-none col-12 col-lg d-flex flex-lg-column justify-content-center align-items-center text-white gap-5">
							<Link
								to="https://www.instagram.com/juanramon.campos/"
								className="text-white social-hover"
								target="_blank"
							>
								<FaInstagram
									className={
										!appStateContext?.state.isDarkMode
											? "text-dark social-hover large-social-icon-sm-md"
											: "text-white social-hover large-social-icon-sm-md"
									}
								/>
							</Link>
							<Link
								to="https://www.facebook.com/profile.php?id=100087924643423"
								className="text-white social-hover"
								target="_blank"
							>
								<FaFacebookSquare
									className={
										!appStateContext?.state.isDarkMode
											? "text-dark social-hover large-social-icon-sm-md"
											: "text-white social-hover large-social-icon-sm-md"
									}
								/>
							</Link>
						</div>
						<div
							className={
								appStateContext?.state.isDarkMode
									? "col-12 text-center text-white"
									: "col-12 text-center text-dark"
							}
						>
							<span>
								Developed with ❤ by{" "}
								<a
									className="no-decoration social-hover fw-bold arcade-font"
									href="https://nachocamposdev.netlify.app/"
									target="_blank"
								>
									Nacho Campos Martí
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
