import { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "./components/InvoicePDF";
import "./App.css";

export default function App() {
  // Initialize state with default values to avoid accessing undefined properties
  const [invoiceData, setInvoiceData] = useState({
    client: "",
    dob: "",
    invoiceNo: "",
    date: "",
    psychologist: "",
    address: "",
    items: [],
    subtotal: 0,
    discount: 0,
    total: 0,
    totalInWords: "",
  });

  // Check if the required fields are filled in
  const isFormComplete = invoiceData.client && invoiceData.dob && invoiceData.invoiceNo;

  return (
    <div className="py-10">
      {/* Pass setInvoiceData as a prop to the form to update state */}
      <InvoiceForm setInvoiceData={setInvoiceData} />
      
      {/* Conditionally render the PDFDownloadLink button */}
      <PDFDownloadLink
        document={<InvoicePDF invoice={invoiceData} />}
        fileName={`invoice_${invoiceData.client}.pdf`}
        className="w-full flex items-center mt-5"
      >
        {!isFormComplete ? (
          <button disabled className="mx-auto bg-green-500 inline-block px-5 py-3 text-white rounded border hover:bg-white transition duration-300 hover:text-black shadow-2xl cursor-not-allowed opacity-30 select-none" >
            Fill The Form
          </button>
        ) : (
          <p className="mx-auto bg-green-500 inline-block px-5 py-3 text-white rounded border hover:bg-white transition duration-300 hover:text-black shadow-2xl cursor-pointer">
            Download Invoice
          </p>
        )}
      </PDFDownloadLink>
    </div>
  );
}
