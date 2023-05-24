import Image from "next/image";
import foodcard from "../../styles/foodcard.module.scss";

export default function FoodCard() {
  return (
    <div className={foodcard.container}>
      <Image
        className={foodcard.image}
        src="https://media.cnn.com/api/v1/images/stellar/prod/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
        alt="Blabla"
        width={500}
        height={500}
      />
      <div className={foodcard.details}>
        <h1 className={foodcard.title}>American style lunch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </p>
        <div className={foodcard.category}>
          <span className={foodcard.span}>Spicy</span>
          <span className={foodcard.span}>Pork</span>
        </div>
        <div className={foodcard.border} />
        <div className={foodcard.price_container}>
          <div className={foodcard.price}>29.000₮</div>
          <div className={foodcard.order}>Order</div>
        </div>
      </div>
    </div>
  );
}
