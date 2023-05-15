import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function MobileCarousel({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
}) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product: Product) => (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
      <div className="mb-3">
        <img
          src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
          alt={product.name}
          className="w-6 shadow-2"
        />
      </div>
      <div>
        <h4 className="mb-1">{product.name}</h4>
        <h6 className="mt-0 mb-3">${product.price}</h6>
        <Tag value={product.inventoryStatus} severity={getSeverity(product)} />
        <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
          <Button icon="pi pi-search" className="p-button p-button-rounded" />
          <Button
            icon="pi pi-star-fill"
            className="p-button-success p-button-rounded"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
