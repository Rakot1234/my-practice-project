import * as Yup from 'yup';
import { removeLetters } from './misc-functions';

const emptyError = ( message, minLength ) => {
    return Yup.string().test({
        name: `min ${minLength}`,
        test: (value = '') => {
            return value.trim().length > 0;
        },
        message: message || 'Поле не заполнено'
    });
};

/**
 * Validation for CallbackForm component shared/components/CallbackForm
 */
export const callbackForm = Yup.object().shape({
    'phone': Yup.string().test({
        name: 'phone',
        message: 'Неверно введен телефон',
        test: (value = '') => {
            const phone = removeLetters(value);
            return phone.length === 11;
        }
    }),
    'name': emptyError('Введите имя', 2)
});