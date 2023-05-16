import BreadCrumb from "@/components/subcomponents/BreadCrumb";
import { useRouter } from "next/router";

export default function Confirmation() {
  const router = useRouter();
  console.log(typeof router.asPath);
  return (
    <div>
      <BreadCrumb />
      <div>
        <h1>Confirm your order</h1>
        <div>test</div>
      </div>
    </div>
  );
}
