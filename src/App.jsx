
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx'
// import { Fragment } from 'react';

function App() {
  return (
    // <Fragment> old versions
    <>
      {/* <Header></Header> */}
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    {/* </Fragment> */}
    </>
  );
}

export default App;
