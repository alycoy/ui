import { forwardRef } from "react";

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className="appearance-none bg-background border border-input-border rounded-md focus-visible:outline-primary h-10 px-3 py-2 text-sm cursor-pointer w-full"
          ref={ref}
          {...props}
        >
          {children}
        </select>

        <svg
          className="absolute right-3 top-3 "
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    );
  }
);

export interface NativeSelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const NativeSelectOption = forwardRef<
  HTMLOptionElement,
  NativeSelectOptionProps
>(({ ...props }, ref) => {
  return <option {...props} ref={ref} />;
});
