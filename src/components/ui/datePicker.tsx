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
};

export function DatePicker({
  placeHolder,
  value,
  onChange,
  onBlur,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const displayDate =
    value instanceof Date ? value : value ? new Date(value) : undefined;
  const [tempValue, setTempValue] = React.useState<Date | undefined>(
    displayDate
  );

  React.useEffect(() => {
    setTempValue(displayDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[248px] justify-start text-left font-normal active:scale-100",
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
            selected={tempValue}
            onSelect={setTempValue}
            footer={
              <div className="flex justify-end">
                <Button
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    setOpen(false);
                    onChange(tempValue);
                    onBlur?.();
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
