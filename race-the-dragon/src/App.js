import React, { useEffect, useState } from "react"
import Dragon from "./components/Dragon";
import Curve from "./components/Curve";
import Line from "./components/Line";
import FemaleRunner from "./components/FemaleRunner";
import MedivalBackground from "./png-transparent-medieval-background.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChallengeTable from './components/ChallengeTable';
import Treasure from "./components/Treasure";



const putRunnerOnStartPosition = () => {
  const femaleRunnerElement = document.getElementById("femaleRunner");
  const lineElement = document.getElementById("line")
  const p = lineElement.getPointAtLength(0);
  femaleRunnerElement.setAttribute("transform", `translate(${p.x - 5}, ${p.y - 16})`)
}

const putDragonOnStartPosition = () => {
  const dragonElement = document.getElementById("dragon");
  const curveElement = document.getElementById("curve")
  const p = curveElement.getPointAtLength(0);
  dragonElement.setAttribute("transform", `translate(${p.x - 30}, ${p.y - 150})`)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const [linePercentage, setLinePercenteage] = useState(0);
  const [curvePercentage, setCurvePercentage] = useState(0);
  const [challengeFinished, setChallengeFinished] = useState(false);

  const dragon = <Dragon />
  const curve = <Curve />
  const line = <Line />
  const femaleRunner = <FemaleRunner />
  const treasure = <Treasure />
  const challengeTable = <ChallengeTable linePercentage={linePercentage} curvePercentage={curvePercentage} />

  useEffect(() => {
    putRunnerOnStartPosition();
    putDragonOnStartPosition();
  }, []);

  const handleClick = () => {
    const femaleRunnerElement = document.getElementById("femaleRunner");
    const lineElement = document.getElementById("line");
    const curveElement = document.getElementById("curve");
    const dragonElement = document.getElementById("dragon");

    if (linePercentage >= 100 || curvePercentage > 100) {
      setCurvePercentage(0);
      setLinePercenteage(0);
      setChallengeFinished(true);
    } else {
      setCurvePercentage(curvePercentage + getRandomInt(3) + 1);
      setLinePercenteage(linePercentage + getRandomInt(3) + 1);
      setChallengeFinished(false);
    }
    const p = lineElement.getPointAtLength(linePercentage / 100 * lineElement.getTotalLength());
    femaleRunnerElement.setAttribute("transform", `translate(${p.x - 5}, ${p.y - 16})`)

    const q = curveElement.getPointAtLength(curvePercentage / 100 * curveElement.getTotalLength());
    dragonElement.setAttribute("transform", `translate(${q.x - 30}, ${q.y - 150})`)
  }

  return (
    <Container>
      <Row>
        <h1>
          Race the dragon!
        </h1>
      </Row>
      <Row>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            height="400"
            viewBox="0 0 300 170">
            <image href={MedivalBackground} width="100%">
              {MedivalBackground}
            </image>
            {curve}
            {dragon}
            {line}
            {femaleRunner}
            {treasure}
          </svg>
        </Col>
        <Col>
          {challengeTable}
        </Col>
      </Row>
      <Row>
        <h6>
          <em>Don't forget too check SKYNEWS</em>
        </h6>
      </Row>
      <Row>
        <div>
          <button type="button" onClick={handleClick}>
            Current percentage %: {linePercentage}
          </button>
        </div>
      </Row>
    </Container>

  );
}

export default App;
