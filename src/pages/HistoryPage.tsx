import { useEffect, useState } from "react";
import { getHistory } from "../utils/history.service";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    getHistory().then(setHistory);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">History</h2>
      <ul className="space-y-2">
        {history.map(h => (
          <li key={h.id} className="border p-2 rounded">
            <b>{h.action}</b> — {h.email || "N/A"} <br />
            <small>{new Date(h.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
