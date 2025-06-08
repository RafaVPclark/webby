"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import startStyles from "./start.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

export default function Home() {
  const [showStart, setShowStart] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showCover, setShowCover] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // começa o fade da logo
    }, 2500);

    const timer2 = setTimeout(() => {
      setShowCover(true); // ativa a animação de pano
    }, 3000);

    const timer3 = setTimeout(() => {
      setShowStart(true); // mostra o conteúdo start após a animação
      setShowCover(false); // remove o pano
    }, 4500); // tempo suficiente para o pano passar

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className={styles.fullPage}>
      {!showStart && (
        <div className={`text-center ${styles.homepage}`}>
          <img
            src="/WebbyLogo.png"
            alt="Logo"
            className={`img-fluid ${styles.imgCustom} ${
              fadeOut ? styles.fadeOut : styles.fadeIn
            }`}
          />
        </div>
      )}

      {showStart && (
        <div className={styles.startContent}>
          <Container fluid className={startStyles.start}>
            <Row
              className={`${startStyles.parte_superior} text-center d-flex align-items-center`}
            >
              <Col>
                <img
                  src="/WebbyLogo.png"
                  className={`img-fluid ${startStyles.img_custom}`}
                  alt="Webby Logo"
                />
              </Col>
            </Row>

            <Row className={`${startStyles.parte_inferior} mt-5`}>
              <Col xs="10" className="mx-auto">
                <Row>
                  <Col>
                    <h4 className={`${startStyles.textPrincipal} text-center`}>
                      Sua casa, sua rede, sua segurança.
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className={`${startStyles.textSecundario} text-center`}>
                      O Webby protege sua rede doméstica identificando
                      dispositivos desconhecidos e notificando você sempre que
                      algo suspeito for detectado.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Link
                      href="/login"
                      className={`btn ${startStyles.btnCustom}`}
                    >
                      <strong>VAMOS LÁ!</strong>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {/* Pano passando */}
      {showCover && <div className={styles.cover}></div>}
    </section>
  );
}
