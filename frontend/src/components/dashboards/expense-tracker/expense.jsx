import Navbar from '../../Navbar/Navbar';
import { PieChart } from 'lucide-react';

export default function Expense() {
    const expenses = [
        { category: 'Food & Dining', planned: 5000, spent: 3200 },
        { category: 'Transportation', planned: 2000, spent: 1800 },
        { category: 'Entertainment', planned: 3000, spent: 2100 },
        { category: 'Shopping', planned: 4000, spent: 4500 },
        { category: 'Bills & Utilities', planned: 3500, spent: 3500 }
    ];
    return (
        <>
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
                                        ₹{exp.spent} / ₹{exp.planned}
                                    </span>
                                </div>
                                <div className="relative bg-gray-200 rounded-full h-3">
                                    <div
                                        className={`absolute top-0 left-0 h-3 rounded-full ${exp.spent > exp.planned ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${Math.min((exp.spent / exp.planned) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {exp.spent > exp.planned
                                        ? `Over budget by ₹${exp.spent - exp.planned}`
                                        : `₹${exp.planned - exp.spent} remaining`}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-colors">
                        + Add New Expense Category
                    </button>
                </div>
            </div>
        </>
    )
}