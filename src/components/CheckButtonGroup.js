import '../icons/check';
import config from 'veui/managers/config';

config.defaults(
    {
        ui: {
            size: {
                values: ['s', 'm', 'l'],
                default: 's',
                inherit: true
            }
        },
        parts: {
            button: 'normal'
        },
        icons: {
            check: 'check'
        }
    },
    'checkbuttongroup'
);
