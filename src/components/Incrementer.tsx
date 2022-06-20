import { Button } from "./Button";

export const Incrementer: React.FunctionComponent<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ value, setValue }) => (
  <Button onClick={() => setValue(value + 1)} title={`Add - ${value}`}></Button>
);
