import React, { useEffect, useState } from "react"
import MountEverest from "./MountEverest.jpeg"
import Container from 'react-bootstrap/Container';
import InfoTable from './components/InfoTable'
import Dot from './components/Dot'
import Flag from './components/Flag'
import Curve from './components/Curve'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MountEverestImage = (props) => {
  return <g {...props}>
    <image href={MountEverest} width="100%" />
  </g>
}

const putDotOnStartPosition = () => {
  const dotElement = document.getElementById("dot");
  const curveElement = document.getElementById("curve")
  const p = curveElement.getPointAtLength(curveElement.getTotalLength());
  dotElement.setAttribute("transform", `translate(${p.x}, ${p.y})`)
}

const App = () => {
  const [linePercentage, setLinePercenteage] = useState(100);
  const [climbFinished, setClimbFinished] = useState(false);

  const dot = <Dot />;
  const curve = <Curve />;
  const mountEverestImage = <MountEverestImage />;
  const flag = <Flag />
  const infoTable = <InfoTable linePercentage={linePercentage} />

  useEffect(() => {
    putDotOnStartPosition();
  }, []);

  const handleClick = () => {
    const dotElement = document.getElementById("dot");
    const curveElement = document.getElementById("curve")

    if (linePercentage < 1) {
      setLinePercenteage(100);
      setClimbFinished(true);
    } else {
      setLinePercenteage(linePercentage - 1)
      setClimbFinished(false)
    }
    const p = curveElement.getPointAtLength(linePercentage / 100 * curveElement.getTotalLength());
    dotElement.setAttribute("transform", `translate(${p.x}, ${p.y})`)
  }

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h1>
            {!climbFinished && 'Try to reach the top!'}
            {climbFinished && 'You reached the top!'}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            height="300"
            viewBox="0 0 300 153"
          >
            {mountEverestImage}
            <g transform="translate(66,12) scale(0.88)">
              {curve}
              {dot}
            </g>
            <g transform="translate(87,-27) scale(0.5)">
              {climbFinished && flag}
            </g>
          </svg>
        </Col>
        <Col>
          {infoTable}
        </Col>
        <div>
          <button type="button" onClick={handleClick}>
            Current percentage %: {100 - linePercentage}
          </button>
        </div>
      </Row>
    </Container>
  );
}

export default App;
