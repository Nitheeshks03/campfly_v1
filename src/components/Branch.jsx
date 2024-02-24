import "../App.css";

function Branch() {
  return (
    <div className="branch-container m-4">
      <h2 className="text-3xl font-bold ml-24 md:ml-20 mt-8 mb-2">
        Our Branch
      </h2>

      <div className="border border-gray-300 ml-20 mr-20 md:mr-20 mt-8 p-4 rounded-xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-4 px-4">
          <h3 className="text-3xl font-bold mb-2">
            <span className="camplify-h3">Camplify</span> Kerala
          </h3>
          <p className="text-xl-gray-600 mb-4 leading-relaxed">
            campfly private limited <br />
            104, S Janatha Rd, Palarivattom, Kochi, Kerala 682025, India
            <br />
            Kochi, Kerala 682025 <br />
            India <br />
            Phone: (+91)8891999253 <br />
            info@campfly.in
          </p>
        </div>

        <div className="w-full md:w-1/2 rounded-lg mt-4 md:mt-0">
          <iframe
            title="Branch Location"
            width="100%"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.6102703710478!2d76.30161620030167!3d9.998633246958141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4e59653fdc0d17%3A0xc486ef600804bf01!2sCampfly%20Private%20Limited!5e0!3m2!1sen!2sin!4v1707057799179!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Branch;
