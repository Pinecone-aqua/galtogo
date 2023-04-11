import Layout from "@/components/Layout";

export default function Home(): JSX.Element {
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
