import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt (max) {
  return Math. floor (Math. random () * (max + 1));
}

function CoreConcepts (props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function Header () {
  return (
    <header>
      <img src={ reactImg } alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { reactDescriptions[genRandomInt (2)] } React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcepts>
          {/* You can ... the whole object as well */}
          <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts> 
          <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}></CoreConcepts>
          <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}></CoreConcepts>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
