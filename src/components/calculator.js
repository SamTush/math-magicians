import { useState } from 'react';
import './calculator.scss';
import calculate from './logic/calculate';

function DisplayCal() {
  const [currentOperation, setOperation] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const HandleClick = (event) => {
    const btnName = event.target.id;
    const current = calculate(currentOperation, btnName);
    setOperation(current);
  };

  const { total, next, operation } = currentOperation;
  return (
    <div className="main-cal p-4 container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col ps-3 pe-3 pt-5 pb-4 col-12 calculator">
          <table className="fit">
            <tr>
              <td colSpan={4}>
                <p className="output mb-1 p-2">{ next || operation || total || 0}</p>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" id="AC" className="btn all-btn light-btn" onClick={HandleClick}>AC</button>
              </td>
              <td>
                <button type="button" id="+/-" className="btn all-btn light-btn" onClick={HandleClick}>+/-</button>
              </td>
              <td>
                <button type="button" id="%" className="btn all-btn light-btn" onClick={HandleClick}>%</button>
              </td>
              <td>
                <button type="button" id="÷" className="btn all-btn orange-btn" onClick={HandleClick}>÷</button>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" id="7" className="btn all-btn light-btn" onClick={HandleClick}>7</button>
              </td>
              <td>
                <button type="button" id="8" className="btn all-btn light-btn" onClick={HandleClick}>8</button>
              </td>
              <td>
                <button type="button" id="9" className="btn all-btn light-btn" onClick={HandleClick}>9</button>
              </td>
              <td>
                <button type="button" id="x" className="btn all-btn orange-btn" onClick={HandleClick}>×</button>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" id="4" className="btn all-btn light-btn" onClick={HandleClick}>4</button>
              </td>
              <td>
                <button type="button" id="5" className="btn all-btn light-btn" onClick={HandleClick}>5</button>
              </td>
              <td>
                <button type="button" id="6" className="btn all-btn light-btn" onClick={HandleClick}>6</button>
              </td>
              <td>
                <button type="button" id="-" className="btn all-btn orange-btn" onClick={HandleClick}>-</button>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" id="1" className="btn all-btn light-btn" onClick={HandleClick}>1</button>
              </td>
              <td>
                <button type="button" id="2" className="btn all-btn light-btn" onClick={HandleClick}>2</button>
              </td>
              <td>
                <button type="button" id="3" className="btn all-btn light-btn" onClick={HandleClick}>3</button>
              </td>
              <td>
                <button type="button" id="+" className="btn all-btn orange-btn" onClick={HandleClick}>+</button>
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <input className="btn all-btn light-btn all-btn-big" type="button" value="0" />
              </td>
              <td>
                <button type="button" id="." className="btn all-btn light-btn" onClick={HandleClick}>.</button>
              </td>
              <td>
                <button type="button" id="=" className="btn all-btn orange-btn" onClick={HandleClick}>=</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayCal;
