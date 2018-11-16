/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf192"
namespace custom {

    /**
     * Get the acceleration value for the x-axis in range of 0..4 
     * (0..1 means tilt right,
     *  2 means laying flat on the surface,
     *  3..4 means tilt left)
     */
    //% block
    export function tiltx(): number {
        return ((input.acceleration(Dimension.X) + 1024) * 5) / 2048;
    }

    /**
     * Get the acceleration value for the y-axis in range of 0..4 
     * (0..1 means tilt front,
     *  2 means laying flat on the surface,
     *  3..4 means tilt back)
     */
    //% block
    export function tilty(): number {
        return ((input.acceleration(Dimension.Y) + 1024) * 5) / 2048;
    }
}
