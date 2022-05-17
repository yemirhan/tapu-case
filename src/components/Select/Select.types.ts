export type SelectProps = {
  children: React.ReactNode,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  value: string,
}
export type OptionProps = {
  value: string,
  children: React.ReactNode,
}