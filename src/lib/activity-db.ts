export type ActivityType = "walk" | "swim" | "bike" | "fitness";

export interface Activity {
  type: ActivityType;
  time: number;
}

export function addActivity(a: Activity) {
  const storedActivitiesJSON = localStorage.getItem("activities");

  const storedActivities: Activity[] = storedActivitiesJSON
    ? JSON.parse(storedActivitiesJSON)
    : [];

  storedActivities.push(a);
  const updatedActivitiesJSON = JSON.stringify(storedActivities);

  localStorage.setItem("activities", updatedActivitiesJSON);
}

export function getAllActivities(): Activity[] {
  const storedActivitiesJSON = localStorage.getItem("activities");

  const activities: Activity[] = storedActivitiesJSON
    ? JSON.parse(storedActivitiesJSON)
    : [];

  return activities;
}
