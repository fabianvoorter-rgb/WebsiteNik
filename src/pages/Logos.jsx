import ImageGrid from '../components/ImageGrid'

const logos = [
  { src: `${import.meta.env.BASE_URL}illustrations/logo.webp`, alt: 'Nik Heemskerk logo' },
]

export default function Logos() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-0">
      <h1 className="mb-12 text-3xl font-bold tracking-tight">Logo&apos;s</h1>
      {logos.length > 1 ? (
        <ImageGrid images={logos} />
      ) : (
        <p className="text-muted">More logo work coming soon.</p>
      )}
    </main>
  )
}
