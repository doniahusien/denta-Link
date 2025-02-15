"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import checkoutImage from "../../../public/images/Checkout/checkout.svg"; // الصورة الكبيرة

const PaymentPage = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({ phone: "", address: "", cardNumber: "", expiry: "", cvv: "" });

  const paymentMethods = [
    { id: "credit_card", label: "Credit Card", info: "When you click on the “Pay” button, you will be directed to the bank’s website to complete the steps by entering the card information for the payment process." },
    { id: "cash", label: "Cash on Delivery", info: "You will pay when the order is delivered. Please enter your phone number and delivery address below." },
  ];

  const handlePayment = () => {
    if (!selectedMethod) return alert("Please select a payment method.");

    // تجهيز بيانات الطلب
    const orderData = {
      id: Math.floor(Math.random() * 1000000000), // رقم طلب عشوائي
      date: new Date().toLocaleDateString(),
      paymentMethod: selectedMethod === "credit_card" ? "Credit Card" : "Cash on Delivery",
      address: formData.address || "Not provided",
      phone: formData.phone || "Not provided",
      totalPrice: 2400,
      deliveryFee: 70,
      discount: 0,
      finalTotal: 2470,
    };

    // حفظ البيانات في Local Storage (مؤقتًا)
    localStorage.setItem("order", JSON.stringify(orderData));

    // توجيه المستخدم لصفحة التفاصيل
    router.push("/order-success");
  };

  return (
    <ProtectedRoute>
    <div className="flex flex-col items-center justify-center min-h-screen my-44 bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl w-full flex flex-col md:flex-row items-center">
        
        {/* صورة الدفع بالحجم الكبير */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={checkoutImage} alt="Checkout" width={400} height={400} />
        </div>

        {/* خيارات الدفع */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Select Payment Method</h2>
          
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <label key={method.id} className="flex items-center space-x-3 border p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={() => setSelectedMethod(method.id)}
                />
                <span className="text-lg">{method.label}</span>
              </label>
            ))}
          </div>

          {/* عرض المعلومات عند اختيار وسيلة الدفع */}
          {selectedMethod && (
            <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-lg">
              <p className="text-blue-700">{paymentMethods.find((m) => m.id === selectedMethod)?.info}</p>
            </div>
          )}

          {/* عرض نموذج الدفع بناءً على الاختيار */}
          {selectedMethod === "credit_card" && (
            <div className="mt-6 space-y-3">
              <input type="text" placeholder="Card Number" className="w-full border p-3 rounded-lg"
                value={formData.cardNumber} onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} />
              <input type="text" placeholder="Expiration Date" className="w-full border p-3 rounded-lg"
                value={formData.expiry} onChange={(e) => setFormData({ ...formData, expiry: e.target.value })} />
              <input type="text" placeholder="CVV" className="w-full border p-3 rounded-lg"
                value={formData.cvv} onChange={(e) => setFormData({ ...formData, cvv: e.target.value })} />
            </div>
          )}

          {selectedMethod === "cash" && (
            <div className="mt-6 space-y-3">
              <input type="text" placeholder="Phone Number" className="w-full border p-3 rounded-lg"
                value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <input type="text" placeholder="Delivery Address" className="w-full border p-3 rounded-lg"
                value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>
          )}

          {/* زر الدفع */}
          {selectedMethod && (
            <button 
              onClick={handlePayment}
              className="mt-6 bg-green-500 text-white py-3 w-full rounded-lg text-lg hover:bg-green-600 transition">
              {selectedMethod === "credit_card" ? "Proceed to Bank Payment" : "Confirm Order"}
            </button>
          )}
        </div>
      </div>
      </div>
      </ProtectedRoute>
  );
};

export default PaymentPage;
