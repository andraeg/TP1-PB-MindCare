import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo} className="logo">
          MindCare
        </Link>
        <nav style={styles.nav}>
          <Link to="/buscar" style={styles.navLink}>
            Encontrar Terapeutas
          </Link>
          <Link to="/sobre" style={styles.navLink}>
            Sobre
          </Link>
          <Link to="/contato" style={styles.navLink}>
            Contato
          </Link>
          <Link to="/login">
            <Button text="Entrar" type="primary" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "var(--bg-light)",
    borderBottom: "1px solid var(--secondary-color)",
    padding: "20px 0",
    position: "sticky",
    top: 0,
    zIndex: 10,
    boxShadow: "var(--shadow)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontFamily: "var(--font-heading)",
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--primary-color)",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "var(--text-dark)",
    fontWeight: "700",
    fontFamily: "var(--font-body)",
  },
};

export default Header;
