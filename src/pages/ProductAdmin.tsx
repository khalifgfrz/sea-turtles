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
    <main className="font-jakarta mt-5 px-[3%] w-full">
      <h1 className="text-black text-lg font-bold">Product List</h1>
    </main>
  );
}

export default ProductAdmin;
