import { Container, Row, Col } from "reactstrap";
import styles from "./config.module.css";

export default function Config() {
  return (
    <section className={`${styles.config}`}>
      <Container>
        <img
          src={`../elliotEngrenagem.png`}
          className={`${styles.imgEngrenagem}`}
        ></img>
        <Row>
          <Col xs="10" md="6" className="mx-auto">
            <Row>
              <Col className="text-center mt-4 mb-4">
                <h2 className={`${styles.textTitle}`}>Configurações</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <form>
                  <h4 className={`${styles.textTitle} mb-3`}>
                    Celular para notificações:
                  </h4>
                  <Row>
                    <Col xs="8" className="">
                      {" "}
                      <input
                        type="text"
                        className={`form-control ${styles.inputCustom}`}
                        placeholder="31999728395"
                      />
                    </Col>
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center "
                    >
                      <i
                        className={`bi bi-pencil-square ${styles.iconCustom}`}
                      ></i>
                    </Col>
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center "
                    >
                      <i className={`bi bi-plus ${styles.iconCustom}`}></i>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Row>
                  <h4 className={`${styles.textTitle} mb-3`}>Notificações:</h4>
                </Row>
                <Row>
                  <Col xs="12" md="4">
                    <button className={`${styles.btnCustom} mb-3 mb-md-none`}>
                      Ativar
                    </button>
                  </Col>
                  <Col xs="12" md="4">
                    <button className={`${styles.btnCustom}`}>Desativar</button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <button className={`${styles.btnLimpar}`}>
                  Limpar Histórico
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
