import Button from "@mui/material/Button";

type Props = {
  sx?: object;
  label: string;
  icon?: JSX.Element;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  onClick?: (e: any) => void;
  disabled?: boolean;
};

function CustomButton({
  sx,
  label,
  icon,
  variant = "contained",
  color = "primary",
  onClick = () => {},
  disabled,
}: Props) {
  return (
    <Button
      sx={sx}
      startIcon={icon}
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
