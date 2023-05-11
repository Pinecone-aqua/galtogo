// eslint-disable-next-line unicorn/filename-case
import Link from "next/link";
import { ReactNode } from "react";
import { HiChevronRight } from "react-icons/hi";

export type CrumbItem = {
  label: ReactNode;
  path: string;
};

export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
    <div className="flex gap-2 items-center p-2">
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <div className="flex items-center p-2" key={i}>
              <Link
                href={crumb.path}
                key={i}
                className="text-indigo-500 hover:text-indigo-400 hover:underline"
              >
                {crumb.label}
              </Link>
              <HiChevronRight/>
            </div>
          );
        } else {
          return crumb.label;
        }
      })}
    </div>
  );

export default Breadcrumbs;