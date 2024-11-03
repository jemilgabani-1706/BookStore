import React from "react";

const Cards = ({ item }) => {
    // console.log(item)
  return (
    <>
      <div className="mt-4 p-3 my-3 hover:scale-105 duration-200">
        <div className="card bg-base-100 w-92 md:w-80 shadow-xl">
          <figure>
            <img className="w-50 h-50"
              src={item.image}
              alt="Not Found..."
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-pink-500">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline px-3 py-2 hover:bg-pink-500 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
<div>
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Shoes!
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
</div>;
export default Cards;
