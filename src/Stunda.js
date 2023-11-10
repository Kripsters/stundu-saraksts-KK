import styles from "./Stunda.module.css";

function Stunda(props) {
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
