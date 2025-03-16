"use client"

import * as React from "react";
import {type DialogProps} from "@radix-ui/react-dialog";
import {Command as CommandIcon} from "cmdk";
import {Search} from "lucide-react";

import {cn} from "../../app/lib/utils";
import {Dialog, DialogContent} from "";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName