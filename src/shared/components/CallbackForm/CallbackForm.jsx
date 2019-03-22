import React, { Component } from 'react';
import './CallbackForm.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withFormik } from 'formik';
import Input from '../../ui/Input/Input';

class CallbackForm extends Component {
    static defaultProps = {
        values: PropTypes.object,
        errors: PropTypes.object,
        handleBlur: PropTypes.func,
        handleSubmit: PropTypes.func
    };

    render() {
        const { handleSubmit, errors } = this.props;

        return (
            <form name="callback" className={cx('callback-from')} onSubmit={handleSubmit}>
                <div className={cx('callback__title')}>Обратная связь</div>
                <div className={cx('callback__questions')}>
                    <Input
                        type="text"
                        title="ФИО"
                        className={cx('callback__name')}
                        name="name"
                    />
                    {errors.name &&
                        <div className={cx('callback__error')}>
                            {errors.name}
                        </div>
                    }
                    <Input
                        type="tel"
                        title="Телефон для связи"
                        className={cx('callback__phone')}
                        name="phone"
                    />
                    {errors.phone &&
                        <div className={cx('callback__error')}>
                            {errors.phone}
                        </div>
                    }
                </div>
                <div className={cx('callback__submit-wrapper')}>
                    <Input type="submit" title="Отправить" className={cx('callback__submit')} />
                </div>
            </form>
        );
    }
};

export default withFormik({
    enableReinitialize: true,
    
    mapPropsToValues: ({ name, phone }) => ({
        name: name || '',
        phone: phone || ''
    }),

    validate: values => {
        const errors = {};
        const { name, phone } = values;

        switch(true) {
            case !name:
                errors.name = 'Укажите имя';
                break;
            case name.length < 2:
                errors.name = 'Имя указано неверно';
                break;
            default:
                return;
        }

        switch(true) {
            case !phone:
                errors.phone = 'Укажите телефон';
                break;
            case phone.length < 11:
                errors.phone = 'Телефон указано неверно';
                break;
            default:
                return;
        }

        return errors;
    },
    
    handleSubmit: (values, { setSubmitting }) => {
        console.log(1);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(CallbackForm);
