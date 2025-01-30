import { useEffect, useState } from "react";

import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  const [totalSpent, setTotalSpent] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4000/api/expenses/total-spent");
  }, []);

  return (
    <Card className="w-[350px] m-auto">
      <CardHeader>
        <CardTitle>Total spent</CardTitle>
        <CardDescription>The total amount you've spent</CardDescription>
      </CardHeader>
      <CardContent>{totalSpent}</CardContent>
    </Card>
  );
}

export default App;
