import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Game from './Game.js';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  // console.log(props)
// create state variables
// create event handler function to change values
  const generateEmptySentence = () => {
    const emptyObject = {}

    for (const field of props.fields) {
      if (field.key) {
        emptyObject[field.key] = ''
      }
    }
    // console.log(emptyObject)
    return emptyObject
    
  }

const [sentence, setSentence] = useState(
  generateEmptySentence()
  // adj1: '',
  // noun1: '',
  // adv: '',
  // verb: '',
  // adj2: '',
  // noun2: '',
)



const onInputChange = (event) => {
  // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);

  const {name, value} = event.target; // creating variables called name and value and finding the fields with the same name in event.target 
  const newSentence = {
    ...sentence,
  
  }
  newSentence[name] = value;
  setSentence(newSentence);
}

const onFormSubmit = (event) => {
  event.preventDefault();
  // console.log('submitting form')
  
  // if (sentence.adj1 !== '' && sentence.noun1 !== '' && sentence.adv !== ''
  //     && sentence.verb !== '' && sentence.adj2 !== '' && sentence.noun2 !== '') {
    // send that data back up to Game
    props.sendSubmission(sentence)
    setSentence(generateEmptySentence())
      // adj1: '',
      // noun1: '',
      // adv: '',
      // verb: '',
      // adj2: '',
      // noun2: '',
    // )
  // }
}

  const inputControls = props.fields.map((field, index) => {
    if (field.key) {
      return (
        <input 
          name= {field.key}
          value={sentence[field.key]}
          onChange={onInputChange}
          placeholder= {field.placeholder}
          key={field.key}
        />)
    } else {
      return field
    }
  })

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form 
      onSubmit={onFormSubmit}
      className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {            
            inputControls
          }

        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
