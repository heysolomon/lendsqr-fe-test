"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("calendar", className)}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        // Root and Layout
        root: "calendar__root",
        months: "calendar__months",
        month: "calendar__month",
        table: "calendar__table",

        // Navigation
        nav: "calendar__nav",
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "calendar__nav-button calendar__nav-button--previous"
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "calendar__nav-button calendar__nav-button--next"
        ),

        // Caption & Headings
        month_caption: "calendar__caption",
        caption_label: cn(
          "calendar__caption-label",
          captionLayout !== "label" && "calendar__caption-label--hidden"
        ),

        // Head / Weekdays
        weekdays: "calendar__head-row",
        weekday: "calendar__head-cell",

        // Rows & Cells
        week: "calendar__row",
        day: cn(
          "calendar__cell"
          // Note: Specific rounded logic typically handled via CSS :first-child/:last-child or data-attrs in SCSS
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "calendar__day"
        ),

        // Dropdowns
        caption_dropdowns: "calendar__caption-dropdowns",
        dropdown_root: "calendar__dropdown-root",
        dropdown: "calendar__dropdown",

        // Modifiers
        range_start: "day-range-start",
        range_end: "day-range-end",
        range_middle: "day-range-middle",
        selected: "calendar__day--selected",
        today: "calendar__day--today",
        outside: "calendar__day--outside day-outside",
        disabled: "calendar__day--disabled",
        hidden: "calendar__day--hidden",
        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("calendar__chevron", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("calendar__chevron", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("calendar__chevron", className)} {...props} />
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  // We maintain this component wrapper to match the user's provided structure
  // but pass through to the underlying Button/styles defined in SCSS
  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected={modifiers.selected}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn("calendar__day", className)}
      {...props}
    />
  )
}

export { Calendar }
