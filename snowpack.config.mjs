import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';

// @ts-check
export default /** @type {import("snowpack").SnowpackUserConfig } */ {
  plugins: [
    [
      'snowpack-plugin-imagemin',
      {
        /* see "Plugin Options" below */
        include: ['**/*.jpg', '**/*.jpeg', '**/*.png'],
        plugins: [
          imageminMozjpeg({quality: 90, progressive: true}),
          imageminOptipng({optimizationLevel: 7}),
        ],
      },
    ],
  ],
}
