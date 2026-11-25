export default function Comics() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-28 pb-16 md:pt-0">
      {/* Vis op het Droge */}
      <section className="mb-24">
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
          <img
            src={`${import.meta.env.BASE_URL}comics/schermopname-1-12-2024-20239-www-instagram-com.webp`}
            alt="Vis op het Droge cover"
            width={800}
            height={804}
            className="w-full max-w-xs rounded shadow-lg"
          />
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Vis op het Droge</h2>
            <p className="mb-2 text-sm uppercase tracking-widest text-muted">
              40 pagina&apos;s &middot; Softcover &middot; Nederlandstalig &middot; Uitgeverij Collectie Hoekhuis
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Nadat hun ouders overlijden zijn Zus, Grote Broer, Kleine Broer en Junior helemaal op
              zichzelf aangewezen. Hulpeloos en hongerig verlaten ze het ouderlijk huis om hulp te
              zoeken in het naburige dorp. Maar niemand lijkt hun te willen helpen. De wanhoop nabij
              krijgt Zus uiteindelijk hulp door een mysterieus wezen. Maar is zijn hulp ook echt een
              zegen?
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Stripmaker Nik Heemskerk schreef en tekende dit duistere sprookje waarin een zus en
              haar drie broers proberen te overleven in Middeleeuwse tijden. Het verhaal is een
              hommage aan de sprookjes van weleer, zoals die van de Gebroeders Grimm. In &apos;Vis op
              het Droge&apos; speelt de stripmaker met thema&apos;s zoals magie, macht en moraal. En
              zoals in elk goed sprookje is het maar de vraag wat de scheidslijn is tussen goed en
              kwaad.
            </p>
            <a
              href="https://www.studiohoekhuis.nl/c-4629608/graphic-novels-nederlandstalig/"
              target="_blank"
              rel="noopener noreferrer"
              className="wiggle mt-8 inline-block rounded-full border-2 border-ink px-8 py-3 text-lg font-medium uppercase tracking-widest transition-colors hover:bg-ink hover:text-cream"
            >
              Buy &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Going up in Smoke */}
      <section className="mb-24">
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
          <img
            src={`${import.meta.env.BASE_URL}comics/hardcover-book-mockup-2-2.webp`}
            alt="Going up in Smoke mockup"
            width={800}
            height={569}
            className="w-full max-w-xs rounded shadow-lg"
          />
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Going Up in Smoke</h2>
            <p className="mb-2 text-sm uppercase tracking-widest text-muted">
              Graphic Novel &middot; In collaboration with Milo Cremer Eindhoven
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Smoking recently bumped off Grandma Bep, and youngster Nik is alarmed; will staunch
              smoker Uncle Rob face a similar fate?! Hell-bent on saving him, Nik barges into
              Rob&apos;s home to cut him off, however his Uncle quickly informs him he&apos;s been
              fed preposterous lies; smoking is a gift that keeps on giving! And he can know, he
              wrote a book about it…
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Going Up In Smoke is Uncle Rob&apos;s life&apos;s work, which he&apos;s finally
              decided to share with the world. Two years ago illustrator Nik Heemskerk wondered; why
              do we smoke? Two years on, after months of research and an illustration degree, Nik
              still hasn&apos;t a clue… Nevertheless, he made a graphic novel about it.
            </p>
            <a
              href="https://www.thebriesspace.be/product/going-up-in-smoke-nik-heemskerk-milo-cremer-eindhov"
              target="_blank"
              rel="noopener noreferrer"
              className="wiggle mt-8 inline-block rounded-full border-2 border-ink px-8 py-3 text-lg font-medium uppercase tracking-widest transition-colors hover:bg-ink hover:text-cream"
            >
              Buy &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border pt-12">
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
          Stripmaker Nik Heemskerk studeerde aan de HKU en begon na zijn afstuderen een loopbaan als
          illustrator en stripmaker. In zijn werk laat hij zich o.a. inspireren door strips en
          animatie uit de eerste helft van de twintigste eeuw. Het handschrift van de stripmaker
          kenmerkt zich door groteske vormen en absurdisme, met personages die soms ongemakkelijk
          aanvoelen. Op dit moment is de stripmaker bezig met een graphic novel rond
          Napoleon&apos;s veldtocht naar Rusland, waar hij in 2021 de Wiep Westerdorp
          Stimuleringsprijs voor ontving.
        </p>
      </section>
    </main>
  )
}
