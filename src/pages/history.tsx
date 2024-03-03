import { useState } from "react";
import { Activity, getAllActivities } from "../lib/activity-db";
import { FaBiking, FaSwimmer, FaWalking } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";

export default function History() {
  const [activities, setActivities] = useState(getAllActivities());
  return (
    <main className="flex gap-4 flex-col items-center">
      {activities.map((x) => (
        <ActivityCard a={x} key={crypto.randomUUID()} />
      ))}
    </main>
  );
}

function ActivityCard({ a }: { a: Activity }) {
  const icon_size = 24;

  let activityIcon;

  if (a.type === "walk") {
    activityIcon = <FaWalking size={icon_size} />;
  } else if (a.type === "swim") {
    activityIcon = <FaSwimmer size={icon_size} />;
  } else if (a.type === "bike") {
    activityIcon = <FaBiking size={icon_size} />;
  } else if (a.type === "fitness") {
    activityIcon = <IoMdFitness size={icon_size} />;
  }

  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {activityIcon}
          {a.type}
        </h2>
        <p>{a.note}</p>
      </div>
    </div>
  );
}
