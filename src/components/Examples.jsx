import TabButton from "./TabButton.jsx";
import Section from './Section';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Tabs from "./Tabs.jsx";

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
      <Tabs ButtonsContainer
        buttons={
        <>
          <TabButton onClick={() => clickHandler ('components')}>Components</TabButton>
          <TabButton onClick={() => clickHandler ('jsx')}>JSX</TabButton>
          <TabButton onClick={() => clickHandler ('props')}>Props</TabButton>
          <TabButton onClick={() => clickHandler ('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  )
}