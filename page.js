export default function Home() {
  const phone = "+48732624340";

  return (
    <main>
      <section style={{background: "black", color: "white"}}>
        <div className="container">
          <h1 style={{fontSize: "48px"}}>Premium Passenger Transport in Wrocław</h1>
          <p>Airport transfers, business travel and private rides.</p>
          <br />
          <a className="button" href={`tel:${phone}`}>Call Now</a>
          <a className="button" href={`https://wa.me/48732624340`} style={{background: "#25D366"}}>
            WhatsApp Booking
          </a>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Services</h2>
          <div style={{display: "grid", gap: "20px"}}>
            <div className="card">
              <h3>City Transport</h3>
              <p>Reliable rides across Wrocław and Lower Silesia.</p>
            </div>
            <div className="card">
              <h3>Airport Transfers</h3>
              <p>On-time pickup and drop-off service.</p>
            </div>
            <div className="card">
              <h3>Business Travel</h3>
              <p>Professional executive transport.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{background: "#f3f4f6"}}>
        <div className="container">
          <h2>Contact</h2>
          <p>Phone: <a href={`tel:${phone}`}>+48 732 624 340</a></p>
          <p>Location: Wrocław, Poland</p>
        </div>
      </section>

      <footer style={{textAlign: "center", padding: "30px", background: "#111", color: "#aaa"}}>
        © {new Date().getFullYear()} Kamil Chmielewski Transport
      </footer>
    </main>
  );
}
