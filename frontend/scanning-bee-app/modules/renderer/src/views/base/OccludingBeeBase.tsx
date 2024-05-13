/* eslint-disable max-len */
import React from 'react';

export const OccludingBeeBase = (props: {
    color: string,
    opacity?: number,
    width?: string | number,
    height?: string | number,
}) => {
    const { color, opacity, width, height } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width || 30}
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height={height || 30}
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            className='occluding-bee'
        >
            <path
                fill={color || '#FFFFFF'}
                fillOpacity={opacity || 1}
                d="M 121.144531 257 L 253.871094 257 C 253.734375 257.648438 253.527344 258.273438 253.25 258.875 C 251.917969 261.636719 250.488281 264.308594 249.15625 266.980469 C 245.589844 274.011719 241.832031 281.324219 237.925781 288.449219 C 237.4375 289.0625 236.84375 289.546875 236.144531 289.902344 C 235.445312 290.257812 234.703125 290.457031 233.921875 290.492188 C 203.160156 290.675781 171.921875 290.675781 141.011719 290.492188 C 140.363281 290.5 139.734375 290.378906 139.132812 290.132812 C 138.527344 289.886719 137.996094 289.53125 137.535156 289.070312 C 133.082031 280.605469 128.628906 271.875 124.351562 263.4375 L 121.214844 257.359375 C 121.214844 257.269531 121.144531 257.078125 121.144531 257 Z M 153.910156 324.566406 C 157.191406 328.734375 160.898438 332.480469 165.03125 335.800781 C 169.167969 339.125 173.625 341.9375 178.402344 344.238281 L 178.402344 365.660156 C 178.402344 366.261719 178.460938 366.859375 178.578125 367.449219 C 178.695312 368.039062 178.871094 368.609375 179.101562 369.164062 C 179.332031 369.71875 179.613281 370.25 179.945312 370.746094 C 180.28125 371.246094 180.660156 371.710938 181.085938 372.136719 C 181.511719 372.558594 181.972656 372.941406 182.472656 373.273438 C 182.972656 373.609375 183.5 373.890625 184.054688 374.121094 C 184.609375 374.351562 185.183594 374.523438 185.773438 374.640625 C 186.363281 374.757812 186.957031 374.816406 187.558594 374.816406 C 188.160156 374.816406 188.753906 374.757812 189.34375 374.640625 C 189.933594 374.523438 190.507812 374.351562 191.0625 374.121094 C 191.617188 373.890625 192.144531 373.609375 192.644531 373.273438 C 193.144531 372.941406 193.605469 372.558594 194.03125 372.136719 C 194.457031 371.710938 194.835938 371.246094 195.171875 370.746094 C 195.503906 370.25 195.785156 369.71875 196.015625 369.164062 C 196.246094 368.609375 196.421875 368.039062 196.539062 367.449219 C 196.65625 366.859375 196.714844 366.261719 196.714844 365.660156 L 196.714844 343.863281 L 196.890625 343.777344 C 200.445312 342.15625 203.808594 340.203125 206.976562 337.917969 C 216.433594 330.542969 224.222656 321.703125 230.347656 311.390625 L 144.398438 311.390625 C 147.203125 316.042969 150.375 320.4375 153.910156 324.566406 Z M 112.273438 92.761719 L 111.703125 92.914062 C 111.945312 83.285156 113.882812 74.007812 117.511719 65.082031 L 117.613281 64.8125 C 118.472656 62.738281 119.464844 60.636719 120.59375 58.511719 C 120.988281 57.78125 121.363281 56.980469 121.785156 56.242188 C 122.5625 54.886719 123.480469 53.539062 124.378906 52.183594 C 125.0625 51.167969 125.691406 50.121094 126.421875 49.152344 C 126.570312 48.953125 126.664062 48.757812 126.820312 48.566406 C 129.714844 44.796875 132.957031 41.355469 136.554688 38.246094 C 135.105469 35.125 133.371094 32.171875 131.34375 29.390625 C 129.011719 26.527344 126.410156 23.929688 123.539062 21.605469 C 121.195312 19.875 118.726562 18.355469 116.125 17.042969 C 115.613281 16.734375 115.132812 16.378906 114.691406 15.976562 C 114.246094 15.574219 113.84375 15.132812 113.484375 14.652344 C 113.125 14.171875 112.816406 13.664062 112.558594 13.125 C 112.296875 12.582031 112.089844 12.023438 111.9375 11.445312 C 111.789062 10.863281 111.691406 10.277344 111.65625 9.675781 C 111.617188 9.078125 111.636719 8.484375 111.714844 7.890625 C 111.792969 7.296875 111.925781 6.714844 112.117188 6.144531 C 112.304688 5.578125 112.546875 5.03125 112.84375 4.511719 C 113.453125 3.492188 114.226562 2.617188 115.164062 1.890625 C 116.105469 1.164062 117.144531 0.636719 118.285156 0.308594 C 119.476562 0.0117188 120.683594 -0.0585938 121.898438 0.101562 C 123.117188 0.261719 124.265625 0.636719 125.339844 1.230469 C 131.617188 4.382812 137.148438 8.535156 141.929688 13.679688 C 144.535156 16.484375 146.875 19.492188 148.953125 22.703125 C 150.019531 24.375 150.980469 26.101562 151.839844 27.890625 C 159.105469 24.246094 166.742188 21.714844 174.75 20.296875 C 175.570312 20.148438 176.398438 20.015625 177.21875 19.898438 C 180.199219 19.429688 183.199219 19.144531 186.21875 19.042969 L 186.277344 19.042969 C 189.125 19.027344 191.960938 19.1875 194.789062 19.527344 C 196.164062 19.664062 197.542969 19.878906 198.925781 20.097656 C 201.183594 20.464844 203.621094 20.933594 206.25 21.5625 L 207.539062 21.972656 C 213.011719 23.414062 218.273438 25.402344 223.328125 27.941406 C 224.199219 26.132812 225.175781 24.382812 226.257812 22.691406 C 228.335938 19.484375 230.675781 16.484375 233.277344 13.6875 C 238.046875 8.542969 243.5625 4.390625 249.828125 1.230469 C 250.90625 0.636719 252.050781 0.261719 253.269531 0.101562 C 254.484375 -0.0585938 255.691406 0.0117188 256.882812 0.308594 C 258.027344 0.632812 259.074219 1.160156 260.019531 1.886719 C 260.964844 2.613281 261.742188 3.488281 262.355469 4.511719 C 262.648438 5.03125 262.890625 5.578125 263.082031 6.144531 C 263.269531 6.714844 263.402344 7.296875 263.480469 7.890625 C 263.558594 8.484375 263.578125 9.078125 263.539062 9.675781 C 263.503906 10.273438 263.40625 10.863281 263.253906 11.445312 C 263.105469 12.023438 262.898438 12.582031 262.636719 13.121094 C 262.378906 13.660156 262.070312 14.171875 261.710938 14.652344 C 261.351562 15.132812 260.949219 15.574219 260.507812 15.976562 C 260.0625 16.378906 259.585938 16.734375 259.074219 17.042969 C 256.472656 18.355469 254.003906 19.875 251.660156 21.605469 C 248.785156 23.941406 246.183594 26.542969 243.851562 29.421875 C 241.84375 32.183594 240.117188 35.113281 238.675781 38.210938 C 242.003906 41.117188 245.035156 44.308594 247.765625 47.78125 C 247.96875 48.046875 248.1875 48.296875 248.394531 48.558594 C 248.597656 48.824219 248.695312 48.902344 248.839844 49.101562 C 251.152344 52.273438 253.210938 55.605469 255.007812 59.09375 C 256.808594 62.582031 258.328125 66.1875 259.570312 69.910156 C 260.8125 73.636719 261.761719 77.433594 262.421875 81.300781 C 263.078125 85.171875 263.433594 89.070312 263.488281 92.996094 C 261.351562 92.226562 259.277344 91.449219 257.191406 90.679688 C 256.148438 90.292969 255.082031 89.914062 254.046875 89.523438 C 252.488281 88.9375 250.941406 88.382812 249.390625 87.804688 C 245.726562 86.433594 242.066406 85.046875 238.402344 83.738281 C 230.828125 81.011719 223.101562 78.273438 215.308594 75.558594 C 207.515625 72.839844 199.652344 70.152344 191.8125 67.5 C 190.59375 67.132812 189.347656 66.953125 188.070312 66.964844 C 186.21875 67.003906 184.40625 67.300781 182.636719 67.859375 C 169.878906 72.253906 157.097656 76.808594 144.476562 81.335938 L 131.863281 85.847656 L 125.097656 88.242188 L 112.710938 92.636719 Z M 238.585938 38.136719 L 238.753906 37.742188 C 238.703125 37.878906 238.644531 37.996094 238.585938 38.136719 Z M 136.597656 38.203125 C 136.53125 38.050781 136.457031 37.910156 136.390625 37.757812 Z M 361.664062 168.902344 C 358.210938 163.910156 354.167969 159.449219 349.535156 155.523438 C 344.90625 151.597656 339.84375 148.339844 334.351562 145.75 C 308.089844 132.277344 281.039062 120.636719 253.199219 110.835938 C 241.707031 106.441406 230.390625 102.457031 218.363281 98.101562 C 213.558594 96.3125 208.570312 94.621094 203.671875 92.753906 L 203.671875 93.015625 C 204.03125 94.324219 204.476562 95.601562 205.003906 96.847656 C 208.125 105.316406 211.332031 113.597656 214.445312 121.96875 C 223.175781 145.21875 232.175781 169.269531 241.617188 192.699219 C 247.375 206.863281 254.292969 220.429688 262.375 233.40625 C 263.753906 235.734375 265.296875 237.949219 267 240.050781 C 268.703125 242.152344 270.550781 244.117188 272.542969 245.949219 C 274.535156 247.78125 276.648438 249.457031 278.882812 250.980469 C 281.117188 252.503906 283.453125 253.855469 285.886719 255.035156 C 288.320312 256.21875 290.828125 257.214844 293.40625 258.03125 C 295.984375 258.847656 298.609375 259.46875 301.28125 259.902344 C 303.953125 260.332031 306.640625 260.570312 309.34375 260.609375 C 312.050781 260.648438 314.742188 260.488281 317.425781 260.132812 C 322.46875 259.566406 327.359375 258.359375 332.089844 256.511719 C 336.820312 254.667969 341.238281 252.246094 345.335938 249.25 C 349.585938 246.183594 353.402344 242.652344 356.78125 238.648438 C 360.164062 234.644531 363.007812 230.289062 365.316406 225.585938 C 366.429688 223.363281 367.390625 221.078125 368.203125 218.730469 C 369.011719 216.382812 369.664062 213.992188 370.15625 211.558594 C 370.652344 209.121094 370.980469 206.664062 371.148438 204.1875 C 371.320312 201.707031 371.324219 199.230469 371.164062 196.75 C 371.003906 194.269531 370.679688 191.8125 370.195312 189.375 C 369.710938 186.941406 369.066406 184.546875 368.265625 182.195312 C 367.460938 179.84375 366.507812 177.554688 365.402344 175.332031 C 364.296875 173.105469 363.050781 170.964844 361.664062 168.902344 Z M 160.605469 123.648438 C 164.53125 113.394531 168.449219 103.140625 172.457031 92.886719 C 172.386719 92.875 172.328125 92.847656 172.28125 92.796875 C 172.097656 92.796875 171.921875 92.886719 171.746094 92.886719 C 171.195312 93.019531 170.660156 93.199219 170.140625 93.421875 C 161.226562 96.714844 152.234375 100.011719 143.328125 103.308594 C 124.886719 110.074219 105.734375 117.113281 87.113281 124.421875 C 67.117188 131.660156 48.113281 140.933594 30.101562 152.242188 C 28.902344 153.027344 27.734375 153.855469 26.597656 154.726562 C 25.457031 155.597656 24.355469 156.507812 23.285156 157.464844 C 22.214844 158.417969 21.183594 159.410156 20.1875 160.441406 C 19.191406 161.472656 18.238281 162.539062 17.320312 163.640625 C 16.40625 164.746094 15.53125 165.878906 14.699219 167.046875 C 13.867188 168.214844 13.082031 169.410156 12.339844 170.636719 C 11.597656 171.863281 10.902344 173.117188 10.253906 174.394531 C 9.609375 175.671875 9.007812 176.972656 8.457031 178.296875 C 7.90625 179.621094 7.402344 180.960938 6.953125 182.320312 C 6.503906 183.683594 6.101562 185.058594 5.753906 186.449219 C 5.40625 187.839844 5.109375 189.238281 4.867188 190.652344 C 4.621094 192.066406 4.429688 193.484375 4.292969 194.910156 C 4.15625 196.335938 4.070312 197.765625 4.039062 199.199219 C 4.007812 200.632812 4.03125 202.066406 4.109375 203.496094 C 4.183594 204.925781 4.3125 206.355469 4.496094 207.777344 C 4.675781 209.195312 4.914062 210.609375 5.199219 212.015625 C 6.003906 215.910156 7.183594 219.6875 8.734375 223.351562 C 10.289062 227.011719 12.183594 230.484375 14.421875 233.773438 C 16.664062 237.058594 19.203125 240.097656 22.042969 242.878906 C 24.882812 245.664062 27.964844 248.144531 31.296875 250.320312 C 34.527344 252.488281 37.933594 254.324219 41.523438 255.824219 C 45.113281 257.320312 48.816406 258.457031 52.628906 259.226562 C 56.441406 260 60.292969 260.394531 64.183594 260.40625 C 68.074219 260.421875 71.929688 260.058594 75.746094 259.3125 C 77.925781 258.878906 80.066406 258.320312 82.179688 257.636719 C 84.292969 256.953125 86.359375 256.148438 88.375 255.226562 C 90.394531 254.304688 92.355469 253.269531 94.253906 252.117188 C 96.152344 250.96875 97.976562 249.710938 99.730469 248.347656 C 101.480469 246.988281 103.148438 245.527344 104.734375 243.972656 C 106.316406 242.417969 107.804688 240.777344 109.199219 239.046875 C 110.59375 237.320312 111.878906 235.515625 113.066406 233.640625 C 114.25 231.761719 115.320312 229.820312 116.28125 227.820312 C 123.46875 214.609375 129.972656 201.070312 135.792969 187.199219 C 144.214844 166.140625 152.59375 144.492188 160.605469 123.648438 Z M 150.628906 203.914062 C 145.640625 213.976562 140.480469 224.488281 134.859375 236.242188 L 239.867188 236.242188 L 239.691406 235.804688 C 234.523438 224.933594 229.351562 214.152344 224.1875 203.578125 C 223.625 202.996094 222.941406 202.699219 222.136719 202.683594 C 209.222656 202.59375 195.953125 202.59375 182.496094 202.59375 C 172.707031 202.59375 162.808594 202.59375 152.835938 202.683594 C 151.941406 202.8125 151.207031 203.222656 150.628906 203.914062 Z M 202.207031 149.304688 L 201.78125 149.128906 L 201.78125 148.769531 L 199.585938 142.449219 C 198.070312 138.054688 196.558594 133.710938 194.957031 129.265625 L 192.632812 122.945312 C 191.039062 118.308594 189.347656 113.765625 187.558594 108.691406 L 185.777344 113.855469 C 181.324219 126.238281 177.320312 137.46875 173.328125 148.777344 L 173.054688 149.222656 C 172.746094 149.671875 172.476562 150.148438 172.25 150.644531 C 169.585938 157.867188 166.824219 164.898438 164.0625 171.9375 L 160.496094 181.023438 C 160.316406 181.394531 160.199219 181.777344 160.144531 182.183594 L 215.074219 182.183594 L 211.957031 174.125 C 208.710938 165.785156 205.503906 157.46875 202.207031 149.304688 Z M 202.207031 149.304688 "
                fillRule="nonzero"
            />
        </svg>
    );
};
