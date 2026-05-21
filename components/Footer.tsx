import Link from "next/link";

const destinations = ["Santorini", "Maldives", "Kyoto", "Patagonia", "Amalfi Coast", "Marrakech"];
const company = ["About Us", "Awards", "Press", "Careers", "Sustainability"];

export default function Footer() {
  return (
    <footer className="bg-blue-deep border-t-2 border-brown-warm/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-bold text-2xl text-white-pure tracking-wide">ORZJC</span>
              <span className="font-bold text-2xl tracking-widest2 text-brown-light ml-1">PRIME</span>
            </div>
            <p className="text-white-muted text-sm leading-relaxed mb-6 max-w-xs">
              Where the world becomes your stage. Award-winning luxury journeys curated for the extraordinary traveller.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {["instagram", "twitter", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded border border-brown-warm/40 flex items-center justify-center text-brown-light hover:bg-brown-warm hover:border-brown-warm hover:text-white-pure transition-all duration-200"
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-xs tracking-widest2 uppercase text-brown-light mb-5">
              Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((d) => (
                <li key={d}>
                  <Link
                    href="/destinations"
                    className="text-white-muted hover:text-brown-light text-sm transition-colors duration-200"
                  >
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-xs tracking-widest2 uppercase text-brown-light mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white-muted hover:text-brown-light text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs tracking-widest2 uppercase text-brown-light mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white-muted">
              <li className="flex items-start gap-2">
                <span className="text-brown-light mt-0.5">✦</span>
                <span>concierge@orzjcprime.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brown-light mt-0.5">✦</span>
                <span>+1 (800) ORZJC-01</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brown-light mt-0.5">✦</span>
                <span>The Prime Tower, 88 Mayfair Lane, London W1K 4PL</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white-muted/10">
              <p className="text-xs text-white-muted/60 leading-relaxed">
                Available 24/7 for our valued clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown-warm/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white-muted/50 text-xs tracking-wide">
            © 2024 ORZJC Prime. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white-muted/50">
            <a href="#" className="hover:text-brown-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brown-light transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brown-light transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    instagram: "IG",
    twitter: "TW",
    linkedin: "LI",
    youtube: "YT",
  };
  return <span className="text-xs font-bold">{icons[name]}</span>;
}
