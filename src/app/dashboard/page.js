import styles from "./dashboard.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
export default function Dashboard() {
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
        <Row>
          <Col xs="12" className={`${styles.overview} mx-auto mt-4 pb-4`}>
            <Row>
              <Col md="11" className="mx-auto mt-3">
                <h2>Visão Geral</h2>
              </Col>
            </Row>
            <Row>
              <Col md="2" className={`${styles.cardOverView} mx-auto pt-3`}>
                <Row className="d-flex align-items-center text-center">
                  <Col xs="3" className="d-flex  align-items-center ms-auto">
                    <i className="bi bi-database-check fs-1"></i>
                  </Col>
                  <Col xs="7" className="d-flex flex-column me-auto ">
                    <h4>123</h4>
                    <h5>Total de chamadas</h5>
                  </Col>
                </Row>
              </Col>
              <Col md="2" className={`${styles.cardOverView} mx-auto pt-3`}>
                <Row className="d-flex align-items-center text-center">
                  <Col xs="3" className="d-flex  align-items-center ms-auto">
                    <i className="bi bi-database-check fs-1"></i>
                  </Col>
                  <Col xs="7" className="d-flex flex-column me-auto ">
                    <h4>123</h4>
                    <h5>Total de chamadas</h5>
                  </Col>
                </Row>
              </Col>
              <Col md="2" className={`${styles.cardOverView} mx-auto pt-3`}>
                <Row className="d-flex align-items-center text-center">
                  <Col xs="3" className="d-flex  align-items-center ms-auto">
                    <i className="bi bi-database-check fs-1"></i>
                  </Col>
                  <Col xs="7" className="d-flex flex-column me-auto ">
                    <h4>123</h4>
                    <h5>Total de chamadas</h5>
                  </Col>
                </Row>
              </Col>
              <Col md="2" className={`${styles.cardOverView} mx-auto pt-3`}>
                <Row className="d-flex align-items-center text-center">
                  <Col xs="3" className="d-flex  align-items-center ms-auto">
                    <i className="bi bi-database-check fs-1"></i>
                  </Col>
                  <Col xs="7" className="d-flex flex-column me-auto ">
                    <h4>123</h4>
                    <h5>Total de chamadas</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12" className={`mx-auto ${styles.caixaBaixo}`}>
            <Row>
              <Col md="8" className="">
                <Row>
                  <Col
                    md="4"
                    className={`${styles.usuariosTotais} text-center`}
                  >
                    <h3 className="mt-5 ">Total de usuários</h3>
                    <Row>
                      <Col md="12">
                        <i className={`bi bi-people-fill ${styles.icon}`}></i>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="mt-3">
                        <h2>120</h2>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    md="7"
                    className={`mx-auto ${styles.conhecidosXdesconhecidos}`}
                  >
                    <h3 className="mt-4 ms-4">Usuários</h3>
                    <Row>
                      <Col md="8">
                        {" "}
                        <h1 className="mt-5 ms-5">Gráfico</h1>
                      </Col>
                      <Col md="4">
                        <h5>16 Conhecidos</h5>
                        <h5>254 Desconhecidos</h5>
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
                        <Link href={"/"} className={styles.linkSemEstilo}>
                          <i className={`bi bi-search ${styles.icon2}`}></i>
                          <h4 className={`${styles.conteudo}`}>Escanear</h4>
                        </Link>
                      </Col>

                      <Col className={`${styles.alinhamento}`}>
                        <Link href={"/"} className={styles.linkSemEstilo}>
                          <i className={`bi bi-book ${styles.icon2}`}></i>
                          <h4 className={`${styles.conteudo}`}>Histórico</h4>
                        </Link>
                      </Col>

                      <Col className={`${styles.alinhamento}`}>
                        <Link href={"/"} className={styles.linkSemEstilo}>
                          <i className={`bi bi-gear-fill ${styles.icon2}`}></i>
                          <h4 className={`${styles.conteudo}`}>
                            Configurações
                          </h4>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md="4" className={`${styles.top10direito} text-center`}>
                <h2 className="mt-3">5 USUÁRIOS MAIS FREQUENTES</h2>
                <Row>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* Versão mobile */}
      <Container fluid className="d-md-none">
        <Row>
          <Col xs="10" className="mx-auto mt-4 text-end">
            <h2 className={`${styles.title}`}>DASHBOARD</h2>
          </Col>
        </Row>
        <img
          src="../hackeremcima.png"
          className={`${styles.hackerMobileImg}`}
        ></img>
        <Row>
          <Col xs="10" className={`mx-auto ${styles.graficoMobile} mt-3 `}>
            <Row className=" align-items-center justify-content-between pt-5">
              <Col xs="6" className="text-center">
                <h5>Gráfico</h5>
              </Col>
              <Col xs="6" className={`${styles.conteudoDashboardMobile}`}>
                <h3>Status</h3>
                <h5>Conhecido: 10</h5>
                <h5>Desconhecido: 120</h5>
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
              <Col className={`${styles.alinhamento}`}>
                <Link href={"/"} className={styles.linkSemEstilo}>
                  <i className={`bi bi-search me-4 ${styles.icon2mobile}`}></i>
                  <h4 className={`${styles.conteudo2mobile} me-4`}>Escanear</h4>
                </Link>
              </Col>

              <Col className={`${styles.alinhamento}`}>
                <Link href={"/"} className={styles.linkSemEstilo}>
                  <i className={`bi bi-book ${styles.icon2mobile}`}></i>
                  <h4 className={`${styles.conteudo2mobile}`}>Histórico</h4>
                </Link>
              </Col>

              <Col className={`${styles.alinhamento}`}>
                <Link href={"/"} className={styles.linkSemEstilo}>
                  <i className={`bi bi-gear-fill ${styles.icon2mobile}`}></i>
                  <h4 className={`${styles.conteudo2mobile}`}>Configurações</h4>
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
                  Nenhum dispositivo desconhecido no momento
                </h5>
              </Col>
            </Row>
            <Row className="align-items-center mt-4 mb-5">
              <Col xs="2" className="d-flex justify-content-center">
                <i className={`bi bi-broadcast-pin ${styles.icon3mobile}`}></i>
              </Col>
              <Col xs="8" className="mx-auto">
                <h5 className="m-0">Conexões ativas no momento: 5</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
