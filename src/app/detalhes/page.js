import styles from "./detalhes.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
export default function detalhes() {
  return (
    <section className={`${styles.detalhes}`}>
      {/* DESKTOP */}
      <Container fluid className="d-none d-md-block">
        <Row>
          <Col md="7">
            <img
              src={"/hacker.png"}
              className={`img-fluid ${styles.imgCustom} text-center`}
            ></img>
          </Col>
          <Col md="5" className={`${styles.conteudoDireita} pt-3`}>
            <Row>
              <Col>
                <h3 className={`text-center ${styles.conteudoTitle}`}>
                  <strong>Detalhes do dispositivo</strong>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="10" className="mx-auto mt-3">
                <form>
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Nome:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="AparelhoX"
                    />
                  </div>
                  {/* Info 2 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Endereço MAC:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Endereço X"
                    />
                  </div>
                  {/* Info 3 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Data e Hora da Detecção:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Data X"
                    />
                  </div>
                  {/* Info 4 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Status:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Conhecido"
                    />
                  </div>
                  {/* Info 4 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Tipo:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Eletrônico"
                    />
                  </div>
                </form>
              </Col>
            </Row>
            <Row>
              <Col xs="10" className="mx-auto text-center mt-4">
                <button className={`btn ${styles.btnCustom}`}>Editar</button>
              </Col>
            </Row>
            <Row>
              <Col md="10" className="mx-auto">
                <h3 className={`text-start ${styles.conteudoTitle}`}>
                  <strong>Ações rápidas</strong>
                </h3>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs="10" className="mx-auto">
                {/* AÇÃO RÁPIDA 1 */}
                <Link href="/rota-desejada" className="text-decoration-none">
                  <Row className="d-flex align-items-center">
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className={`bi bi-plus-lg ${styles.iconCustom}`}></i>
                    </Col>
                    <Col xs="8" className="d-flex align-items-center">
                      <h5 className={`${styles.acoesRapidasContent} m-0`}>
                        <strong>Marcar como conhecido</strong>
                      </h5>
                    </Col>
                  </Row>
                </Link>
                {/* AÇÃO RÁPIDA 2 */}
                <Link href="/rota-desejada" className="text-decoration-none">
                  <Row className="d-flex align-items-center mt-2">
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className={`bi bi-eye-slash-fill ${styles.iconCustom}`}
                      ></i>
                    </Col>
                    <Col xs="8" className="d-flex align-items-center">
                      <h5 className={`${styles.acoesRapidasContent} m-0`}>
                        <strong>Ignorar esse dispositivo</strong>
                      </h5>
                    </Col>
                  </Row>
                </Link>
                {/* AÇÃO RÁPIDA 3 */}
                <Link href="/rota-desejada" className="text-decoration-none ">
                  <Row className="d-flex align-items-center mt-2">
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className={`bi bi-dash ${styles.iconCustom}`}></i>
                    </Col>
                    <Col xs="8" className="d-flex align-items-center">
                      <h5 className={`${styles.acoesRapidasContent} m-0`}>
                        <strong>Remover da lista de conhecidos</strong>
                      </h5>
                    </Col>
                  </Row>
                </Link>
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
              src={`../hacker.png`}
              className={`${styles.imgCustom2} text-center`}
            ></img>
          </Col>
        </Row>

        <Row className={`${styles.detalhesMobile}`}>
          <Col xs="8" className={`${styles.conteudoDireita} pt-3 mx-auto mt-4`}>
            <Row>
              <Col>
                <h3 className={`text-center ${styles.conteudoTitle}`}>
                  <strong>Detalhes do dispositivo</strong>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="10" className="mx-auto mt-3">
                <form>
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Nome:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="AparelhoX"
                    />
                  </div>
                  {/* Info 2 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Endereço MAC:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Endereço X"
                    />
                  </div>
                  {/* Info 3 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Data e Hora da Detecção:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Data X"
                    />
                  </div>
                  {/* Info 4 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Status:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Conhecido"
                    />
                  </div>
                  {/* Info 4 */}
                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Tipo:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      placeholder="Eletrônico"
                    />
                  </div>
                </form>
              </Col>
            </Row>
            <Row>
              <Col xs="10" className="mx-auto text-center mt-4">
                <button className={`btn ${styles.btnCustom}`}>Editar</button>
              </Col>
            </Row>
            <Row>
              <Col md="10" className="mx-auto mt-5">
                <h3 className={`text-start ${styles.conteudoTitle}`}>
                  <strong>Ações rápidas</strong>
                </h3>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs="10" className="mx-auto">
                {/* AÇÃO RÁPIDA 1 */}
                <Link href="/rota-desejada" className="text-decoration-none">
                  <Row className="d-flex align-items-center">
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className={`bi bi-plus-lg ${styles.iconCustom}`}></i>
                    </Col>
                    <Col xs="8" className="d-flex align-items-center">
                      <h5 className={`${styles.acoesRapidasContent} m-0`}>
                        <strong>Marcar como conhecido</strong>
                      </h5>
                    </Col>
                  </Row>
                </Link>
                {/* AÇÃO RÁPIDA 2 */}
                <Link href="/rota-desejada" className="text-decoration-none">
                  <Row className="d-flex align-items-center mt-2">
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className={`bi bi-eye-slash-fill ${styles.iconCustom}`}
                      ></i>
                    </Col>
                    <Col xs="8" className="d-flex align-items-center">
                      <h5 className={`${styles.acoesRapidasContent} m-0`}>
                        <strong>Ignorar esse dispositivo</strong>
                      </h5>
                    </Col>
                  </Row>
                </Link>
                {/* AÇÃO RÁPIDA 3 */}
                <Link href="/rota-desejada" className="text-decoration-none ">
                  <Row className="d-flex align-items-center mt-2">
                    <Col
                      xs="1"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className={`bi bi-dash ${styles.iconCustom}`}></i>
                    </Col>
                    <Col xs="8" className="d-flex align-items-center">
                      <h5 className={`${styles.acoesRapidasContent} m-0`}>
                        <strong>Remover da lista de conhecidos</strong>
                      </h5>
                    </Col>
                  </Row>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
