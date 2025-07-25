import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "../components/Header/Header"


const PrivacyPolicyPage = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <Card className="max-w-3xl w-full shadow-lg border">
        <CardHeader className="pb-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
          <CardTitle className="text-3xl font-bold text-primary mt-4">Privacy Policy</CardTitle>
          <CardDescription className="text-muted-foreground">
            Your privacy is important to us. This policy explains how we collect, use, disclose, and safeguard your
            information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 text-foreground">
          <p className="text-sm text-muted-foreground">Last updated: July 2025</p>

          <ol className="space-y-6 list-decimal list-inside">
            <li>
              <h2 className="font-bold text-xl mb-2">1. Information We Collect</h2>
              <p className="text-base text-muted-foreground">
                We collect various types of information in connection with the services we provide, including:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                <li>
                  <strong>Personal Information:</strong> Information you provide directly, such as your name, email
                  address, and contact details when you register for an account, subscribe to our newsletter, or contact
                  us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you access and use our services, including your IP
                  address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your
                  visits.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use to access our services, such
                  as hardware model, operating system, and unique device identifiers.
                </li>
              </ul>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">2. How We Use Your Information</h2>
              <p className="text-base text-muted-foreground">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                <li>To provide, operate, and maintain our services.</li>
                <li>To improve, personalize, and expand our services.</li>
                <li>To understand and analyze how you use our services.</li>
                <li>To develop new products, services, features, and functionality.</li>
                <li>
                  To communicate with you, either directly or through one of our partners, including for customer
                  service, to provide you with updates and other information relating to the service, and for marketing
                  and promotional purposes.
                </li>
                <li>To process your transactions and manage your orders.</li>
                <li>To find and prevent fraud.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">3. Information Sharing and Disclosure</h2>
              <p className="text-base text-muted-foreground">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                <li>
                  <strong>With Service Providers:</strong> We may share your information with third-party vendors,
                  service providers, contractors, or agents who perform services for us or on our behalf and require
                  access to such information to do that work.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in
                  response to valid requests by public authorities (e.g., a court or a government agency).
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your personal information in connection
                  with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all
                  or a portion of our business to another company.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose
                  with your consent.
                </li>
              </ul>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">4. Data Security</h2>
              <p className="text-base text-muted-foreground">
                We implement reasonable security measures designed to protect your personal information from
                unauthorized access, use, alteration, and disclosure. However, no method of transmission over the
                Internet or method of electronic storage is 100% secure.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">5. Your Data Protection Rights</h2>
              <p className="text-base text-muted-foreground">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                <li>The right to access, update, or delete the information we have on you.</li>
                <li>The right of rectification to correct inaccurate or incomplete information.</li>
                <li>The right to object to our processing of your personal data.</li>
                <li>
                  The right of restriction to request that we restrict the processing of your personal information.
                </li>
                <li>
                  The right to data portability to receive a copy of your personal data in a structured,
                  machine-readable format.
                </li>
                <li>
                  The right to withdraw consent at any time where we rely on your consent to process your personal
                  information.
                </li>
              </ul>
              <p className="text-base text-muted-foreground mt-2">
                To exercise any of these rights, please contact us using the details provided below.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">6. Cookies and Tracking Technologies</h2>
              <p className="text-base text-muted-foreground">
                We use cookies and similar tracking technologies to track the activity on our service and hold certain
                information. Cookies are files with a small amount of data which may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">7. Links to Other Websites</h2>
              <p className="text-base text-muted-foreground">
                Our service may contain links to other websites that are not operated by us. If you click on a
                third-party link, you will be directed to that third party's site. We strongly advise you to review the
                Privacy Policy of every site you visit. We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites or services.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">8. Changes to This Privacy Policy</h2>
              <p className="text-base text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page. We will let you know via email and/or a prominent notice on our service,
                prior to the change becoming effective and update the "Last updated" date at the top of this Privacy
                Policy. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-xl mb-2">9. Contact Us</h2>
              <p className="text-base text-muted-foreground">
                If you have any questions about this Privacy Policy, you can contact us:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                <li>
                  By email:{" "}
                  <Link href="mailto:support@example.com" className="text-primary hover:underline">
                    support@example.com
                  </Link>
                </li>
                <li>
                  By visiting this page on our website:{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    /contact
                  </Link>
                </li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
    </>
  )
}

export default PrivacyPolicyPage
