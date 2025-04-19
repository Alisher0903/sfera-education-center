import {Colors} from "@/types/color"

const colors: Colors = {
    white: '#FFFFFF',
    grayText: '#777777',
    green: '#1CA855',
    yellow: '#ffbb3c',
    blue: '#62c8ff',
    black: 'black'
}

export default colors

export const color = (name: string) => {
    return {
        white: `${name}-white`,
        grayText: `${name}-[#777777]`,
        green: `${name}-[#1CA855]`,
        yellow: `${name}-[#ffbb3c]`,
        blue: `${name}-[#62c8ff]`,
        black: `${name}-black`
    }
}
  