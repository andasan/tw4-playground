import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "./icons";

export default function SideBar() {
  return (
    <div className="hidden border-r border-gray-600 bg-gray-800/40 lg:block dark:bg-gray-900">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6 text-gray-50">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-800 px-3 py-2 text-gray-50 transition-all hover:text-gray-50"
              href="#"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50"
              href="#"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                12
              </Badge>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50"
              href="#"
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-4 w-4" />
              Customers
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50"
              href="#"
            >
              <LineChartIcon className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
