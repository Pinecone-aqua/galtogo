import Image from "next/image";
import contributors from "../../styles/special/contributors.module.scss";

export default function Contributors(): JSX.Element {
  return (
    <section className={contributors.section}>
      <h1 className={contributors.header}>Our contributors</h1>
      <div className={contributors.container}>
        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/download_1_kywayi.png"
          }
          height={72}
          width={300}
          alt="Ramada"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/eaf6c-59339796_2268193230110242_1704844065071169536_o_1_a9pnky.png"
          }
          height={72}
          width={300}
          alt="Novotel"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/MCS_Group_Logo_1_jlhzqt.png"
          }
          height={72}
          width={300}
          alt="MCS"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/the-logo-originated-from_1_k3pfwz.png"
          }
          height={72}
          width={300}
          alt="FiveRivers"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/6e069b81-8586-4403-a7eb-a39cadad75d0_1_qteujk.png"
          }
          height={72}
          width={300}
          alt="SoyolWellness"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/589a48165aa6293a4aac48b8_1_djl1tq.png"
          }
          height={72}
          width={300}
          alt="Shangri-la"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/14715425_1522875987726210_6757629794993177966_o_1_lmu6cm.png"
          }
          height={72}
          width={300}
          alt="ChoijinTemple"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/327190706_905875477115373_2584596075861962674_n_1_jsjihx.png"
          }
          height={72}
          width={300}
          alt="BlueSky"
        />

        <Image
          className={contributors.logo}
          src={
            "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684594109/Contributers/46117_a80fe8c64317779503905b762951fef2965cb3ec_1_vnoeqh.png"
          }
          height={72}
          width={300}
          alt="KhujirtWellness"
        />
      </div>
    </section>
  );
}
