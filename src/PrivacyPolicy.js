import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const PrivacyPolicy = () => (
  <div className="document-container">
    <Link to="/" className="back-link">
      &larr; Back to Home
    </Link>

    <div className="document-header">
      <h1>Privacy Policy</h1>
      <p className="effective-date">Effective Date: June 11, 2026</p>
    </div>

    <div className="document-content">
      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how Smart App Manager ("the App") handles your data. 
        The App is designed with privacy as a priority. Its primary functionalities—managing 
        installed applications and monitoring app usage—operate entirely on your device. We are 
        committed to complying with Google Play Store policies and global privacy laws by 
        minimizing data collection and ensuring complete transparency.
      </p>

      <h2>2. Core Permissions and Local Data Processing</h2>
      <p>
        To provide its core features, Smart App Manager requires certain restricted Android 
        permissions. We strictly adhere to the principle of local data processing.
      </p>

      <h3>A. QUERY_ALL_PACKAGES Permission (Broad Package Visibility)</h3>
      <p>
        The App's core feature is managing your installed applications, which includes functionalities 
        like APK extraction, uninstallation, and app backup. To perform these actions, the App requires 
        the <code>QUERY_ALL_PACKAGES</code> permission to access the list of applications installed on your device.
      </p>
      <ul>
        <li><strong>Data Handling & Privacy:</strong> The list of installed applications is processed <strong>100% locally</strong> on your device. This data is <strong>NEVER</strong> collected, transmitted, shared, uploaded, or stored on any external servers.</li>
      </ul>

      <h3>B. PACKAGE_USAGE_STATS Permission (App Usage Data)</h3>
      <p>
        The App features a "Screen Time & Activity Dashboard" that requires Android's Usage Access 
        (<code>PACKAGE_USAGE_STATS</code>) permission to read your foreground screen time and activity.
      </p>
      <ul>
        <li><strong>Data Handling & Privacy:</strong> This app usage data is processed strictly locally to generate usage charts and insights for you within the App. This data is <strong>NEVER</strong> collected, stored remotely, monetized, or shared with any third parties.</li>
      </ul>

      <h2>3. Third-Party Services & Monetization</h2>
      <p>
        The App uses third-party services for monetization, specifically Google AdMob, to display advertisements.
      </p>
      <ul>
        <li><strong>Google AdMob:</strong> AdMob may collect and use certain information, such as the Android Advertising ID and other device identifiers, to serve personalized or non-personalized ads.</li>
        <li>For detailed information on how Google collects, uses, and processes this data, please review the direct link to the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</li>
      </ul>

      <h2>4. Data Retention and Deletion</h2>
      <p>
        We believe that you should have full control over your data. Because no personal data, 
        package data, or usage statistics are ever transmitted to or stored on our servers, there 
        are no remote accounts or remote data to delete.
      </p>
      <p>You can completely delete all associated local data at any time simply by:</p>
      <ol style={{ marginLeft: "24px", marginBottom: "20px" }}>
        <li style={{ marginBottom: "8px" }}>Clearing the App's data or cache within your Android device's Settings.</li>
        <li style={{ marginBottom: "8px" }}>Uninstalling the App from your device.</li>
      </ol>

      <h2>5. Children's Privacy</h2>
      <p>
        These Services do not address anyone under the age of 13. We do not knowingly collect 
        personally identifiable information from children under 13. In the case we discover that 
        a child under 13 has provided us with personal information, we immediately delete this from 
        our servers (though, as stated above, we do not store personal data on our servers to begin with).
      </p>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time to reflect changes in our practices or 
        to comply with updated Google Play Store policies. You are advised to review this page 
        periodically for any changes. Changes are effective immediately after they are posted on this page.
      </p>

      <h2>7. Contact Information</h2>
      <p>
        If you have any privacy-related questions, concerns, or requests regarding this Privacy Policy, 
        please contact the developer directly at:
      </p>
      <p><strong>Email:</strong> <a href="mailto:gunjan.shrma@hotmail.com">gunjan.shrma@hotmail.com</a></p>
    </div>
  </div>
);
