import '../../assets/css/cases.css';
import { Files } from './dummy';
import CaseCards from './CaseCards';

const Cases = () => {

  const allot= Files[0];
  const pending= Files[1];
  const disposed= Files[2];

  return (
    <div className='right'>
      <div className='top'>
        <h1>Cases</h1>
        <p>Filter</p>
      </div>
      <h3>New Cases</h3>
      <div className='cases'>
        {
          allot.map((x)=> {
            return(
                <CaseCards d={x.date} t={x.title} l={x.l} />
                );
              })
            }
        </div>

        <h3>Pending Cases</h3>
      <div className='cases'>
        {
          pending.map((x)=> {
            return(
                <CaseCards d={x.date} t={x.title} l={x.l} />
                );
              })
            }
        </div>

        <h3>Disposed Cases</h3>
      <div className='cases '>
        {
          disposed.map((x)=> {
            return(
              <div className=''>
                <CaseCards d={x.date} t={x.title} l={x.l} />
              </div>
                );
              })
            }
        </div>
    </div>
  )
}

export default Cases