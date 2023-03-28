import './calculator.scss';

function DisplayCal() {
  return (
    <div className="main-cal p-4 container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col ps-3 pe-3 pt-5 pb-4 col-12 calculator">
          <table className="fit">
            <tr>
              <td colSpan={4}>
                <input type="text" className="output mb-1 p-2" id="output" value="0" />
              </td>
            </tr>

            <tr>
              <td>
                <input className="btn all-btn light-btn" type="button" value="AC" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="+/-" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="%" />
              </td>
              <td>
                <input className="btn all-btn orange-btn" type="button" value="÷" />
              </td>
            </tr>

            <tr>
              <td>
                <input className="btn all-btn light-btn" type="button" value="7" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="8" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="9" />
              </td>
              <td>
                <input className="btn all-btn orange-btn" type="button" value="×" />
              </td>
            </tr>

            <tr>
              <td>
                <input className="btn all-btn light-btn" type="button" value="4" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="5" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="6" />
              </td>
              <td>
                <input className="btn all-btn orange-btn" type="button" value="-" />
              </td>
            </tr>

            <tr>
              <td>
                <input className="btn all-btn light-btn" type="button" value="1" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="2" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="3" />
              </td>
              <td>
                <input className="btn all-btn orange-btn" type="button" value="+" />
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <input className="btn all-btn light-btn all-btn-big" type="button" value="0" />
              </td>
              <td>
                <input className="btn all-btn light-btn" type="button" value="." />
              </td>
              <td>
                <input className="btn all-btn orange-btn" type="button" value="=" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayCal;
