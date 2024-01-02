import "./Banner.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { AppStateContext } from "../../state/AppProvider";
import bannerPic from "../../assets/highlightedPic.jpg";
import bannerPicSm from "../../assets/highlightedPicSm.jpg";

const Banner = () => {

  const appStateContext = useContext(AppStateContext);
  // TODO: Don't use carousel but unique highlighted pic 
	const handleHighlightedPic = () => {
		// TODO: Call api to get highlighted pic
		// TODO: If pic is highlightedSm, return highlightedSm else return highlightedLg
	};


	return (
		<div
			id="home"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner container-carousel">
				<div className="carousel-item active">
					<img
						src={bannerPic}
						className="w-100 d-none d-lg-block"
						alt="Highlighted Pic"
					/>
					<img
						src={bannerPicSm}
						className="w-100 d-lg-none img-fit"
						alt="Highlighted Pic"
					/>
					</div>
				<div className="overlay">
					<div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
							<Link
									to="about"
									smooth={true}
									duration={200}
								>
						<button
							className={
								appStateContext?.state.isDarkMode
									? "btn btn-bottom btn-banner-custom-dark text-white px-3 py-2"
									: "btn btn-bottom btn-banner-custom-light text-white px-3 py-2"
							}
						>
							¡Conóceme! 😀
						</button>
								</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;