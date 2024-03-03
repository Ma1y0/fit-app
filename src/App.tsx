import { useEffect, useState } from "react";
import { Activity, getAllActivities } from "./lib/activity-db";
import { FaBiking, FaSwimmer, FaWalking } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";

function App() {
  const [activities, _setActivities] = useState<Activity[]>(getAllActivities());
  const [timeSum, setTimeSum] = useState(0);
  const [activitiesDistribution, setActivitiesDistribution] = useState({
    walk: 0,
    swim: 0,
    bike: 0,
    fitness: 0,
  });

  useEffect(() => {
    setTimeSum(activities.reduce((sum, x) => sum + x.time, 0));
  });

  const calculateActivityDistribution = (activityArray: Activity[]) => {
    const distribution = { walk: 0, swim: 0, bike: 0, fitness: 0 };
    activityArray.forEach((activity) => {
      if (distribution[activity.type]) {
        distribution[activity.type]++;
      } else {
        distribution[activity.type] = 1;
      }
    });
    return distribution;
  };

  useEffect(() => {
    setActivitiesDistribution(calculateActivityDistribution(activities));
  }, [activities]);

  return (
    <main className="flex justify-center">
      <div>
        <h1 className="text-xl mb-2">You exercise for {timeSum} minutes.</h1>
        <p className="flex">
          <FaWalking size={22} /> : {activitiesDistribution.walk}
        </p>
        <p className="flex">
          <FaSwimmer size={22} /> : {activitiesDistribution.swim}
        </p>
        <p className="flex">
          <FaBiking size={22} /> : {activitiesDistribution.bike}
        </p>
        <p className="flex">
          <IoMdFitness size={22} /> : {activitiesDistribution.fitness}
        </p>
      </div>
    </main>
  );
}

export default App;
