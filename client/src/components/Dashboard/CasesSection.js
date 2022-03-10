import '../../assets/css/CasesSection.css';
import { Files } from './dummy';
import CaseCards from './CaseCards';

const CasesSection = () => {

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
      <div className='row'>
        {
          allot.map((x)=> {
            return(
                <div className='col-sm-4'>
                  <CaseCards d={x.date} t={x.title} l={x.l} />
                </div>
                );
              })
            }
        </div>

        <h3>Pending Cases</h3>
      <div className='row'>
        {
          pending.map((x)=> {
            return(
                <div className='col-sm-4'>
                <CaseCards d={x.date} t={x.title} l={x.l} />
              </div>
                );
              })
            }
        </div>

        <h3>Disposed Cases</h3>
      <div className='row '>
        {
          disposed.map((x)=> {
            return(
                <div className='col-lg-4'>
                  <CaseCards d={x.date} t={x.title} l={x.l} />
                </div>
                );
              })
            }
        </div>
    </div>
  )
}

export default CasesSection