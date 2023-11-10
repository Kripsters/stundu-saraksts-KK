import "./App.css";
import Diena from "./Diena.js";
import { useEffect, useState } from "react";

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
  const [lessons, setLessons] = useState({});
  const [loading, setLoading] = useState("True");

  useEffect(() => {
    async function GetSaraksts() {
      const response = await fetch(
        "https://cheese-cake.onthewifi.com/api/lessons"
      );
      const data = await response.json();
      console.log(data.IPb22[4].classes);
      setLessons(data.IPb22[4].classes);
      const cleansedData = [
        {
          diena: "Pirmdiena",
          stundas: data.IPb22[0].classes,
        },
        {
          diena: "Otrdiena",
          stundas: data.IPb22[1].classes,
        },
        {
          diena: "Trešdiena",
          stundas: data.IPb22[2].classes,
        },
        {
          diena: "Ceturtdiena",
          stundas: data.IPb22[3].classes,
        },
        {
          diena: "Piektdiena",
          stundas: data.IPb22[4].classes,
        },
      ];
      setLoading("False");
    }
    GetSaraksts();
  }, []);

  return <>{loading ? <p>Loading...</p> : dienasJSX}</>;
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
