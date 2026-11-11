// Draft Privacy Policy (St. Thomas More, Nov 11, 2026). Attorney review recommended before publication.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta(
    "Privacy Policy — Rooted Growth Digital (Draft)",
    "Draft Privacy Policy for the Rooted Growth Digital website, operated by IronRoot Consulting LLC.",
    "/privacy",
  ),
  component: Page,
});

function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      note={
        <>
          <p><strong>DRAFT — not legal advice. Attorney review recommended before publication. Do not publish or send until Andrew approves and the remaining placeholders are resolved.</strong></p>
        </>
      }
      dates={
        <>
          <p>Effective date: [DATE]<br />
          Last updated: [DATE]</p>
        </>
      }
    >
          <p className="text-sm text-muted-foreground">Prepared November 11, 2026, and revised the same day after Andrew’s decisions (relayed by St. Bernard at 12:11 PM ET), for Andrew Malby / IronRoot Consulting LLC. Based on the approved IronRoot Consulting Privacy Policy at <a href="https://ironrootstrategy.com/privacy.html" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://ironrootstrategy.com/privacy.html</a> (effective and last updated November 7, 2026; fetched November 11, 2026). This draft is for <a href="https://rootedgrowthdigital.com/" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://rootedgrowthdigital.com/</a> only.</p>
          <div className="rounded-xl border border-gold bg-gold/15 px-4 py-4 text-sm">
            <p><strong>Before publishing, remove this boxed note and complete the following:</strong></p>
            <ul className="list-disc space-y-2 pl-5">
            <li>Replace [DATE] with the real publication date (do not backdate).</li>
            <li>The site's form opens the visitor's own email app (mailto); no third-party form provider.</li>
            <li>Scheduler / booking tool: Google Calendar booking page.</li>
            <li>Contact email: <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a>.</li>
            <li>Replace [GA RETENTION SETTING] with the retention period actually set in the Google Analytics account.</li>
            <li>Confirm that the IronRoot phone number and mailing address below are the ones to use for this Site.</li>
            <li>[IF GOOGLE FONTS ARE USED] remains optional. Keep or delete it to match the live Site. Do not leave other brackets in the live page.</li>
          </ul>
          </div>
          <p>This Privacy Policy explains how IronRoot Consulting LLC, which operates Rooted Growth Digital (“Rooted Growth Digital,” “we,” “us,” or “our”), collects, uses, and shares information in connection with the website <a href="https://rootedgrowthdigital.com/" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://rootedgrowthdigital.com/</a> (the “Site”), including when you use the contact form, book a call, email us, or telephone us using the contact details on the Site.</p>

          <p>Rooted Growth Digital is a service of IronRoot Consulting LLC, a Florida limited liability company. IronRoot Consulting LLC is the operator of the Site and the party that decides how personal information collected through the Site is used.</p>

          <p>This policy applies only to the Rooted Growth Digital website. It does not apply to other businesses or products of IronRoot Consulting LLC that may use a different name or a different site, including <a href="https://ironrootstrategy.com/" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://ironrootstrategy.com/</a>, and it does not replace the privacy policies of third parties we link to. In particular, when you book a call you may leave our Site and use appointment-scheduling pages operated by a third-party scheduler, Google Calendar booking page, which are covered by that provider’s own terms and privacy policy.</p>

          <p>If you do not want us or our service providers to collect information as described here, please do not use the Site, submit the contact form, book a call, or contact us.</p>

          <h2 className="text-2xl">Who we are</h2>

          <p>IronRoot Consulting LLC<br />
          Rooted Growth Digital is a service of IronRoot Consulting LLC, a Florida limited liability company.<br />
          5052 Pope John Paul II Blvd, Suite 108-23<br />
          Ave Maria, FL 34142<br />
          United States</p>

          <p>Email: <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a><br />
          Telephone: (239) 341-4766 (+12393414766)</p>

          <p className="text-sm italic text-muted-foreground">Andrew should confirm this telephone number and mailing address for Rooted Growth Digital before publication. The Site footer should use the phrase “A service of IronRoot Consulting LLC.”</p>

          <h2 className="text-2xl">1. Information we collect</h2>

          <p><strong>A. Information you choose to send</strong></p>

          <p>The Site does not have user accounts, a newsletter signup, a chat tool, or a checkout, and it does not process payments. Here are the ways you can reach us or request time with us:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Contact form.</strong> The Site includes a contact form. The form may collect information you enter, such as your name, business name, email address, telephone number, and message. The site's form opens the visitor's own email app (mailto); no third-party form provider.</li>
            <li><strong>Booking a call.</strong> A booking button on the Site opens appointment-scheduling pages operated by a third-party scheduler, Google Calendar booking page, in a new window or tab or as an embedded tool. That booking form is hosted by Google Calendar booking page, not by a form we build ourselves. The scheduler may require information such as your name and email address, and may also ask for other details you choose to enter, such as a phone number, company name, or message. Google Calendar booking page provides the booking information to us so we can schedule and hold the call. That provider’s own terms and privacy policy apply to those pages.</li>
            <li><strong>Email.</strong> If you write to <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a>, we receive your email address and whatever you include in the message.</li>
            <li><strong>Telephone.</strong> If you call (239) 341-4766 (+12393414766), we may receive the number you call from, if it is available, and whatever you tell us on the call.</li>
            <li><strong>Mail.</strong> If you write to the address above, we receive whatever you send.</li>
          </ul>

          <p>Please do not send sensitive information — for example a Social Security number, bank-account or payment-card number, or health information — through the Site, a contact form, a booking form, or an unsolicited email. The Site does not ask for payment information and does not process payments.</p>

          <p><strong>B. Information collected automatically when you visit the Site</strong></p>

          <p>When you load a page on the Site, our hosting provider and the third-party services included on the page may automatically receive technical information. That can include:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>your IP address;</li>
            <li>approximate location derived from your IP address (such as city, region, or country);</li>
            <li>browser type, device type, language, and screen resolution;</li>
            <li>the pages you view, the date and time of the visit, the referring site, and similar usage information; and</li>
            <li>a client identifier stored in a first-party cookie so analytics software can distinguish visits and sessions.</li>
          </ul>

          <p>These requests happen when the pages load. The Site does not currently display a cookie-consent banner or a cookie-settings panel.</p>

          <p><strong>C. Information we receive from service providers</strong></p>

          <p>The site's form opens the visitor's own email app (mailto); no third-party form provider. Google Calendar booking page may send us the details of appointments booked through the schedule described above. Google may send us reports about how the Site is used.</p>

          <p>We also use Google Search Console as a webmaster tool to understand how the Site appears in Google Search. Search Console provides aggregated performance information (such as queries, impressions, and clicks). It is not a form on our Site, it does not place a script on the Site, and it does not set cookies in a visitor’s browser. Search Console does not, by itself, trigger the cookie and analytics disclosure in this policy. Google Analytics is the tool that sets cookies on visitors’ browsers and is what requires that disclosure.</p>

          <h2 className="text-2xl">2. How we use information</h2>

          <p>We use the information described above to:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>respond to inquiries and schedule, confirm, and hold introductory calls and any website or digital-services work you later ask us to do;</li>
            <li>operate, maintain, secure, and understand use of the Site;</li>
            <li>improve the Site and our services;</li>
            <li>communicate with you about your inquiry or an engagement, including scheduling and next steps; and</li>
            <li>comply with law, enforce our rights, and protect IronRoot Consulting LLC, our visitors, and others.</li>
          </ul>

          <p>We do not sell personal information, and we do not disclose personal information in exchange for money.</p>

          <p>If you have contacted us, we may use your email address to reply and to follow up about scheduling or a possible engagement. The Site does not include a newsletter signup. We will not send marketing email unless you have consented to receive it. If we later send commercial email whose primary purpose is to advertise or promote our services, we will identify the message as advertising where required, include our postal address, and honor opt-out requests as required by the CAN-SPAM Act, including a clear way to unsubscribe. You may also opt out by emailing <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a> and asking to be removed from marketing messages. Transactional or relationship messages — for example, a reply to your inquiry or scheduling follow-up — are not marketing email.</p>

          <h2 className="text-2xl">3. How we share information</h2>

          <p>We share information with the companies that help us operate the Site and communicate with you. Those companies process information under their own terms and privacy policies. We do not control their independent collection.</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>The site's form opens the visitor's own email app (mailto); no third-party form provider.</li>
            <li><strong>Google Calendar booking page</strong>, for appointment scheduling;</li>
            <li><strong>Google LLC and its affiliates</strong>, for Google Analytics and Google Search Console / Google Search;</li>
            <li>[IF GOOGLE FONTS ARE USED: **Google LLC and its affiliates**, for Google Fonts;]</li>
            <li>our website hosting provider; and</li>
            <li>any email or communications provider we use to receive and reply to messages.</li>
          </ul>

          <p className="text-sm italic text-muted-foreground">Keep or delete the Google Fonts bullet to match the live Site. Add the hosting provider’s legal name if Andrew wants it disclosed. Do not invent vendors.</p>

          <p>The pages of the Site do not include separate advertising pixels or social-media tracking pixels (for example a Meta or LinkedIn pixel).<br />
          <em>Do not publish that sentence if such a pixel is later added; disclose the pixel instead.</em></p>

          <p>Google Analytics does load on the Site, as described below, and Google Calendar booking page collects information if you open a booking link.</p>

          <p>We may also disclose information:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>if we believe disclosure is required by law, legal process, or a government request, or to protect rights, safety, or property;</li>
            <li>in connection with a merger, sale, financing, or transfer of all or part of our business, if that ever occurs;</li>
            <li>with your direction or consent; and</li>
            <li>to professional advisors (such as an attorney) who are obligated to keep it confidential, when that is needed to serve you or to run the practice.</li>
          </ul>

          <h2 className="text-2xl">4. Cookies, analytics, fonts, and hosting</h2>

          <p>The Site’s own web server may not set cookies when it delivers a page. Other technologies on or linked from the Site may still collect information, including through cookies set in your browser.</p>

          <p><strong>Google Analytics.</strong> The Site uses Google Analytics, which loads as soon as a page loads. According to Google, a default Analytics implementation collects information such as number of users, session statistics, approximate geolocation, and browser and device information, and may store a client ID in first-party cookies named _ga and _ga_ followed by a container identifier (Google’s documented default duration is up to two years, though your browser may shorten that). Google may receive your IP address in order to derive approximate location. We have not independently described every setting inside our Analytics account in this policy. Analytics data is retained according to our Google Analytics setting of [GA RETENTION SETTING], and according to Google’s practices.<br />
          <em>Replace [GA RETENTION SETTING] with the retention period actually configured in the Analytics account (for example, “14 months”). Do not reuse the IronRoot Consulting measurement ID. A Rooted Growth Digital measurement ID may be added here once assigned.</em></p>

          <p>Google Search Console does not set cookies in a visitor’s browser and is not what requires this cookie disclosure. Google Analytics is.</p>

          <p>[IF GOOGLE FONTS ARE USED: **Google Fonts.** The Site loads fonts from Google’s servers. Google states that the Google Fonts Web API is unauthenticated and that the Google Fonts API does not set or log cookies. A font request may still include your IP address, the requested font address, and standard browser information such as user agent and referring page. Google states that it does not use information collected by Google Fonts to create profiles of end users or for targeted advertising.]<br />
          <em>Keep this subsection if the live Site loads fonts from Google’s servers. Delete it if fonts are self-hosted or otherwise not requested from Google.</em></p>

          <p><strong>Google Calendar booking page.</strong> When you open a booking link, you use Google Calendar booking page’s service. That provider may set its own cookies on its domains and collect information under its own privacy policy.</p>

          <p><strong>Hosting.</strong> The Site is hosted by a third-party hosting provider. When you visit the Site, that provider may log your IP address and related technical information for security, delivery, and operations.<br />
          <em>Add the hosting provider’s legal name here once hosting is confirmed.</em></p>

          <p><strong>Your choices about cookies and analytics.</strong> You can use your browser settings to block or delete cookies, including the Google Analytics cookies described above. Blocking cookies may limit our ability to understand how the Site is used, or may affect a third-party form or scheduler; it does not stop you from emailing or calling us. Google also offers a browser add-on designed to opt out of Google Analytics, available at <a href="https://tools.google.com/dlpage/gaoptout" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</p>

          <p><strong>Do Not Track and other parties.</strong> Our Site does not currently respond to browser “Do Not Track” signals. Google may collect information about your use of the Site through Google Analytics when pages load. [IF GOOGLE FONTS ARE USED: Google may also receive information through Google Fonts when pages load.] Google Calendar booking page may collect information if you open a booking link. We do not control whether or how those providers combine that information with information from other services you use.</p>

          <h2 className="text-2xl">5. Retention</h2>

          <p>We keep information you send us — including contact-form submissions, emails, notes from telephone calls, and booking details we receive — for as long as needed to respond, schedule, keep a record of our communications, and administer any engagement that follows, and longer if the law requires it or a dispute requires it.</p>

          <p>Analytics data is retained according to our Google Analytics setting of [GA RETENTION SETTING] and Google’s practices. We do not control how long our hosting provider or other vendors retain their logs.</p>

          <h2 className="text-2xl">6. Security</h2>

          <p>We use reasonable administrative and technical measures appropriate to a small professional practice and a hosted website. No method of transmission or storage is completely secure. Please use care when sending information by email, through a contact form, or through a third-party booking page.</p>

          <h2 className="text-2xl">7. Your choices and requests</h2>

          <p>You can choose not to submit the contact form, book a call, email us, or telephone us.</p>

          <p>You can limit cookies through your browser settings, or through the Google Analytics opt-out add-on described above.</p>

          <p>You may ask us what personal information we have about you from a Site inquiry or booking, ask us to correct it, or ask us to delete it, by emailing <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a> or writing to the address above. We will consider reasonable requests. We may need to retain some information if the law requires it or to complete something you asked us to do.</p>

          <p>To change or cancel a booked appointment, use the tools Google Calendar booking page provides in your booking confirmation, or contact us.</p>

          <p>This section describes choices we offer. It does not mean that a particular privacy statute — including the Florida Digital Bill of Rights or the California Consumer Privacy Act — applies to us or gives you additional legal rights.</p>

          <p>Based on the current public thresholds, we do not believe the Florida Digital Bill of Rights or the California Consumer Privacy Act applies to IronRoot Consulting LLC. The Florida law’s “controller” definition includes a global gross annual revenue threshold of more than $1 billion, plus an additional qualifying activity. The California law applies to a business that does business in California and meets at least one threshold, including annual gross revenue above the currently adjusted amount of $26,625,000, buying, selling, or sharing the personal information of 100,000 or more consumers or households, or deriving 50 percent or more of annual revenue from selling or sharing consumers’ personal information. Those statutes can change, and this is not a legal determination.</p>

          <p><strong>Do not sell.</strong> We do not sell personal information, and we do not disclose personal information in exchange for money. If that practice ever changed, we would update this policy before it did.</p>

          <h2 className="text-2xl">8. Children</h2>

          <p>The Site is directed to adults who are considering professional website and digital services for businesses. It is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided personal information to us, please contact us and we will delete it.</p>

          <h2 className="text-2xl">9. Visitors from outside the United States</h2>

          <p>We operate in Florida in the United States. If you visit the Site or contact us from another country, information about you may be processed in the United States, where privacy laws may differ from those where you live.</p>

          <h2 className="text-2xl">10. Changes to this policy</h2>

          <p>We may update this Privacy Policy from time to time. We will post the revised policy on this page and change the “Last updated” date. If we make a material change, we may also provide an additional notice, such as a short note on the Site. The updated policy applies to information we later collect and, to the extent permitted, to information we already have.</p>

          <h2 className="text-2xl">11. Contact</h2>

          <p>If you have questions about this Privacy Policy or our privacy practices, you can reach us here:</p>

          <p>IronRoot Consulting LLC<br />
          Rooted Growth Digital is a service of IronRoot Consulting LLC, a Florida limited liability company.<br />
          5052 Pope John Paul II Blvd, Suite 108-23<br />
          Ave Maria, FL 34142</p>

          <p><a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a><br />
          (239) 341-4766 (+12393414766)</p>
    </LegalPage>
  );
}
