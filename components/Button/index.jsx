import Link from "next/link";
import "./button.css";

const Button = ({
  linkButton = false,
  className = "",
  children,
  href = "",
  clickFn,
}) => {
  return (
    <>
      {linkButton ? (
        <Link className={`btn ${className}`} href={href}>
          {children}
        </Link>
      ) : (
        <button className={`btn ${className}`} onClick={clickFn}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
