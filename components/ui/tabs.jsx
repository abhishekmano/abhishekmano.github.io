"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={cn("flex h-auto gap-1", className)}
    {...props}
  />
);

// The active tab is a left accent bar plus a weight change, not the solid blue
// slab it used to be -- that read as a heavy button rather than a selected item,
// and the inactive tabs were flat grey pills with no hierarchy.
const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn(
      "group relative inline-flex items-center justify-start whitespace-nowrap rounded-md px-4 py-2.5 text-left text-sm font-medium text-muted transition-colors",
      "hover:bg-sunken hover:text-ink",
      "data-[state=active]:bg-accent-soft data-[state=active]:text-accent",
      "disabled:pointer-events-none disabled:opacity-50",
      // The bar itself: full-height on the vertical (xl) layout, an underline on
      // the horizontal one, so it reads correctly in both.
      "before:absolute before:bg-accent before:opacity-0 data-[state=active]:before:opacity-100",
      "before:inset-x-3 before:bottom-0 before:h-0.5",
      "xl:before:inset-y-1.5 xl:before:inset-x-auto xl:before:left-0 xl:before:h-auto xl:before:w-0.5",
      className,
    )}
    {...props}
  />
);

const TabsContent = ({ className, ...props }) => (
  <TabsPrimitive.Content className={cn("mt-6 xl:mt-0", className)} {...props} />
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
