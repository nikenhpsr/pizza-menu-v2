type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";

interface StyleProps {
  color: string;
  fontSize: string;
  textTransform: TextTransform;
}

const style: StyleProps = {
  color: "black",
  fontSize: "48px",
  textTransform: "uppercase",
};

export default function Header() {
  return (
    <header className="header">
      <h1 style={style}>Fast Pizza Co.</h1>
    </header>
  );
}
