import Navbar from "../../Navbar/Navbar"
import {  Gift, TrendingUp, Award, Zap, Calendar, DollarSign} from 'lucide-react';
export default function Home() {
    const creditScore = 742;
    const rewardPoints = 1250;
    const subscriptions = [
        { name: 'Netflix', amount: 649, date: '15th', category: 'Entertainment' },
        { name: 'Spotify', amount: 119, date: '10th', category: 'Entertainment' },
        { name: 'Amazon Prime', amount: 299, date: '20th', category: 'Shopping' },
        { name: 'Gym Membership', amount: 2000, date: '1st', category: 'Health' }
    ];
    const loans = [
        { name: 'Personal Loan', amount: 50000, emi: 5500, remaining: 8, bank: 'HDFC Bank' },
        { name: 'Credit Card', amount: 15000, emi: 3000, remaining: 5, bank: 'ICICI Bank' }
    ];
    return (
        <div className="">
            <Navbar />
            <div className="space-y-6 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <Award className="w-8 h-8" />
                            <span className="text-sm opacity-90">Credit Score</span>
                        </div>
                        <div className="text-4xl font-bold mb-2">{creditScore}</div>
                        <div className="text-sm opacity-90">Excellent • Keep it up!</div>
                        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
                            <div className="bg-white rounded-full h-2" style={{width: `${(creditScore/850)*100}%`}} ></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <Gift className="w-8 h-8" />
                            <span className="text-sm opacity-90">Reward Points</span>
                        </div>
                        <div className="text-4xl font-bold mb-2">{rewardPoints}</div>
                        <div className="text-sm opacity-90">500 points to Gold tier</div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <TrendingUp className="w-8 h-8" />
                            <span className="text-sm opacity-90">Monthly Savings</span>
                        </div>
                        <div className="text-4xl font-bold mb-2">₹8,450</div>
                        <div className="text-sm opacity-90">↑ 12% from last month</div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                        Smart Recommendations
                    </h3>
                    <div className="space-y-3">
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                            <p className="font-semibold text-gray-800">Reduce Shopping Expenses</p>
                            <p className="text-sm text-gray-600 mt-1">You've exceeded your shopping budget by ₹500. Consider using reward coupons for next purchase.</p>
                        </div>
                        <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <p className="font-semibold text-gray-800">Credit Score Boost</p>
                            <p className="text-sm text-gray-600 mt-1">Your timely UPI payments this month can increase your score by 8-12 points!</p>
                        </div>
                        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                            <p className="font-semibold text-gray-800">Subscription Alert</p>
                            <p className="text-sm text-gray-600 mt-1">Netflix renewal in 3 days. Use your Amazon coupon to save ₹130.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                            Active Subscriptions
                        </h3>
                        <div className="space-y-3">
                            {subscriptions.slice(0, 3).map((sub, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-800">{sub.name}</p>
                                        <p className="text-sm text-gray-500">Renews on {sub.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-800">₹{sub.amount}</p>
                                        <p className="text-xs text-gray-500">{sub.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <DollarSign className="w-5 h-5 mr-2 text-red-500" />
                            Loan & EMI Tracker
                        </h3>
                        <div className="space-y-3">
                            {loans.map((loan, idx) => (
                                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-semibold text-gray-800">{loan.name}</p>
                                        <p className="font-bold text-gray-800">₹{loan.emi}/mo</p>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>{loan.bank}</span>
                                        <span>{loan.remaining} months left</span>
                                    </div>
                                    <div className="mt-2 bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-full h-2" style={{ width: `${((12 - loan.remaining) / 12) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}