function Stunda(props) {
  const stundas = [
    "Sports",
    "Dabaszinības",
    "Sociālās zinības",
    "Krievu valoda",
  ];
  return (
    <>
      <li>{props.nosaukums}</li>
    </>
  );
}

//{stundas.map((stunda) => (
//    <li>{stunda}</li>
//  ))}
export default Stunda;
