import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

export default function Subtask({ content }: { content: string }) {
  return (
    <>
      <div className="flex items-center space-x-2" data-testid="subtask">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {content}{" "}
        </label>
      </div>
      <Separator className="my-2" />
    </>
  );
}
