import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../redux/slices/product";
import { RootState } from "../redux/store";

function Pagination() {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state: RootState) => state.product);

  const handlePageClick = (page: string) => {
    dispatch(setPagination({ page }));
  };

  const handleNextPageClick = () => {
    if (parseInt(pagination.page) < pagination.totalPages) {
      handlePageClick((parseInt(pagination.page) + 1).toString());
    }
  };
  return (
    <div className="flex justify-center mt-5">
      {Array.from({ length: pagination.totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageClick((i + 1).toString())}
          className={`text-black  mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 
            ${pagination.page === (i + 1).toString() ? "bg-primary text-black" : "hover:bg-primary hover:text-black"}
          `}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={handleNextPageClick}
        className="text-secondary bg-darkgray2 cursor-pointer rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black"
        disabled={parseInt(pagination.page) >= pagination.totalPages}
      >
        &#9656;
      </button>
    </div>
  );
}

export default Pagination;
