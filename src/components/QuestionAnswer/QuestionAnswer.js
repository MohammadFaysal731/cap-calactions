import React from 'react';
import './QuestionAnswer.css'
const QuestionAnswer = () => {
    return (
        <div>
            <div className="question-container">
                <div className="question">
                    <h1>How React Works ?</h1>
                    <ol>
                        <li>React hosa upora thek data necher de k pathay.</li>
                        <li>React ar madomay necher thek upora data pathan no jay na.</li>
                        <li>React ar modey parent node theke childe node a modey data pathano jay. </li>
                        <li>React commponet ar madome website ta k soto soto vage vag kora falay.ar props ar madomay data poriborton kora jay.</li>
                        <li>Soto soto vage vag hoyor karonae a tar j kono vag khuv sohoje poriborton korte holay kora jay.</li>
                    </ol>
                </div>
                <div className="question">
                    <h1>Props VS State ?</h1>
                    <ol>
                        <h4>#Props</h4>
                        <li>Props hosa sudu read kora jay.</li>
                        <li>Props poriborton kora jay na.</li>
                        <li>Props notun man set kora jay na.</li>
                        <li>Props ar madomay semiler look data. k differnce in  data kora jay</li>
                        <li>Props ar moday parent node theke childe node a patha no jay.</li>
                        <h4>#State</h4>
                        <li>State poriborton hote para.</li>
                        <li>Website a kono kisu click poriborton holay </li>
                        <li>State poriborton kora jay ga k state full component bolay.</li>
                        <li>Stated jai jagay sudu dekhan nor kaj koray thek bola prasentational component bolay. </li>
                    </ol>
                </div>
                <div className="question">
                    <h1>How UseState Works ?</h1>
                    <ol>
                        <li>UseState ar madomay website ar poriborton ar kaj kora hoy.</li>
                        <li>UseState ak te array diya thek ar ek ta function diya thek.</li>
                        <li>UseState ar array man ta set kora hay.tar shater  function ar madomay</li>
                        <li>UseState ar madomay event handerl kaj korte sahajo ko ra the k.</li>
                    </ol>
                </div>

            </div>
        </div>
    );
};

export default QuestionAnswer;