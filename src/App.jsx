import { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "./components/InvoicePDF";
import "./App.css";
export default function App() {
  
  const [invoiceData, setInvoiceData] = useState({});

  return (
    <div className="py-10">
      <InvoiceForm setInvoiceData={setInvoiceData} />
      
      <PDFDownloadLink
        document={<InvoicePDF invoice={invoiceData} />}
        fileName={`invoice_${invoiceData.client}.pdf`}
        className="w-full flex items-center mt-5"
      >
        {!invoiceData.client && !invoiceData.dob ?<p className="mx-auto bg-green-500 inline-block px-5 py-3 text-white rounded border hover:bg-white transition duration-300 hover:text-black shadow-2xl cursor-not-allowed opacity-30 select-none" >
          Fill The Form
        </p>:<p className="mx-auto bg-green-500 inline-block px-5 py-3 text-white rounded border hover:bg-white transition duration-300 hover:text-black shadow-2xl cursor-pointer " >
          Download Invoice
        </p>}
      </PDFDownloadLink>
      
    </div>
  );
}
