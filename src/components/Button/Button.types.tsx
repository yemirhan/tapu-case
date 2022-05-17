export type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    type?: "primary" | "secondary"
}