import "../css/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Cliente fidèle",
    quote:
      "Les accessoires sont élégants, bien finis et arrivent toujours avec une présentation soignée. Le style reste chic sans effort.",
  },
  {
    id: 2,
    name: "Inès Dupont",
    role: "Acheteuse régulière",
    quote:
      "J’aime beaucoup l’équilibre entre modernité et douceur. Chaque pièce donne tout de suite une touche raffinée à mes tenues.",
  },
  {
    id: 3,
    name: "Camille Bernard",
    role: "Styliste indépendante",
    quote:
      "Une collection cohérente, facile à recommander et qui fonctionne aussi bien pour le quotidien que pour les occasions spéciales.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials_section" id="testimonials">
      <div className="testimonials_header">
        <span className="testimonials_tag">Témoignages</span>
        <h2 className="testimonials_title">Ce que disent nos clientes</h2>
        <p className="testimonials_subtitle">
          Des retours authentiques sur la qualité, le style et l’expérience
          globale.
        </p>
      </div>

      <div className="testimonials_grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial_card">
            <div className="testimonial_quote">“</div>
            <p className="testimonial_text">{testimonial.quote}</p>
            <div className="testimonial_meta">
              <div className="testimonial_avatar">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <h3 className="testimonial_name">{testimonial.name}</h3>
                <span className="testimonial_role">{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
