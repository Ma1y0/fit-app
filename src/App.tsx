import { useEffect, useState } from "react";
import { Activity, getAllActivities } from "./lib/activity-db";

function App() {
  const [activities, setActivities] = useState<Activity[]>(getAllActivities());
  const [timeSum, setTimeSum] = useState(0);

  useEffect(() => {
    setTimeSum(activities.reduce((sum, x) => sum + x.time, 0));
  });

  return (
    <main>
      <div>
        <h1>You exercise for {timeSum} minutes</h1>
      </div>
    </main>
  );
}

export default App;
