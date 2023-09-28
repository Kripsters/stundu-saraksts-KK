function Diena(Date) {
  return (
    <>
      <table border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td styleName="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
              <span class="info2"> &nbsp; Pārst.</span>
              &nbsp; &nbsp; {Date.day}, &nbsp;{Date.year}<small>.gada</small> <b>{Date.monthDay}.{Date.month}</b> <span class="nedruka"></span>
            </td>
          </tr>
          <tr>
            <td valign="top">
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
};

export default Diena;