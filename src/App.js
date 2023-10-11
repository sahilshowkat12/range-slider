import logo from './logo.svg';
import './App.css';
import ReactSlider from 'react-slider'
function App() {
  return (
    <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    defaultValue={[0, 100]}
    ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={10}
/>
  );
}

export default App;
