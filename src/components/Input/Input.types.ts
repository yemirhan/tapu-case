export type InputProps = {
  type: "text" | "password" | "email",
  placeholder: string,
  value: string | number,
  onChange: (d: string, e?: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string,

}