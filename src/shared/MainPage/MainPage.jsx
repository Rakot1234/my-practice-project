import React, { Component } from 'react';
import cn from 'cn-decorator';

@cn('main-page')
class MainPage extends Component {
    render(cn) {
        return (
            <div className={cn('test')}>1</div>
        );
    }
};

export default MainPage;
