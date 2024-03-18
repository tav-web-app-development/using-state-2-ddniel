import ProductCard from "./ProductCard";

export default function ProductCardContainer({ products, itemsInCart, handleAddToCartClick }) {
  const productsJsx = products.map((product) => (
    <ProductCard key={product.id} product={product} handleAddToCartClick={handleAddToCartClick} itemsInCart={itemsInCart} />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
