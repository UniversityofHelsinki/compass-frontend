import { useState } from "react";

const useSelfReflectionModification = (object, validate) => {
    const [modifiedObject, setModifiedObject] = useState(null);
    const [touchedFields, setTouchedFields] = useState([]);
    const [modified, setModified] = useState(false);

    const onChange = (what, value) => {
        const newModifiedObject = {
            ...modifiedObject,
            [what]: value
        };

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

        /* TÄMÄ EI TOIMI
        if (validate) {
            const previousObject = modifiedObject;
            validate(newModifiedObject, previousObject);
        }*/

        setModifiedObject(newModifiedObject);
        setModified(!equalsOriginal);

    };

    return [modifiedObject, onChange, modified];
};

export default useSelfReflectionModification;
