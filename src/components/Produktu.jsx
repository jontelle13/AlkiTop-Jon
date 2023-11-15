export const Produktu = ({ irudia, izena, balorazioa, erabiltzailea, testua, prezioa, data }) => {
    return (
      <>
        <div className="  card border w-25">
          <img src={irudia} alt='' className="card-img-top w-full"></img>
          <div className="card-body">
            <h2 id="izena" className="card-title font-bold">{izena}</h2>
            <div id="balorazioa" className="card-text">
              {balorazioa}
            </div>
            <h3 id="erabiltzailea" className="card-subtitle text-xl">{erabiltzailea}</h3>
            <label id="testua" className="card-text ">{testua}</label>
          </div>
          <div id="prezioa" className="">
            <div className="d-flex justify-content-center">
              <label className="text-2xl">{prezioa}</label>
              <label className="text-sm">{data}</label>
            </div>
          </div>
        </div>
      </>
    );
  };
  