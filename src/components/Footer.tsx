import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour: number = 12;
  const closeHour: number = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <>
      <br />
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    </>
  );
}
