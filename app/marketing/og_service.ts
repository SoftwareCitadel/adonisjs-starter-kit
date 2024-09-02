import satori, { SatoriOptions } from 'satori'
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'
import { cwd } from 'node:process'
import env from '#start/env'

export default class OGService {
  async generateImage(text: string): Promise<Buffer> {
    /**
     * Load the Roboto font from the public directory.
     */
    const fontPath = path.join(cwd(), 'public', 'Roboto-Bold.ttf')
    const fontData = await fs.readFile(fontPath)

    /**
     * Generate the SVG using Satori.
     */
    const svg = await satori(
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '150px 100px',
            background: 'white',
            fontFamily: 'Roboto',
            color: 'back',
          },
          children: [
            {
              type: 'img',
              props: {
                src: `${env.get('APP_URL')}/logo.png`,
                alt: 'Logo',
                width: 100,
                height: 100,
              },
            },
            {
              type: 'h1',
              props: {
                style: {
                  fontSize: '62px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '20px',
                },
                children: text,
              },
            },
          ].filter(Boolean),
        },
      } as unknown as React.ReactNode,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Roboto',
            data: fontData,
            style: 'normal',
            weight: 700,
          },
        ],
      } as SatoriOptions
    )

    /**
     * Convert the SVG to a PNG buffer.
     */
    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer()

    return pngBuffer
  }
}
