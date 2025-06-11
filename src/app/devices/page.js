"use client";
import { Tab, Tabs } from "react-bootstrap";
import styles from "./devices.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [currentKnownIndex, setCurrentKnownIndex] = useState(0);
  const [currentUnknownIndex, setCurrentUnknownIndex] = useState(0);

  useEffect(() => {
    async function buscarDevices() {
      try {
        const resposta = await fetch(
          "https://backend-ti5-production.up.railway.app/devices/detected",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!resposta.ok) throw new Error("Erro ao buscar dispositivos");

        const dados = await resposta.json();
        console.log(dados);
        setDevices(dados);
      } catch (erro) {
        console.error("Erro ao buscar dados de overview", erro);
      }
    }

    buscarDevices();
  }, []);

  // Função para formatar a data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    if (isToday) {
      return `Hoje, ${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } else {
      return date.toLocaleDateString("pt-BR");
    }
  };

  // Filtrar dispositivos conhecidos e desconhecidos
  const knownDevices = devices.filter(
    (device) => device.status === "conhecido"
  );
  const unknownDevices = devices.filter(
    (device) => device.status !== "conhecido"
  );

  // Pegar os 3 dispositivos atuais para cada seção
  const currentKnownDevices = knownDevices.slice(
    currentKnownIndex,
    currentKnownIndex + 3
  );
  const currentUnknownDevices = unknownDevices.slice(
    currentUnknownIndex,
    currentUnknownIndex + 3
  );

  // Funções para navegar entre os dispositivos
  const nextKnown = () => {
    if (currentKnownIndex + 3 < knownDevices.length) {
      setCurrentKnownIndex(currentKnownIndex + 3);
    }
  };

  const prevKnown = () => {
    if (currentKnownIndex - 3 >= 0) {
      setCurrentKnownIndex(currentKnownIndex - 3);
    }
  };

  const nextUnknown = () => {
    if (currentUnknownIndex + 3 < unknownDevices.length) {
      setCurrentUnknownIndex(currentUnknownIndex + 3);
    }
  };

  const prevUnknown = () => {
    if (currentUnknownIndex - 3 >= 0) {
      setCurrentUnknownIndex(currentUnknownIndex - 3);
    }
  };
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
                      {currentKnownDevices.length > 0 ? (
                        currentKnownDevices.map((device) => (
                          <Col
                            key={device.mac}
                            md="12"
                            className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                md="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>Nome</h4>
                                <h5>{device.nome || "Não informado"}</h5>
                              </Col>
                              <Col
                                md="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>Última detecção</h4>
                                <h5>{formatDate(device.ultimaDeteccao)}</h5>
                              </Col>
                              <Col
                                md="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>Tipo</h4>
                                <h5>{device.tipo || "Eletrônico"}</h5>
                              </Col>
                              <Col
                                md="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>Editar</h4>
                                <Link href={`/detalhes/${device.mac}`}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.desktopIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        ))
                      ) : (
                        <Col md="12" className="text-center mt-4">
                          <p>Nenhum dispositivo conhecido encontrado</p>
                        </Col>
                      )}
                    </Row>
                    {knownDevices.length > 3 && (
                      <Row className="mt-3">
                        <Col className="text-center">
                          <button
                            onClick={prevKnown}
                            disabled={currentKnownIndex === 0}
                            className="btn btn-secondary mx-2"
                          >
                            Anteriores
                          </button>
                          <button
                            onClick={nextKnown}
                            disabled={
                              currentKnownIndex + 3 >= knownDevices.length
                            }
                            className="btn btn-secondary mx-2"
                          >
                            Próximos
                          </button>
                        </Col>
                      </Row>
                    )}
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
                      {currentUnknownDevices.length > 0 ? (
                        currentUnknownDevices.map((device) => (
                          <Col
                            key={device.mac}
                            md="12"
                            className={`${styles.cardDesktop} text-center mt-4 pt-4`}
                          >
                            <Row className="align-items-center">
                              <Col
                                md="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>MAC</h4>
                                <h5>{device.mac}</h5>
                              </Col>
                              <Col
                                md="4"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>Última detecção</h4>
                                <h5>{formatDate(device.ultimaDeteccao)}</h5>
                              </Col>
                              <Col
                                md="3"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>Tipo</h4>
                                <h5>{device.tipo || "Desconhecido"}</h5>
                              </Col>
                              <Col
                                md="2"
                                className="d-flex flex-column justify-content-center"
                              >
                                <h4>Editar</h4>
                                <Link href={`/detalhes/${device.mac}`}>
                                  <i
                                    className={`bi bi-pencil-square ${styles.desktopIcons}`}
                                  ></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        ))
                      ) : (
                        <Col md="12" className="text-center mt-4">
                          <p>Nenhum dispositivo desconhecido encontrado</p>
                        </Col>
                      )}
                    </Row>
                    {unknownDevices.length > 3 && (
                      <Row className="mt-3">
                        <Col className="text-center">
                          <button
                            onClick={prevUnknown}
                            disabled={currentUnknownIndex === 0}
                            className="btn btn-secondary mx-2"
                          >
                            Anteriores
                          </button>
                          <button
                            onClick={nextUnknown}
                            disabled={
                              currentUnknownIndex + 3 >= unknownDevices.length
                            }
                            className="btn btn-secondary mx-2"
                          >
                            Próximos
                          </button>
                        </Col>
                      </Row>
                    )}
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
                        {currentKnownDevices.length > 0 ? (
                          currentKnownDevices.map((device) => (
                            <Row key={device.mac}>
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
                                    <h5
                                      className={`${styles.mobileCardContent}`}
                                    >
                                      {device.nome || "Não informado"}
                                    </h5>
                                  </Col>
                                  <Col
                                    xs="4"
                                    className="d-flex flex-column justify-content-center"
                                  >
                                    <h4 className={`${styles.mobileCardTitle}`}>
                                      Última detecção
                                    </h4>
                                    <h5
                                      className={`${styles.mobileCardContent}`}
                                    >
                                      {formatDate(device.ultimaDeteccao)}
                                    </h5>
                                  </Col>
                                  <Col
                                    xs="3"
                                    className="d-flex flex-column justify-content-center"
                                  >
                                    <h4 className={`${styles.mobileCardTitle}`}>
                                      Tipo
                                    </h4>
                                    <h5
                                      className={`${styles.mobileCardContent}`}
                                    >
                                      {device.tipo || "Eletrônico"}
                                    </h5>
                                  </Col>
                                  <Col
                                    xs="2"
                                    className="d-flex flex-column justify-content-center"
                                  >
                                    <h4 className={`${styles.mobileCardTitle}`}>
                                      Editar
                                    </h4>
                                    <Link href={`/detalhes/${device.mac}`}>
                                      <i
                                        className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                      ></i>
                                    </Link>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          ))
                        ) : (
                          <Row>
                            <Col xs="12" className="text-center mt-4">
                              <p>Nenhum dispositivo conhecido encontrado</p>
                            </Col>
                          </Row>
                        )}
                      </Col>
                    </Row>
                    {knownDevices.length > 3 && (
                      <Row className="justify-content-center mt-3">
                        <Col xs="auto" className="mx-2">
                          <button
                            className={`btn ${styles.btnCustom}`}
                            onClick={prevKnown}
                            disabled={currentKnownIndex === 0}
                          >
                            Página anterior
                          </button>
                        </Col>
                        <Col xs="auto" className="mx-2">
                          <button
                            className={`btn ${styles.btnCustom}`}
                            onClick={nextKnown}
                            disabled={
                              currentKnownIndex + 3 >= knownDevices.length
                            }
                          >
                            Próxima página
                          </button>
                        </Col>
                      </Row>
                    )}
                  </Tab>
                  <Tab eventKey="desconhecidos" title="Desconhecidos">
                    <Row>
                      <Col md="11" className="mx-auto">
                        {currentUnknownDevices.length > 0 ? (
                          currentUnknownDevices.map((device) => (
                            <Row key={device.mac}>
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
                                    <h5
                                      className={`${styles.mobileCardContent}`}
                                    >
                                      {device.mac}
                                    </h5>
                                  </Col>
                                  <Col
                                    xs="4"
                                    className="d-flex flex-column justify-content-center"
                                  >
                                    <h4 className={`${styles.mobileCardTitle}`}>
                                      Última detecção
                                    </h4>
                                    <h5
                                      className={`${styles.mobileCardContent}`}
                                    >
                                      {formatDate(device.ultimaDeteccao)}
                                    </h5>
                                  </Col>
                                  <Col
                                    xs="3"
                                    className="d-flex flex-column justify-content-center"
                                  >
                                    <h4 className={`${styles.mobileCardTitle}`}>
                                      Tipo
                                    </h4>
                                    <h5
                                      className={`${styles.mobileCardContent}`}
                                    >
                                      {device.tipo || "Desconhecido"}
                                    </h5>
                                  </Col>
                                  <Col
                                    xs="2"
                                    className="d-flex flex-column justify-content-center"
                                  >
                                    <h4 className={`${styles.mobileCardTitle}`}>
                                      Editar
                                    </h4>
                                    <Link href={`/detalhes/${device.mac}`}>
                                      <i
                                        className={`bi bi-pencil-square ${styles.mobileIcons}`}
                                      ></i>
                                    </Link>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          ))
                        ) : (
                          <Row>
                            <Col xs="12" className="text-center mt-4">
                              <p>Nenhum dispositivo desconhecido encontrado</p>
                            </Col>
                          </Row>
                        )}
                      </Col>
                    </Row>
                    {unknownDevices.length > 3 && (
                      <Row className="justify-content-center mt-3">
                        <Col xs="auto" className="mx-2">
                          <button
                            className={`btn ${styles.btnCustom}`}
                            onClick={prevUnknown}
                            disabled={currentUnknownIndex === 0}
                          >
                            Página anterior
                          </button>
                        </Col>
                        <Col xs="auto" className="mx-2">
                          <button
                            className={`btn ${styles.btnCustom}`}
                            onClick={nextUnknown}
                            disabled={
                              currentUnknownIndex + 3 >= unknownDevices.length
                            }
                          >
                            Próxima página
                          </button>
                        </Col>
                      </Row>
                    )}
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
