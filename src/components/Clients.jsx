import star from "../assets/star.png";
import pg from "../assets/pg.png";
import fab from "../assets/fab.png";
import kpit from "../assets/kpit.png";
import tata from "../assets/tata.png";
import bmw from "../assets/bmw.png";
import sony from "../assets/sony.png";

const Clients = () => {
  const logos = [star, pg, fab, kpit, tata, bmw, sony];

  return (
    // Remove overflow-hidden, py-10, and border-t
    <div className="w-full">
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt="client" className="h-10 mx-4" />
        ))}
        {/* Duplicate for infinite scrolling */}
        {logos.map((logo, idx) => (
          <img key={idx + logos.length} src={logo} alt="client" className="h-10 mx-4" />
        ))}
      </div>
    </div>
  );
};

export default Clients;