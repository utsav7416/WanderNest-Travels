import { categories } from "../data";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";


const Categories = () => {
  return (
    <div className="categories bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Top Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our wide range of vacation rentals that cater to all types of
            travelers. Immerse yourself in the local culture, enjoy the comforts of
            home, and create unforgettable memories in your dream destination.
          </p>
        </div>

        <div className="categories_list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.slice(1, 7).map((category, index) => (
            <Link 
              key={index}
              to={`/properties/category/${category.label}`}
              className="group block"
            >
              <div className="category relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.img} 
                    alt={category.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/80"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transform transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                </div>

                <div className="category_text absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                    <div className="category_text_icon mb-3 inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      {category.icon}
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xl font-bold leading-tight group-hover:text-blue-100 transition-colors duration-300">
                        {category.label}
                      </p>
                      
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm text-gray-200">{category.description}</span>
                        <ArrowRight className="w-4 h-4 text-blue-300 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-3xl ring-2 ring-blue-500/0 transition-all duration-300 group-hover:ring-blue-500/50 group-hover:ring-4"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <span className="font-semibold">View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;