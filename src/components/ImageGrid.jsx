import { useState } from 'react'

export default function ImageGrid({ images }) {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(img)}
            className="mb-4 block w-full cursor-pointer overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt || ''}
              loading="lazy"
              className="w-full rounded transition-transform duration-300 hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt={selected.alt || ''}
            className="max-h-[90vh] max-w-[90vw] rounded shadow-2xl"
          />
        </div>
      )}
    </>
  )
}
