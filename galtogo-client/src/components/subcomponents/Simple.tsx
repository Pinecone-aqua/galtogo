import Carousel from "react-multi-carousel";
import MenuCard from "./MenuCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30
  }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Simple({ deviceType, products }: { deviceType: any, products: IProduct[] }) {
  console.log(products);
  return (

    <Carousel
      ssr
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >

      {products.map((product: IProduct, index) =>
        <div key={index}>
          <MenuCard product={product} />
        </div>
      )}
    </Carousel>

  )
}


