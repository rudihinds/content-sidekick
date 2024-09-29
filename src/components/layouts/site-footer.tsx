export default function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          Built with ❤️ using Next.js and Tailwind CSS.
          {/* Remove the following line if it exists */}
          {/* Built by <a href="https://github.com/sujjeee">sujjeee</a>. */}
        </p>
      </div>
    </footer>
  )
}
