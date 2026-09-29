export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">
          KK<span className="accent">.</span>
        </span>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Kosi Kyrian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
