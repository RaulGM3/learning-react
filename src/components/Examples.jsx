import TabButton from "./TabButton.jsx";
import Section from './Section';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';

export default function Examples () {
  function clickHandler(buttonClicked) {
    console.log (buttonClicked)
    setSelectedTopic (buttonClicked);
  }
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Select a topic.</p>
  
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        {/* <TabButton onSelect={() => clickHandler ('components')}>Components</TabButton> 
        Esto era para mostrar que se pod[ia pasar un metodo a un componente. */}
        <TabButton onClick={() => clickHandler ('components')}>Components</TabButton>
        <TabButton onClick={() => clickHandler ('jsx')}>JSX</TabButton>
        <TabButton onClick={() => clickHandler ('props')}>Props</TabButton>
        <TabButton onClick={() => clickHandler ('state')}>State</TabButton>
      </menu>
      {/* Esto es lo mismo que lo de abajo
        {!selectedTopic ? <p>Select a topic.</p> : 
      (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>)
      } */}
      {/* Y esto es igual a lo de abajo también
      {!selectedTopic && <p>Select a topic.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}
      {tabContent}
    </Section>
  )
}