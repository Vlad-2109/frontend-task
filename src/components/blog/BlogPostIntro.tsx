import { Link } from "react-router-dom";

const BlogPostIntro = () => {
  return (
    <div className="flex flex-col gap-5 py-10">
      <p>
        <strong>
          Kaj vse je potrebno narediti na WordPress spletni strani, da ta ostane
          agilna, varna in ažurna?
        </strong>{" "}
        Če boste vzdrževanje opravljali redno, vam bo le-to vzelo malo časa, v
        »zahvalo« pa bo vaša spletna stran visoko zmogljiva.
      </p>
      <p>
        Najprej pa se nam pojavi vprašanje, kaj je to redno? Predlagamo vam, da
        naredite celoten pregled WordPress spletne strani{" "}
        <strong>vsaj na tri mesece.</strong> Odpravo varnostnih lukenj pa
        predlagamo takoj, ko se pojavijo.
      </p>
      <p>
        Če menite, da tega znanja nimate in da boste vzdrževanje težko opravili
        sami ali samo enostavno nimate časa, potem vam je tukaj lahko v pomoč
        naša WordPress tehnična podpora.{" "}
        <Link to="#" className="font-bold">
          Zabec.net{" "}
        </Link>{" "}
        vam namreč ponuja poseben{" "}
        <strong>
          paket vzdrževanja WordPress spletnih strani, paket Lokvanj –
        </strong>{" "}
        <Link
          to="#"
          className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
          Več
        </Link>
        , vzdrževanje pa bo opravljeno <strong>vsak mesec!</strong>
      </p>
    </div>
  );
};

export default BlogPostIntro;
