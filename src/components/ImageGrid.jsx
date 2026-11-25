import { useCallback, useEffect, useState } from 'react'

const lightboxButton =
  'wiggle absolute z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-cream/90 text-3xl text-ink shadow-lg transition-colors hover:bg-cream md:h-16 md:w-16 md:text-4xl'

export default function ImageGrid({ images }) {
  const [index, setIndex] = useState(null)
  const selected = index === null ? null : images[index]

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  )
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (index === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, close, next, prev])

  // Warm the cache for the neighbouring full-size images
  useEffect(() => {
    if (index === null) return
    ;[(index + 1) % images.length, (index - 1 + images.length) % images.length].forEach((i) => {
      new Image().src = images[i].full || images[i].src
    })
  }, [index, images])

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className="mb-6 block w-full cursor-pointer overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt || ''}
              width={img.width}
              height={img.height}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded transition-transform duration-300 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            className={`${lightboxButton} top-4 right-4`}
            aria-label="Close"
          >
            &times;
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className={`${lightboxButton} left-3 top-1/2 -translate-y-1/2 md:left-6`}
                aria-label="Previous"
              >
                &larr;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className={`${lightboxButton} right-3 top-1/2 -translate-y-1/2 md:right-6`}
                aria-label="Next"
              >
                &rarr;
              </button>
            </>
          )}
          <img
            key={selected.src}
            src={selected.full || selected.src}
            alt={selected.alt || ''}
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="max-h-[92vh] max-w-[92vw] cursor-pointer rounded shadow-2xl"
          />
        </div>
      )}
    </>
  )
}
