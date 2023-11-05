import { Fields } from "@/components/examples/fields";
import { Button } from "@/components/ui/inputs/button/button";

export default function Home() {
  return (
    <main className="grid grid-cols-2 container">
      <div className="grid-cols-1 flex flex-col gap-8 items-start justify-center px-16">
        <h1 className="font-bold text-5xl ">
          <span className="text-primary">Simple UI</span> HTML Components for
          React
        </h1>
        <p className="font-normal text-lg text-pale-foreground">
          Dive straight into development with a simple set of UI components
          crafted exclusively for React. No bloat, no dependencies.
        </p>

        <div className="flex gap-2">
          <Button>Get Started</Button>
          <Button variant="outline">Github</Button>
        </div>
      </div>
      <div className="grid-cols-1 flex relative">
        <div className="absolute min-w-[50vw] h-full bg-primary bg-opacity-[3%] p-8 border-l" />
        <div className="flex flex-1 p-16">
          <Fields />
        </div>
      </div>
    </main>
  );
}
