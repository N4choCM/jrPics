import React, { useContext } from "react";
import aboutPic from "../../assets/about.jpg";
import { AppStateContext } from "../../state/AppProvider";
import "./AboutCard.css";

const AboutCard = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div id="about" className="container ancla">
			<br /><br />
			<div className="row py-5 px-4">
				<div className="offset-1 offset-md-0 col-10 mx-md-auto mt-2 mb-4 d-lg-none">
					<img
						src={aboutPic}
						className={
							appStateContext?.state.isDarkMode
								? "border-custom d-flex justify-content-center align-items-center w-75 mx-auto custom-shadow-pic-dark"
								: "border-custom d-flex justify-content-center align-items-center w-75 mx-auto custom-shadow-pic-light"
						}
						alt="Juan Ramón Campos Garrigues"
					/>
				</div>
				<div className="offset-1 offset-md-0 col-10 col-md-5 my-auto d-none d-lg-block">
					<img
						src={aboutPic}
						className={
							appStateContext?.state.isDarkMode
								? "border-custom rounded d-flex justify-content-center w-75 mx-auto custom-shadow-pic-dark"
								: "border-custom rounded d-flex justify-content-center w-75 mx-auto custom-shadow-pic-light"
						}
						alt="Juan Ramón Campos Garrigues"
					/>
				</div>
				<div className="offset-1 col-10 col-lg-5 d-flex justify-content-center align-items-center">
					<p className="text-justify-both">
						Con una pasión desbordante por la fotografía desde los 15 años, Juan
						Ramón ha dedicado su vida a capturar momentos inolvidables a través
						de su lente. Su versatilidad se refleja en una amplia gama de
						fotografías, desde emocionantes eventos deportivos hasta íntimas
						ceremonias como bodas, bautizos y comuniones. Ha explorado la
						belleza de los destinos de viaje, la energía de los espectáculos de
						baile y la serenidad de las playas. Su habilidad para inmortalizar
						momentos cotidianos, celebraciones y festividades, como la Semana
						Santa, demuestra su habilidad para encontrar la magia en cada
						situación, creando un legado visual de vivencias inolvidables. En
						este blog, podrás disfrutar de sus mejores fotografías.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutCard;
