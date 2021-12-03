import React from 'react'
import Section1 from '../Section1/';
import Section2 from '../Section2';
import Section3 from '../Section3';



function index({ data }) {
    return (
        <div className="container-gral">
            <h2>Ejercicio</h2>
            <div className="section-container">
            <Section1 data={data} />
            <Section2 data={data} />
            <Section3 data={data} />
            </div>
        </div>
    )
}

export default index
