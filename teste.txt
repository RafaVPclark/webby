"use client";
import styles from "./dashboard.module.css";
import { Container, Row, Col } from "reactstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [conhecidos, setConhecidos] = useState("");
  const [desconhecidos, setDesconhecidos] = useState("");
  const [totalDispositivos, setTotalDispositivos] = useState("");
  const [usuariosMaisFrequentes, setUsuariosFrequentes] = useState([]);
  // Recuperar conhecidos e desconhecidos
  useEffect(() => {
    async function buscarConhecidosDesconhecidos() {
      try {
        const resposta = await fetch(
          "https://backend-ti5-production.up.railway.app/stats/overview",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!resposta.ok) throw new Error("Erro ao buscar overview");

        const dados = await resposta.json();
        console.log(dados);
        setConhecidos(dados.conhecidos || 0);
        setDesconhecidos(dados.desconhecidos || 0);
        setTotalDispositivos(dados.totalDispositivos || 0);
      } catch (erro) {
        console.error("Erro ao buscar dados de overview", erro);
      }
    }

    buscarConhecidosDesconhecidos();
  }, []);
  // Recuperar os usuários mais frequentes
  useEffect(() => {
    async function buscarCindoMaisFrequentes() {
      try {
        const resposta = await fetch(
          "https://backend-ti5-production.up.railway.app/stats/frequent-users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!resposta.ok) throw new Error("Erro ao buscar usuários frequentes");

        const dados = await resposta.json();
        setUsuariosFrequentes(dados);
        console.log(dados);
      } catch (erro) {
        console.error("Erro ao buscar dados de overview", erro);
      }
    }

    buscarCindoMaisFrequentes();
  }, []);
  const data = [
    { name: "Conhecidos", value: conhecidos },
    { name: "Desconhecidos", value: desconhecidos },
  ];

  const COLORS = ["#0088FE", "#FF8042"];
  // console.log(conhecidos);
  // console.log(desconhecidos);
  return (
    <section id="dashboard">
      {/* Versão desktop */}
      <Container fluid className={`d-none d-md-block ${styles.dashboard}`}>
        <img
          src="../hackeremcima.png"
          className={`${styles.imgCustomHacker}`}
        ></img>
        <Row>
          <Col className={`${styles.welcome} pt-3 pb-3`}>
            <Row>
              <Col md="12" className="mx-auto text-center">
                <h2>Bem vindo de volta! </h2>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md="12" className={`mx-auto ${styles.caixaBaixo}`}>
            <Row>
              <Col md="8">
                <Row>
                  <Col
                    md="4"
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.usuariosTotais}`}
                  >
                    <h3 className="mt-5">Total de dispositivos</h3>
                    <Row>
                      <Col md="12">
                        <i className={`bi bi-people-fill ${styles.icon}`}></i>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="mt-3">
                        <h2>{totalDispositivos}</h2>
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    md="7"
                    className={`mx-auto ${styles.conhecidosXdesconhecidos}`}
                  >
                    <Row>
                      <Col>
                        <h3 className="mt-4 ms-4">Usuários</h3>
                      </Col>
                      <Col>
                        <h5 className="mt-4">{conhecidos} Conhecidos</h5>
                        <h5>{desconhecidos} Desconhecidos</h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="mx-auto">
                        <div style={{ width: "100%", height: 400 }}>
                          <ResponsiveContainer>
                            <PieChart>
                              <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label={({ name, percent }) =>
                                  `${name}: ${(percent * 100).toFixed(0)}%`
                                }
                              >
                                {data.map((entry, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                  />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col
                    md="12"
                    className={`${styles.coisasClicaveis} d-flex align-items-center justify-content-center`}
                  >
                    <Row className="gap-5">
                      <Col className={`${styles.alinhamento}`}>
                        <Link
                          href={"/historico"}
                          className={styles.linkSemEstilo}
                        >
                          <i className={`bi bi-book ${styles.icon2}`}></i>
                          <h4 className={`${styles.conteudo}`}>Histórico</h4>
                        </Link>
                      </Col>

                      <Col className={`${styles.alinhamento}`}>
                        <Link href={"/config"} className={styles.linkSemEstilo}>
                          <i className={`bi bi-gear-fill ${styles.icon2}`}></i>
                          <h4 className={`${styles.conteudo}`}>
                            Configurações
                          </h4>
                        </Link>
                      </Col>
                      <Col className={`${styles.alinhamento}`}>
                        <Link
                          href={"/devices"}
                          className={styles.linkSemEstilo}
                        >
                          <i
                            className={`bi bi-phone-vibrate ${styles.icon2}`}
                          ></i>
                          <h4 className={`${styles.conteudo}`}>Dispositivos</h4>
                        </Link>
                      </Col>
                      <Col className={`${styles.alinhamento}`}>
                        <Link
                          href={"/notificacoes"}
                          className={styles.linkSemEstilo}
                        >
                          <i className={`bi bi-bell ${styles.icon2}`}></i>
                          <h4 className={`${styles.conteudo}`}>Notificações</h4>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md="4" className={`${styles.top10direito} text-center`}>
                <h2 className="mt-3">5 USUÁRIOS MAIS FREQUENTES</h2>
                <ListGroup className="mt-3">
                  {usuariosMaisFrequentes.map((user, idx) => (
                    <ListGroup.Item
                      key={user.mac || idx}
                      className="d-flex justify-content-between"
                    >
                      <span>{user.mac}</span>
                      <span>{user.vezes} vezes</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* Versão mobile */}
      <Container fluid className="d-md-none position-relative">
        <img
          src="../hackeremcima.png"
          className={`${styles.hackerMobileImg}`}
        ></img>
        <Row>
          <Col xs="10" className="mx-auto mt-4 text-end">
            <h2 className={`${styles.title}`}>DASHBOARD</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="10" className={`mx-auto ${styles.graficoMobile} mt-3 `}>
            <Row className="align-items-center justify-content-between pt-5">
              <Col xs="6" className="text-center">
                <div style={{ width: "100%", height: 200 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Col>
              <Col xs="6" className={`${styles.conteudoDashboardMobile}`}>
                <h3>Status</h3>
                <h5>Conhecido: {conhecidos}</h5>
                <h5>Desconhecido: {desconhecidos}</h5>
                <h5 className="mt-3">Total: {totalDispositivos}</h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="10" className="mx-auto">
            <h4 className={`${styles.title}`}>Ações</h4>
          </Col>
        </Row>
        <Row>
          <Col
            md="12"
            className={`d-flex align-items-center justify-content-center mt-3`}
          >
            <Row>
              <Col xs="6" className={`${styles.alinhamento}`}>
                <Link href={"/devices"} className={styles.linkSemEstilo}>
                  <i
                    className={`bi bi-phone-vibrate ${styles.icon2mobile}`}
                  ></i>
                  <h4 className={`${styles.conteudo2mobile}`}>Dispositivos</h4>
                </Link>
              </Col>

              <Col xs="6" className={`${styles.alinhamento}`}>
                <Link href={"/historico"} className={styles.linkSemEstilo}>
                  <i className={`bi bi-book ${styles.icon2mobile}`}></i>
                  <h4 className={`${styles.conteudo2mobile}`}>Histórico</h4>
                </Link>
              </Col>

              <Col xs="6" className={`${styles.alinhamento}`}>
                <Link href={"/config"} className={styles.linkSemEstilo}>
                  <i className={`bi bi-gear-fill ${styles.icon2mobile}`}></i>
                  <h4 className={`${styles.conteudo2mobile}`}>Configurações</h4>
                </Link>
              </Col>
              <Col xs="6" className={`${styles.alinhamento}`}>
                <Link href={"/notificacoes"} className={styles.linkSemEstilo}>
                  <i className={`bi bi-bell ${styles.icon2mobile}`}></i>
                  <h4 className={`${styles.conteudo2mobile}`}>Notificações</h4>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="10" className="mx-auto">
            <h4 className={`${styles.title}`}>Resumo</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="10" className="mx-auto">
            <Row className="align-items-center">
              <Col xs="2" className="d-flex justify-content-center">
                <i className={`bi bi-check2-circle ${styles.icon3mobile}`}></i>
              </Col>
              <Col xs="8" className="mx-auto">
                <h5 className="m-0">
                  {desconhecidos === 0
                    ? "Nenhum dispositivo desconhecido no momento"
                    : `${desconhecidos} dispositivo(s) desconhecido(s) encontrado(s) e ${conhecidos} conhecido(s) encontrado(s)`}
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3 mb-5">
          <Col xs="10" className="mx-auto">
            <h4 className={`${styles.title}`}>Usuários Frequentes</h4>
            <ListGroup className="mt-3">
              {usuariosMaisFrequentes.slice(0, 3).map((user, idx) => (
                <ListGroup.Item
                  key={user.mac || idx}
                  className="d-flex justify-content-between"
                >
                  <span>{user.mac}</span>
                  <span>{user.vezes} vezes</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
