import React, { Component } from 'react';
import './CallbackForm.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withFormik } from 'formik';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { callbackForm } from '../../utils/validationShemas';
import { PHONE_MASK } from '../../constants/site-data';

class CallbackForm extends Component {
    static propsTypes = {
        isValid: PropTypes.bool,
        values: PropTypes.objectOf(
            PropTypes.string
        ),
        errors: PropTypes.object,
        touched: PropTypes.object,
        handleBlur: PropTypes.func,
        handleSubmit: PropTypes.func,
        handleChange: PropTypes.func
    };

    static defaultProps = {
        status: {
            isSuccess: false
        }
    };

    renderSuccess() {
        return (
            <div className={cx('callback-form__success')}>
                Спасибо за обращение, в ближайшее время мы свяжемся с вами !
            </div>
        );
    }

    renderNameInput() {
        const {
            handleChange,
            errors: { name },
            values,
            touched
        } = this.props;

        return (
            <div className={cx('callback-form__input-wrapper')}>
                <Input
                    type="text"
                    title="ФИО"
                    className={cx('callback-form__input')}
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    itemsJustify="space-between"
                />
                {name && touched.name &&
                    <div className={cx('callback-form__error')}>
                        {name}
                    </div>
                }
            </div>
        );
    }

    renderPhoneInput() {
        const {
            handleChange,
            errors: { phone },
            values,
            touched
        } = this.props;

        return (
            <div className={cx('callback-form__input-wrapper')}>
            <Input
                type="tel"
                title="Телефон для связи"
                className={cx('callback-form__input')}
                name="phone"
                onChange={handleChange}
                value={values.phone}
                mask={PHONE_MASK}
                placeholder="+7 (___)-___-__-__"
                itemsJustify="space-between"
            />
            {phone && touched.phone &&
                <div className={cx('callback-form__error')}>
                    {phone}
                </div>
            }
            </div>
        );
    }

    renderSubmit() {
        const { isValid } = this.props;

        return (
            <div className={cx('callback-form__submit-wrapper')}>
                <Button
                    title="Отправить"
                    type="submit"
                    className={cx('callback-form__submit')}
                    isDisabled={!isValid}
                    fontColor="white"
                    size="large"
                    fontWeight="500"
                />
            </div>
        );
    }

    renderForm() {
        const { handleSubmit } = this.props;

        return (
            <form className={cx('callback-form')} onSubmit={handleSubmit}>
                <div className={cx('callback-form__title')}>Обратная связь</div>
                <div className={cx('callback-form__questions')}>
                    {this.renderNameInput()}
                    {this.renderPhoneInput()}
                </div>
                {this.renderSubmit()}
            </form>
        );
    }

    render() {
        const { isSuccess } = this.props.status;

        return (
            <div className={cx('callback-form__wrapper')}>
                {isSuccess ?
                    this.renderSuccess() :
                    this.renderForm()
                }
            </div>
        );
    }
};

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ name, phone }) => ({
        name: name || '',
        phone: phone || ''
    }),
    validationSchema: callbackForm,
    handleSubmit: (values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
            setSubmitting(false);
            setStatus({ isSuccess: true });
        }, 1000);
    }
})(CallbackForm);
