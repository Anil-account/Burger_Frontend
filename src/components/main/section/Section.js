import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Section() {
    const params=useParams();
    useEffect(()=>{
    },[params])
    return (
        <div className="section-container container">
            <ul className="section-container-ul">
                <li className={`section-container-li ${params.category==='all'?'select':''}`}><Link to='/all'>All</Link></li>
                <li className={`section-container-li ${params.category==='burgers'?'select':''}`}><Link to='/burgers'>Burgers</Link></li>
            </ul>
        </div>
    );
}

export default Section;