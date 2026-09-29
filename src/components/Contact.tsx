const contactLinks = [
  {
    label: "Email",
    value: "kosikyrian1@gmail.com",
    href: "mailto:kosikyrian1@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Kosi-Kyrian",
    href: "https://github.com/Kosi-Kyrian",
    external: true,
  },
  {
    label: "LinkedIn",
    // PLACEHOLDER: Replace with your LinkedIn
    value: "linkedin.com/in/your-profile",
    href: "#",
    external: true,
  },
  {
    label: "Twitter / X",
    // PLACEHOLDER: Replace with your Twitter/X
    value: "@your_handle",
    href: "#",
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__header reveal">
        <span className="section__number">04</span>
        <h2 className="section__title">Get in Touch</h2>
        <div className="section__line" />
      </div>

      <div className="contact__content reveal">
        <p className="contact__text">
          {/* PLACEHOLDER: Replace with your own message */}
          I&apos;m always open to discussing new opportunities, interesting projects,
          or just a good conversation about tech. Feel free to reach out!
        </p>
        <div className="contact__links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact__link"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="contact__link-label">{link.label}</span>
              <span className="contact__link-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
