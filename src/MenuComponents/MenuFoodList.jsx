import React, { useState } from "react";
const MenuFoodlist = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const categories = [
         {
          title:"Breakfast",
          icon: "Assets/Egg_Sandwich.png",
          images: [
            "/Assets/breakfast1.jpg",
            "/Assets/breakfast2.jpg",
            "/Assets/breakfast3.jpg",
            "/Assets/breakfast4.jpg",
            "/Assets/breakfast5.jpg",
            "/Assets/breakfast6.jpg",
            "/Assets/breakfast2.jpg",
            "/Assets/breakfast4.jpg",
            "/Assets/breakfast1.jpg",
            "/Assets/breakfast1.jpg", 
            "/Assets/breakfast1.jpg",
            "/Assets/breakfast1.jpg",
        ]
        },
         {
          title:"Lunch",
          icon: "Assets/jollof.png",
          images: [
            "/Assets/Lunch1.jpg",
            "/Assets/Lunch2.jpg",
            "/Assets/lunch3.jpg",
            "/Assets/lunch4.jpg",
            "/Assets/lunch5.jpg",
            "/Assets/lunch6.jpg",
            "/Assets/lunch4.jpg",
            "/Assets/Lunch1.jpg",
            "/Assets/lunch3.jpg",
            "/Assets/lunch3.jpg",
            "/Assets/lunch3.jpg",
            "/Assets/lunch3.jpg",
        ]
        },
         {
          title:"Dinner",
          icon: "Assets/fried_rice.png",
          images: [
            "/Assets/dinner1.jpg",
            "/Assets/dinner2.jpg",
            "/Assets/dinner3.jpg",
            "/Assets/dinner4.jpg",
            "/Assets/dinner5.jpg",
            "/Assets/dinner6.jpg",
            "/Assets/dinner3.jpg",
            "/Assets/dinner1.jpg",
            "/Assets/dinner5.jpg",
            "/Assets/dinner5.jpg",
            "/Assets/dinner5.jpg",
            "/Assets/dinner5.jpg",

        ]
        },
         {
          title:"Drinks",
          icon: "Assets/glassWine.png",
          images: [
            "/Assets/drink6.jpg",
            "/Assets/drink1.jpg",
            "/Assets/drinks3.jpg",
            "/Assets/drink4.jpg",
            "/Assets/drink5.jpg",
            "/Assets/drink6.jpg",
            "/Assets/drinks3.jpg",
            "/Assets/drink5.jpg",
            "/Assets/drink5.jpg",
            "/Assets/drink5.jpg",
            "/Assets/drink5.jpg",
            "/Assets/drinks5.jpg",
        ]
        },
    ]
   
    
    return (
      <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
        {/* Category buttons */}
        <div className="flex flex-col items-start justify-start w-full lg:w-1/4 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center justify-between gap-4 w-full px-4 py-3 text-black text-lg rounded-[20px] transition-all ${
                activeCategory === index ? "bg-white" : "bg-inherit"
              } hover:bg-white hover:bg-opacity-80`}
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-8 h-8"
              />
              <span className="w-full text-left">{category.title}</span>
            </button>
          ))}
        </div>
  
        {/* Images */}
        <div className="flex justify-center w-full items-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {categories[activeCategory].images.map((image, index) => (
              <div key={index} className="w-full rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${activeCategory}-${index}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  onError={() =>
                    console.error(`Failed to load image: ${image}`)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuFoodlist;
  