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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Sector,
} from "recharts";
import { useEffect, useState } from "react";

// Componente para gráfico com setores ativos
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-20} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={0} textAnchor="middle" fill={fill}>
        {value}
      </text>
      <text x={cx} y={cy} dy={20} textAnchor="middle" fill={fill}>
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export default function Dashboard() {
  const [conhecidos, setConhecidos] = useState(0);
  const [desconhecidos, setDesconhecidos] = useState(0);
  const [totalDispositivos, setTotalDispositivos] = useState(0);
  const [usuariosMaisFrequentes, setUsuariosFrequentes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartType, setChartType] = useState("pie");
  const [mobileChartType, setMobileChartType] = useState("pie");
  const [historicoAcessos, setHistoricoAcessos] = useState([]);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  // Cores para os gráficos
  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#8884D8"];
  const BAR_COLORS = ["#0088FE", "#FF8042"];

  // Recuperar dados do dashboard
  useEffect(() => {
    async function buscarDadosDashboard() {
      try {
        // Buscar overview
        const respostaOverview = await fetch(
          "https://backend-ti5-production.up.railway.app/stats/overview",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!respostaOverview.ok) throw new Error("Erro ao buscar overview");
        const dadosOverview = await respostaOverview.json();

        setConhecidos(dadosOverview.conhecidos || 0);
        setDesconhecidos(dadosOverview.desconhecidos || 0);
        setTotalDispositivos(dadosOverview.totalDispositivos || 0);

        // Buscar usuários frequentes
        const respostaFrequentes = await fetch(
          "https://backend-ti5-production.up.railway.app/stats/frequent-users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!respostaFrequentes.ok)
          throw new Error("Erro ao buscar usuários frequentes");
        const dadosFrequentes = await respostaFrequentes.json();
        setUsuariosFrequentes(dadosFrequentes);

        // Simular dados de histórico (substitua por sua API real)
        const historicoMock = [
          { dia: "Seg", conhecidos: 12, desconhecidos: 3 },
          { dia: "Ter", conhecidos: 19, desconhecidos: 2 },
          { dia: "Qua", conhecidos: 15, desconhecidos: 5 },
          { dia: "Qui", conhecidos: 18, desconhecidos: 1 },
          { dia: "Sex", conhecidos: 10, desconhecidos: 4 },
          { dia: "Sáb", conhecidos: 8, desconhecidos: 2 },
          { dia: "Dom", conhecidos: 5, desconhecidos: 3 },
        ];
        setHistoricoAcessos(historicoMock);
      } catch (erro) {
        console.error("Erro ao buscar dados do dashboard", erro);
      }
    }

    buscarDadosDashboard();
  }, []);

  // Dados para os gráficos
  const dataPie = [
    { name: "Conhecidos", value: conhecidos },
    { name: "Desconhecidos", value: desconhecidos },
  ];

  const dataBar = [
    { name: "Conhecidos", quantidade: conhecidos },
    { name: "Desconhecidos", quantidade: desconhecidos },
  ];

  const dataLine = historicoAcessos.map((item) => ({
    name: item.dia,
    Conhecidos: item.conhecidos,
    Desconhecidos: item.desconhecidos,
  }));

  const dataRadar = [
    {
      subject: "Seg",
      A: historicoAcessos[0]?.conhecidos || 0,
      B: historicoAcessos[0]?.desconhecidos || 0,
    },
    {
      subject: "Ter",
      A: historicoAcessos[1]?.conhecidos || 0,
      B: historicoAcessos[1]?.desconhecidos || 0,
    },
    {
      subject: "Qua",
      A: historicoAcessos[2]?.conhecidos || 0,
      B: historicoAcessos[2]?.desconhecidos || 0,
    },
    {
      subject: "Qui",
      A: historicoAcessos[3]?.conhecidos || 0,
      B: historicoAcessos[3]?.desconhecidos || 0,
    },
    {
      subject: "Sex",
      A: historicoAcessos[4]?.conhecidos || 0,
      B: historicoAcessos[4]?.desconhecidos || 0,
    },
    {
      subject: "Sáb",
      A: historicoAcessos[5]?.conhecidos || 0,
      B: historicoAcessos[5]?.desconhecidos || 0,
    },
    {
      subject: "Dom",
      A: historicoAcessos[6]?.conhecidos || 0,
      B: historicoAcessos[6]?.desconhecidos || 0,
    },
  ];

  // Função para renderizar o gráfico baseado na seleção (desktop)
  const renderChart = () => {
    switch (chartType) {
      case "pie":
        return (
          <PieChart>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {dataPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      case "activePie":
        return (
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={dataPie}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {dataPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      case "donut":
        return (
          <PieChart>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {dataPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      case "bar":
        return (
          <BarChart
            data={dataBar}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantidade" fill="#8884d8">
              {dataBar.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={BAR_COLORS[index % BAR_COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        );
      case "line":
        return (
          <LineChart
            data={dataLine}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Conhecidos" stroke="#0088FE" />
            <Line type="monotone" dataKey="Desconhecidos" stroke="#FF8042" />
          </LineChart>
        );
      case "radar":
        return (
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Tooltip />
            <Legend />
            <Radar
              name="Conhecidos"
              dataKey="A"
              stroke="#0088FE"
              fill="#0088FE"
              fillOpacity={0.6}
            />
            <Radar
              name="Desconhecidos"
              dataKey="B"
              stroke="#FF8042"
              fill="#FF8042"
              fillOpacity={0.6}
            />
          </RadarChart>
        );
      default:
        return (
          <PieChart>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {dataPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
    }
  };

  // Função para renderizar o gráfico mobile
  const renderMobileChart = () => {
    switch (mobileChartType) {
      case "pie":
        return (
          <PieChart>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              outerRadius={50}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {dataPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      case "bar":
        return (
          <BarChart
            data={dataBar}
            margin={{ top: 20, right: 5, left: 60, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="quantidade">
              {dataBar.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={BAR_COLORS[index % BAR_COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        );
      case "line":
        return (
          <LineChart
            data={dataLine}
            margin={{ top: 50, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Conhecidos" stroke="#0088FE" />
            <Line type="monotone" dataKey="Desconhecidos" stroke="#FF8042" />
          </LineChart>
        );
      default:
        return (
          <PieChart>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              outerRadius={60}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {dataPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
    }
  };

  return (
    <section id="dashboard">
      {/* Versão desktop */}
      <Container fluid className={`d-none d-md-block ${styles.dashboard}`}>
        <img
          src="../hackeremcima.png"
          className={`${styles.imgCustomHacker}`}
          alt="Hacker"
        />
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
                    <Row className="align-items-center">
                      <Col md="4">
                        <h3 className="mt-4 ms-4">Usuários</h3>
                      </Col>
                      <Col md="4">
                        <h5 className="mt-4">{conhecidos} Conhecidos</h5>
                        <h5>{desconhecidos} Desconhecidos</h5>
                      </Col>
                      <Col md="4" className="pe-4 pt-4">
                        <select
                          className="form-select"
                          value={chartType}
                          onChange={(e) => setChartType(e.target.value)}
                        >
                          <option value="pie">Pizza</option>
                          <option value="activePie">Pizza com destaque</option>
                          <option value="donut">Donut</option>
                          <option value="bar">Barras</option>
                          <option value="line">Linhas</option>
                          <option value="radar">Radar</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="mx-auto">
                        <div style={{ width: "100%", height: 400 }}>
                          <ResponsiveContainer>
                            {renderChart()}
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
              <Col md="4" className={`${styles.top10direito} text-center p-4`}>
                <div className={`${styles.top10Header} mb-4`}>
                  <h2 className={`${styles.top10Title} mb-0`}>
                    TOP 5 DISPOSITIVOS
                  </h2>
                  <div className={`${styles.titleUnderline}`}></div>
                </div>

                <ListGroup className={`${styles.customListGroup} shadow-sm`}>
                  {usuariosMaisFrequentes.map((user, idx) => (
                    <ListGroup.Item
                      key={user.mac || idx}
                      className={`${styles.listItem} d-flex justify-content-between align-items-center py-3 px-4`}
                    >
                      <div className="d-flex align-items-center">
                        <span className={`${styles.rankBadge} me-3`}>
                          {idx + 1}
                        </span>
                        <span className={`${styles.macAddress} text-truncate`}>
                          {user.mac}
                        </span>
                      </div>
                      <span
                        className={`${styles.countBadge} badge rounded-pill`}
                      >
                        {user.vezes} {user.vezes === 1 ? "vez" : "vezes"}
                      </span>
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
          alt="Hacker"
        />
        <Row>
          <Col xs="10" className="mx-auto mt-4 text-end">
            <h2 className={`${styles.title}`}>DASHBOARD</h2>
          </Col>
        </Row>

        {/* Seletor de gráfico mobile */}

        <Row>
          <Col xs="10" className={`mx-auto ${styles.graficoMobile} mt-3`}>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>{renderMobileChart()}</ResponsiveContainer>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col xs="10" className="mx-auto">
            <select
              className="form-select"
              value={mobileChartType}
              onChange={(e) => setMobileChartType(e.target.value)}
            >
              <option value="pie">Gráfico de Pizza</option>
              <option value="bar">Gráfico de Barras</option>
              <option value="line">Gráfico de Linhas</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col xs="10" className={`mx-auto ${styles.conteudoDashboardMobile}`}>
            <h3>Status</h3>
            <Row>
              <Col>
                <h5 className={`${styles.textoStatus}`}>
                  Conhecido: {conhecidos}
                </h5>
              </Col>
              <Col>
                <h5 className={`${styles.textoStatus}`}>
                  Desconhecido: {desconhecidos}
                </h5>
              </Col>
            </Row>
            <h5 className="mt-3">Total: {totalDispositivos}</h5>
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

              <Col xs="6" className={`${styles.alinhamento} mt-3 mt-md-0`}>
                <Link href={"/config"} className={styles.linkSemEstilo}>
                  <i className={`bi bi-gear-fill ${styles.icon2mobile}`}></i>
                  <h4 className={`${styles.conteudo2mobile}`}>Configurações</h4>
                </Link>
              </Col>
              <Col xs="6" className={`${styles.alinhamento} mt-3 mt-md-0`}>
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
