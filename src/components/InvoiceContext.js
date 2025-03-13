import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoice, setInvoice] = useState({
    invoiceNo: "INV-2025001",
    date: "2025-03-13",
    psychologist: "Dr. John Doe",
    address: "123 Therapy Street, London",
    client: "Jane Smith",
    dob: "1990-05-12",
    items: [
      { quantity: 1, name: "Counseling Session", price: 100 },
      { quantity: 2, name: "Therapy Consultation", price: 50 },
    ],
    subtotal: "£200",
    discount: "£20",
    total: "£180",
    totalInWords: "One Hundred Eighty Pounds Only",
  });

  return (
    <InvoiceContext.Provider value={{ invoice, setInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoice = () => useContext(InvoiceContext);
