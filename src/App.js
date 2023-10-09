import "./App.css";
import Diena from "./Diena.js";

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

const visasStundas = [
  {
    diena: "Pirmdiena",
    stundas: ["Sociālās zinības", "Dabaszinības", "Vēsture", "Krievu valoda"],
  },
  {
    diena: "Otrdiena",
    stundas: [
      "2Sociālās zinības",
      "2Dabaszinības",
      "2Vēsture",
      "2Krievu valoda",
    ],
  },
  {
    diena: "Trešdiena",
    stundas: [
      "3Sociālās zinības",
      "3Dabaszinības",
      "3Vēsture",
      "3Krievu valoda",
    ],
  },
  {
    diena: "Ceturtdiena",
    stundas: [
      "4Sociālās zinības",
      "4Dabaszinības",
      "4Vēsture",
      "4Krievu valoda",
    ],
  },
  {
    diena: "Piektdiena",
    stundas: [
      "5Sociālās zinības",
      "5Dabaszinības",
      "5Vēsture",
      "5Krievu valoda",
    ],
  },
];

const dienasJSX = visasStundas.map((diena, indekss) => {
  return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
});

export default function App() {
  return (
    <>
      <div>
        <ol>{dienasJSX}</ol>
      </div>
    </>
  );
}
//        <Diena stundas={pirmdienasStundas} />
//       <Diena stundas={otrdienasStundas} />
//const d = new Date();
//function weekDay() {
//  return d.toLocaleDateString("lv", { weekday: "long" });
//}
//
//function monthLongName() {
//  return d.toLocaleDateString("lv", { month: "long" });
//}
