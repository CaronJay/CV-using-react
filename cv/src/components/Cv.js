import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import About from './About';
import './Cv.css'

class Cv extends Component {
    render (){
        return( 
            <div>
                <Grid> 
                <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                <img 
                src="https://img.icons8.com/color/96/000000/female-facepalm.png"
                alt="woman"
                style ={{height:'200px'}}/>

                </div>
                <h2 style= {{paddingTop: '2cm'}}> Caron Johannes</h2>
                <h4 style={{ color: 'grey'}}> Full Stack Web Developer</h4>
                <hr style={{borderTop: '4px solid #833fb2, width: 50% '}}/>

                 <p>Student
                    </p>

               <hr style={{borderTop: '4px solid #833fb2, width: 50% '}}/>
                <h5>Address</h5>
                <p>67 Tyger Wall, Georgetown</p>

                <h5> Phone </h5>
                <p>021 544 5545</p>
                
                <h5>Email</h5>
                <p>me@gmail.com</p>
              
              </Cell>
                <Cell className="resume-right-col" col={8}>
                <h2>About me</h2>
                    <About/>
                <hr style= {{borderTop: '4px solid #e22947'}}/>

                    <Education 
                        startYear={2015}
                        endYear={2018}
                        schoolName="Stellenbosch University"
                        schoolDescription="Bcomm Financial Accounting" 
                        
                    />
                      <Education 
                        startYear={2020}
                        endYear={2020}
                        schoolName="Hyperion"
                        schoolDescription="Studying WebDev." 
                        
                    />
                    <hr style= {{borderTop: '4px solid #e22947'}}/>

                    <h2> Experience</h2>
                    <Experience 
                        startYear={2018}
                        endYear={2020}
                        jobName="MSC"
                        jobDescription="Woked in the dining services department." 
                        
                    />
                      

<hr style= {{borderTop: '4px solid #e22947'}}/>
<h2>Skills</h2>
<p>Javascript, HTML, CSS, Jquery and REACT
        Competencies : Good at problem solving, working as a team and being result orientated</p>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Cv; 
 