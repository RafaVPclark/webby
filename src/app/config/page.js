"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./config.module.css";

export default function Config() {
  const [email, setEmail] = useState("");
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    async function buscarEmail() {
      try {
        const resposta = await fetch(
          "https://backend-ti5-production.up.railway.app/settings",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ email: "arthursetragni@gmail.com" }),
          }
        );
        if (!resposta.ok) throw new Error("Erro");
        const dados = await resposta.json();
        setEmail(dados.email || "");
      } catch (err) {
        console.error("Erro ao buscar e-mail:", err);
      }
    }
    buscarEmail();
  }, []);

  async function salvarEmail() {
    try {
      const resposta = await fetch(
        "https://backend-ti5-production.up.railway.app/settings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (!resposta.ok) throw new Error("Erro");
      setEditando(false);
    } catch (err) {
      console.error("Erro ao salvar e-mail:", err);
    }
  }

  return (
    <section className={`${styles.config}`}>
      <Container>
        <Row>
          <Col xs="10" md="6" className="mx-auto">
            <img
              src={`../elliotEngrenagem.png`}
              className={`${styles.imgEngrenagem}`}
              alt="Engrenagem decorativa"
            />
            <Row>
              <Col className="text-center mt-4 mb-4">
                <h2 className={`${styles.textTitle}`}>Configurações</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    salvarEmail();
                  }}
                >
                  <h4 className={`${styles.textTitle} mb-3`}>
                    E-mail para notificações:
                  </h4>
                  <Row>
                    <Col xs="8">
                      <input
                        type="email"
                        className={`form-control ${styles.inputCustom}`}
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!editando}
                      />
                    </Col>
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className={`bi bi-pencil-square ${styles.iconCustom}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setEditando(true)}
                      ></i>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs="8"
                      // md="3"
                      className="d-flex align-items-center justify-content-center mt-3 mx-auto"
                    >
                      <button
                        type="submit"
                        className={`btn ${styles.btnCustom}`}
                        disabled={!editando}
                        onMouseEnter={(e) =>
                          e.currentTarget.classList.add(styles.hoverEffect)
                        }
                        onMouseLeave={(e) =>
                          e.currentTarget.classList.remove(styles.hoverEffect)
                        }
                      >
                        Enviar alterações
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
