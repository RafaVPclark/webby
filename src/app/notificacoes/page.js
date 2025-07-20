"use client";
import styles from "./notificacoes.module.css";
import { Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";

export default function Notificacoes() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [notificationsPerPage] = useState(5); // Número de notificações por página

  useEffect(() => {
    async function buscarNotifications() {
      try {
        setLoading(true);
        const resposta = await fetch(
          "https://webby-backend.vercel.app/notifications",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!resposta.ok)
          throw new Error("Erro ao buscar notificações enviadas");

        const dados = await resposta.json();
        setNotifications(dados);
      } catch (erro) {
        console.error("Erro ao buscar dados de notificações", erro);
      } finally {
        setLoading(false);
      }
    }

    buscarNotifications();
  }, []);

  function formatarData(dataISO) {
    const data = new Date(dataISO);
    const horas = data.getHours().toString().padStart(2, "0");
    const minutos = data.getMinutes().toString().padStart(2, "0");
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");

    return `${horas}h${minutos} - ${dia}/${mes}`;
  }

  // Lógica de paginação simplificada
  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification =
    indexOfLastNotification - notificationsPerPage;
  const currentNotifications = notifications.slice(
    indexOfFirstNotification,
    indexOfLastNotification
  );
  const totalPages = Math.ceil(notifications.length / notificationsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <section className={`${styles.notificacoes}`}>
        <Container>
          <Row>
            <Col className="text-center mt-5">
              <h3>Carregando notificações...</h3>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (notifications.length === 0) {
    return (
      <section className={`${styles.notificacoes}`}>
        <Container>
          <Row>
            <Col className="text-center mt-5">
              <h3>Nenhuma notificação encontrada</h3>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className={`${styles.notificacoes}`}>
      {/* DESKTOP */}
      <Container fluid className="d-none d-md-block">
        <Row>
          <Col md="7">
            <img
              src={"/hacker1mao.png"}
              className={`img-fluid ${styles.imgCustom} text-center`}
              alt="Hacker"
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
                      <strong>Notificações</strong>
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    md="10"
                    className="mx-auto mt-3"
                    style={{ maxHeight: "500px", overflowY: "auto" }}
                  >
                    {currentNotifications.map((notificacao, index) => (
                      <Row key={notificacao._id || index}>
                        <Col className={`${styles.cardNotificacoes} mb-3`}>
                          <h5 className={`${styles.conteudoInterno}`}>
                            <strong>
                              Dispositivo {notificacao.status}:{" "}
                              {notificacao.mac}
                              <br />
                              Detectado às{" "}
                              {formatarData(notificacao.ultimaDeteccao)}
                            </strong>
                          </h5>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-center gap-3">
                    <button
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                      className={`btn ${styles.btnCustom}`}
                    >
                      Anterior
                    </button>
                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`btn ${styles.btnCustom}`}
                    >
                      Próxima
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
          <Col className="text-center">
            <img
              src="../hacker1mao.png"
              className={styles.imgCustom2}
              alt="Hacker"
            />
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
              <Col
                md="10"
                className="mx-auto mt-3"
                style={{ maxHeight: "400px", overflowY: "auto" }}
              >
                {currentNotifications.map((notificacao, index) => (
                  <Row key={notificacao._id || index}>
                    <Col className={`${styles.cardNotificacoes} mb-3`}>
                      <h5 className={`${styles.conteudoInterno}`}>
                        <strong>
                          Dispositivo {notificacao.status}: {notificacao.mac}
                          <br />
                          Detectado às{" "}
                          {formatarData(notificacao.ultimaDeteccao)}
                        </strong>
                      </h5>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="d-flex justify-content-center gap-3">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className={`btn ${styles.btnCustom}`}
                >
                  Anterior
                </button>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`btn ${styles.btnCustom}`}
                >
                  Próxima
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
