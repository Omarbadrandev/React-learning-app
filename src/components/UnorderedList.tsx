//https://www.youtube.com/watch?v=W5TXxJIyBP0&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&index=27&ab_channel=JackHerrington
export function UL<T>({
  items,
  render,
  itemClick
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}
