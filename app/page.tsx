import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/ui/modeToggle"
import GradualSpacing from "@/components/ui/gradual-spacing"
import GetPost from "./api";
export default function Layout() {
  return (
    <div className="bg-background text-foreground">
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-14 items-center justify-end">
          <nav className="flex items-center space-x-4 lg:space-x-6 mr-10 text-foreground">
            <Button asChild variant="ghost">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/blogs">Blogs</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/about">About Me</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/interests">Interests</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
              </Button>
              <ModeToggle/>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                  <GradualSpacing text="Oahed Speaking..." />
                </h1>
                <div className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  <GradualSpacing text="Explore my thoughts, interests, and experiences through my blog posts and more." delayMultiple={.01} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
                <GradualSpacing text="Latest Blogs" />
              </h2>
              <GetPost/>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Contact Me</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quote of the Day</h3>
              <p className="text-sm text-gray-300">
                "The only way to do great work is to love what you do." - Steve Jobs
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-300">© 2023 Your Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
      </div>
  )
}
