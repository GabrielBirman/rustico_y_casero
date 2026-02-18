const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground/70">
      <div className="container text-center">
        <p className="font-display text-lg font-bold text-primary-foreground mb-2">Rústico y Casero</p>
        <p className="font-body text-sm">
          © {new Date().getFullYear()} Rústico y Casero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
