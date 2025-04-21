import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ayush Dubey. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://github.com/ayushdubey63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ayush-dubey-abb476295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaTwitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://leetcode.com/u/ayushdubey001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <SiLeetcode size={20} />
            <span className="sr-only">LeetCode</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
