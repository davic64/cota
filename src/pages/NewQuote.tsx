import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ClientForm,
  ProductList,
  Summary,
} from "@/components/custom/quotation";
import { Button } from "@/components/ui/button";
import { numberQuote } from "@/lib/createNumberQuote";

export const NewQuote = () => {
  const navigate = useNavigate();
  const number = numberQuote();
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

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const handleSave = async () => {
    const quote = {
      no: number,
      customerData: {
        ...customer,
        dateQuote: selectedDate,
      },
      productsData: products,
    };

    await window.electronAPI.saveData("save-quote", quote);
    alert("Cotización Guardada");
    navigate("/");
  };

  return (
    <div className="space-y-10 pb-10">
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">
          <span className="font-light text-slate-500">#</span> {number}
        </h2>
        <h3 className="font-bold text-xl">Información del Cliente</h3>
        <ClientForm
          customer={customer}
          onChange={setCustomer}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
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
        <Button onClick={handleSave}>Guardar Cotización</Button>
        <Button variant="outline">Generar PDF</Button>
        <Button variant="destructive" onClick={() => navigate("/")}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};
