import styles from "./notificacoes.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
export default function notificacoes() {
  return (
    <section className={`${styles.notificacoes}`}>
      {/* DESKTOP */}
      <Container fluid className="d-none d-md-block">
        <Row>
          <Col md="7">
            <img
              src={"/hacker1mao.png"}
              className={`img-fluid ${styles.imgCustom} text-center`}
            ></img>
          </Col>
          <Col md="5" className={`${styles.conteudoDireita} pt-3`}>
            <Row className={`${styles.detalhesNotificacoes}`}>
              <Col
                xs="10"
                className={`${styles.conteudoDireita} pt-3 mx-auto mt-4`}
              >
                <Row>
                  <Col>
                    <h3 className={`text-center ${styles.conteudoTitle}`}>
                      <strong>Notificações</strong>
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col md="10" className="mx-auto mt-3">
                    <Row>
                      <Col className={`${styles.cardNotificacoes} mb-3`}>
                        {" "}
                        <h5 className={`${styles.conteudoInterno}`}>
                          <strong>Alerta disparado às 14h32 - 10/02</strong>
                        </h5>
                      </Col>
                    </Row>
                    {/* Card2 */}
                    <Row>
                      <Col className={`${styles.cardNotificacoes} mb-3`}>
                        {" "}
                        <h5 className={`${styles.conteudoInterno}`}>
                          <strong>Alerta disparado às 14h32 - 10/02</strong>
                        </h5>
                      </Col>
                    </Row>
                    {/* Card2 */}
                    <Row>
                      <Col className={`${styles.cardNotificacoes} mb-3`}>
                        {" "}
                        <h5 className={`${styles.conteudoInterno}`}>
                          <strong>Alerta disparado às 14h32 - 10/02</strong>
                        </h5>
                      </Col>
                    </Row>
                    {/* Card2 */}
                    <Row>
                      <Col className={`${styles.cardNotificacoes} mb-3`}>
                        {" "}
                        <h5 className={`${styles.conteudoInterno}`}>
                          <strong>Alerta disparado às 14h32 - 10/02</strong>
                        </h5>
                      </Col>
                    </Row>
                    {/* Card2 */}
                    <Row>
                      <Col className={`${styles.cardNotificacoes} mb-3`}>
                        {" "}
                        <h5 className={`${styles.conteudoInterno}`}>
                          <strong>Alerta disparado às 14h32 - 10/02</strong>
                        </h5>
                      </Col>
                    </Row>
                    {/* Card2 */}
                    <Row>
                      <Col className={`${styles.cardNotificacoes} mb-3`}>
                        {" "}
                        <h5 className={`${styles.conteudoInterno}`}>
                          <strong>Alerta disparado às 14h32 - 10/02</strong>
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs="10" className="mx-auto text-center mt-4">
                    <button className={`btn ${styles.btnCustom}`}>
                      Ver mais
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* MOBILE */}
      <Container fluid className="d-md-none">
        <Row>
          <Col className="mx-auto text-center">
            <img
              src={`../hacker1mao.png`}
              className={`${styles.imgCustom2} ms-5 text-center`}
            ></img>
          </Col>
        </Row>

        <Row className={`${styles.detalhesNotificacoes}`}>
          <Col
            xs="10"
            className={`${styles.conteudoDireita} pt-3 mx-auto mt-4`}
          >
            <Row>
              <Col>
                <h3 className={`text-center ${styles.conteudoTitle}`}>
                  <strong>Notificações</strong>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="10" className="mx-auto mt-3">
                <Row>
                  <Col className={`${styles.cardNotificacoes} mb-3`}>
                    {" "}
                    <h5 className={`${styles.conteudoInterno}`}>
                      <strong>Alerta disparado às 14h32 - 10/02</strong>
                    </h5>
                  </Col>
                </Row>
                {/* Card2 */}
                <Row>
                  <Col className={`${styles.cardNotificacoes} mb-3`}>
                    {" "}
                    <h5 className={`${styles.conteudoInterno}`}>
                      <strong>Alerta disparado às 14h32 - 10/02</strong>
                    </h5>
                  </Col>
                </Row>
                {/* Card2 */}
                <Row>
                  <Col className={`${styles.cardNotificacoes} mb-3`}>
                    {" "}
                    <h5 className={`${styles.conteudoInterno}`}>
                      <strong>Alerta disparado às 14h32 - 10/02</strong>
                    </h5>
                  </Col>
                </Row>
                {/* Card2 */}
                <Row>
                  <Col className={`${styles.cardNotificacoes} mb-3`}>
                    {" "}
                    <h5 className={`${styles.conteudoInterno}`}>
                      <strong>Alerta disparado às 14h32 - 10/02</strong>
                    </h5>
                  </Col>
                </Row>
                {/* Card2 */}
                <Row>
                  <Col className={`${styles.cardNotificacoes} mb-3`}>
                    {" "}
                    <h5 className={`${styles.conteudoInterno}`}>
                      <strong>Alerta disparado às 14h32 - 10/02</strong>
                    </h5>
                  </Col>
                </Row>
                {/* Card2 */}
                <Row>
                  <Col className={`${styles.cardNotificacoes} mb-3`}>
                    {" "}
                    <h5 className={`${styles.conteudoInterno}`}>
                      <strong>Alerta disparado às 14h32 - 10/02</strong>
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs="10" className="mx-auto text-center mt-4">
                <button className={`btn ${styles.btnCustom}`}>Ver mais</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
