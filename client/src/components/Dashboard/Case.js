import SideNav from "./SideNav";
import '../../assets/css/casesSection.css';

const Case=() =>{
    return (
        <div className="dashboard">
            <SideNav/>
            <div className="right"> 
                <div className="top">
                    <h1>The State of Punjab vs Govind Singh</h1>
                </div>
                <div className="one">
                    <h3>Description</h3>
                    <p>Lörem ipsum lir lockdown regt spede, ninade märad. Studsmattesjuka höst monosk bioras. Ament räsk. Epigen bosede näkast vengen provis osk. Bevis medelsiv i prede, multidorat. Rer multist krossade inte poktigt. 
Sasat pir anteng prest huruvida odode. Apotropi sens. Ynade sys i tingar tisöktig kafyledes. Sijyvis pseudosm tining lökanar polyn. Fonoception dis disabelt, pygapp, milogi kvasitopi. Kossade misunar inte suvis, synvision, geosöjyr ultranera.
</p>
                </div>
                <div className="one two">
                    <div className="l">
                        <div>
                            <h3>CRN NO.:</h3><h6>HFNE420691232022</h6>
                        </div>
                        <div>
                            <h3>Clause NO.:</h3><h6>403</h6>
                        </div>
                        <div>
                            <h3>Court Location:</h3><h6>Punjab High Court</h6>
                        </div>
                    </div>
                    <div className="l r">
                        <div>
                            <h3>Date of Filing:</h3><h6>12/04/19</h6>
                        </div>
                        <div>
                            <h3>Last Hearing Date:</h3><h6>02/02/22</h6>
                        </div>
                        <div>
                            <h3>Next Hearing Date:</h3><h6>22/02/22</h6>
                        </div>
                    </div>
                </div>
                <div className="one">
                    <h3>Details of Accused</h3>
                    <div className="two">
                        <div className="l">
                            <div>
                                <h3>Name:</h3><h6>Govind Singh</h6>
                            </div>
                            <div>
                                <h3>Phone NO.:</h3><h6>981xxxxxxx</h6>
                            </div>
                        </div>
                        <div className="l r">
                            <div>
                                <h3>Gender:</h3><h6>M</h6>
                            </div>
                            <div>
                                <h3>Age:</h3><h6>32</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Case;