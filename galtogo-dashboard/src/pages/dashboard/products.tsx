import Layout from "@/components/Layout";
import CreateFood from "@/components/subComponents/CreateFood";

export default function Products(): JSX.Element {
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          Products Page
        </div>
        <CreateFood />
      </div>
    </Layout>
  );
}
