import * as React from "react"
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "../../app/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: 
                "border-transparent bg-primary text-primary-foreground hover: bg-primary/80",
                secondary: 
                "border-transparent bg-secondary text-secondary-foreground hover: bg-secondary/80",
                destructive:
                "border-transparent bg-destructive text-descriptive-foreground hover: bg-desctructive/80",
                outline: "text-foreground"
            },
        },
        defaultVariants:{
            variant: "default",
        }
    }
)

export 