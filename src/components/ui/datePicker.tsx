import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  placeHolder: string;
  value?: Date | number | string;
  onChange: (date?: Date) => void;
  onBlur?: () => void;
  name?: string;
  inputRef?: React.Ref<HTMLInputElement>;
};

export function DatePicker({ placeHolder, value, onChange }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const displayDate =
    value instanceof Date ? value : value ? new Date(value) : undefined;
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[248px] justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
            onClick={() => setOpen(true)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayDate ? (
              displayDate.toLocaleDateString()
            ) : (
              <span>{placeHolder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            selected={displayDate}
            onSelect={(e) => {
              onChange(e);
            }}
            footer={
              <div className="flex gap-2 justify-end mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setOpen(false);
                    onChange(undefined);
                  }}
                >
                  {value ? "清除" : "取消"}
                </Button>
                <Button
                  disabled={!value}
                  size="sm"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  確定
                </Button>
              </div>
            }
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
