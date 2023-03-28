import './calculator.scss';

function DisplayCal() {
  return (
    <div className="main-cal container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col col-12 output">
          <table>
            <tr>
              <td colSpan={4}>
                <input type="text" id="output" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" placeholder="AC" />
              </td>
              <td>
                <input type="button" placeholder="AC" />
              </td>
              <td>
                <input type="button" placeholder="AC" />
              </td>
              <td>
                <input type="button" placeholder="AC" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayCal;
