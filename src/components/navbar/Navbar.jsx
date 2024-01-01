import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import {
	Home20Regular,
	PersonInfo20Regular,
	Camera20Regular,
	WeatherSunny20Regular,
	WeatherMoon20Regular,
} from "@fluentui/react-icons";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { useContext } from "react";
import { AppStateContext } from "../../state/AppProvider";

const NavBar = () => {
	const appStateContext = useContext(AppStateContext);

	const showContactInfo = () => {
		Swal.fire({
			html: `
				<h6>Email: jrfln4@yahoo.es</h6>
			`,
			icon: "info",
			showCancelButton: false,
			showConfirmButton: false,
			showCloseButton: true,
			position: window.innerWidth <= 992 ? "center" : "top-end",
		});
	};

	const handleDarkModeClick = () => {
		appStateContext?.dispatch({ type: "TOGGLE_DARK_MODE" });
	};

	return (
		<header className="fixed-top">
			<nav
				className={`navbar navbar-expand-lg navbar-dark ${
					appStateContext?.state.isDarkMode
						? "bg-navbar-dark"
						: "bg-navbar-light"
				}`}
			>
				<div className="container">
					<Link
						to="home"
						smooth={true}
						duration={200}
						activeClassName="active"
						className="navbar-brand custom-pointer"
					>
						<div>
							<img
								className={
									!appStateContext?.state.isDarkMode
										? "img-logo me-3"
										: "img-logo me-3"
								}
								src={logo}
								alt="logo"
							/>
							<span>
								<h4
									className={
										!appStateContext?.state.isDarkMode
											? "text-dark d-none d-md-block"
											: "text-white d-none d-md-block"
									}
								>
									JR Pics
								</h4>
								<h6
									className={
										!appStateContext?.state.isDarkMode
											? "text-dark text-center d-none d-md-block"
											: "text-white text-center d-none d-md-block"
									}
								>
									Fotografiando desde 1961
								</h6>
							</span>
						</div>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li
								className={`nav-item ${
									appStateContext?.state.isDarkMode
										? "hover-custom-dark"
										: "hover-custom-light"
								}`}
							>
								<Link
									to="home"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
								>
									<Home20Regular
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark me-1"
												: "text-white me-1"
										}
									/>
									<span
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark"
												: "text-white"
										}
									>
										Inicio
									</span>
								</Link>
							</li>
							<li
								className={`nav-item ${
									appStateContext?.state.isDarkMode
										? "hover-custom-dark"
										: "hover-custom-light"
								}`}
							>
								<Link
									to="about"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
								>
									<PersonInfo20Regular
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark me-1"
												: "text-white me-1"
										}
									/>
									<span
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark"
												: "text-white"
										}
									>
										Sobre mí
									</span>{" "}
								</Link>
							</li>
							<li
								className={`nav-item dropdown ${
									appStateContext?.state.isDarkMode
										? "hover-custom-dark"
										: "hover-custom-light"
								}`}
							>
								<Link
									to="projects"
									smooth={true}
									duration={200}
									activeClassName="active"
									className={`nav-link dropdown-toggle custom-pointer ${
										appStateContext?.state.isDarkMode
											? "text-white"
											: "text-dark"
									}`}
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{" "}
									<Camera20Regular
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark me-1"
												: "text-white me-1"
										}
									/>
									<span
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark"
												: "text-white"
										}
									>
										Categorías
									</span>{" "}
								</Link>
								<ul
									className={`dropdown-menu ${
										appStateContext?.state.isDarkMode
											? "bg-navbar-dark"
											: "bg-navbar-light"
									}`}
								>
									<li>
										<Link
											className={`dropdown-item ${
												appStateContext?.state.isDarkMode
													? "hover-custom-dark text-white"
													: "hover-custom-light"
											}`}
											to="#"
											activeClassName="active"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Playa
										</Link>
									</li>
									<li>
										<hr
											className={`dropdown-divider ${
												appStateContext?.state.isDarkMode ? "cm-hr-light" : ""
											}`}
										/>
									</li>
									<li>
										<Link
											className={`dropdown-item ${
												appStateContext?.state.isDarkMode
													? "hover-custom-dark text-white"
													: "hover-custom-light"
											}`}
											to="#"
											activeClassName="active"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Viajes
										</Link>
									</li>
									<li>
										<hr
											className={`dropdown-divider ${
												appStateContext?.state.isDarkMode ? "cm-hr-light" : ""
											}`}
										/>
									</li>
									<li>
										<Link
											className={`dropdown-item ${
												appStateContext?.state.isDarkMode
													? "hover-custom-dark text-white"
													: "hover-custom-light"
											}`}
											to="#"
											activeClassName="active"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Comida
										</Link>
									</li>
									<li>
										<hr
											className={`dropdown-divider ${
												appStateContext?.state.isDarkMode ? "cm-hr-light" : ""
											}`}
										/>
									</li>
									<li>
										<Link
											className={`dropdown-item ${
												appStateContext?.state.isDarkMode
													? "hover-custom-dark text-white"
													: "hover-custom-light"
											}`}
											to="#"
											activeClassName="active"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Deporte
										</Link>
									</li>
								</ul>
							</li>
							<li
								className={`nav-item ${
									appStateContext?.state.isDarkMode
										? "hover-custom-dark"
										: "hover-custom-light"
								}`}
							>
								<NavLink
									className="nav-link"
									aria-current="page"
									to="https://www.instagram.com/juanramon.campos/"
									target="_blank"
								>
									<FaInstagram
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark fa fa-github me-1"
												: "text-white fa fa-github me-1"
										}
									/>
									<span
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark"
												: "text-white"
										}
									>
										Instagram
									</span>{" "}
								</NavLink>
							</li>
							<li
								className={`nav-item ${
									appStateContext?.state.isDarkMode
										? "hover-custom-dark"
										: "hover-custom-light"
								}`}
							>
								<NavLink
									className="nav-link"
									aria-current="page"
									to="https://www.facebook.com/profile.php?id=100087924643423"
									target="_blank"
								>
									<FaFacebookSquare
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark fa fa-github me-1"
												: "text-white fa fa-github me-1"
										}
									/>
									<span
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark"
												: "text-white"
										}
									>
										Facebook
									</span>{" "}
								</NavLink>
							</li>
							<li
								className={`nav-item ${
									appStateContext?.state.isDarkMode
										? "hover-custom-dark"
										: "hover-custom-light"
								}`}
							>
								<NavLink
									className="nav-link"
									aria-current="page"
									to="#"
									onClick={showContactInfo}
								>
									<GrContact
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark fa fa-github me-1"
												: "text-white fa fa-github me-1"
										}
									/>
									<span
										className={
											!appStateContext?.state.isDarkMode
												? "text-dark"
												: "text-white"
										}
									>
										Contacto
									</span>
								</NavLink>
							</li>
						</ul>
						<div className="d-flex gap-2 align-items-center justify-content-center ms-2">
							{appStateContext?.state.isDarkMode ? (
								<WeatherSunny20Regular className="text-light" />
							) : (
								<WeatherMoon20Regular />
							)}
							<div className="form-check form-switch">
								<input
									className="form-check-input cm-pointer"
									type="checkbox"
									role="switch"
									onChange={handleDarkModeClick}
									checked={!appStateContext?.state.isDarkMode}
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

NavBar.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	changeDarkMode: PropTypes.func.isRequired,
};

export default NavBar;
