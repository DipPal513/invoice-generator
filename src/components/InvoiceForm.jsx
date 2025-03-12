import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const CustomInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required
}) => (
  <div>
    <label className="block font-semibold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required
      onChange={onChange}
      className="w-full p-3 border rounded-md text-lg shadow-sm focus:ring-2 focus:ring-purple-500 outline-none text-black"
    />
  </div>
);

const InvoiceForm = ({ setInvoiceData }) => {
  const [formData, setFormData] = useState({
    client: "",
    dob: "",
    invoiceNo: "",
    date: new Date().toLocaleDateString(),
    items: [
      { name: "Psychological Assessment", price: 200, quantity: 1 },
      { name: "Psychometric Assessment", price: 200, quantity: 1 },
      { name: "Expert Report", price: 200, quantity: 1 },
      
    ],
    newItem: { name: "", price: "", quantity: "" },
    discount: 0,
    psychologist: "Jum Nazmul Hossain",
    address: "162 Mile End Road, Basement Unit",
  });

  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      newItem: { ...prev.newItem, [name]: value },
    }));
  };

  const addItem = () => {
    if (
      formData.newItem.name &&
      formData.newItem.price > 0 &&
      formData.newItem.quantity > 0
    ) {
      setFormData((prev) => ({
        ...prev,
        items: [...prev.items, prev.newItem],
        newItem: { name: "", price: "", quantity: "" },
      }));
    }
  };

  const removeItem = (index) => {
    setFormData((prev) => {
      const updatedItems = [...prev.items];
      updatedItems.splice(index, 1);
      return { ...prev, items: updatedItems };
    });
  };

  const subtotal = formData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal - formData.discount;
  const totalInWords = `${total} Pounds`;

  useEffect(() => {
    setInvoiceData({
      ...formData,
      subtotal,
      total,
      totalInWords,
    });
  }, [formData, subtotal, total]);

  return (
    <div
      ref={formRef}
      className="p-8 max-w-screen-lg mx-auto bg-white shadow-lg rounded-xl mt-10"
    >
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Invoice Generator
      </h2>

      <CustomInput
        label="Client Name"
        name="client"
        value={formData.client}
        onChange={handleChange}
        placeholder="Enter client name"
        required
      />
      <CustomInput
        label="Date of Birth"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        placeholder="Enter Date of Birth"
        required
      />
      <CustomInput
        label="Invoice No"
        name="invoiceNo"
        value={formData.invoiceNo}
        onChange={handleChange}
        placeholder="Enter invoice no."
        disabled
      />
      <CustomInput
        label="Date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Enter Date"
        disabled
        required
      />
      <CustomInput
        label="Item Name"
        name="name"
        value={formData.newItem.name}
        onChange={handleItemChange}
        placeholder="Enter item name"

      />

      <div className="flex gap-4 mt-2">
        <CustomInput
          label="Quantity"
          type="number"
          name="quantity"
          value={formData.newItem.quantity}
          onChange={handleItemChange}
          placeholder="Unit"
        />
        <CustomInput
          label="Price"
          type="number"
          name="price"
          value={formData.newItem.price}
          onChange={handleItemChange}
          placeholder="Price"
        />
      </div>

      <button
        onClick={addItem}
        className="mt-6 w-full bg-purple-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition cursor-pointer"
      >
        Add Item
      </button>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">Items</h3>
        {formData.items.length > 0 ? (
          <ul>
            {formData.items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-lg"
              >
                <span className="text-black font-bold">
                  {item.name} - {item.quantity} x £{item.price}
                </span>
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500 font-bold"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items added yet.</p>
        )}
      </div>
    </div>
  );
};

export default InvoiceForm;
