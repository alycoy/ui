"use client"

import { Button } from "@ui/inputs/button/button";
import { Input } from "@ui/inputs/input/input";
import { InputLabelWrapper } from "@ui/inputs/input/input-label-wrapper";
import { MaskedInput } from "@ui/inputs/input/masked-input";
import { Popover } from "@ui/inputs/popover/popover";
import {
  NativeSelect,
  NativeSelectOption,
} from "@ui/inputs/select/native-select";
import { Switch } from "@ui/inputs/switch/simple-switch";
import { Tooltip } from "@/components/ui/inputs/tooltip/simple-tooltip";
import { CustomTooltip } from "../ui/inputs/tooltip/advanced-tooltip";
import Select from "../ui/inputs/select/select";

const Fields = () => {
  return (
    <div className="z-10 p-8 bg-background border shadow bg-card rounded-lg w-full">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <InputLabelWrapper label="Button">
            <Button> Contained Button</Button>
          </InputLabelWrapper>
        </div>
        <div className="col-span-2">
          <InputLabelWrapper label="Input">
            <Input />
          </InputLabelWrapper>
        </div>
        <div className="col-span-2">
          <InputLabelWrapper label="Masked Input">
            <MaskedInput />
          </InputLabelWrapper>
        </div>
        <div className="col-span-1">
          <InputLabelWrapper label="Switch">
            <Switch />
          </InputLabelWrapper>
        </div>
        <div className="col-span-1">
          <InputLabelWrapper label="Popover">
            <Popover
              side="bottom"
              align="end"
              content={
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-2xl">
                  <h3 className="font-bold">This is a popover</h3>
                  <p className="text-gray-600 text-sm">
                    You can modify it to look the way you want, put anything
                    inside, free yourself!
                  </p>
                </div>
              }
            >
              <Button variant="outline">Click Me</Button>
            </Popover>
          </InputLabelWrapper>
        </div>
        <div className="col-span-2">
          <InputLabelWrapper label="Native Select">
            <NativeSelect name="pets" id="pet-select">
              <NativeSelectOption value=""></NativeSelectOption>
              <NativeSelectOption value="dog">Dog</NativeSelectOption>
              <NativeSelectOption value="cat">Cat</NativeSelectOption>
            </NativeSelect>
          </InputLabelWrapper>
        </div>
        <div className="col-span-1">
          <InputLabelWrapper label="Tooltip">
            <CustomTooltip
              side="top"
              align="center"
              content={
                <div className="bg-white p-2 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-md">
                  <span className="text-sm text-gray-600">Tooltip example</span>
                </div>
              }
            >
              <Button variant="outline">Hover Me</Button>
            </CustomTooltip>
          </InputLabelWrapper>
        </div>
        <div className="col-span-2">
          <InputLabelWrapper label="Select">
            <Select
              value=""
              handleChange={() => {}}
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
              ]}
            />
          </InputLabelWrapper>
        </div>
      </div>
    </div>
  );
};

export { Fields };
