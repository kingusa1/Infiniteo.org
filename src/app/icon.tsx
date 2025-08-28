import { ImageResponse } from 'next/og'
 
export const dynamic = "force-static";
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
            src="https://infiniteo.org/infiniteo.png" 
            alt="Infiniteo Logo"
            width={55}
            height={55}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
