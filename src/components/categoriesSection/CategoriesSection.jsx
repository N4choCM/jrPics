import React from "react";

const CategoriesSection = () => {
  // TODO: Categories Array with name, image and description
	CATEGORIES = ["Beach", "Comida", "Deportes", "Viajes"];
	return (
    // TODO: Map categories array and show each category
		<div className="container">
			<div className="row">
				<div className="card">
					<div className="col-12 col-lg-4">
            // TODO: Show odd pics
          </div>
					<div className="col-12 col-lg-8">
						<div className="card-body">
            // TODO: Show odd descriptions and add a button for navigating to the category page
            </div>
					</div>
				</div>
			</div>
      // TODO: Validate if there is an even object at this point, otherwise don't show this row
      <div className="row">
				<div className="card">
					<div className="col-12 col-lg-4">
            // TODO: Show even pics
          </div>
					<div className="col-12 col-lg-8">
						<div className="card-body">
            // TODO: Show even descriptions and add a button for navigating to the category page
            </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesSection;
