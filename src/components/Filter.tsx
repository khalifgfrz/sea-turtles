import { useCallback, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

function Filter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const updateProgress = useCallback(() => {
    if (minPrice > maxPrice - 10) {
      setMinPrice(maxPrice - 10);
    }
    if (maxPrice < minPrice + 10) {
      setMaxPrice(minPrice + 10);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    updateProgress();
  }, [minPrice, maxPrice, updateProgress]);
  return (
    <div className="hidden md:block md:bg-black md:text-white md:h-1/2 md:w-1/2 uw:w-2/3 md:p-6 md:rounded-3xl">
      <div className="flex justify-between mb-6 text-sm">
        <p>Filter</p>
        <a href="#">Reset Filter</a>
      </div>
      <div className="mb-4">
        <form>
          <div className="search-name text-sm mb-1">Search</div>
          <div>
            <input className="h-10 rounded text-sm w-full text-black" type="text" name="search" placeholder="Search Your Product" autoComplete="off" />
          </div>
        </form>
      </div>
      <div className="text-sm">
        <h2 className="mb-4">Category</h2>
        <label className="checkbox" htmlFor="favorite-product">
          <input type="checkbox" id="favorite-product" name="favorite-product" />
          <div className="checkmark"></div>
          Favorite Product
        </label>
        <label className="checkbox" htmlFor="coffee">
          <input type="checkbox" id="coffee" name="coffee" />
          <div className="checkmark"></div>
          Coffee
        </label>
        <label className="checkbox" htmlFor="non-coffee">
          <input type="checkbox" id="non-coffee" name="non-coffee" />
          <div className="checkmark"></div>
          Non Coffee
        </label>
        <label className="checkbox" htmlFor="foods">
          <input type="checkbox" id="foods" name="foods" />
          <div className="checkmark"></div>
          Foods
        </label>
        <label className="checkbox" htmlFor="add-on">
          <input type="checkbox" id="add-on" name="add-on" />
          <div className="checkmark"></div>
          Add-On
        </label>
      </div>
      <div className="text-sm">
        <h2 className="mb-4">Sort By</h2>
        <label className="checkbox" htmlFor="buy1get1">
          <input type="checkbox" id="buy1get1" name="buy1get1" />
          <div className="checkmark"></div>
          Buy 1 get 1
        </label>
        <label className="checkbox" htmlFor="flash-sale">
          <input type="checkbox" id="flash-sale" name="flash-sale" />
          <div className="checkmark"></div>
          Flash Sale
        </label>
        <label className="checkbox" htmlFor="birthday-package">
          <input type="checkbox" id="birthday-package" name="birthday-package" />
          <div className="checkmark"></div>
          Birthday Package
        </label>
        <label className="checkbox" htmlFor="cheap">
          <input type="checkbox" id="cheap" name="cheap" />
          <div className="checkmark"></div>
          Cheap
        </label>
      </div>
      <div>
        <h2 className="text-sm mb-4">Range Price</h2>
        <div className="range-slider">
          <div className="range-track"></div>
          <div
            className="range-progress"
            style={{
              left: `${(minPrice / 1000) * 100}%`,
              right: `${100 - (maxPrice / 1000) * 100}%`,
            }}
          ></div>
          <input type="range" id="min-price-range" min="0" max="1000" step="10" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
          <input type="range" id="max-price-range" min="0" max="1000" step="10" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
          <div className="price-labels">
            <span id="min-price-value" style={{ left: `${(minPrice / 1000) * 100}%` }}>
              Idr.{minPrice}
            </span>
            <span id="max-price-value" style={{ left: `${(maxPrice / 1000) * 100}%` }}>
              Idr.{maxPrice}
            </span>
          </div>
        </div>
      </div>
      <button className="bg-primary mt-4 rounded text-black w-full h-8 text-sm hover:bg-darkprimary active:bg-darkprimary2">Apply Filter</button>
    </div>
  );
}

export default Filter;
