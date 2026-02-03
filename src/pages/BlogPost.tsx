import { Link } from "react-router-dom";
import { BlogPostIntro, BlogSection, TasksList } from "../components/blog";
import BlogDownloadCard from "../components/common/BlogDownloadCard";

const BlogPost = () => {
  return (
    <div className="bg-[#ECF3ED] dark:bg-[#2F3A4D]">
      <h1
        className="font-(family-name:--font-montserrat) text-[32px] text-center
    lg:text-left  dark:text-gray-300 font-black max-w-[500px] md:max-w-[800px] mx-auto px-5 py-20">
        Vzdrževanje WordPress Spletne Strani
      </h1>

      <div className="w-full bg-white dark:bg-gray-800 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] bg-[length:16px_16px] pb-22">
        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[800px] m-auto text-base dark:text-gray-300 font-(family-name:--font-anonymous) font-normal">
          <BlogPostIntro />
          <TasksList />

          <BlogSection title="Sprememba gesel">
            <p>
              Gesla so vaša prva obrambna linija, boljše ko bo geslo, težje ga
              bo ugotoviti. Predlagamo, da geslo vsebuje
              <strong>vsaj 7 znakov</strong>, med njimi naj bodo{" "}
              <strong>velika, mala začetnica, številka, poseben znak.</strong>{" "}
              Kljub temu, pa se tudi takšno geslo lahko ugotovi (sicer manj
              pogosto), prav zato je pomembno, da tudi gesla redno spreminjamo.
            </p>
            <p>
              Začnite pri spremembi administratorskega WordPress gesla, gesla za
              FTP in SSH dostop ter spremenite tudi geslo za WordPress
              podatkovno bazo. V kolikor imate več uporabnikov, ki pišejo za vas
              bloge ali imajo svoje dostope, naj svoja gesla prav tako redno
              spreminjajo.
            </p>
            <p>
              Naši varnostni strokovnjaki so na to temo pripravili obsežen
              e-vodič Varna WordPress spletna stran, ki si ga lahko prenesete{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                tukaj
              </Link>
              .
            </p>
          </BlogSection>

          <BlogSection title="Varnostna kopija spletne strani">
            <p>
              Varnostna kopija je tudi pri vzdrževanju
              <strong> najpomembnejša stvar,</strong> kajti tudi pri vzdrževanju
              se lahko kaj zalomi, s tem pa lahko ostanemo brez dela ali celotne
              spletne strani. Pri{" "}
              <Link to="#" className="font-bold">
                Zabec.net{" "}
              </Link>{" "}
              vam ponujamo varnostne kopije, ki so shranjene do 30 dni za nazaj.
              Seveda pa vam prav tako predlagamo, da si jih ustvarite sami.
            </p>
            <p>
              Varnostno kopijo si najlažje ustvarite z WordPress vtičniki.
              Pripravili smo vam zapis –{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                TOP 5 vtičnikov za Varnostno kopijo
              </Link>
              .
            </p>
            <p>
              Varnostno kopijo in restore WordPress spletne strani pa si lahko
              uredite tudi v kontrolni plošči gostovanja. Naša WordPress
              strokovna podpora, je pripravila zapisa, kako si varnosto kopijo
              in restore lahko uredite na kontrolni plošči Direct Admin:
            </p>
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
              <BlogDownloadCard
                text="Backup spletne strani v DirectAdmin (WordPress)"
                size="PDF, 15 mb"
              />
              <BlogDownloadCard
                text="Backup spletne strani v DirectAdmin (WordPress)"
                size="PDF, 15 mb"
              />
            </div>

            <p className="mt-4">
              Naši varnostni strokovnjaki so na to temo pripravili obsežen{" "}
              <strong>e-vodič Varna WordPress spletna stran</strong>, ki si ga
              lahko prenesete{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                tukaj
              </Link>
              .
            </p>
          </BlogSection>

          <BlogSection title="Posodobitev WordPressa">
            <p>
              Uporabljajte vedno zadnjo (<strong>najnovejšo različico</strong>)
              WordPress jedra, teme in vtičnikov. To lahko naredite tako, da pod
              WordPress Updates preverite ali vam je na voljo kakšna posodobitev
              in na kateri različici se nahajate sedaj.
            </p>
            <BlogDownloadCard
              text="Kako posodobiti WordPress - Navodila"
              size="WORD, 116 mb"
              width="w-full"
              justify="start"
              textFullWidth={true}
            />
          </BlogSection>

          <BlogSection title="Optimizacija slik">
            <p>
              Optimizacija slik je izjemno pomembna tudi{" "}
              <strong>zaradi hitrosti vaše spletne strani</strong>, namreč slike
              se nalagajo dlje časa kot sam tekst. Pomembno je, da na stran oz.
              v administracijo naložite že optimizirane slike (saj bodo
              prevelike slike obremenjevale tudi vašo WordPress administracijo).
            </p>
            <p>
              Naši WordPress strokovnjaki so pripravili{" "}
              <strong>
                e-vodič 25 nasvetov kako izboljšati hitrost WordPress spletne
                strani
              </strong>
              . Vodič vam je na voljo{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                tukaj
              </Link>
              .
            </p>
            <strong>
              Priporočamo, da imate slike v .png (ali .svg) obliki.
            </strong>
            <p>
              .png oblika je v samem začetku ne-stisnjena, vendar ko jo
              stisnemo, slika sicer izgubi nekaj informacij, vendar še vedno
              ostane dovolj kvalitetna. Če imate enostavnejše slike, torej ne
              postavljate dizajnerske ali fotografske strani (v tem primeru vam
              priporočamo obliko .jpg), ali potrebujete transparentno sliko,
              potem je .png prava izbira.
            </p>
            <strong>
              Kako stisnemo slike brez da bi izgubili celotno kvaliteto?{" "}
            </strong>
            <p>
              Uporabimo lahko različna orodja:
              <ul className="list-disc pl-6 text-base font-(family-name:--font-anonymous)">
                <li>Adobe Photoshop</li>
                <li>GIMP</li>
                <li>Bulk Resize Photos</li>
                <li>ImageOptim (za Mac) ali Trimage (za Windows)</li>
                <li>
                  Za optimizacijo slik pa lahko uporabite tudi vtičnik Smush
                  Image Compression and Optimization.
                </li>
              </ul>
            </p>
          </BlogSection>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
