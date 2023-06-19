import { useIntl, FormattedMessage } from "react-intl";

const Contact = () => {
  const intl = useIntl();
  const name = intl.formatMessage({ id: "contact.form.name" });
  const email = intl.formatMessage({ id: "contact.form.email" });
  const subject = intl.formatMessage({ id: "contact.form.subject" });
  const message = intl.formatMessage({ id: "contact.form.message" });
  return (
    <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
      <h2 className="w3-text-light-grey">
        <FormattedMessage id="contact.title" />
      </h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />

      <div className="w3-section">
        <p>
          <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
          <FormattedMessage id="contact.address" />
        </p>
        <p>
          <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
          <FormattedMessage id="contact.phone" />
        </p>
        <p>
          <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
          <FormattedMessage id="contact.mail" />
        </p>
      </div>
      <br />
      <p>
        <FormattedMessage id="contact.form.title" />
      </p>

      <form action="/action_page.php" target="_blank">
        <p>
          <input className="w3-input w3-padding-16" type="text" placeholder={name} required name="Name" />
        </p>
        <p>
          <input className="w3-input w3-padding-16" type="text" placeholder={email} required name="Email" />
        </p>
        <p>
          <input className="w3-input w3-padding-16" type="text" placeholder={subject} required name="Subject" />
        </p>
        <p>
          <input className="w3-input w3-padding-16" type="text" placeholder={message} required name="Message" />
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-padding-large" type="submit">
            <i className="fa fa-paper-plane"></i>
            <FormattedMessage id="contact.form.submit" />
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
