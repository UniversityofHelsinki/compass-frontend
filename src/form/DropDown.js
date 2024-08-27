import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import './DropDown.css';


const DropDown = ({ options, ...rest }) => {
    return (
        <>
            <Form.Select { ...rest } value={rest.value || ''}>
                {options && options.map((option, i) =>
                    <option key={option.value || i} value={option.value}>{option.label}</option>
                )}
            </Form.Select>
        </>
    );
}

DropDown.propTypes= {
    options: PropTypes.array.isRequired,
};

export default DropDown;