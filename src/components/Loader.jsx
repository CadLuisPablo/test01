import { FormattedMessage } from "react-intl";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>
        <FormattedMessage id="loader.text" />
      </p>
    </div>
  );
}
