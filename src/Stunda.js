import styles from "./Stunda.module.css";

function Stunda(props) {
  const stundas = [
    "Sports",
    "Dabaszinības",
    "Sociālās zinības",
    "Krievu valoda",
  ];
  return (
    <>
      <li className={styles.violets}>{props.nosaukums}</li>
    </>
  );
}

//{stundas.map((stunda) => (
//    <li>{stunda}</li>
//  ))}
export default Stunda;
