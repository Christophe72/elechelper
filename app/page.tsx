import Link from "next/link";
import protocoles from "@/data/protocoles.json";
// import pannes from "@/data/pannes.json";
import "./globals.css"; // Import global styles
export default function HomePage() {
  return (
    <main className="main-container">
      <section className="section">
        <h2 className="title-section">✅ Protocoles</h2>
        <ul className="list">
          {protocoles.map((proto) => (
            <li key={proto.id} className="list-item">
              <Link
                href={`/protocole/${proto.id}`}
                className="link protocol-link"
              >
                {proto.titre}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="title-section">📋 Fiches pratiques</h2>
        <ul className="list">
          <li className="list-item">
            <Link href="/fiches/couleurs-fils" className="link-simple">
              Couleurs des fils
            </Link>
          </li>
          <li className="list-item">
            <Link href="/fiches/tensions-usuelles" className="link-simple">
              Tensions usuelles
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
