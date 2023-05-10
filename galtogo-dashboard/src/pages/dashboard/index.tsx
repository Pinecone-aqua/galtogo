import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  // const router = useRouter();
  // useEffect(() => {
  //   if(router.asPath)
  //   router.push("/");
  // }, []);
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          Dashboard Page
        </div>
      </div>
    </Layout>
  );
}
