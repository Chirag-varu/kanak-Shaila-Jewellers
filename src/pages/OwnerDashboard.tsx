import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Extend jsPDF type to include autoTable for TypeScript
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const OwnerDashboard: React.FC = () => {
  // Demo PDF generators
  const handleDownloadSales = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Sales Report (Demo)", 105, 15, { align: "center" });
    doc.setFontSize(11);
    doc.text("Date: 2026-01-25", 14, 25);
    doc.autoTable({
      startY: 35,
      head: [["Period", "Orders", "Revenue"]],
      body: [
        ["Today", "5", "Rs. 32,000"],
        ["This Week", "28", "Rs. 1,85,000"],
        ["This Month", "110", "Rs. 7,80,000"]
      ],
    });
    doc.save("Sales_Report_Demo.pdf");
  };

  const handleDownloadInventory = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Inventory Report (Demo)", 105, 15, { align: "center" });
    doc.setFontSize(11);
    doc.text("Date: 2026-01-25", 14, 25);
    doc.autoTable({
      startY: 35,
      head: [["Product", "Stock", "Price", "Status"]],
      body: [
        ["Gold Bracelet", "12", "Rs. 4500", "Active"],
        ["Diamond Earrings", "5", "Rs. 12000", "Active"],
        ["Silver Rings", "0", "Rs. 2500", "Out of Stock"]
      ],
    });
    doc.save("Inventory_Report_Demo.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Business Owner Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Overview */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Sales Overview</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Period</th>
                <th className="p-2 border">Orders</th>
                <th className="p-2 border">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Today</td>
                <td className="p-2 border">5</td>
                <td className="p-2 border">Rs. 32,000</td>
              </tr>
              <tr>
                <td className="p-2 border">This Week</td>
                <td className="p-2 border">28</td>
                <td className="p-2 border">Rs. 1,85,000</td>
              </tr>
              <tr>
                <td className="p-2 border">This Month</td>
                <td className="p-2 border">110</td>
                <td className="p-2 border">Rs. 7,80,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Reports */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Reports</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Report</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Sales Report</td>
                <td className="p-2 border">2026-01-25</td>
                <td className="p-2 border"><button className="text-blue-600 underline" onClick={handleDownloadSales}>Download</button></td>
              </tr>
              <tr>
                <td className="p-2 border">Inventory Report</td>
                <td className="p-2 border">2026-01-25</td>
                <td className="p-2 border"><button className="text-blue-600 underline" onClick={handleDownloadInventory}>Download</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Strategic Growth */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Strategic Growth</h3>
          <ul className="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Top-selling product: <span className="font-semibold">Gold Bracelet</span></li>
            <li>Customer satisfaction: <span className="font-semibold text-green-600">98%</span></li>
            <li>Growth suggestion: Expand bridal collection for wedding season.</li>
          </ul>
          <div className="text-xs text-gray-500">* Insights generated from recent sales data.</div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
