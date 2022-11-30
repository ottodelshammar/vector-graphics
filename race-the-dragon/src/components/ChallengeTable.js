import Table from 'react-bootstrap/table'

const ChallengeTable = ({ linePercentage, curvePercentage }) => {
    const distanceToTreasure = 100;
    return (
        <Table style={{ width: '20rem' }} striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Challenge Table:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Your progress: {linePercentage*distanceToTreasure/100} km</td>
                </tr>
                <tr>
                    <td>The dragons progress: {curvePercentage*distanceToTreasure/100} km</td>
                </tr>
                <tr>
                    <td>Total distance to treasure: {distanceToTreasure} km </td>
                </tr>
                <tr>
                    <td><strong>SKYNEWS! ----{'>'} </strong><em>The dragon is hungry, you need to run 3 extra kilometers this week!</em></td>
                </tr>
            </tbody>
        </Table>
    );
}
export default ChallengeTable;