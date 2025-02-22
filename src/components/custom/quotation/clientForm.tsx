import { DatePicker } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import { Customer } from "@/types/quotation.types";

interface ClientFormProps {
  customer: Customer;
  onChange: (updatedClient: Customer) => void;
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export const ClientForm = ({
  customer,
  onChange,
  selectedDate,
  onDateChange,
}: ClientFormProps) => {
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
        <p>Teléfono *</p>
        <Input
          placeholder="0123456789"
          value={customer.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>
      <div>
        <p>Fecha de cotización *</p>
        <DatePicker
          placeholder="Selecciona una fecha"
          onDateChange={onDateChange}
          selected={selectedDate}
        />
      </div>
      <div>
        <p>RFC</p>
        <Input
          className="uppercase"
          placeholder="ABCD1234561A2"
          value={customer.rfc.toUpperCase()}
          min={11}
          max={12}
          onChange={(e) => handleChange("rfc", e.target.value.toUpperCase())}
        />
      </div>
    </div>
  );
};
