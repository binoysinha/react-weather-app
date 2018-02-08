import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const SparkLine = ({data, color, unit}) => {
    const avg = Math.ceil(data.reduce(function(a, b) { return a + b; }) / data.length);
    return(
        <div>
            <Sparklines 
                data={data}
                width={120} 
                height={120}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <p className="avg-val">Average: {avg} {unit}</p>
            <span className="avg-label">(Period of 5 daya)</span>
        </div>
    )
}

export default SparkLine;