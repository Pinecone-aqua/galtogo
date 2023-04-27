export default function MenuCard({
  product,
}: {
  product: IProduct;
}): JSX.Element {
  return (
    <div className="bg-slate-200 md:w-60 md:h-[400px] w-40 h-[300px] rounded-lg p-2 m-3">
      <div className="m-1 p-1 bg-slate-400 h-[60%]">
        {product.category} image
      </div>
      <div className="m-1 p-1 bg-slate-400">{product.name}</div>
      <div className="m-1 p-1 bg-slate-400">{product.price}</div>
      <div className="m-1 p-1 bg-slate-400">itemDesc-1</div>
    </div>
  );
}
