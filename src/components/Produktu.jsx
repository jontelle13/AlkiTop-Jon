export const Produktu = ({ irudia, izena, balorazioa, erabiltzailea, testua, prezioa, data }) => {
    return (
      <>
        <div className="card border w-24 mx-2">
          <img src={irudia} alt='' className="card-img-top w-full w-irudi"></img>
          <div className="card-body">
            <h2 id="izena" className="d-flex justify-content-center font-bold ">{izena}</h2>
            <div id="balorazioa" className="h4 d-flex justify-content-end mt-3">
              {balorazioa}
            </div>
            <h3 id="erabiltzailea" className="">{erabiltzailea}</h3>
            <label id="testua" className="mt-2">{testua}</label>
          </div>
          <div id="prezioa" className="">
            <div className="d-flex justify-content-center align-items-center">
              <label className="h4">{prezioa}</label>
              <label className="text-sm">{data}</label>
            </div>
          </div>
        </div>
      </>
    );
  };
  