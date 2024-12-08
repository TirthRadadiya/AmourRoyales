import Link from "next/link";
import "./button.css";

const Button = ({
  linkButton = false,
  className = "",
  children,
  href = "",
  clickFn,
  style,
}) => {
  return (
    <>
      {linkButton ? (
        <Link className={`btn ${className}`} href={href} style={style}>
          {children}
        </Link>
      ) : (
        <button className={`btn ${className}`} onClick={clickFn} style={style}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
