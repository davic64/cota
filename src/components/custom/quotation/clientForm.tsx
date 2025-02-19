import { Input } from "@/components/ui/input";
import { Customer } from "@/types/quotation.types";

interface ClientFormProps {
  customer: Customer;
  onChange: (updatedClient: Customer) => void;
}

export const ClientForm = ({ customer, onChange }: ClientFormProps) => {
  const handleChange = (field: keyof Customer, value: string) => {
    onChange({ ...customer, [field]: value });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <p>Nombre *</p>
        <Input
          placeholder="Nombre del Cliente"
          value={customer.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div>
        <p>Empresa</p>
        <Input
          placeholder="Nombre de la empresa"
          value={customer.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </div>
      <div>
        <p>Correo electrónico</p>
        <Input
          placeholder="mail@mail.com"
          value={customer.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>
      <div>
        <p>Teléfono</p>
        <Input
          placeholder="0123456789"
          value={customer.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>
      <div>
        {/* TODO: Cambiar por DatePicker */}
        <p>Fecha de cotización *</p>
        <Input
          type="date"
          value={customer.dateQuote}
          onChange={(e) => handleChange("dateQuote", e.target.value)}
        />
      </div>
      <div>
        <p>RFC</p>
        <Input
          placeholder="ABCD1234561A2"
          value={customer.rfc}
          onChange={(e) => handleChange("rfc", e.target.value)}
        />
      </div>
    </div>
  );
};
