import Navbar from '../../Navbar/Navbar';
export default function Reward() {
    const rewardPoints = 1250;
    const rewards = [
        { brand: 'Amazon', discount: '20% Off', points: 500, tier: 'Gold' },
        { brand: 'Swiggy', discount: '₹200 Off', points: 300, tier: 'Silver' },
        { brand: 'Flipkart', discount: '15% Off', points: 400, tier: 'Gold' },
        { brand: 'BookMyShow', discount: 'Buy 1 Get 1', points: 200, tier: 'Bronze' }
    ];
    return (
        <>
            <Navbar />
            <div className="space-y-6 p-4">

                <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-6 text-white shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Your Rewards</h2>
                    <p className="text-lg opacity-90">You have {rewardPoints} points available</p>
                    <p className="text-sm mt-2 opacity-80">Current Tier: Silver • Unlock Gold at 1,750 points</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rewards.map((reward, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{reward.brand}</h3>
                                    <p className="text-sm text-gray-500">{reward.tier} Tier Reward</p>
                                </div>
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                                    {reward.points} pts
                                </span>
                            </div>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
                                <p className="text-2xl font-bold text-purple-700">{reward.discount}</p>
                            </div>
                            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-colors">
                                Redeem Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}