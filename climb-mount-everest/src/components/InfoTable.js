import Table from 'react-bootstrap/Table';

const InfoTable = ({ linePercentage }) => {
    const mountEverestHeight = 8848;
    return (
      <Table style={{ width: '25rem' }} striped bordered hover>
        <thead>
          <tr>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mount Everest elevation: {mountEverestHeight} m </td>
          </tr>
          <tr>
            <td>Your current altitude: {Math.round(mountEverestHeight - (mountEverestHeight * linePercentage) / 100)} </td>
          </tr>
          <tr>
            <td>Your team must climb {Math.round((((mountEverestHeight * linePercentage) / 100)/8))} m per week to reach the summit in time!</td>
          </tr>
        </tbody>
      </Table>
    );
  }

export default InfoTable;