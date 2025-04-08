"use client";

import { JSX, useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Trip {
  id: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  days: DayPlan[];
}

interface DayPlan {
  date: string;
  items: PlanItem[];
}

interface PlanItem {
  time: string;
  title: string;
  description?: string;
}
export default function TripPlanPage(): JSX.Element {
  const params = useParams();
  const id = params?.id as string;
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(id);
    if (stored) {
      setTrip(JSON.parse(stored));
    }
  }, [id]);

  if (!trip) return <p className="p-8">載入中...</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{trip.title}</h1>
      <p className="text-muted-foreground">{trip.location}</p>
      <p>
        {trip.startDate} - {trip.endDate}
      </p>
      <div className="mt-6">目前尚未加入詳細行程項目</div>
    </main>
  );
}
