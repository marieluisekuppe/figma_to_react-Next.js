import styles from "./Pill.module.css";

export default function Pill({
  children,
  type = "primary",
  state = "Default",
  onClick,
  className = "",
}) {
  const normalizedType = type.toLowerCase() === "secondary" ? "secondary" : "primary";
  const label = children ?? (normalizedType === "primary" ? "Primary" : "Secondary");

  return (
    <button
      type="button"
      className={`${styles.pill} ${styles[normalizedType]} ${state === "Hover" ? styles.hoverState : ""} ${className}`.trim()}
      onClick={onClick}
      data-state={state}
      data-type={type}
    >
      {label}
    </button>
  );
}
