import './calculator.scss';
import PropTypes from 'prop-types';

function LightBtn({ value }) {
  return (
    <>
      <input className="btn all-btn light-btn" type="button" value={value} />
    </>
  );
}

function OrangeBtn({ value }) {
  return (
    <>
      <input className="btn all-btn orange-btn" type="button" value={value} />
    </>
  );
}

LightBtn.propTypes = {
  value: PropTypes.string.isRequired,
};

OrangeBtn.propTypes = {
  value: PropTypes.string.isRequired,
};

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
                <LightBtn value="AC" />
              </td>
              <td>
                <LightBtn value="+/-" />
              </td>
              <td>
                <LightBtn value="%" />
              </td>
              <td>
                <OrangeBtn value="÷" />
              </td>
            </tr>

            <tr>
              <td>
                <LightBtn value="7" />
              </td>
              <td>
                <LightBtn value="8" />
              </td>
              <td>
                <LightBtn value="9" />
              </td>
              <td>
                <OrangeBtn value="×" />
              </td>
            </tr>

            <tr>
              <td>
                <LightBtn value="4" />
              </td>
              <td>
                <LightBtn value="5" />
              </td>
              <td>
                <LightBtn value="6" />
              </td>
              <td>
                <OrangeBtn value="-" />
              </td>
            </tr>

            <tr>
              <td>
                <LightBtn value="1" />
              </td>
              <td>
                <LightBtn value="2" />
              </td>
              <td>
                <LightBtn value="3" />
              </td>
              <td>
                <OrangeBtn value="+" />
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <input className="btn all-btn light-btn all-btn-big" type="button" value="0" />
              </td>
              <td>
                <LightBtn value="." />
              </td>
              <td>
                <OrangeBtn value="=" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayCal;
