import {Montserrat, Raleway} from 'next/font/google'
import localFont from 'next/font/local';

export const raleway = Raleway({
    subsets: ['latin', 'latin-ext', 'cyrillic'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const montserrat = Montserrat({
    subsets: ['latin', 'latin-ext', 'cyrillic'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const ltWaveUI = localFont({
    src: [
        {
            path: './LTWaveUI.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './LTWaveUI.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-lt-wave',
    display: 'swap',
});
