import Navbar from '../../Navbar/Navbar';
import { PieChart } from 'lucide-react';
import { useState, useEffect } from 'react';
import AddExpense from './addexpense';
export default function Expense() {
    const [expenses, setExpenses] = useState([]);
    const [showAddExpense, setShowAddExpense] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        async function fetchExpenses() {
            const res = await fetch(`${backendUrl}/expense/list`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
            });
            if (res.status === 200) {
                const data = await res.json();
                setExpenses(data.expenses);
            }
            else {
                alert("Failed to fetch expenses");
            }
        }
        fetchExpenses();
    });
    return (
        <div className="h-screen w-screen overflow-y-auto bg-gray-100">
            <Navbar />
            <div className="space-y-6 p-4">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <PieChart className="w-6 h-6 mr-2 text-green-500" />
                        Expense Tracker
                    </h2>
                    <div className="space-y-4">
                        {expenses.map((exp, idx) => (
                            <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-gray-800">{exp.category}</span>
                                    <span className="text-sm text-gray-600">
                                        ₹{exp.spentAmount} / ₹{exp.plannedAmount}
                                    </span>
                                </div>
                                <div className="relative bg-gray-200 rounded-full h-3">
                                    <div
                                        className={`absolute top-0 left-0 h-3 rounded-full ${exp.spentAmount > exp.plannedAmount ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${Math.min((exp.spentAmount / exp.plannedAmount) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {exp.spentAmount > exp.plannedAmount
                                        ? `Over budget by ₹${exp.spentAmount - exp.plannedAmount}`
                                        : `₹${exp.plannedAmount - exp.spentAmount} remaining`}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => setShowAddExpense(true)} className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-colors">
                        + Add New Expense Category
                    </button>
                </div>
            </div>
            <AddExpense
                display={showAddExpense ? "flex" : "hidden"}
                onClose={() => setShowAddExpense(false)}
            />
        </div>
    )
}