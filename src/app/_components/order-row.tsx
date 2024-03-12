import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontalIcon } from "./icons";

type OrderRowProps = {
  orderNumber: string;
  customer: string;
  channel: string;
  date: string;
  total: string;
  status: string;
};

export default function OrderRow({
  orderNumber,
  customer,
  channel,
  date,
  total,
  status,
}: OrderRowProps) {
  return (
    <TableRow className="border-4 border-dashed @xl:border-none">
      <TableCell className="font-medium">{orderNumber}</TableCell>
      <TableCell className="customerName">{customer}</TableCell>
      <TableCell className="hidden md:table-cell">{channel}</TableCell>
      <TableCell className="hidden md:table-cell">{date}</TableCell>
      <TableCell className="text-right">{total}</TableCell>
      <TableCell className={`hidden sm:table-cell ${status.toLowerCase()}`}>
        {status}
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuItem>View order</DropdownMenuItem>
            <DropdownMenuItem>Customer details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
