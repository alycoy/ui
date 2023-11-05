import { FC, ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

const InputLabelWrapper: FC<Props> = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600 font-medium leading-none">
        {label}
      </label>
      {children}
    </div>
  );
};

export { InputLabelWrapper };
