import ImageGrid from '../components/ImageGrid'

const logos = [
  { src: 'https://freight.cargo.site/w/700/i/S2107618399012720560293993900387/logo.png', alt: 'Nik Heemskerk logo' },
]

export default function Logos() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16">
      <h1 className="mb-12 text-3xl font-bold tracking-tight">Logo&apos;s</h1>
      {logos.length > 1 ? (
        <ImageGrid images={logos} />
      ) : (
        <p className="text-muted">More logo work coming soon.</p>
      )}
    </main>
  )
}
