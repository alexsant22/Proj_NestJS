import {
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function IsCelular(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCelular',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (typeof value !== 'string') return false;

          // Aceita: 11999999999 ou (11) 99999-9999
          return /^(\(?\d{2}\)?\s?)?9\d{4}-?\d{4}$/.test(value);
        },
      },
    });
  };
}
