import { useStoreDispatch } from "../redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteProducts } from "../redux/slices/product";

function CheckoutCard() {
  const dispatch = useStoreDispatch();
  const { getProducts } = useSelector((state: RootState) => state.product);
  const orderedProduct = getProducts;

  return (
    <div>
      {orderedProduct.map((product, index) => (
        <div key={product.uuid && index} className="font-jakarta flex bg-gray-50 mt-3 py-3 pl-3 justify-between">
          <div className="flex mr-2 justify-center items-center">
            <img width="150" height="150" src={product.image} alt="menu1" />
          </div>
          <div className="w-3/5 pr-5">
            <p className="font-bold mb-3 text-sm md:text-lg uw:text-2xl">{product.product_name}</p>
            <p className="text-lightgray mb-3 text-xs md:text-base uw:text-xl">
              {product.count}pcs | {product.size} | {product.ice ? "Ice" : "Hot"} | {product.delivery}
            </p>
            <div className="flex">
              <p className="text-primary text-sm md:text-xl uw:text-2xl">IDR {product.price * product.count}</p>
            </div>
          </div>
          <div className="flex pr-1">
            <button onClick={() => dispatch(deleteProducts(index))} className="w-6 2xl:w-6 uw:w-10 h-6 uw:h-10 text-sm uw:text-xl font-bold text-red-500 border-2 uw:border-4 border-red-500 rounded-full hover:bg-gray-100 active:bg-gray-200">
              <div className="flex justify-center">
                <p>x</p>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckoutCard;
