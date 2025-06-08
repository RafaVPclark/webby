"use client";
import { Container, Row, Col } from "reactstrap";
import styles from "./historico.module.css";
import Link from "next/link";
import { useState } from "react";

import { Tab, Tabs } from "react-bootstrap";
export default function Historico() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState("");
  return (
    <section className={`${styles.historico}`}>
      {/* Container desktop */}
      <Container fluid className="d-none d-md-block">
        <Row>
          <Col md="7">
            <img
              src={"/hackerLivro.png"}
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
                      <strong>Histórico</strong>
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col md="10" className="mx-auto mt-3">
                    <Tabs
                      defaultActiveKey="conhecidos"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="conhecidos" title="Conhecidos">
                        <Row>
                          <Col
                            md="10"
                            className={`mx-auto ${styles.cardConteudo} mt-5`}
                          >
                            <Row className="text-center pt-3 mt-2">
                              <Col xs="6" className=" mx-auto">
                                <h4>MAC</h4>
                                <h5>A4:5E:60:1F:3B:9C</h5>
                                <h5>A4:5E:60:1F:3B:9C</h5>
                                <h5>A4:5E:60:1F:3B:9C</h5>
                                <h5>A4:5E:60:1F:3B:9C</h5>
                                <h5>A4:5E:60:1F:3B:9C</h5>
                                <h5>A4:5E:60:1F:3B:9C</h5>
                              </Col>
                              <Col xs="4" className=" mx-auto">
                                <h4>Hora</h4>
                                <h5>10h34</h5>
                                <h5>10h34</h5>
                                <h5>10h34</h5>
                                <h5>10h34</h5>
                                <h5>10h34</h5>
                                <h5>10h34</h5>
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
                        <Row></Row>
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
          </Col>
        </Row>
      </Container>
      {/* Container mobile */}
      <Container fluid className="d-md-none">
        <Row>
          <Col className="mx-auto text-center">
            <img
              src={`../hackerLivro.png`}
              className={`${styles.imgCustom2} text-center`}
            ></img>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className={`mx-auto ${styles.detalhesHistoria}`}>
            <Row>
              <Col>
                <h3 className={`text-center ${styles.conteudoTitle} pb-3`}>
                  <strong>Histórico</strong>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <input
                  type="date"
                  value={dataSelecionada}
                  onChange={(e) => setDataSelecionada(e.target.value)}
                  onBlur={() => setMostrarInput(false)}
                  className={`form-control ${styles.inputCustom} mb-3`}
                  autoFocus
                />
              </Col>
            </Row>

            <Tabs defaultActiveKey="conhecidos" id="uncontrolled-tab-example">
              <Tab eventKey="conhecidos" title="Conhecidos">
                <Row>
                  <Col
                    xs="10"
                    className={`mx-auto ${styles.cardConteudo} mt-5`}
                  >
                    <Row className="text-center pt-3 mt-2">
                      <Col xs="6" className=" mx-auto">
                        <h4 className={`${styles.conteudoTitle}`}>MAC</h4>
                        <h5>A4:5E:60:1F:3B:9C</h5>
                        <h5>A4:5E:60:1F:3B:9C</h5>
                        <h5>A4:5E:60:1F:3B:9C</h5>
                        <h5>A4:5E:60:1F:3B:9C</h5>
                        <h5>A4:5E:60:1F:3B:9C</h5>
                        <h5>A4:5E:60:1F:3B:9C</h5>
                      </Col>
                      <Col xs="4" className=" mx-auto">
                        <h4 className={`${styles.conteudoTitle}`}>Hora</h4>
                        <h5>10h34</h5>
                        <h5>10h34</h5>
                        <h5>10h34</h5>
                        <h5>10h34</h5>
                        <h5>10h34</h5>
                        <h5>10h34</h5>
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
                <Row></Row>
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
      </Container>
    </section>
  );
}
