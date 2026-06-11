import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const Terms = () => (
  <div className="document-container">
    <Link to="/" className="back-link">
      &larr; Back to Home
    </Link>

    <div className="document-header">
      <h1>Terms & Conditions</h1>
      <p className="effective-date">Effective Date: November 08, 2024</p>
    </div>

    <div className="document-content">
      <p>
        These terms and conditions applies to the Smart App Manager app
        (hereby referred to as "Application") for mobile devices that was created
        by Gunjan Kumar (hereby referred to as "Service Provider") as a Free
        service.
      </p>

      <h2>1. Usage and Restrictions</h2>
      <p>
        Upon downloading or utilizing the Application, you are automatically
        agreeing to the following terms. It is strongly advised that you
        thoroughly read and understand these terms prior to using the Application.
        Unauthorized copying, modification of the Application, any part of the
        Application, or our trademarks is strictly prohibited. Any attempts to
        extract the source code of the Application, translate the Application into
        other languages, or create derivative versions are not permitted. All
        trademarks, copyrights, database rights, and other intellectual property
        rights related to the Application remain the property of the Service
        Provider.
      </p>

      <h2>2. Service Modifications</h2>
      <p>
        The Service Provider is dedicated to ensuring that the Application is as
        beneficial and efficient as possible. As such, they reserve the right to
        modify the Application or charge for their services at any time and for
        any reason. The Service Provider assures you that any charges for the
        Application or its services will be clearly communicated to you.
      </p>

      <h2>3. Device Security</h2>
      <p>
        The Application stores and processes data locally on your device to provide 
        the Service. It is your responsibility to maintain the security of your phone 
        and access to the Application. The Service Provider strongly advise against jailbreaking or
        rooting your phone, which involves removing software restrictions and
        limitations imposed by the official operating system of your device. Such
        actions could expose your phone to malware, viruses, malicious programs,
        compromise your phone's security features, and may result in the
        Application not functioning correctly or at all.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Please note that the Application utilizes third-party services that have
        their own Terms and Conditions. Below are the links to the Terms and
        Conditions of the third-party service providers used by the Application:
      </p>
      <ul>
        <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
        <li><a href="https://developers.google.com/admob/terms" target="_blank" rel="noopener noreferrer">AdMob</a></li>
        <li><a href="https://www.google.com/analytics/terms/" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
      </ul>

      <h2>5. Connectivity and Charges</h2>
      <p>
        Please be aware that the Service Provider does not assume responsibility
        for certain aspects. Some functions of the Application require an active
        internet connection, which can be Wi-Fi or provided by your mobile network
        provider. The Service Provider cannot be held responsible if the
        Application does not function at full capacity due to lack of access to
        Wi-Fi or if you have exhausted your data allowance.
      </p>
      <p>
        If you are using the application outside of a Wi-Fi area, please be aware
        that your mobile network provider's agreement terms still apply.
        Consequently, you may incur charges from your mobile provider for data
        usage during the connection to the application, or other third-party
        charges.
      </p>

      <h2>6. Liability</h2>
      <p>
        In terms of the Service Provider's responsibility for your use of the
        application, it is important to note that while they strive to ensure that
        it is updated and accurate at all times, they do rely on third parties to
        provide information to them so that they can make it available to you. The
        Service Provider accepts no liability for any loss, direct or indirect,
        that you experience as a result of relying entirely on this functionality
        of the application.
      </p>

      <h2>7. Updates and Termination</h2>
      <p>
        The Service Provider may wish to update the application at some point. The
        application is currently available as per the requirements for the
        operating system may change, and you will need to
        download the updates if you want to continue using the application. The
        Service Provider does not guarantee that it will always update the
        application. The Service Provider may also wish to cease providing the 
        application and may terminate its use at any time without providing termination notice to you.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        The Service Provider may periodically update their Terms and Conditions.
        Therefore, you are advised to review this page regularly for any changes.
        The Service Provider will notify you of any changes by posting the new
        Terms and Conditions on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions about the Terms and Conditions,
        please do not hesitate to contact the Service Provider at: 
        <br />
        <strong>Email:</strong> <a href="mailto:gunjan.shrma@hotmail.com">gunjan.shrma@hotmail.com</a>
      </p>
    </div>
  </div>
);
