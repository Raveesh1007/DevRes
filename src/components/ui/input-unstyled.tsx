import * as React from 'react';
import { cn } from '@/app/lib/utils';

export interface InputProps 
    extends React.InputHTMLAttributes<HTMLInputElement> {}

    const InputUnstyled = React.forwardRef<HTMLInputElement, InputProps>(
        ({ className, type, ...props }, ref) => {
            return(
                <input 
                type={type}
                className = {cn(
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring/0 disabled:cursor-not-allowed disabled:opacity-50",
					className
                )}
                ref = {ref}
                {...props}
                />
            );
        }
    );

    InputUnstyled.displayName = 'InputUnstyled'; 
    export { InputUnstyled };