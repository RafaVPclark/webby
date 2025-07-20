"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./detalhes.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

export default function DetalhesDispositivo() {
  const params = useParams();
  const mac = params?.mac;

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
      const response = await fetch(
        `https://webby-backend.vercel.app/devices/${mac}`
      );
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
      const response = await fetch(
        "https://webby-backend.vercel.app/devices/classify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mac: device.mac,
            ...formData,
          }),
        }
      );

      if (!response.ok) throw new Error("Erro ao atualizar dispositivo");

      setEditMode(false);
      fetchDeviceDetails();
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  if (!device) {
    return <div>Carregando...</div>;
  }

  return (
    <section className={`${styles.detalhes}`}>
      {/* Versão Desktop */}
      <Container fluid className="d-none d-md-block">
        <Row>
          <Col md="7">
            <img
              src={"/hacker.png"}
              className={`img-fluid ${styles.imgCustom} text-center`}
              alt="Imagem ilustrativa"
            />
          </Col>
          <Col md="5" className={`${styles.conteudoDireita} pt-3 text-center`}>
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
                    {editMode ? (
                      <select
                        name="status"
                        className={`form-control ${styles.inputCustom}`}
                        value={formData.status}
                        onChange={handleInputChange}
                        disabled={!editMode}
                      >
                        <option value="conhecido">Conhecido</option>
                        <option value="desconhecido">Desconhecido</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        className={`form-control ${styles.inputCustom}`}
                        value={formData.status}
                        disabled
                      />
                    )}
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
          </Col>
        </Row>
      </Container>

      {/* Versão Mobile */}
      <Container fluid className="d-md-none">
        <Row>
          <Col className="mx-auto text-center">
            <img
              src={"/hacker.png"}
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
                  <strong>Detalhes do dispositivo</strong>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col xs="10" className="mx-auto">
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
                    {editMode ? (
                      <select
                        name="status"
                        className={`form-control ${styles.inputCustom}`}
                        value={formData.status}
                        onChange={handleInputChange}
                        disabled={!editMode}
                      >
                        <option value="conhecido">Conhecido</option>
                        <option value="desconhecido">Desconhecido</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        className={`form-control ${styles.inputCustom}`}
                        value={formData.status}
                        disabled
                      />
                    )}
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
              <Col xs="10" className="mx-auto text-center mt-4 mb-4">
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
