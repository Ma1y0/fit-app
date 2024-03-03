import React, { useState } from "react";
import { FaBiking, FaSwimmer, FaWalking } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { ActivityType, addActivity } from "../lib/activity-db";

interface ActivityButton {
  type: ActivityType;
  icon: React.ReactNode;
}

export default function Add() {
  const [activity, setActivity] = useState<ActivityType>("walk");
  const [time, setTime] = useState("");

  const icon_size = 20;
  const activities: ActivityButton[] = [
    { type: "walk", icon: <FaWalking size={icon_size} /> },
    { type: "swim", icon: <FaSwimmer size={icon_size} /> },
    { type: "bike", icon: <FaBiking size={icon_size} /> },
    { type: "fitness", icon: <IoMdFitness size={icon_size} /> },
  ];

  const a_buttons = activities.map((x) => (
    <button
      className={` ${activity == x.type ? "btn-info" : ""} btn join-item `}
      onClick={() => setActivity(x.type)}
      type="button"
      key={x.type}
    >
      {x.icon}
    </button>
  ));

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addActivity({ type: activity, time: Number(time) });

    setTime("");
  };

  return (
    <main className=" p-6">
      <form onSubmit={add} className="flex flex-col items-center gap-10">
        <div className="join">{a_buttons}</div>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="number"
          placeholder="How long?"
          className="input input-bordered"
          required
        />
      </form>
    </main>
  );
}
