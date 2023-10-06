import "./App.css";
import Diena from "./Diena.js";
const d = new Date();
function weekDay() {
  return d.toLocaleDateString("lv", { weekday: "long" });
}

function monthLongName() {
  return d.toLocaleDateString("lv", { month: "long" });
}

const pirmdienasStundas = [
  "Sociālās zinības",
  "Dabaszinības",
  "Vēsture",
  "Krievu valoda",
];

const otrdienasStundas = [
  "2Sociālās zinības",
  "2Dabaszinības",
  "2Vēsture",
  "2Krievu valoda",
];

const visasStundas = {
  Pirmdiena: ["Sociālās zinības", "Dabaszinības", "Vēsture", "Krievu valoda"],
};

export default function App() {
  return (
    <>
      <div>
        <Diena stundas={pirmdienasStundas} />
        <br />
        <br />
        <br />
        <Diena stundas={otrdienasStundas} />
      </div>
    </>
  );
}
