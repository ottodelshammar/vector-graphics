const Dot = (props) => {
    return <g {...props}>
        <circle
            id="dot"
            cx="0"
            cy="0"
            r="4"
            fill="#db0600"
            fillOpacity="1"
            stroke="#b2b2b2"
            strokeDasharray="none"
            strokeOpacity="1"
            strokeWidth="0"
        ></circle>
    </g>
}

export default Dot;