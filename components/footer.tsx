import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Mahatheer Syed
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              UI/UX Designer & Full Stack Developer creating clean, intuitive
              UIs and secure, scalable applications.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="mailto:sdmahatheer123@gmail.com"
              className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full text-foreground"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+917993604374"
              className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full text-foreground"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="www.linkedin.com/in/mahatheersyed"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/MahatheerSyed?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full text-foreground"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border">
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span>Email:</span> sdmahatheer123@gmail.com
              </li>
              <li className="text-muted-foreground">
                <span>Phone:</span> +91 7993604374
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Mahatheer Syed. All rights reserved.
          </p>
          <p className="mt-1">Designed and developed with passion.</p>
        </div>
      </div>
    </footer>
  );
}
