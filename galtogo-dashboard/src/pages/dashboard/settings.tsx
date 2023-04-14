import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";

export default function Settings(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("Button clicked");
  };

  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          <h2>Settings Page</h2>
          <Button
            type="button"
            variant="default"
            size="lg"
            className=""
            onClick={handleClick}
          >
            Test 1
          </Button>
          <Button
            type="button"
            variant="dark"
            size="lg"
            className="ms-4"
            onClick={handleClick}
          >
            Test 2
          </Button>
        </div>
      </div>
    </Layout>
  );
}
