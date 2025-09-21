import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: string;
  textColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  hoverColor = "#1C1C1C0D",
  textColor = "#fff",
  className = "",
  ...props
}) => {
  return (
    <button
      style={{
        padding: "5px",
        border: "none",
        background:"transparent",
        borderRadius: "5px",
        cursor: "pointer",
        color: textColor,
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
