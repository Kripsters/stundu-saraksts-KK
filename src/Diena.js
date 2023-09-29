import Stunda from "./Stunda.js";
function Diena(Date) {
  return (
    <>
      <table border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td styleName="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
              <span class="info2"> &nbsp; Pārst.</span>
              &nbsp; &nbsp; {Date.day}, &nbsp;{Date.year}
              <small>.gada</small>{" "}
              <b>
                {Date.monthDay}.{Date.month}
              </b>{" "}
              <span class="nedruka"></span>
            </td>
          </tr>
        </tbody>
      </table>

      <ul>
        <Stunda nosaukums={Date.stundas[0]}></Stunda>
        <Stunda nosaukums={Date.stundas[1]}></Stunda>
        <Stunda nosaukums={Date.stundas[2]}></Stunda>
        <Stunda nosaukums={Date.stundas[3]}></Stunda>
      </ul>
    </>
  );
}

export default Diena;
