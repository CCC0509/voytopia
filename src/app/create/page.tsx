"use client";

import { JSX } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { DatePicker } from "@/components/ui/datePicker";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Trip {
  id?: string;
  title: string;
  location: string;
  date: number;
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

const schema = z.object({
  title: z.string().min(1),
  location: z.string().min(1),
  date: z.number().min(1),
});

export default function CreateTrip(): JSX.Element {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      title: "",
      location: "",
      date: undefined,
    },
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const { isDirty, isValid } = formState;

  function submit(data: Trip): void {
    const trip: Trip = {
      id: uuidv4(),
      ...data,
      days: [],
    };
    console.log(trip);
    localStorage.setItem(trip.id!, JSON.stringify(trip));
    router.push(`/plans/${trip.id}`);
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
                onBlur={field.onBlur}
              />
            );
          }}
        />
        <Button type="submit" disabled={!isDirty || !isValid}>
          建立計畫
        </Button>
        <Button onClick={() => router.push("/")}>回首頁</Button>
      </form>
    </main>
  );
}
