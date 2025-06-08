"use client";
import { Tab, Tabs } from "react-bootstrap";
import styles from "./devices.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
export default function Devices() {
  return (
    <section id="devices">
      <Container fluid className={`${styles.devicesDesktop} d-none d-md-block`}>
        {/* Dispositivos conhecidos */}
        <Row>
          <Col md="10" className="mx-auto">
            <Row>
              <Col
                md="4"
                className="d-flex align-items-center justify-content-center"
              >
                <img src="./Celularconectado.png" className="img-fluid" />
              </Col>

              <Col md="8" className="">
                <Row>
                  <Col className="text-center">
                    <h1 className={`${styles.titleDesktop} mt-5`}>
                      Dispositivos Detectados
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <h3 className={`${styles.desktopConhecidos} mx-auto`}>
                      Conhecidos
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col md="10" className="mx-auto">
                    <Row>
                      <Col
                        md="12"
                        className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                      >
                        <Row className="align-items-center">
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Nome</h4>
                            <h5>Echo Dot</h5>
                          </Col>
                          <Col
                            md="4"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Última detecção</h4>
                            <h5>Hoje, 10:35</h5>
                          </Col>
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Tipo</h4>
                            <h5>Eletrônico</h5>
                          </Col>
                          <Col
                            md="2"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Editar</h4>
                            <Link href={"/"}>
                              <i
                                className={`bi bi-pencil-square ${styles.desktopIcons}`}
                              ></i>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                      {/* Card2 */}
                      <Col
                        md="12"
                        className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                      >
                        <Row className="align-items-center">
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Nome</h4>
                            <h5>Echo Dot</h5>
                          </Col>
                          <Col
                            md="4"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Última detecção</h4>
                            <h5>Hoje, 10:35</h5>
                          </Col>
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Tipo</h4>
                            <h5>Eletrônico</h5>
                          </Col>
                          <Col
                            md="2"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Editar</h4>
                            <Link href={"/"}>
                              <i
                                className={`bi bi-pencil-square ${styles.desktopIcons}`}
                              ></i>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                      {/* Card3 */}
                      <Col
                        md="12"
                        className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                      >
                        <Row className="align-items-center">
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Nome</h4>
                            <h5>Echo Dot</h5>
                          </Col>
                          <Col
                            md="4"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Última detecção</h4>
                            <h5>Hoje, 10:35</h5>
                          </Col>
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Tipo</h4>
                            <h5>Eletrônico</h5>
                          </Col>
                          <Col
                            md="2"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Editar</h4>
                            <Link href={"/"}>
                              <i
                                className={`bi bi-pencil-square ${styles.desktopIcons}`}
                              ></i>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Dispositivos desconhecidos */}
        <Row className="mt-5 mb-5">
          <Col md="10" className="mx-auto">
            <Row>
              <Col md="8" className="">
                <Row>
                  <Col className="text-center">
                    <h3 className={`${styles.desktopConhecidos} mx-auto`}>
                      Desconhecidos
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col md="10" className="mx-auto">
                    <Row>
                      <Col
                        md="12"
                        className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                      >
                        <Row className="align-items-center">
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>MAC</h4>
                            <h5>Echo Dot</h5>
                          </Col>
                          <Col
                            md="4"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Última detecção</h4>
                            <h5>Hoje, 10:35</h5>
                          </Col>
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Tipo</h4>
                            <h5>Eletrônico</h5>
                          </Col>
                          <Col
                            md="2"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Editar</h4>
                            <Link href={"/"}>
                              <i
                                className={`bi bi-pencil-square ${styles.desktopIcons}`}
                              ></i>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                      {/* Card2 */}
                      <Col
                        md="12"
                        className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                      >
                        <Row className="align-items-center">
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>MAC</h4>
                            <h5>Echo Dot</h5>
                          </Col>
                          <Col
                            md="4"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Última detecção</h4>
                            <h5>Hoje, 10:35</h5>
                          </Col>
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Tipo</h4>
                            <h5>Eletrônico</h5>
                          </Col>
                          <Col
                            md="2"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Editar</h4>
                            <Link href={"/"}>
                              <i
                                className={`bi bi-pencil-square ${styles.desktopIcons}`}
                              ></i>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                      {/* Card3 */}
                      <Col
                        md="12"
                        className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                      >
                        <Row className="align-items-center">
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>MAC</h4>
                            <h5>Echo Dot</h5>
                          </Col>
                          <Col
                            md="4"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Última detecção</h4>
                            <h5>Hoje, 10:35</h5>
                          </Col>
                          <Col
                            md="3"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Tipo</h4>
                            <h5>Eletrônico</h5>
                          </Col>
                          <Col
                            md="2"
                            className="d-flex flex-column justify-content-center"
                          >
                            <h4>Editar</h4>
                            <Link href={"/"}>
                              <i
                                className={`bi bi-pencil-square ${styles.desktopIcons}`}
                              ></i>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col
                md="4"
                className="d-flex align-items-center justify-content-center"
              >
                <img src="./Celulardesconectado.png" className="img-fluid" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* MOBILE */}
      <Container fluid className={`${styles.devicesMobile} d-md-none`}>
        <Row>
          <Col xs="10" className="mx-auto">
            <Row>
              <Col>
                <h2 className={`${styles.titleMobile} mt-4 text-center`}>
                  <strong>Dispositivos detectados</strong>
                </h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tabs
                  defaultActiveKey="conhecidos"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="conhecidos" title="Conhecidos">
                    <Row>
                      <Col md="11" className="mx-auto">
                        {/* Card1 */}
                        <Row>
                          <Col
                            xs="12"
                            className={`${styles.cardMobile} text-center mt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Nome
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Echo Dot
                                </h5>
                              </Col>
                              <Col
                                xs="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Última detecção
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Hoje, 10:35
                                </h5>
                              </Col>
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Tipo
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Eletrônico
                                </h5>
                              </Col>
                              <Col
                                xs="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Editar
                                </h4>
                                <Link href={"/"}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        {/* Card2 */}
                        <Row>
                          <Col
                            xs="12"
                            className={`${styles.cardMobile} text-center mt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Nome
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Echo Dot
                                </h5>
                              </Col>
                              <Col
                                xs="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Última detecção
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Hoje, 10:35
                                </h5>
                              </Col>
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Tipo
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Eletrônico
                                </h5>
                              </Col>
                              <Col
                                xs="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Editar
                                </h4>
                                <Link href={"/"}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        {/* Card3 */}
                        <Row>
                          <Col
                            xs="12"
                            className={`${styles.cardMobile} text-center mt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Nome
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Echo Dot
                                </h5>
                              </Col>
                              <Col
                                xs="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Última detecção
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Hoje, 10:35
                                </h5>
                              </Col>
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Tipo
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Eletrônico
                                </h5>
                              </Col>
                              <Col
                                xs="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Editar
                                </h4>
                                <Link href={"/"}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="10" className="mx-auto text-center mt-4">
                        <button className={`btn ${styles.btnCustom}`}>
                          Veja mais
                        </button>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="desconhecidos" title="Desconhecidos">
                    <Row>
                      <Col md="11" className="mx-auto">
                        {/* Card1 */}
                        <Row>
                          <Col
                            xs="12"
                            className={`${styles.cardMobile} text-center mt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  MAC
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Echo Dot
                                </h5>
                              </Col>
                              <Col
                                xs="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Última detecção
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Hoje, 10:35
                                </h5>
                              </Col>
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Tipo
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Eletrônico
                                </h5>
                              </Col>
                              <Col
                                xs="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Editar
                                </h4>
                                <Link href={"/"}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        {/* Card2 */}
                        <Row>
                          <Col
                            xs="12"
                            className={`${styles.cardMobile} text-center mt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  MAC
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Echo Dot
                                </h5>
                              </Col>
                              <Col
                                xs="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Última detecção
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Hoje, 10:35
                                </h5>
                              </Col>
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Tipo
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Eletrônico
                                </h5>
                              </Col>
                              <Col
                                xs="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Editar
                                </h4>
                                <Link href={"/"}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        {/* Card3 */}
                        <Row>
                          <Col
                            xs="12"
                            className={`${styles.cardMobile} text-center mt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  MAC
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Echo Dot
                                </h5>
                              </Col>
                              <Col
                                xs="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Última detecção
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Hoje, 10:35
                                </h5>
                              </Col>
                              <Col
                                xs="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Tipo
                                </h4>
                                <h5 className={`${styles.mobileCardContent}`}>
                                  Eletrônico
                                </h5>
                              </Col>
                              <Col
                                xs="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4 className={`${styles.mobileCardTitle}`}>
                                  Editar
                                </h4>
                                <Link href={"/"}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="10" className="mx-auto text-center mt-4">
                        <button className={`btn ${styles.btnCustom}`}>
                          Veja mais
                        </button>
                      </Col>
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
