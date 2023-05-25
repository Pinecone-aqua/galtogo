import { useUser } from "@/context/UserContext";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import foodcard from "../../styles/foodcard.module.scss";

export default function FoodCard({
  product,
}: {
  product: IProduct;
}): JSX.Element {
  const { currentUser } = useUser();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault();
    if (currentUser) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/order/add`,
          product,
          {
            headers: { authorization: `Bearer ${currentUser}` },
          }
        )
        .then((res) => toast(res.data))
        .catch((err) => toast(err.response.statusText));
    } else {
      toast("Not authorized user!");
    }
  };
  return (
    <div className={foodcard.container}>
      <Image
        className={foodcard.image}
        src={product.img}
        alt="Blabla"
        width={500}
        height={500}
      />
      <div className={foodcard.details}>
        <h1 className={foodcard.title}>{product.title}</h1>
        <p>{product.desc}</p>
        <div className={foodcard.category}>
          <span className={foodcard.span}>{product.category.name}</span>
        </div>
        <div className={foodcard.border} />
        <div className={foodcard.price_container}>
          <div className={foodcard.price}>29.000₮</div>
          <div className={foodcard.order} onClick={handleClick}>
            Order
          </div>
        </div>
      </div>
    </div>
  );
}
