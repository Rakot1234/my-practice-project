import images from '../constants/images';

export const convertImage = image => {
    let siteImage;

    switch(true) {
        case image === 'makita':
            siteImage = images.MAKITA_LOGO;
            break;
        case image === 'karcher':
            siteImage = images.KARCHER_LOGO;
            break;
        case image === 'bosch':
            siteImage = images.BOSH_LOGO;
            break;
        default:
            break;
    }

    return siteImage;
};
