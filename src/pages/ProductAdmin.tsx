import HeaderAdmin from "../components/HeaderAdmin";

export function ProductsAdmin() {
  return (
    <>
      <HeaderAdmin />
      <ProductAdmin />
    </>
  );
}

function ProductAdmin() {
  return (
    <main className="font-jakarta mt-[10%] lg:mt-[5%]">
      <h1 className="text-black my-auto pl-[10%] text-4xl lg:text-4xl max-w-xl lg:max-w-4xl">Product List</h1>
    </main>
  );
}

export default ProductAdmin;
