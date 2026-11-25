import ImageGrid from '../components/ImageGrid'

const base = import.meta.env.BASE_URL

// 800px thumbnail for the grid, 1800px for the lightbox
const local = (name, width, height, alt = '') => ({
  src: `${base}illustrations/${name}-800.webp`,
  full: `${base}illustrations/${name}-1800.webp`,
  width,
  height,
  alt,
})

const illustrations = [
  local('2-jpg', 1273, 1800),
  local('3-png', 1800, 1012),
  local('2-png', 1800, 678),
  local('burnout-final-2-jpg', 1414, 1800, 'Burnout illustration'),
  local('gentsegek-jpg', 1273, 1800, 'Gentse Gek illustration'),
  local('friesetaal', 1800, 1601, 'Friese Taal illustration'),
  local('uitstervende-taal-5b', 1800, 1576),
  local('vrijnederland-cover', 1350, 1800, 'Vrij Nederland cover'),
  local('voor-nimeto-jpg', 1510, 1800),
  local('spread-cmyk-jpg', 1800, 1149),
  local('cafe-heeswijk-jpg', 1800, 1236, 'Café Heeswijk illustration'),
  local('aminozuren-proefschrift-print-zondergelelijn', 1800, 1271),
  local('kerndoelennederlands-a-jpg', 1800, 1285),
  local('more-edpresso-les-depresso-insta-jpg', 1221, 1800),
  local('hopsterslak2insta-png', 1240, 877),
  local('voorinsta-jpg', 1273, 1800),
  local('voorinsta-png', 1800, 1277),
  local('wobby-niklayers-1', 1246, 1800),
  local('wobby-niklayers-2-jpg', 1246, 1800),
  local('insta', 1800, 1800, 'Instagram illustration'),
  local('kattenkwaat22', 1268, 1800, 'Kattenkwaad illustration'),
  local('kikkersvoorinterent', 1800, 1524, 'Kikkers illustration'),
  local('koffietcacao-nik', 1482, 1800, 'Koffie & Cacao illustration'),
  local('koriander', 1800, 1800, 'Koriander illustration'),
  local('krraks3voointernet', 1800, 1398, 'Krraks illustration'),
  local('laatstebom22a', 1268, 1800, 'Laatste Bom illustration'),
  local('leugenwedstrijd-kleeur', 1273, 1800, 'Leugenwedstrijd illustration'),
  local('medusa5a', 1800, 1294, 'Medusa illustration'),
  local('n-1-1', 1787, 1800, 'N illustration'),
  local('papiaments-4', 1800, 1109, 'Papiaments illustration'),
  local('paradiso', 1800, 1800, 'Paradiso illustration'),
  local('raum-poster-nog-meer', 1280, 1800, 'Raum Poster illustration'),
  local('republiek-test', 1440, 1800, 'Republiek illustration'),
  local('restart', 1286, 1800, 'Restart illustration'),
  local('s', 1463, 1508, 'S illustration'),
  local('spook', 768, 768, 'Spook illustration'),
  local('testpersoonhardhoofd', 1708, 1800, 'Hardhoofd illustration'),
  local('the-brabanter3', 1800, 1800, 'The Brabanter illustration'),
  local('voor-paulo', 1491, 1800, 'Voor Paulo illustration'),
  local('voorinstaoo', 1800, 1800, 'Illustration'),
  local('voorinternet-vuilnisman', 1770, 1800, 'Vuilnisman illustration'),
  local('wolfworms-2-m-2', 1246, 1178, 'Wolfworms illustration'),
]

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-0">
      <ImageGrid images={illustrations} />
    </main>
  )
}
