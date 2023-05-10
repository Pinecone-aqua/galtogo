import Layout from "@/components/Layout";
import AddBanner from "@/components/subComponents/AddBanner";
import CreateCategory from "@/components/subComponents/CreateCategory";

import CreateFood from "@/components/subComponents/CreateFood";
import EditCategory from "@/components/subComponents/EditCategories";
import { ICategory } from "@/utils/constants";
import axios from "axios";

export default function Products(props: {
  categoryList: ICategory[];
}): JSX.Element {
  const { categoryList } = props;
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          Products Page
        </div>
        <div className="flex gap-2">
          <CreateCategory />
          <EditCategory categoryList={categoryList} />
        </div>
        <CreateFood />
        <AddBanner />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const categoryList = await axios
    .get("http://localhost:5050/category", {
      // headers: {
      //   Authorization: `Barear ${token}`
      // }
    })
    .then((res) => res.data);

  return { props: { categoryList } };
};
