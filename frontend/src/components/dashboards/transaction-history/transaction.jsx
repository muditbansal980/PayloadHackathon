import Navbar from '../../Navbar/Navbar';
import { DollarSign, History } from 'lucide-react';
export default function Transaction() {
    const transactions = [
        { date: '2026-01-15', desc: 'UPI to Merchant', amount: -450, type: 'debit' },
        { date: '2026-01-14', desc: 'Mobile Recharge', amount: -299, type: 'debit' },
        { date: '2026-01-13', desc: 'Salary Credited', amount: 45000, type: 'credit' },
        { date: '2026-01-12', desc: 'Grocery Shopping', amount: -2500, type: 'debit' },
        { date: '2026-01-10', desc: 'UPI Payment', amount: -800, type: 'debit' }
    ];
    return (
        <>
            <Navbar />
            <div className="space-y-6 p-4">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <History className="w-6 h-6 mr-2 text-blue-500" />
                        Transaction History
                    </h2>
                    <div className="space-y-2">
                        {transactions.map((txn, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100">
                                <div className="flex items-center space-x-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${txn.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                                        <DollarSign className={`w-5 h-5 ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{txn.desc}</p>
                                        <p className="text-sm text-gray-500">{txn.date}</p>
                                    </div>
                                </div>
                                <p className={`font-bold text-lg ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                                    {txn.type === 'credit' ? '+' : ''}₹{Math.abs(txn.amount)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}