import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "../components/Header/Header"

export default function CookiePolicyPage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 flex items-center justify-center px-4 py-16">
      <Card className="max-w-4xl w-full border border-zinc-200 shadow-md rounded-2xl">
        <CardHeader className="space-y-3">
          <Button asChild variant="link" className="px-0 text-sm text-blue-600 hover:text-blue-800">
            <Link href="/">← Return to Homepage</Link>
          </Button>
          <CardTitle className="text-4xl font-bold text-zinc-800">Cookie Usage Notice</CardTitle>
          <p className="text-zinc-500 text-sm">
            Learn how we use cookies to optimize your experience, personalize content, and analyze traffic.
          </p>
        </CardHeader>
        <CardContent className="space-y-10 text-zinc-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">🍪 Understanding Cookies</h2>
            <p>
              Cookies are snippets of data stored on your browser that help websites recognize you on future visits.
              They're essential for customizing user experience, maintaining sessions, and improving website performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">📊 Our Cookie Categories</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Core Cookies:</strong> These ensure site security and navigation. Without them, our site simply won’t work.
              </li>
              <li>
                <strong>Experience Cookies:</strong> Help remember preferences like dark mode, region, or font size.
              </li>
              <li>
                <strong>Metrics Cookies:</strong> Track performance anonymously so we can fix bugs and improve features.
              </li>
              <li>
                <strong>Ad Cookies:</strong> Tailor promotional content you might see based on your interests.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">🌐 External Cookie Providers</h2>
            <p>
              We partner with services like Google, Meta, or analytics tools that may place their own cookies to track
              how you use our site, measure engagement, or deliver ads elsewhere.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">⚙️ Customize Cookie Settings</h2>
            <p>
              Most browsers let you block or delete cookies in their settings. If you block all cookies, some features of
              our site may not function as expected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">✅ Consent & Choices</h2>
            <p>
              By browsing this site, you agree to our use of cookies. You can withdraw your consent at any time by
              clearing cookies or adjusting your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">🔁 Updates to This Notice</h2>
            <p>
              We may revise this cookie notice from time to time. The most current version will always be available on
              this page.
            </p>
          </section>

          <footer className="text-sm text-zinc-500 text-right pt-8 border-t border-zinc-100">
            Last reviewed: July 2025
          </footer>
        </CardContent>
      </Card>
    </main>
    </>
  )
}
