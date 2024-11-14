
import MenuFoodlist from "./MenuFoodList";

const MenuFood = () => {

   return (
      <section className="m-0 h-auto food lg:px-40 md:px-10 sm:px-6 px-4">
          <div className="h-fit lg:py-40 md:py-10 sm:py-8 py-4">
              <div className="text-left justify mx-auto "> 
                  <h5 className="text-xs font-semibold">SELECT YOUR MEAL</h5>
                  <h4 className="text-3xl md:text-4xl mb-5">Popular <span className="font-bold text-rose-600">Foods</span></h4>
                  <div className="flex flex-row flex-wrap justify-center pt-8">
                      <MenuFoodlist />
                  </div>
              </div>
          </div>

          <div className="justify-center py-20 flex items-center w-full overflow-hidden flex-col lg:py-40 md:py-10 sm:py-8 "> 
              <h5 className="text-xs font-semibold">CHOOSE YOUR DESSERT</h5>
              <h4 className="text-3xl md:text-4xl">Popular <span className="font-bold text-rose-600">DESSERTS</span></h4>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 justify-items-center lg:py-20 md:py-4 sm:py-8 py-4"> 
                  {/* Dessert Items */}
                  {[
                      { img: './Assets/Swcake.png', name: 'Strawberry Cakes', price: '₦3000' },
                      { img: './Assets/Glazed doughnut.png', name: 'Glazed Doughnut', price: '₦2000' },
                      { img: './Assets/choco-chips.png', name: 'Chocolate Chips', price: '₦2500' },
                      { img: './Assets/icecream-cone.png', name: 'Cone IceCream', price: '₦2000' },
                      { img: './Assets/popsicle.png', name: 'Popsicle', price: '₦1500' },
                      { img: './Assets/Tarts.png', name: 'Tarts', price: '₦4000' },
                      { img: './Assets/Swcake.png', name: 'Strawberry Cakes', price: '₦3000' },
                      { img: './Assets/Swcake.png', name: 'Strawberry Cakes', price: '₦3000' },
                      { img: './Assets/Swcake.png', name: 'Strawberry Cakes', price: '₦3000' },
                      { img: './Assets/Swcake.png', name: 'Strawberry Cakes', price: '₦3000' },
                  ].map((dessert, index) => (
                      <div key={index} className="w-full border-opacity-10 border-black border-[1px] p-4 hover:bg-opacity-80 hover:bg-white rounded-xl text-center">
                          <a href="/create">
                              <img src={dessert.img} alt={dessert.name} className="h-20 w-full object-cover" />
                              <p className="mt-2">{dessert.name}</p>
                          </a>
                          <p className="text-rose-600">{dessert.price}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
};

 
export default MenuFood;