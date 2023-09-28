import "./App.css";
import Diena from "./Diena.js";
import Stunda from "./Stunda.js";
const d = new Date();
function weekDay() {
  return (d.toLocaleDateString('lv', { weekday: 'long' }))
};

function monthLongName() {
  return (d.toLocaleDateString('lv', { month: 'long' }))
};


export default function App() {
  return (
    <>
      <div>
        <Diena
          day={weekDay()}
          year={d.getFullYear()}
          monthDay={d.getDate()}
          month={monthLongName()}></Diena>
        <Stunda></Stunda>
      </div>
    </>
  );
}
