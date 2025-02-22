import { Input } from "@/components/ui/input";
import { NumericFormat } from "react-number-format";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/quotation.types";

interface ProductTableProps {
  products: Product[];
  onChange: (updatedProducts: Product[]) => void;
}

export const ProductList = ({ products, onChange }: ProductTableProps) => {
  const handleAddProduct = () => {
    const newProduct: Product = {
      id: (products.length + 1).toString(),
      name: "",
      quantity: 0,
      price: 0,
      discount: 0,
    };
    onChange([...products, newProduct]);
  };

  const handleChange = (
    index: number,
    field: keyof Product,
    value: string | number
  ) => {
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    onChange(updatedProducts);
  };

  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30rem]">Producto/Servicio</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Descuento</TableHead>
            <TableHead>Total</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>
                <Input
                  placeholder="Producto/Servicio"
                  value={product.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <NumericFormat
                  customInput={Input}
                  placeholder="0"
                  min={0}
                  value={product.quantity || ""}
                  onChange={(e) =>
                    handleChange(index, "quantity", Number(e.target.value))
                  }
                />
              </TableCell>
              <TableCell>
                <NumericFormat
                  placeholder="$ 0.00"
                  prefix="$ "
                  customInput={Input}
                  thousandSeparator
                  decimalScale={2}
                  fixedDecimalScale
                  value={product.price || ""}
                  onValueChange={(values) =>
                    handleChange(index, "price", values.floatValue || 0)
                  }
                />
              </TableCell>
              <TableCell>
                <NumericFormat
                  placeholder="0 %"
                  suffix=" %"
                  customInput={Input}
                  value={product.discount || ""}
                  onValueChange={(values) =>
                    handleChange(index, "discount", values.floatValue || 0)
                  }
                />
              </TableCell>
              <TableCell>
                <NumericFormat
                  placeholder="$ 0.00"
                  prefix="$ "
                  customInput={Input}
                  thousandSeparator
                  decimalScale={2}
                  fixedDecimalScale
                  readOnly
                  value={
                    product.quantity *
                    product.price *
                    (1 - product.discount / 100)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleAddProduct}>
        <CirclePlus /> Añadir Producto/Servicio
      </Button>
    </div>
  );
};
