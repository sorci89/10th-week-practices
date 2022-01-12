import Picture1 from "./MG_8461-scaled.jpg";
import Picture2 from "./esterno1.jpg";

function Intro() {
  return (
    <div className="intro">
      <div className="introPicture">
        <img src={Picture1} alt="picture1" id="introPicture1"></img>
      </div>
      <div className="introPicture">
        <img src={Picture2} alt="picture2" id="introPicture2"></img>
      </div>
      <div className="introText"></div>
    </div>
  );
}

export default Intro;
