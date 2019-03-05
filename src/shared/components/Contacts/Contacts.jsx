import React, { Component } from 'react';
import './Contacts.scss';
import Phone from '../../ui/Phone/Phone';
import Button from '../../ui/Button/Button';
import icons from '../../constants/icons';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';

class Contacts extends Component {
    handleDescriptionClick = () => {
        console.log(1);
    };

    render() {
        return (
            <BlockWrapper bottomBorder innerColor="white">
                <div className="contacts">
                    <Phone
                        phone="8 800 77 00 155"
                        description="Звонок по России бесплатный"
                    />
                    <Phone
                        phone="+7 (391) 2 88 88 75" 
                        description="Заказать обратный звонок"
                        descriptionEvent={this.handleDescriptionClick}
                    />
                    <Button
                        title="Акции сегодня"
                        color="red"
                        size="large"
                        fontSize="large"
                        href="/"
                        icon={icons.GRAMMOFON}
                    />
                </div>
            </BlockWrapper>
        );
    }
};

export default Contacts;