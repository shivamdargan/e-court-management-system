import React from 'react'
import '../../assets/css/stats.css';

const Stats = () => {
  return (
    <div className='stats-section'>
        <div className='stats-card'>
            <p className='stats-num'>5.73 M</p>
            <p className='stats-name'>HC PENDING CASES</p>
        </div>
        <div className='stats-card'>
            <p className='stats-num'>43.06 M</p>
            <p className='stats-name'>DC PENDING CASES</p>
        </div>
        <div className='stats-card'>
            <p className='stats-num'>1.58 M</p>
            <p className='stats-name'>HC CASES LISTED TODAY</p>
        </div>
    </div>
  )
}

export default Stats