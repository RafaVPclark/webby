"use client"; // Isso é essencial com o App Router

import { useState } from "react";
import { useRouter } from "next/navigation"; // CORRETO para App Router
import styles from "./login.module.css";
import { Container, Row, Col } from "reactstrap";

export default function Login() {
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codigo === "1234" && senha === "1234") {
      router.push("/dashboard");
    } else {
      alert("Código ou senha incorretos.");
    }
  };

  return (
    <section className={`${styles.login}`}>
      <Container fluid>
        <Row>
          <Col md="7" className={`${styles.ladoEsquerdo} d-none d-md-block`}>
            <img
              src="../hacker.png"
              className={`img-fluid ${styles.imgCustom}`}
            />
          </Col>
          <Col
            md="5"
            className="d-flex justify-content-center align-items-center"
          >
            <Row>
              <Col xs="10" className="mx-auto mt-5 mt-md-0">
                <Row>
                  <Col className={`text-center ${styles.textPrimario}`}>
                    <h2>
                      <strong> Insira seu código de acesso</strong>
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Código da sua máquina"
                          value={codigo}
                          onChange={(e) => setCodigo(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Senha da sua máquina"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className={`btn ${styles.btnCustom}`}
                        >
                          <strong>Logar</strong>
                        </button>
                      </div>
                    </form>
                  </Col>
                </Row>
                <Row className="text-center mt-5">
                  <Col>
                    <div className="d-flex align-items-center my-3">
                      <div
                        className={`flex-grow-1 ${styles.line} border-top`}
                      ></div>
                      <span
                        className="mx-2 fw-bold"
                        style={{ color: "#004D40" }}
                      >
                        OU
                      </span>
                      <div
                        className={` flex-grow-1 ${styles.line} border-top`}
                      ></div>
                    </div>
                  </Col>
                </Row>
                <Row className="text-center">
                  <Col>
                    <a
                      href="https://wa.me/5531985075487?text=Olá,%20preciso%20de%20suporte%20com%20meu%20acesso."
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${styles.btnCustom2}`}
                    >
                      ENTRE EM CONTATO COM O SUPORTE
                    </a>
                  </Col>
                </Row>
                <img
                  src="../hackerdeitado.png"
                  className={`${styles.imgCustom2}`}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
