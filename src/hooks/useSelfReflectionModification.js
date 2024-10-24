import { useState } from "react";

const useSelfReflectionModification = (object, validate) => {
    const [modifiedObject, setModifiedObject] = useState(null);
    const [touchedFields, setTouchedFields] = useState([]);
    const [modified, setModified] = useState(false);
    const [clearValues, setClearValues] = useState(false);
    const clearFormValues = () => {
        setClearValues(true);
    }
    const onChange = (what, value) => {
        const newModifiedObject = {
            ...modifiedObject,
            [what]: value
        };

        if (clearValues) {
            setClearValues(false);
        }

        const newTouchedFields = [
            ...touchedFields,
            what
        ];

        const equalsOriginal = (() => {
            for (const field of newTouchedFields) {
                const newValues = [ newModifiedObject[field] ].flat();
                const originalValues = [ object[field] ].flat();

                if (newValues.length !== originalValues.length) {
                    return false;
                }

                for (let i = 0; i < originalValues.length; i++) {
                    if (newValues[i] !== originalValues[i]) {
                        return false;
                    }
                }
            }
            return true;
        })();

        if (validate) {
            const previousObject = modifiedObject;
            validate(newModifiedObject, previousObject);
        }

        setModifiedObject(newModifiedObject);
        setTouchedFields(newTouchedFields);
        setModified(!equalsOriginal);
    };

    if (clearValues) {
        setModifiedObject({...object});
        setTouchedFields([]);
        setModified(false);
        setClearValues(false);
        return [{...object}, onChange, false];
    }

    const updateModObj = (updatedObj) => {
        if (updatedObj?.length > 0) {
            setModifiedObject({...updatedObj[0]});
        }
        console.log('obj', updatedObj);
    }

    if (modifiedObject?.id !== object?.id) {
        const objectHasChanged = modifiedObject?.id && object?.id;

        const validateFunctionIsPresent = Boolean(validate);
        if (object && validateFunctionIsPresent) {
            const validateAllFieldsAtFirst = () => validate(object, {}, true);
            validateAllFieldsAtFirst();
        }

        setModifiedObject({...object});
        setTouchedFields([]);
        setModified(false);
        return [{...object}, onChange, false, clearFormValues, updateModObj];
    }

    return [modifiedObject, onChange, modified, clearFormValues, updateModObj];
};

export default useSelfReflectionModification;
