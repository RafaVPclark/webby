"use client";
import { Container, Row, Col } from "reactstrap";
import styles from "./historico.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
const ITENS_POR_PAGINA = 5; // Ajuste conforme necessário
export default function Historico() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [history, setHistory] = useState([]);
  const [paginaConhecidos, setPaginaConhecidos] = useState(1);
  const [paginaDesconhecidos, setPaginaDesconhecidos] = useState(1);
  useEffect(() => {
    async function buscarHistory() {
      try {
        const resposta = await fetch(
          "https://backend-ti5-production.up.railway.app/devices/history",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!resposta.ok) throw new Error("Erro ao buscar histórico");

        const dados = await resposta.json();
        console.log(dados);
        // Processar os dados
        const processados = dados.map((dispositivo) => {
          const data = new Date(dispositivo.ultimaDeteccao);
          data.setDate(data.getDate() - 1);
          return {
            ...dispositivo,
            dataFormatada: data.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
            horaFormatada: `${data
              .getHours()
              .toString()
              .padStart(2, "0")}h${data
              .getMinutes()
              .toString()
              .padStart(2, "0")}`,
            dataCompleta: data,
          };
        });

        // Ordenar por data (mais recente primeiro)
        const dadosOrdenados = processados.sort(
          (a, b) => b.dataCompleta - a.dataCompleta
        );

        setHistory(dadosOrdenados);
      } catch (erro) {
        console.error("Erro ao buscar dados de histórico", erro);
        setHistory([]);
      }
    }

    buscarHistory();
  }, []);

  // Filtrar dispositivos por status e data
  const filtrarDispositivos = (status) => {
    return history.filter((dispositivo) => {
      const statusCorrespondente =
        status === "conhecidos"
          ? dispositivo.status === "conhecido"
          : dispositivo.status === "desconhecido";

      const dataCorrespondente =
        !dataSelecionada ||
        dispositivo.dataFormatada ===
          new Date(dataSelecionada).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });

      return statusCorrespondente && dataCorrespondente;
    });
  };

  // Agrupar dispositivos por data
  const agruparPorData = (dispositivos) => {
    const grupos = {};

    dispositivos.forEach((dispositivo) => {
      if (!grupos[dispositivo.dataFormatada]) {
        grupos[dispositivo.dataFormatada] = [];
      }
      grupos[dispositivo.dataFormatada].push(dispositivo);
    });

    return grupos;
  };

  // Componente para renderizar a lista de dispositivos
  const RenderizarDispositivos = ({ dispositivos }) => (
    <Row className="text-center pt-3 mt-2">
      <Col xs="6" className="mx-auto">
        <h4>MAC</h4>
        {dispositivos.map((dispositivo, index) => (
          <h5
            key={`${dispositivo._id}-mac-${index}`}
            className={`${styles.truncarTexto}`}
          >
            {dispositivo.mac}
          </h5>
        ))}
      </Col>
      <Col xs="4" className="mx-auto">
        <h4>Hora</h4>
        {dispositivos.map((dispositivo, index) => (
          <h5 key={`${dispositivo._id}-hora-${index}`}>
            {dispositivo.horaFormatada}
          </h5>
        ))}
      </Col>
    </Row>
  );

  return (
    <section className={`${styles.historico}`}>
      {/* Container desktop */}
      <Container fluid className="d-none d-md-block">
        <Row>
          <Col md="7">
            <img
              src={"/hackerLivro.png"}
              className={`img-fluid ${styles.imgCustom} text-center`}
              alt="Imagem ilustrativa"
            />
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
                    <input
                      type="date"
                      value={dataSelecionada}
                      onChange={(e) => setDataSelecionada(e.target.value)}
                      className={`form-control ${styles.inputCustom} mb-3 `}
                    />

                    <Tabs defaultActiveKey="desconhecidos" id="device-tabs">
                      <Tab
                        eventKey="conhecidos"
                        title="Conhecidos"
                        className={`${styles.tabCustom}`}
                      >
                        <div
                          style={{
                            maxHeight: "60vh",
                            overflowY: "auto",
                            position: "relative",
                          }}
                        >
                          {Object.entries(
                            agruparPorData(filtrarDispositivos("conhecidos"))
                          ).map(([data, dispositivos]) => (
                            <div key={`conhecidos-${data}`}>
                              {/* <h5 className="text-center mt-4">{data}</h5> */}
                              <Col
                                md="10"
                                className={`mx-auto ${styles.cardConteudo} mt-3`}
                              >
                                <RenderizarDispositivos
                                  dispositivos={dispositivos}
                                />
                              </Col>
                            </div>
                          ))}
                          {filtrarDispositivos("conhecidos").length === 0 && (
                            <p className="text-center mt-4">
                              Nenhum dispositivo conhecido encontrado
                            </p>
                          )}
                        </div>
                      </Tab>
                      <Tab eventKey="desconhecidos" title="Desconhecidos">
                        <div
                          style={{
                            maxHeight: "60vh",
                            overflowY: "auto",
                            position: "relative",
                          }}
                        >
                          {Object.entries(
                            agruparPorData(filtrarDispositivos("desconhecidos"))
                          ).map(([data, dispositivos]) => (
                            <div key={`desconhecidos-${data}`}>
                              <Col
                                md="10"
                                className={`mx-auto ${styles.cardConteudo} mt-3`}
                              >
                                <RenderizarDispositivos
                                  dispositivos={dispositivos}
                                />
                              </Col>
                            </div>
                          ))}
                          {filtrarDispositivos("desconhecidos").length ===
                            0 && (
                            <p className="text-center mt-4">
                              Nenhum dispositivo desconhecido encontrado
                            </p>
                          )}
                        </div>
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
              alt="Imagem ilustrativa"
            />
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
                  className={`form-control ${styles.inputCustom} mb-3`}
                />
              </Col>
            </Row>

            <Tabs defaultActiveKey="desconhecidos" id="device-tabs-mobile">
              <Tab eventKey="conhecidos" title="Conhecidos">
                <div
                  style={{
                    maxHeight: "60vh",
                    overflowY: "auto",
                    position: "relative",
                  }}
                >
                  {Object.entries(
                    agruparPorData(filtrarDispositivos("conhecidos"))
                  ).map(([data, dispositivos]) => (
                    <div key={`conhecidos-mobile-${data}`}>
                      {/* <h5 className="text-center mt-4">{data}</h5> */}
                      <Col
                        xs="10"
                        className={`mx-auto ${styles.cardConteudo} mt-3`}
                      >
                        <RenderizarDispositivos dispositivos={dispositivos} />
                      </Col>
                    </div>
                  ))}
                  {filtrarDispositivos("conhecidos").length === 0 && (
                    <p className="text-center mt-4">
                      Nenhum dispositivo conhecido encontrado
                    </p>
                  )}
                </div>
              </Tab>
              <Tab eventKey="desconhecidos" title="Desconhecidos">
                <div
                  style={{
                    maxHeight: "60vh",
                    overflowY: "auto",
                    position: "relative",
                  }}
                >
                  {Object.entries(
                    agruparPorData(filtrarDispositivos("desconhecidos"))
                  ).map(([data, dispositivos]) => (
                    <div key={`desconhecidos-mobile-${data}`}>
                      <Col
                        xs="10"
                        className={`mx-auto ${styles.cardConteudo} mt-3`}
                      >
                        <RenderizarDispositivos dispositivos={dispositivos} />
                      </Col>
                    </div>
                  ))}
                  {filtrarDispositivos("desconhecidos").length === 0 && (
                    <p className="text-center mt-4">
                      Nenhum dispositivo desconhecido encontrado
                    </p>
                  )}
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
