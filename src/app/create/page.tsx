"use client";

import { JSX, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

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

export default function CreateTrip(): JSX.Element {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  function handleSubmit(): void {
    const trip: Trip = {
      id: uuidv4(),
      title,
      location,
      startDate,
      endDate,
      days: [],
    };
    localStorage.setItem(trip.id, JSON.stringify(trip));
    router.push(`/plan/${trip.id}`);
  }

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">建立你的旅遊計畫</h1>
      <div className="space-y-4">
        <Input
          placeholder="計畫名稱"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="地點"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button onClick={handleSubmit}>建立計畫</Button>
      </div>
    </main>
  );
}
