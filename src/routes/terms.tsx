// Draft Terms of Use (St. Thomas More, Nov 11, 2026). Attorney review recommended before publication.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta(
    "Terms of Use — Rooted Growth Digital (Draft)",
    "Draft Terms of Use for the Rooted Growth Digital website, operated by IronRoot Consulting LLC.",
    "/terms",
  ),
  component: Page,
});

function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      note={
        <>
          <p><strong>DRAFT — not legal advice. Attorney review recommended before publication. Do not publish or send until Andrew approves and the remaining placeholders are resolved.</strong></p>
        </>
      }
      dates={
        <>
          <p>Last updated: [DATE]</p>
        </>
      }
    >
          <p className="text-sm text-muted-foreground">Prepared November 11, 2026, and revised the same day after Andrew’s decisions (relayed by St. Bernard at 12:11 PM ET), for Andrew Malby / IronRoot Consulting LLC. IronRoot Consulting’s approved Privacy Policy is at <a href="https://ironrootstrategy.com/privacy.html" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://ironrootstrategy.com/privacy.html</a> (fetched November 11, 2026). A companion Terms page was not found: <a href="https://ironrootstrategy.com/terms.html" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://ironrootstrategy.com/terms.html</a> returned HTTP 404 on November 11, 2026. These Terms are newly drafted for <a href="https://rootedgrowthdigital.com/" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://rootedgrowthdigital.com/</a>, in the same plain-language style as that Privacy Policy, and are not a copy of any IronRoot terms.</p>
          <div className="rounded-xl border border-gold bg-gold/15 px-4 py-4 text-sm">
            <p><strong>Before publishing, remove this boxed note and complete the following:</strong></p>
            <ul className="list-disc space-y-2 pl-5">
            <li>Replace [DATE] with the real publication date (do not backdate).</li>
            <li>The site's form opens the visitor's own email app (mailto); no third-party form provider.</li>
            <li>Scheduler / booking tool: Google Calendar booking page.</li>
            <li>Contact email: <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a>.</li>
            <li>Confirm that the IronRoot phone number and mailing address below are the ones to use for this Site.</li>
            <li>The legal entity name, IronRoot Consulting LLC, and the sentence “Rooted Growth Digital is a service of IronRoot Consulting LLC, a Florida limited liability company” must remain in these Terms. The Site footer should use the phrase “A service of IronRoot Consulting LLC.”</li>
            <li>These Terms govern use of the website. They are not a substitute for a signed services agreement.</li>
          </ul>
          </div>
          <p>Please read these Terms of Use (the “Terms”) carefully. They are a legally binding agreement between you and IronRoot Consulting LLC, a Florida limited liability company, which operates Rooted Growth Digital.</p>

          <p>Rooted Growth Digital is a service of IronRoot Consulting LLC, a Florida limited liability company. IronRoot Consulting LLC is the contracting party for the Site and for any inquiry you submit through it. “Rooted Growth Digital,” “we,” “us,” and “our” in these Terms mean IronRoot Consulting LLC. “You” means the person visiting or using the Site, and, if you are acting for a business, that business as well.</p>

          <p>By accessing or using <a href="https://rootedgrowthdigital.com/" className="underline decoration-gold underline-offset-2 hover:text-forest" target="_blank" rel="noopener noreferrer">https://rootedgrowthdigital.com/</a> (the “Site”), you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Site.</p>

          <h2 className="text-2xl">1. Who we are</h2>

          <p>IronRoot Consulting LLC<br />
          Rooted Growth Digital is a service of IronRoot Consulting LLC, a Florida limited liability company.<br />
          5052 Pope John Paul II Blvd, Suite 108-23<br />
          Ave Maria, FL 34142<br />
          United States</p>

          <p>Email: <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a><br />
          Telephone: (239) 341-4766 (+12393414766)</p>

          <p className="text-sm italic text-muted-foreground">Andrew should confirm this telephone number and mailing address for Rooted Growth Digital before publication. The Site footer should use the phrase “A service of IronRoot Consulting LLC.”</p>

          <h2 className="text-2xl">2. What these Terms cover</h2>

          <p>These Terms govern your access to and use of the Site, including browsing, reading portfolio or showcase content, submitting the contact form, and using a booking link to request a call. They do not, by themselves, create a contract for website design, hosting, marketing, or other professional services.</p>

          <p>Any paid or formal engagement is governed only by a separate written services agreement signed or otherwise accepted by you and IronRoot Consulting LLC. Submitting a form, booking a call, or exchanging email does not commit either party to a project, a price, or a start date.</p>

          <h2 className="text-2xl">3. The Site and permitted use</h2>

          <p>The Site is a showcase and information site for website and digital services offered to small businesses. You may use it for lawful, non-commercial viewing and to contact us about those services.</p>

          <p>You agree not to:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>use the Site in any way that violates law or these Terms;</li>
            <li>attempt to gain unauthorized access to the Site, related systems, or other users’ information;</li>
            <li>interfere with or disrupt the Site or the networks or services connected to it;</li>
            <li>copy, scrape, or systematically download the Site, except ordinary browser or search-engine access;</li>
            <li>use the Site to send unsolicited marketing, or to submit false, misleading, or infringing content; or</li>
            <li>remove or alter any copyright, trademark, or other notice on the Site.</li>
          </ul>

          <p>We may suspend or stop access to the Site at any time, including if we believe you have violated these Terms.</p>

          <h2 className="text-2xl">4. Inquiries, the contact form, and communications</h2>

          <p>The Site includes a contact form. Information you submit is handled as described in our Privacy Policy. The site's form opens the visitor's own email app (mailto); no third-party form provider.</p>

          <p>You agree that the information you submit is accurate to the best of your knowledge, and that you will not include sensitive information (for example a Social Security number, bank-account or payment-card number, or health information) in a form or unsolicited email.</p>

          <p>If you have contacted us, we may use your email address to reply and to follow up about scheduling or a possible engagement. We will not send marketing email unless you have consented to receive it. You may opt out of marketing email by using the unsubscribe method in the message or by emailing <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a>. We will honor opt-out requests as required by the CAN-SPAM Act. Replies to an inquiry you sent, and other transactional or relationship messages, are not marketing email.</p>

          <p>If you use a booking link, you also agree to Google Calendar booking page’s terms and privacy policy, which govern that provider’s pages. We do not control that service.</p>

          <h2 className="text-2xl">5. Portfolio and showcase content</h2>

          <p>The Site may show examples of websites or other work we have done for clients, including work for outside clients and for businesses related to IronRoot Consulting LLC. Outside-client work is included only with that client’s permission, or as otherwise allowed by a written agreement with that client. Related-business work is included at IronRoot Consulting LLC’s direction, subject to any other rights that still apply, such as licenses for photographs, stock images, or other parties’ logos.</p>

          <p>A client’s or business’s name, logo, trademarks, screenshots, and website content remain the property of that client or business, or of their other rightful owners. Showing that work does not mean the client or business endorses us, and it does not give you any right to use that name, those marks, or that content.</p>

          <p>We do not warrant that any showcased site still looks or works as pictured, or that a similar project for you would look the same or produce the same outcome.</p>

          <p><strong>No guarantee of results.</strong> Nothing on the Site is a promise of traffic, rankings, sales, leads, revenue, or any other result. Outcomes depend on many factors we do not control, including the client’s business, market, content, and budget.</p>

          <p><strong>No testimonials or results claims unless substantiated.</strong> We will not publish a testimonial, endorsement, or quote, and we will not publish traffic, sales, ranking, or other performance claims, unless the statement is true, can be substantiated, and — for a testimonial or a claim about a particular client — has been approved in the exact words by that client where that approval is required. If a testimonial is ever used, any material connection (for example a discount, free work, payment, or a family or business relationship) will be disclosed.</p>

          <p>If you are a client and want work removed from the Site, contact us at <a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a>. Removal of future use will be handled as described in the permission or services agreement that applies to that work.</p>

          <h2 className="text-2xl">6. Our intellectual property</h2>

          <p>Except for client marks and content described above, and except for third-party materials (such as fonts, stock images, or software libraries) that remain under their own licenses, the Site and its original text, design, graphics, and arrangement are owned by IronRoot Consulting LLC or its licensors and are protected by copyright and other laws.</p>

          <p>You may view and print pages of the Site for your own personal, informational use. You may not copy, modify, distribute, or create derivative works from the Site, or use our names or marks, without our prior written permission, except as the law allows (for example, fair use).</p>

          <p>“Rooted Growth Digital,” related logos, and “IronRoot Consulting” are names or marks of IronRoot Consulting LLC, or are used under its authority. All other names and marks on the Site are the property of their owners.</p>

          <h2 className="text-2xl">7. Third-party links and tools</h2>

          <p>The Site may link to third-party websites or tools, including a form provider, a scheduling provider, or other resources. Those sites and tools have their own terms and privacy policies. We are not responsible for their content, availability, or practices, and a link is not an endorsement.</p>

          <h2 className="text-2xl">8. Disclaimers</h2>

          <p>THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, IRONROOT CONSULTING LLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>

          <p>We do not warrant that the Site will be uninterrupted, timely, secure, or error-free, or that any content is accurate, complete, or current. Information on the Site — including descriptions of services, process, or pricing if shown — is general information and may change. It is not professional, legal, or other advice, and it is not an offer that you can accept merely by using the Site.</p>

          <p>Nothing on the Site guarantees results, as stated in Section 5.</p>

          <p>Some jurisdictions do not allow certain warranty disclaimers. In those places, some of the above may not apply to you, but only to the extent required by law.</p>

          <h2 className="text-2xl">9. Limitation of liability</h2>

          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IRONROOT CONSULTING LLC AND ITS MEMBERS, MANAGERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF, OR INABILITY TO USE, THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY ARISING OUT OF OR RELATED TO THE SITE OR THESE TERMS WILL NOT EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (US $100) OR THE AMOUNT YOU PAID TO US, IF ANY, FOR USE OF THE SITE IN THE TWELVE MONTHS BEFORE THE CLAIM. THIS LIMIT DOES NOT APPLY TO A SEPARATE SIGNED SERVICES AGREEMENT, WHICH WILL CONTROL FOR THAT ENGAGEMENT.</p>

          <p>Some jurisdictions do not allow certain limitations of liability. In those places, some of the above may not apply to you, but only to the extent required by law. These Terms do not limit liability that cannot be limited under Florida law, including liability for our own willful misconduct or, where the law does not allow a waiver, gross negligence.</p>

          <h2 className="text-2xl">10. Indemnity</h2>

          <p>If you use the Site on behalf of a business, or if you submit content to us, you agree to indemnify and hold harmless IronRoot Consulting LLC and its members, managers, employees, and agents from claims, damages, losses, and reasonable attorneys’ fees arising out of your misuse of the Site, your violation of these Terms, or content you submit, except to the extent caused by our own willful misconduct.</p>

          <h2 className="text-2xl">11. Privacy</h2>

          <p>Our collection and use of personal information is described in the Privacy Policy posted on the Site. That policy is part of how we operate the Site. In case of a conflict about personal information, the Privacy Policy controls on that subject.</p>

          <h2 className="text-2xl">12. Children</h2>

          <p>The Site is directed to adults considering professional services for businesses. It is not directed to children under 13. You may not use the Site if you are under 13.</p>

          <h2 className="text-2xl">13. Changes to these Terms</h2>

          <p>We may update these Terms from time to time. We will post the revised Terms on this page and change the “Last updated” date. The updated Terms apply once posted, except that they will not retroactively change a separate signed services agreement. If you continue to use the Site after a change, you accept the revised Terms. If you do not agree, stop using the Site.</p>

          <h2 className="text-2xl">14. Governing law and venue</h2>

          <p>These Terms, and any dispute arising out of or relating to these Terms or the Site, are governed by the laws of the State of Florida, without regard to conflict-of-law rules.</p>

          <p>The exclusive venue for any court action is the state courts located in Collier County, Florida, and you and we consent to personal jurisdiction there. This section does not control a separate signed services agreement that states different governing law or venue.</p>

          <h2 className="text-2xl">15. General</h2>

          <p>If a court finds any part of these Terms unenforceable, the rest will continue in effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our consent. We may assign them in connection with a transfer of the business. These Terms, together with the Privacy Policy, are the entire agreement between you and us about use of the Site, and they supersede prior discussions about that subject. They do not change a signed services agreement.</p>

          <h2 className="text-2xl">16. Contact</h2>

          <p>Questions about these Terms may be sent to:</p>

          <p>IronRoot Consulting LLC<br />
          Rooted Growth Digital is a service of IronRoot Consulting LLC, a Florida limited liability company.<br />
          5052 Pope John Paul II Blvd, Suite 108-23<br />
          Ave Maria, FL 34142</p>

          <p><a href="mailto:hello@rootedgrowthdigital.com" className="underline decoration-gold underline-offset-2 hover:text-forest">hello@rootedgrowthdigital.com</a><br />
          (239) 341-4766 (+12393414766)</p>
    </LegalPage>
  );
}
