import { Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MealCard = ({ meal }) => {
 
  const { foodName, foodImage, price, rating, chefName, chefId, deliveryArea } = meal;
  const navigate = useNavigate();

  const viewDetails = (meal) => {
    
    if (meal._id) {
      navigate(`/mealDetails/${meal._id}`);
    } else {
      console.error("Meal ID is missing for navigation.");
    }
  };

  return (
    
    <motion.div
      className="b-g-surface rounded-2xl shadow-lg overflow-hidden w-full max-w-xs mx-auto md:mx-0 cursor-pointer border border-transparent"
      
     
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      
      r
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0px 0px 15px rgba(201, 162, 77, 0.7)", 
        borderColor: "#C9A24D", 
      }}
      
      whileTap={{ scale: 0.98 }}
    >
      
     
      <motion.div 
        className="w-full h-48 overflow-hidden" 
      
        // whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
      >
       
        <img 
          src={foodImage} 
          alt={foodName} 
         
          className="w-full h-full object-cover transition duration-300 ease-in-out" 
        />
      </motion.div>

      {/* Card Body */}
      <div className="p-4">
        <h3 className="header-text t-primary text-lg font-bold mb-2">{foodName}</h3>

        <p className="t-muted text-sm mb-1">
          <span className="t-primary font-semibold">Chef:</span> {chefName} ({chefId})
        </p>

        <div className="flex justify-between items-center mb-2">
          <span className="t-accent font-semibold">৳{price}</span>
         
          <span className="t-muted flex items-center">{rating} <Star className="w-4 h-4 ml-1" fill="#C9A24D" /></span>
        </div>

        <p className="t-muted text-sm mb-3">
          <span className="t-primary font-semibold">Delivery:</span> {deliveryArea}
        </p>

        <button
          onClick={() => viewDetails(meal)}
          className="w-full b-g-accent text-black font-semibold py-2 rounded-md transition hover:opacity-90"
        >
          See Details
        </button>
      </div>
    </motion.div>
  );
};

export default MealCard;