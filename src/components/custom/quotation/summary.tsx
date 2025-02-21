import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTotal } from "@/lib/getTotal";
import { Customer, Product } from "@/types/quotation.types";

interface SummaryProps {
  customer: Customer;
  products: Product[];
}

export const Summary = ({ customer, products }: SummaryProps) => {
  const ivaTax = getTotal(products) * 0.16;

  return (
    <div className="space-y-10">
      <div>
        <h4 className="font-bold text-lg">Datos del cliente</h4>
        <div className="grid grid-cols-3 gap-4 border-t pt-4">
          <p>
            <span className="font-bold">Nombre del cliente:</span>{" "}
            {customer.name}
          </p>
          <p>
            <span className="font-bold">Empresa:</span> {customer.company}
          </p>
          <p>
            <span className="font-bold">Correo electrónico:</span>{" "}
            {customer.email}
          </p>
          <p>
            <span className="font-bold">Teléfono:</span> {customer.phone}
          </p>
          <p>
            <span className="font-bold">Fecha de cotización:</span>{" "}
            {customer.dateQuote}
          </p>
          <p>
            <span className="font-bold">RFC:</span> {customer.rfc}
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-lg">Productos/Servicios</h4>
        <div className="border-t pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30rem]">Producto/Servicio</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Descuento</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>$ {product.price}</TableCell>
                  <TableCell>{product.discount} %</TableCell>
                  <TableCell>
                    ${" "}
                    {product.quantity *
                      product.price *
                      (1 - product.discount / 100)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="justify-self-end text-lg">
        <p>
          <span className="font-bold">Subtotal:</span> ${" "}
          {getTotal(products).toFixed(2)}
        </p>
        <p>
          <span className="font-bold">IVA (16%):</span> $ {ivaTax.toFixed(2)}
        </p>
        <p>
          <span className="font-bold">Total:</span> ${" "}
          {(getTotal(products) + ivaTax).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
