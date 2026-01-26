import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import { useCart } from "../Components/CartContext";
export default function Payment() {
    const { cart, clearCart } = useCart();
    const [method, setMethod] = useState<string>("");
    const [step, setStep] = useState<number>(1);
    const [success, setSuccess] = useState(false);
    const [receiptUrl, setReceiptUrl] = useState<string>("");
    const navigate = useNavigate();
    const location = useLocation();
    const discount = location.state?.discount || 0;
    const couponCode = location.state?.couponCode || "";

    // Demo details
    const cardDemo = {
        number: "4111 1111 1111 1111",
        expiry: "12/28",
        cvv: "123",
        name: "John Doe",
    };
    const upiDemo = {
        id: "john.doe@upi",
    };

    const [card, setCard] = useState(cardDemo);
    const [upi, setUpi] = useState(upiDemo);

    const handlePay = () => {
        // Generate PDF receipt (Professional)
        const doc = new jsPDF();
        let y = 15;

        // Title
        doc.setFontSize(20);
        doc.text("PAYMENT RECEIPT", 105, y, { align: "center" });
        y += 5;
        doc.setLineWidth(0.5);
        doc.line(10, y, 200, y);
        y += 8;

        // Store Info
        doc.setFontSize(11);
        doc.text("MyShop Pvt Ltd", 10, y);
        doc.text(`Date: ${new Date().toLocaleString()}`, 150, y);
        y += 8;
        doc.text("Customer: Online Order", 10, y);
        y += 10;

        // Table Header
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Item", 12, y);
        doc.text("Qty", 120, y);
        doc.text("Price", 150, y);
        doc.text("Total", 180, y, { align: "right" });
        y += 5;
        doc.line(10, y, 200, y);
        y += 6;

        // Save order to localStorage orderHistory
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discountAmount = subtotal * discount;
        const total = subtotal - discountAmount;
        const order = {
            id: `ORD${Date.now()}`,
            date: new Date().toISOString().slice(0, 10),
            items: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
            total: total
        };
        const prev = localStorage.getItem("orderHistory");
        let orders = prev ? JSON.parse(prev) : [];
        orders = [order, ...orders];
        localStorage.setItem("orderHistory", JSON.stringify(orders));

        // Table Body
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);

        cart.forEach(item => {
            doc.text(item.name, 12, y);
            doc.text(String(item.quantity), 125, y);
            doc.text(` ${item.price}`, 150, y);
            doc.text(` ${item.price * item.quantity}`, 180, y, { align: "right" });
            y += 7;
        });

        y += 5;
        doc.line(10, y, 200, y);
        y += 8;

        // Calculations
        doc.text(`Subtotal:`, 140, y);
        doc.text(` ${subtotal.toFixed(2)}`, 180, y, { align: "right" });
        y += 6;

        if (discount > 0) {
            doc.text(`Discount (${couponCode}):`, 140, y);
            doc.text(`-  ${discountAmount.toFixed(2)}`, 180, y, { align: "right" });
            y += 6;
        }

        doc.setFont("helvetica", "bold");
        doc.text(`Total Amount:`, 140, y);
        doc.text(` ${total.toFixed(2)}`, 180, y, { align: "right" });
        doc.setFont("helvetica", "normal");

        y += 12;

        // Payment Info
        doc.text(`Payment Method: ${method === "upi" ? `UPI (${upi.id})` : (method === "credit" ? "Credit Card" : "Debit Card") + ` (${card.number})`}`, 10, y);
        y += 10;

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text("Thank you for shopping with MyShop!", 105, y, { align: "center" });
        doc.text("This is a system-generated receipt.", 105, y + 5, { align: "center" });

        // Save URL
        const pdfUrl = doc.output("bloburl");
        setReceiptUrl(pdfUrl.toString());
        setSuccess(true);
        setTimeout(() => {
            clearCart();
        }, 2000);
    };

    // UI
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 sm:p-8 transition-all duration-300"
                style={{ minWidth: 0 }}>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Payment Gateway</h2>
                {success ? (
                    <div className="flex flex-col items-center">
                        <div className="text-green-600 text-3xl mb-2">✔</div>
                        <div className="text-xl font-bold mb-2">Payment Successful!</div>
                        <div className="mb-4 text-gray-600">Thank you for your purchase.</div>
                        <a
                            href={receiptUrl}
                            download={`receipt_${Date.now()}.pdf`}
                            className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 mb-2 w-full text-center text-sm sm:text-base"
                        >
                            Download Receipt (PDF)
                        </a>
                        <button
                            className="text-blue-600 underline w-full text-center text-sm sm:text-base"
                            onClick={() => navigate("/")}
                        >
                            Go to Home
                        </button>
                    </div>
                ) : (
                    <>
                        {step === 1 && (
                            <>
                                <div className="mb-4">
                                    <div className="font-semibold mb-2 text-base sm:text-lg">Select Payment Method:</div>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            className={`border rounded-lg px-3 py-2 sm:px-4 ${method === "upi" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
                                            onClick={() => {
                                                setMethod("upi");
                                                setStep(2);
                                            }}
                                        >
                                            UPI
                                        </button>
                                        <button
                                            className={`border rounded-lg px-3 py-2 sm:px-4 ${method === "credit" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
                                            onClick={() => {
                                                setMethod("credit");
                                                setStep(2);
                                                setCard(cardDemo);
                                            }}
                                        >
                                            Credit Card
                                        </button>
                                        <button
                                            className={`border rounded-lg px-3 py-2 sm:px-4 ${method === "debit" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
                                            onClick={() => {
                                                setMethod("debit");
                                                setStep(2);
                                                setCard(cardDemo);
                                            }}
                                        >
                                            Debit Card
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                        {step === 2 && method === "upi" && (
                            <form
                                className="flex flex-col gap-3 sm:gap-4"
                                onSubmit={e => {
                                    e.preventDefault();
                                    setStep(3);
                                }}
                            >
                                <label className="font-semibold">UPI ID</label>
                                <input
                                    type="text"
                                    value={upi.id}
                                    onChange={e => setUpi({ id: e.target.value })}
                                    className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4"
                                    required
                                />
                                <button type="submit" className="bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-700">
                                    Next
                                </button>
                            </form>
                        )}
                        {step === 2 && (method === "credit" || method === "debit") && (
                            <form
                                className="flex flex-col gap-3 sm:gap-4"
                                onSubmit={e => {
                                    e.preventDefault();
                                    setStep(3);
                                }}
                            >
                                <label className="font-semibold">Card Number</label>
                                <input
                                    type="text"
                                    value={card.number}
                                    onChange={e => setCard({ ...card, number: e.target.value })}
                                    className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4"
                                    required
                                    maxLength={19}
                                />
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="text"
                                        value={card.expiry}
                                        onChange={e => setCard({ ...card, expiry: e.target.value })}
                                        className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4 w-full sm:w-1/2"
                                        required
                                        placeholder="MM/YY"
                                    />
                                    <input
                                        type="text"
                                        value={card.cvv}
                                        onChange={e => setCard({ ...card, cvv: e.target.value })}
                                        className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4 w-full sm:w-1/2"
                                        required
                                        maxLength={3}
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={card.name}
                                    onChange={e => setCard({ ...card, name: e.target.value })}
                                    className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4"
                                    required
                                    placeholder="Name on Card"
                                />
                                <button type="submit" className="bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-700">
                                    Next
                                </button>
                            </form>
                        )}
                        {step === 3 && (
                            <div className="flex flex-col items-center gap-3 sm:gap-4">
                                <div className="text-base sm:text-lg font-semibold mb-2">Confirm Payment</div>
                                <div className="w-full bg-gray-100 rounded-lg p-3 sm:p-4 mb-2">
                                    <div className="mb-1 text-sm sm:text-base">Amount: <span className="font-bold"> {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span></div>
                                    <div className="mb-1 text-sm sm:text-base">Method: <span className="font-bold">{method === "upi" ? `UPI (${upi.id})` : `${method === "credit" ? "Credit Card" : "Debit Card"} (${card.number})`}</span></div>
                                </div>
                                <button
                                    className="bg-green-600 text-white px-4 py-2 sm:px-6 rounded-lg hover:bg-green-700 font-semibold w-full"
                                    onClick={handlePay}
                                >
                                    Pay Now
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
