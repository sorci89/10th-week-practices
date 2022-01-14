import Picture1 from "./MG_8461-scaled.jpg";
import Picture2 from "./esterno1.jpg";

function Intro() {
  return (
    <div className="intro" id="Rólunk">
      <div className="introPicture">
        <img src={Picture1} alt="picture1" id="introPicture1"></img>
      </div>
      <div className="introPicture">
        <img src={Picture2} alt="picture2" id="introPicture2"></img>
      </div>
      <div className="introText">
        <p>
          Az első Team 4 Pizzéria 1958-ban az Amerikai Egyesült Államokban nyílt
          meg.
        </p>
        <p>
          Jelenleg több mint 90 országban van Pizza Hut étterem, jelentős részük
          nem a cég tulajdonában van, hanem franchise szerződés alapján működik.
        </p>
        <p>
          Magyarországon 1992. április 1-jén Budapesten, a Király utca és a
          Nagykörút sarkán nyitotta meg első éttermét, melyet további 15 egység
          követett, Budapesten kívül Győrben, Pécsett, Miskolcon és Szegeden is.
        </p>
        <p>
          Az amerikai típusú serpenyős (deep pan) pizza kedveltté vált a
          korábban ismert olaszos vékony pizzatészták mellett. A Pizza Hut
          vezette be a szervezett formában működő házhoz szállítási
          szolgáltatást Magyarországon.
        </p>
      </div>
    </div>
  );
}

export default Intro;
