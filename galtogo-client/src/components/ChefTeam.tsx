import Image from "next/image";
import chefteam from "../styles/special/chefteam.module.scss"

export default function ChefTeam() {
  return (
    <section className={chefteam.section_container}>
      <div className={chefteam.header_container}>
        <h1>Our <span className={chefteam.highlight}>Executives Chef’s</span></h1>
        <p className={chefteam.paragraph}>Instructor team</p>
      </div>
      <div className={chefteam.chefteam_container}>
        <div className={chefteam.image_container}>
          <Image
            className={chefteam.chef_image}
            src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684382617/ChoHeeSook_wagx4h.png"
            width={1000}
            height={1000}
            alt="Profile" />
          <div className={chefteam.title_container}>
            <h1 className={chefteam.chef_name}>Hee-sook</h1>
            <p className={chefteam.chef_title}>Executive Chef</p>
          </div>
        </div >

        <div className={chefteam.image_container}>
          <Image
            className={chefteam.chef_image}
            src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684382617/MunkhOrgil_gskcis.png"
            width={1000}
            height={1000}
            alt="Profile" />
          <div className={chefteam.title_container}>
            <h1 className={chefteam.chef_name}>Munkh-Orgil</h1>
            <p className={chefteam.chef_title}>Executive Chef</p>
          </div>
        </div>

        <div className={chefteam.image_container}>
          <Image
            className={chefteam.chef_image}
            src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684382617/Anntony_qmdtmz.png"
            width={1000}
            height={1000}
            alt="Profile" />
          <div className={chefteam.title_container}>
            <h1 className={chefteam.chef_name}>Antony Salvodore</h1>
            <p className={chefteam.chef_title}>Executive Chef</p>
          </div>
        </div>

      </div >
    </section >
  )
}