import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

const poem = () => {
if (props.revealPoem) {
    for (const sentence of props.submissions) {
    return sentence
    }
  }
}

  return (
    <div className="FinalPoem">
      { props.isSubmitted ? ( 
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        
       <p> {props.submissions}</p> 
       
      </section>) : ( 

      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" 
          onClick={props.revealPoem} // hide if submitted
          />
      </div>) }
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired, // when button has been clicked, we want to hide button and reveal poem
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired, // array of sentences
  revealPoem: PropTypes.func.isRequired, // tells the game to switch from user input mode to final poem mode
};

export default FinalPoem;
