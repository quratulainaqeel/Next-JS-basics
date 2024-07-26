const ProductItem = ({ params }) => {
  const id = params.productid;
  return (
    <div>
      Product Item {id}
    </div>
  )
}

export default ProductItem