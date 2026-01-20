import { useState } from 'react';
export default function AddExpense(props) {
    const [category, setCategory] = useState("");
    const [planned, setPlanned] = useState("");
    const [spent, setSpent] = useState("");
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    async function handleAddExpense(e) {
        e.preventDefault();
        const res = await fetch(`${backendUrl}/expense/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                category: category,
                planned: Number(planned),
                spent: Number(spent)
            })
        });
        if (res.status === 201) {
            alert("Expense added successfully");
            props.onClose();
            setCategory("");
            setPlanned("");
            setSpent("");
        }
        else {
            alert("Failed to add expense");
        }
    }

    function handleBackgroundClick(e) {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    }

    return (
        <div onClick={handleBackgroundClick} className={`absolute w-screen h-screen ${props.display} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 flex items-center justify-center`}>
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
                <form className="flex flex-col space-y-4">
                    <label htmlFor="category">Category:</label>
                    <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} name="category" className="outline-none border-amber-400 border-2 p-2 " placeholder="Category" required />
                    <label htmlFor="planned">Planned Amount:</label>
                    <input type="number" onChange={(e) => setPlanned(e.target.value)} value={planned} name="planned" className="outline-none border-amber-400 border-2 p-2" placeholder="Planned Amount" required />
                    <label htmlFor="spent">Spent Amount:</label>
                    <input type="number" onChange={(e) => setSpent(e.target.value)} value={spent} name="spent" className="outline-none border-amber-400 border-2 p-2" placeholder="Spent Amount" required />
                    <button onClick={handleAddExpense} type="submit" className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-colors">
                        Add Expense
                    </button>
                </form>
            </div>
        </div>
    )
}