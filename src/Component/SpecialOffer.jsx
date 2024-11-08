import React from "react";

const SpecialOffer = () => {
  return (
    <div className="my-8 bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-white">
          Special Movie Ticket Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Offer Card 1 */}
          <div className="bg-red-600 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBfG8E8I_zU4p5LvfWQbuB7ppAbDWixDnjCCOwzHINCy1vApxn"
              alt="Offer 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">50% Off On Weekdays</h3>
              <p className="text-sm mb-4">
                Book your tickets for any movie between Monday to Thursday and
                get 50% off on your purchase. Limited time offer!
              </p>
              <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGUdDEkyBCyCQZYuAQjp8CSPJhbA-bkHoiQN8sSk1Dx-QFIoP"
              alt="Offer 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Buy 1 Get 1 Free</h3>
              <p className="text-sm mb-4">
                Get a free ticket when you purchase one for any movie on
                weekends. Don’t miss this amazing deal!
              </p>
              <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>

          {/* Offer Card 3 */}
          <div className="bg-green-600 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383474-klabltwbvz-portrait.jpg"
              alt="Offer 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Family Movie Night: 30% Off
              </h3>
              <p className="text-sm mb-4">
                Bring your family along! Book 4 tickets and get 30% off on your
                total booking price.
              </p>
              <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
