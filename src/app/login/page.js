import styles from "./login.module.css";
import { Container, Row, Col, Form } from "reactstrap";

export default function login() {
  return (
    <section className={`${styles.login}`}>
      <Container fluid className="">
        <Row>
          <Col md="7" className={`${styles.ladoEsquerdo} d-none d-md-block`}>
            <img
              src="../hacker.png"
              className={`img-fluid ${styles.imgCustom}`}
            ></img>
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
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Código da sua máquina"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Senha da sua máquina"
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
                    <a className={`btn ${styles.btnCustom2}`}>
                      ENTRE EM CONTATO COM O SUPORTE
                    </a>
                  </Col>
                </Row>
                <img
                  src="../hackerdeitado.png"
                  className={`${styles.imgCustom2}`}
                ></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
