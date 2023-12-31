import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import { Home20Regular, PersonInfo20Regular, Camera20Regular, WeatherSunny20Regular, WeatherMoon20Regular } from '@fluentui/react-icons';
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

const NavBar = ({ darkMode, changeDarkMode }) => {

	darkMode = true;

	const showContactInfo = () => {
		Swal.fire({
			html: `
				<h6>Email: nachocamposdev@gmail.com</h6>
				<h6>Phone: +34 628 523 682</h6>
			`,
			icon: 'info',
			showCancelButton: false,
			showConfirmButton: false,
			showCloseButton: true,
			position: window.innerWidth <= 992 ? 'center' : 'top-end',
		});
	};
	

	return (
		<header className="fixed-top">
			<nav className="navbar navbar-expand-lg navbar-dark bg-navbar-light">
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
									!darkMode
										? "img-logo img-logo-white me-3"
										: "img-logo me-3"
								}
								src={logo}
								alt="logo"
							/>
							<span>
								<h4
									className={
										darkMode
											? "text-dark d-none d-md-block"
											: "text-white d-none d-md-block"
									}
								>
									JR Pics
								</h4>
								<h6
									className={
										darkMode
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
							<li className="nav-item hover-custom">
								<Link
									to="home"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
								>
									<Home20Regular className={
											darkMode
												? "text-dark me-1"
												: "text-white me-1"
										} />
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Inicio
									</span>
								</Link>
							</li>
							<li className="nav-item hover-custom">
								<Link
									to="about"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
								>
									<PersonInfo20Regular className={
											darkMode
												? "text-dark me-1"
												: "text-white me-1"
										} />
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Sobre mí
									</span>{" "}
								</Link>
							</li>
							<li className="nav-item hover-custom">
								<Link
									to="projects"
									smooth={true}
									duration={200}
									activeClassName="active"
									className="nav-link custom-pointer"
								>
									{" "}
									<Camera20Regular className={
											darkMode
												? "text-dark me-1"
												: "text-white me-1"
										} />
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Categorías
									</span>{" "}
								</Link>
							</li>
							<li className="nav-item hover-custom">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="https://github.com/N4choCM"
									target="_blank"
								>
									<FaInstagram className={
											darkMode
												? "text-dark fa fa-github me-1"
												: "text-white fa fa-github me-1"
										} />
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Instagram
									</span>{" "}
								</NavLink>
							</li>
							<li className="nav-item hover-custom">
								<NavLink
									className="nav-link"
									aria-current="page"
									to="https://www.linkedin.com/in/ignacio-campos-marti/"
									target="_blank"
								>
									<FaFacebookSquare className={
											darkMode
												? "text-dark fa fa-github me-1"
												: "text-white fa fa-github me-1"
										} />
									<span
										className={
											darkMode
												? "text-dark"
												: "text-white"
										}
									>
										Facebook
									</span>{" "}
								</NavLink>
							</li>
							<li className="nav-item hover-custom">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="#"
              onClick={showContactInfo}
            >
							<GrContact className={
											darkMode
												? "text-dark fa fa-github me-1"
												: "text-white fa fa-github me-1"
										} />
              <span
                className={
                  darkMode
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
							{darkMode ? (
								<WeatherSunny20Regular className="" />
							) : (
								<WeatherMoon20Regular />
							)}
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									role="switch"
									onChange={changeDarkMode}
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