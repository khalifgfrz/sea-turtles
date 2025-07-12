import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../redux/slices/product";
import { RootState } from "../redux/store";
import { useSearchParams } from "react-router-dom";

function Pagination() {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state: RootState) => state.product);
  const [, setSearchParams] = useSearchParams();

  const handlePageClick = (page: string) => {
    dispatch(setPagination({ page }));
    setSearchParams({ page });
  };

  const handleNextPageClick = () => {
    const nextPage = (parseInt(pagination.page) + 1).toString();
    if (parseInt(pagination.page) < pagination.totalPage) {
      handlePageClick(nextPage);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      {Array.from({ length: pagination.totalPage }, (_, i) => {
        const page = (i + 1).toString();
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`text-black mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12
              ${pagination.page === page ? "bg-primary text-black" : "hover:bg-primary hover:text-black"}
            `}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={handleNextPageClick}
        className="text-secondary bg-darkgray2 cursor-pointer rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black"
        disabled={parseInt(pagination.page) >= pagination.totalPage}
      >
        &#9656;
      </button>
    </div>
  );
}

export default Pagination;
