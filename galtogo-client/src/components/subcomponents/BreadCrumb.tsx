import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiChevronRight } from "react-icons/hi2";

export default function BreadCrumb() {
  const router = useRouter();
  const CurrentPath = router.asPath.slice(1, 12);
  console.log(CurrentPath);
  return (
    <Breadcrumb spacing="8px" separator={<HiChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="../">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="" className="underline select-none">
          {CurrentPath}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          href="#"
          className={
            CurrentPath === "Confirmation" ? "text-red-800" : "text-slate-400"
          }
        >
          Confirmation
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
