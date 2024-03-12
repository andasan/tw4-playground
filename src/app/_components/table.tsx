import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { orders } from "@/app/_data/orders";
import OrderRow from "./order-row";

export default function TableComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order</TableHead>
          <TableHead className="min-w-[150px]">Customer</TableHead>
          <TableHead className="hidden md:table-cell">Channel</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <OrderRow
            key={order.orderId}
            orderNumber={order.orderNumber}
            customer={order.customer}
            channel={order.channel}
            date={order.date}
            total={order.total}
            status={order.status}
          />
        ))}
      </TableBody>
    </Table>
  );
}
