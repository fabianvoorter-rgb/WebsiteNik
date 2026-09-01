import ImageGrid from '../components/ImageGrid'

const illustrations = [
  { src: 'https://freight.cargo.site/w/700/i/F2093530267216245843818393495907/koffietcacao_nik-scaled.jpg', alt: 'Koffie & Cacao illustration' },
  { src: 'https://freight.cargo.site/w/700/i/O2096423858558908408206736877923/insta.jpg', alt: 'Instagram illustration' },
  { src: 'https://freight.cargo.site/w/700/i/J2096537831361339453049786198371/burnout-final-2.jpg', alt: 'Burnout illustration' },
  { src: 'https://freight.cargo.site/w/700/i/W2096423858429781199690770016611/gentsegek-insta-scaled.jpg', alt: 'Gentse Gek illustration' },
  { src: 'https://freight.cargo.site/w/700/i/Y2096423859093863986344313874787/voorinternet-vuilnisman-scaled.jpg', alt: 'Vuilnisman illustration' },
  { src: 'https://freight.cargo.site/w/700/i/J2096423858909396545607218358627/restart.jpg', alt: 'Restart illustration' },
  { src: 'https://freight.cargo.site/w/700/i/S2096423858780269337091251497315/N-1-1-scaled.jpg', alt: 'N illustration' },
  { src: 'https://freight.cargo.site/w/700/i/H2096423858669588872648994187619/krraks3voointernet.jpg', alt: 'Krraks illustration' },
  { src: 'https://freight.cargo.site/w/700/i/T2096423858595801896354155981155/kattenkwaat22-scaled.jpg', alt: 'Kattenkwaad illustration' },
  { src: 'https://freight.cargo.site/w/700/i/T2096423859149204218565442529635/wolfworms-2-M-2.jpg', alt: 'Wolfworms illustration' },
  { src: 'https://freight.cargo.site/w/700/i/B2096535766561935050518545164643/voor-paulo.jpg', alt: 'Voor Paulo illustration' },
  { src: 'https://freight.cargo.site/w/700/i/U2096423859001630265975766116707/the-brabanter3-scaled.jpg', alt: 'The Brabanter illustration' },
  { src: 'https://freight.cargo.site/w/700/i/O2093530267179352355670974392675/friesetaal-Groot.jpg', alt: 'Friese Taal illustration' },
  { src: 'https://freight.cargo.site/w/700/i/Q2096423858651142128575284636003/koriander-scaled.jpg', alt: 'Koriander illustration' },
  { src: 'https://freight.cargo.site/w/700/i/C2096423859038523754123185219939/voorinstaoo-scaled.jpg', alt: 'Illustration' },
  { src: 'https://freight.cargo.site/w/700/i/B2096423858854056313386089703779/paradiso.jpg', alt: 'Paradiso illustration' },
  { src: 'https://freight.cargo.site/w/700/i/M2096423858688035616722703739235/laatstebom22a-scaled.jpg', alt: 'Laatste Bom illustration' },
  { src: 'https://freight.cargo.site/w/700/i/Q2096423858614248640427865532771/kikkersvoorinterent.jpg', alt: 'Kikkers illustration' },
  { src: 'https://freight.cargo.site/w/700/i/N2096423858890949801533508807011/republiek-test-scaled.jpg', alt: 'Republiek illustration' },
  { src: 'https://freight.cargo.site/w/700/i/A2096423858872503057459799255395/raum-poster-nog-meer.jpg', alt: 'Raum Poster illustration' },
  { src: 'https://freight.cargo.site/w/700/i/J2096423858761822593017541945699/medusa5a-scaled.jpg', alt: 'Medusa illustration' },
  { src: 'https://freight.cargo.site/w/700/i/H2096423858964736777828347013475/spook.jpg', alt: 'Spook illustration' },
  { src: 'https://freight.cargo.site/w/700/i/W2096423859056970498196894771555/voorinsta-scaled.jpg', alt: 'Illustration' },
  { src: 'https://freight.cargo.site/w/700/i/Q2096423858927843289680927910243/S.jpg', alt: 'S illustration' },
  { src: 'https://freight.cargo.site/w/700/i/G2096423858835609569312380152163/papiaments-4.jpg', alt: 'Papiaments illustration' },
  { src: 'https://freight.cargo.site/w/700/i/S2096423858724929104870122842467/leugenwedstrijd_kleeur-scaled.jpg', alt: 'Leugenwedstrijd illustration' },
  { src: 'https://freight.cargo.site/w/700/i/F2096423858983183521902056565091/testpersoonhardhoofd-scaled.jpg', alt: 'Hardhoofd illustration' },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
      <ImageGrid images={illustrations} />
    </main>
  )
}
