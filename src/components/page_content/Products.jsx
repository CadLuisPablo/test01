import { FormattedMessage } from "react-intl";
import feederPrices from "../../prices.json";

// ...

const Products = () => {
  return (
    <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="products">
      <h2 className="w3-text-light-grey">
        <FormattedMessage id="products.title" />
      </h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />
      <p>
        <FormattedMessage id="products.text.01" />
      </p>
      <p>
        <FormattedMessage id="products.text.02" />
      </p>
      <p>
        <FormattedMessage id="products.text.03" />
      </p>
      <p>
        <FormattedMessage id="products.text.04" />
      </p>
      <p>
        <FormattedMessage id="products.text.05" />
      </p>
      <p>
        <FormattedMessage id="products.text.06" />
      </p>
      <p>
        <FormattedMessage id="products.text.07" />
      </p>
      <p>
        <FormattedMessage id="products.text.08" />
      </p>
      <br />
      <h2 className="w3-text-light-grey">
        <FormattedMessage id="products.horsefeeder.title" />
      </h2>
      <p>
        <FormattedMessage id="products.horsefeeder.description" />
      </p>

      {/* DOWNLOAD BUTTON */}
      {/* <button className="w3-button w3-light-grey w3-padding-large w3-section">
        <i className="fa fa-download"></i> Download Resume
      </button> */}

      {/* Grid for pricing tables */}
      <div>
        <h3 className="w3-padding-16 w3-text-light-grey">
          <FormattedMessage id="products.horsefeeder.prices.title" />
        </h3>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half3 w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">
                <FormattedMessage id="products.horsefeeder.01.title" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.01.description" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.01.material" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.01.roof" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.01.doors" />
              </li>
              <li className="w3-padding-16">
                <h2>{feederPrices["products.horsefeeder.square.price"]}</h2>
                <span className="w3-opacity">-</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">
                  <FormattedMessage id="products.horsefeeder.purchase" />
                </button>
              </li>
            </ul>
          </div>

          <div className="w3-half3">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">
                <FormattedMessage id="products.horsefeeder.02.title" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.02.description" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.02.material" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.02.roof" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.02.doors" />
              </li>
              <li className="w3-padding-16">
                <h2>{feederPrices["products.horsefeeder.round.price"]}</h2>
                <span className="w3-opacity">-</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">
                  <FormattedMessage id="products.horsefeeder.purchase" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w3-half3">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">
                <FormattedMessage id="products.horsefeeder.03.title" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.03.description" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.03.material" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.03.roof" />
              </li>
              <li className="w3-padding-16">
                <FormattedMessage id="products.horsefeeder.03.doors" />
              </li>
              <li className="w3-padding-16">
                <h2>{feederPrices["products.horsefeeder.double.price"]}</h2>
                <span className="w3-opacity">-</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">
                  <FormattedMessage id="products.horsefeeder.purchase" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* End Grid/Pricing tables */}
      </div>
    </div>
  );
};

export default Products;
