import { useTranslation } from "react-i18next";

const useValidation = (validations, validatables) => {

  if (validatables) {

    return validatables.map((validatable, i) => {
      if (!validatable) {
        return {};
      }

      return Object
        .entries(validations)
        .reduce((
          validationResults, 
          [property, validations],
        ) => {
          const value = validatable[property];

          for (const validation of validations) {
            const validationResult = validation(value, validatable, i);
            if (validationResult) {
              return {
                ...validationResults,
                [property]: validationResult
              };
            }
          }

          return {
            ...validationResults,
            [property]: null
          };

        }, {});
    });

  }

  return [{}];

};

export default useValidation;
