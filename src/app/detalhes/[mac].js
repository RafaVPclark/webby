"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./detalhes.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

export default function DetalhesDispositivo() {
  const router = useRouter();
  const { mac } = router.query;
  const [device, setDevice] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "",
    status: "",
  });

  useEffect(() => {
    if (mac) {
      fetchDeviceDetails();
    }
  }, [mac]);

  const fetchDeviceDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/devices/${mac}`);
      if (!response.ok) throw new Error("Erro ao buscar dispositivo");
      const data = await response.json();
      setDevice(data);
      setFormData({
        nome: data.nome || "",
        tipo: data.tipo || "",
        status: data.status || "",
      });
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:3000/devices/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mac: device.mac,
          ...formData,
        }),
      });

      if (!response.ok) throw new Error("Erro ao atualizar dispositivo");

      setEditMode(false);
      fetchDeviceDetails(); // Atualiza os dados
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const toggleStatus = async (newStatus) => {
    try {
      const response = await fetch("http://localhost:3000/devices/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mac: device.mac,
          status: newStatus,
        }),
      });

      if (!response.ok) throw new Error("Erro ao atualizar status");

      fetchDeviceDetails(); // Atualiza os dados
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  if (!device) {
    return <div>Carregando...</div>;
  }

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
                      name="nome"
                      className={`form-control ${styles.inputCustom}`}
                      value={formData.nome}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>

                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Endereço MAC:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      value={device.mac}
                      disabled
                    />
                  </div>

                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Data e Hora da Detecção:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${styles.inputCustom}`}
                      value={new Date(device.ultimaDeteccao).toLocaleString()}
                      disabled
                    />
                  </div>

                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Status:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="status"
                      className={`form-control ${styles.inputCustom}`}
                      value={formData.status}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>

                  <h3 className={` ${styles.conteudoTitleSecundario}`}>
                    <strong>Tipo:</strong>
                  </h3>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="tipo"
                      className={`form-control ${styles.inputCustom}`}
                      value={formData.tipo}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </form>
              </Col>
            </Row>
            <Row>
              <Col xs="10" className="mx-auto text-center mt-4">
                {editMode ? (
                  <>
                    <button
                      className={`btn ${styles.btnCustom} me-2`}
                      onClick={handleSave}
                    >
                      Salvar
                    </button>
                    <button
                      className={`btn ${styles.btnCustom}`}
                      onClick={() => setEditMode(false)}
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <button
                    className={`btn ${styles.btnCustom}`}
                    onClick={() => setEditMode(true)}
                  >
                    Editar
                  </button>
                )}
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
                {/* Marcar como conhecido */}
                <div
                  className="text-decoration-none cursor-pointer"
                  onClick={() => toggleStatus("conhecido")}
                >
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
                </div>

                {/* Remover de conhecidos */}
                <div
                  className="text-decoration-none cursor-pointer mt-2"
                  onClick={() => toggleStatus("desconhecido")}
                >
                  <Row className="d-flex align-items-center">
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
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* MOBILE - Similar ao desktop mas com classes de mobile */}
      <Container fluid className="d-md-none">
        {/* Implementação similar à desktop mas com classes mobile */}
        {/* ... */}
      </Container>
    </section>
  );
}
