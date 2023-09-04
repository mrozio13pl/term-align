'use strict';

const windowSize = require('window-size');
const stringWidth = require('string-width');
const repeatString = require('n-string');
const widestLine = require('widest-line');
const { isPercent, getPercent } = require('string-percent');

function align(input, _options = {}, options = {}) {
    if (typeof input !== 'string') {
        return new TypeError(`Expected input to be a \`string\`, received \`${typeof input}\``);
    }

    var { align = 'left', offset = 0, textAlign = align } = typeof _options === 'string' ? { align: _options, offset: 0, textAlign: _options, ...options } : _options;
    
    const windowWidth = windowSize.get().width;
    const lines = input.split('\n');
    const widest = widestLine(input);

    if (isPercent(offset, { allowNumber: false })) {
        offset = getPercent(offset) * windowWidth / 100;
    }
    
    var res = '';

    lines.forEach((str, i) => {
        var n;

        switch (align) {
            case 'center': {
                n = Math.max(0, ~~(windowWidth / 2 - stringWidth(str) / 2) + offset);
                break;
            }
            case 'right': {
                n = Math.max(0, windowWidth - stringWidth(str) - offset);
                break;
            }
            default: {
                n = Math.max(0, offset);
                break;
            }
        }

        res += repeatString(' ', n + calcPad(str, widest, align, textAlign)) + str;

        if (lines.length !== 1 && i !== lines.length - 1) res += '\n';
    });

    return res;
}

function calcPad(str, widest, align, textAlign) {
    const diff = widest - stringWidth(str);

    if (diff === 0) return diff;

    switch (align) {
        case 'center': {
            switch (textAlign) {
                case 'left': return -diff / 2;
                case 'right': return diff / 2;
                case 'center': default: return 0;
            }
        }
        case 'left': {
            switch (textAlign) {
                case 'center': return diff / 2;
                case 'right': return diff;
                case 'left': default: return 0;
            }
        }
        case 'right': {
            switch (textAlign) {
                case 'left': return -diff;
                case 'center': return -diff / 2;
                case 'right': default: return 0;
            }
        }
        default:
            return 0;
    }
}

module.exports = align;