import React from "react";

interface ButtonProps {
  text: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "secondary",
  onClick,
  disabled = false,
}) => {
  const baseStyle: React.CSSProperties = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: "var(--font-body)",
  };

  const primaryStyle: React.CSSProperties = {
    backgroundColor: "var(--accent-color)",
    color: "var(--text-dark)",
  };

  const secondaryStyle: React.CSSProperties = {
    backgroundColor: "var(--primary-color)",
    color: "var(--text-dark)",
  };

  const disabledStyle: React.CSSProperties = {
    backgroundColor: "var(--secondary-color)",
    color: "var(--text-light)",
    cursor: "not-allowed",
  };

  const style = {
    ...baseStyle,
    ...(disabled
      ? disabledStyle
      : type === "primary"
      ? primaryStyle
      : secondaryStyle),
  };

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
