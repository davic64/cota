import { useState } from "react";
import {
  ClientForm,
  ProductList,
  Summary,
} from "@/components/custom/quotation";
import { Button } from "@/components/ui/button";

export const NewQuote = () => {
  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    dateQuote: "",
    rfc: "",
  });

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "",
      quantity: 0,
      price: 0,
      discount: 0,
    },
  ]);

  return (
    <div className="space-y-10 pb-10">
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">
          <span className="font-light text-slate-500">#</span> 202502-01
        </h2>
        <h3 className="font-bold text-xl">Información del Cliente</h3>
        <ClientForm customer={customer} onChange={setCustomer} />
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl">Productos/Servicios</h3>
        <ProductList products={products} onChange={setProducts} />
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl">Resumen de cotización</h3>
        <Summary customer={customer} products={products} />
      </div>

      <div className="flex items-center gap-2 justify-self-end">
        <Button>Guardar Cotización</Button>
        <Button variant="outline">Generar PDF</Button>
        <Button variant="destructive">Cancelar</Button>
      </div>
    </div>
  );
};
