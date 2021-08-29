import ChartBar from './ChartBar'

import './Chart.css'

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);

    console.log("props.dataPoints: ", props.dataPoints)
    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}/>
                )
            }
        </div>
    )
    
}

export default Chart;