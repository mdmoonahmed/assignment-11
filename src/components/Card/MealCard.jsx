import React from "react";

const MealCard = ({ meal, onSeeDetails }) => {
  const { foodName, foodImage, price, rating, chefName, chefId, deliveryArea } = meal;

  return (
    <div className="b-g-surface rounded-2xl shadow-lg overflow-hidden w-full max-w-xs mx-auto md:mx-0">
      <img src={foodImage} alt={foodName} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="header-text t-primary text-lg font-bold mb-2">{foodName}</h3>

        <p className="t-muted text-sm mb-1">
          <span className="t-primary font-semibold">Chef:</span> {chefName} ({chefId})
        </p>

        <div className="flex justify-between items-center mb-2">
          <span className="t-accent font-semibold">৳{price}</span>
          <span className="t-muted">{rating} ⭐</span>
        </div>

        <p className="t-muted text-sm mb-3">
          <span className="t-primary font-semibold">Delivery:</span> {deliveryArea}
        </p>

        <button
          onClick={() => onSeeDetails(meal)}
          className="w-full b-g-accent text-black font-semibold py-2 rounded-md transition hover:opacity-90"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MealCard;
