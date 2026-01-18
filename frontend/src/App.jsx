import SignIn from "./components/dashboards/register/signin";
import SignUp from "./components/dashboards/register/signup";
import Home from "./components/dashboards/home/home";
import Reward from "./components/dashboards/rewards/reward";
import Transaction from "./components/dashboards/transaction-history/transaction";
import Expense from "./components/dashboards/expense-tracker/expense";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<SignIn/>
    },
    {
      path:"/Signup",
      element:<SignUp/>
    },
    {
      path:"/Home",
      element:<Home/>
    },
    {
      path:"/rewards",
      element:<Reward/>
    },
    {
      path:"/transactions",
      element:<Transaction/>
    },
    {
      path:"/expenses",
      element:<Expense/>
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}