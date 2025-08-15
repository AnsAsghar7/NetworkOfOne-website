import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#fcb315] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#0a2e2f] mb-2">Page Not Found</h2>
          <p className="text-[#6b7a7a] mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#fcb315] text-[#0a2e2f] font-semibold rounded-xl hover:bg-[#fcb315]/90 transition-colors min-h-[44px]"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-[#6b7a7a]">
            <p>Or visit our main sections:</p>
            <div className="mt-2 space-x-4">
              <Link href="/#about" className="text-[#0f373e] hover:underline">About</Link>
              <Link href="/#demo" className="text-[#0f373e] hover:underline">Demo</Link>
              <Link href="/#contact" className="text-[#0f373e] hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
