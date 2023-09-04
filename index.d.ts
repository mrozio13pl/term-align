/**
 * Alignment options for aligning text.
 */
declare type Alignment = 'left' | 'center' | 'right';

/**
 * Options for aligning text.
 */
declare interface AlignmentOptions {
    /**
     * Alignment of the text.
     */
    align: Alignment;

    /**
     * Offset to adjust the alignment.
     */
    offset: number | string;

    /**
     * Text alignment within the alignment width.
     */
    textAlign: Alignment;
}

/**
 * Utility for aligning text based on terminal's size.
 * 
 * @param input - The input string to be aligned.
 * @param options - Alignment options to configure how the string should be aligned.
 * @param _options - Additional options if the second argument is an `Alignment`.
 * @returns {String} The aligned string.
 * 
 * @example
 * ```js
 * const align = require('term-align');
 * 
 * console.log(align('Hello, world!', 'center')); // <= centered: '      Hello, world!      '
 * console.log(align('Another example.', { align: 'right', offset: 1 })); // <= '        Another example. '
 * console.log(align('Multiple lines\nWorks', { align: 'center', textAlign: 'right' }));
 * // Returns:
 * // '      Multiple lines      '
 * // '               Works      '
 * ```
 */
declare function align(input: string, options?: AlignmentOptions | Alignment, _options?: AlignmentOptions): string;

export = align;
