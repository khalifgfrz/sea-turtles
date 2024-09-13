import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { productAction } from "../redux/slices/product";

function Filter() {
  const dispatch = useDispatch<AppDispatch>();
  const { filters, minPrice, maxPrice } = useSelector((state: RootState) => state.product);
  const { setFilters, resetFilters, productsThunk, setMinPrice, setMaxPrice } = productAction;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(productsThunk());
  };

  const handlePriceChange = (min: number, max: number) => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  };

  const handleApplyFilter = () => {
    dispatch(
      setFilters({
        ...filters,
        min_price: minPrice.toString(),
        max_price: maxPrice.toString(),
      })
    );

    dispatch(productsThunk());
  };

  return (
    <div className="hidden md:block md:bg-black md:text-white md:h-1/2 md:w-1/2 uw:w-2/3 md:p-6 md:rounded-3xl">
      <div className="flex justify-between mb-6 text-sm">
        <p>Filter</p>
        <button onClick={handleReset}>Reset Filter</button>
      </div>
      <div className="mb-4">
        <label className="search-name text-sm mb-1" htmlFor="product_name">
          Search
        </label>
        <div>
          <input className="h-10 rounded text-sm w-full text-black" type="text" id="product_name" name="product_name" placeholder="Search Your Product" autoComplete="off" value={filters.product_name} onChange={handleChange} />
        </div>
      </div>
      <div className="text-sm">
        <h2 className="mb-4">Category</h2>
        {["Favorite Product", "Coffee", "Non Coffee", "Foods", "Add-On"].map((category) => (
          <label key={category} className="checkbox">
            <input type="radio" name="category" value={category} checked={filters.category === category} onChange={handleChange} />
            {category}
          </label>
        ))}
      </div>
      <div className="text-sm">
        <h2 className="mb-4">Sort By</h2>
        {["alphabet", "price", "latest", "oldest"].map((sortBy) => (
          <label key={sortBy} className="checkbox">
            <input type="radio" name="sortBy" value={sortBy} checked={filters.sortBy === sortBy} onChange={handleChange} />
            {sortBy}
          </label>
        ))}
      </div>
      <div>
        <h2 className="text-sm mb-4">Range Price</h2>
        <div className="range-slider">
          <div className="range-track"></div>
          <div
            className="range-progress"
            id="range-progress"
            style={{
              left: `${(minPrice / 100000) * 100}%`,
              right: `${100 - (maxPrice / 100000) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min="0"
            max="100000"
            step="10000"
            value={minPrice}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setMinPrice(value);
              handlePriceChange(value, maxPrice);
            }}
          />
          <input
            type="range"
            min="0"
            max="100000"
            step="10000"
            value={maxPrice}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setMaxPrice(value);
              handlePriceChange(minPrice, value);
            }}
          />
          <div className="price-labels">
            <span id="min-price-value" style={{ left: `${(minPrice / 100000) * 100}%` }}>
              Idr.{minPrice}
            </span>
            <span id="max-price-value" style={{ left: `${(maxPrice / 100000) * 100}%` }}>
              Idr.{maxPrice}
            </span>
          </div>
        </div>
      </div>
      <button className="bg-primary mt-4 rounded text-black w-full h-8 text-sm hover:bg-darkprimary active:bg-darkprimary2" onClick={handleApplyFilter}>
        Apply Filter
      </button>
    </div>
  );
}

export default Filter;
