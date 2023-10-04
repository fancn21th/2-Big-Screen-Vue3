import { ref, computed, watch } from 'vue';

export const useValidator = (schema = {}, initial = {}) => {
  const fields = ref(
    Object.keys(schema).reduce((acc, key) => {
      const schemaItem = schema[key];
      acc[key] = {
        key,
        value: initial[key] || null,
        error: null,
        message: schemaItem.message,
        validate: schemaItem.validate,
      };
      return acc;
    }, {}),
  );

  // TODO: this got be a huge performance hit
  watch(
    () => fields,
    (newValue, oldValue) => {
      validate();
    },
    { deep: true },
  );

  const valid = computed(() => {
    return Object.values(fields.value).every((field) => !field.error);
  });

  const validateForOneField = (key) => {
    const field = fields.value[key];
    const validateFn = field.validate;
    const result = validateFn(field.value);

    if (!result) {
      field.error = field.message(key);
    } else {
      field.error = null;
    }
  };

  const reset = () => {};

  const validate = (key) => {
    if (key) validateForOneField(key);
    else Object.keys(fields.value).forEach((key) => validateForOneField(key));
  };

  return {
    valid,
    fields,
    validate,
    reset,
  };
};
