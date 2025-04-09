"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { zhTW } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      locale={zhTW}
      animate
      captionLayout="dropdown"
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col gap-2 items-center ", //整個版面
        month: "flex flex-col gap-4 ", //月份和日期
        month_caption: "flex justify-center pt-1 relative items-center w-full ", //月份標題
        caption_label: "text-sm font-medium flex items-center", //月份標題，如果有dropdown可以調整樣式
        dropdowns: "cursor-pointer flex gap-4 items-center",
        chevron: "text-primary", //箭頭樣式
        nav: " flex w-full justify-between items-center absolute px-4 ",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-10"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "size-7  p-0 opacity-50 hover:opacity-100 z-10"
        ),
        month_grid: "w-full border-collapse space-x-1 ",
        weekdays: "flex ",
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] ",
        week: "flex w-full mt-2 ",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day_button: cn(
          // buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal rounded-full aria-selected:opacity-100 cursor-pointer"
        ), //日期按鈕
        range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground ",
        range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-full",
        today: "bg-accent rounded-full text-accent-foreground",
        outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}

export { Calendar };
