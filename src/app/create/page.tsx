"use client";

import { JSX } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { DatePicker } from "@/components/ui/datePicker";
import { Controller, useForm } from "react-hook-form";

interface Trip {
  id?: string;
  title: string;
  location: string;
  date: string;
  days?: DayPlan[];
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
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      location: "",
      date: "",
    },
  });
  const router = useRouter();

  function submit(data: Trip): void {
    console.log(data);
    // const trip: Trip = {
    //   id: uuidv4(),
    //   title,
    //   location,
    //   startDate,
    //   endDate,
    //   days: [],
    // };
    // console.log(trip);
    // localStorage.setItem(trip.id, JSON.stringify(trip));
    // router.push(`/plan/${trip.id}`);
  }

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">建立你的旅遊計畫</h1>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <Input {...register("title")} placeholder="計畫名稱" />
        <Input placeholder="地點" {...register("location")} />
        <Controller
          name="date"
          control={control}
          defaultValue={undefined}
          render={({ field }) => {
            return (
              <DatePicker
                placeHolder="選擇日期"
                value={field.value}
                onChange={(val) => {
                  field.onChange(val ? val.getTime() : undefined);
                }}
              />
            );
          }}
        />
        <Button type="submit">建立計畫</Button>
        <Button onClick={() => router.push("/")}>回首頁</Button>
      </form>
    </main>
  );
}
