import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "404: Not Found — C.O.D.E | MMCOE",
}

export default function NotFound() {
  return (
    <div className="w-full flex-col min-h-[80vh] flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-mint opacity-5 blur-[100px]" />
      </div>

      <div className="text-center px-8 flex flex-col items-center">
        <h1 className="font-display text-[150px] font-extrabold text-accent-mint leading-none mb-6 drop-shadow-mintSm">
          404
        </h1>
        
        <h2 className="font-heading text-h2 font-semibold text-text-primary mb-4">
          The page you&apos;re looking for doesn&apos;t exist — or we moved it.
        </h2>

        <div className="font-mono text-[13px] text-accent-red-text mb-12 py-2 px-4 bg-accent-red/10 border border-accent-red rounded-md">
          <span className="text-accent-mint select-none mr-2">root@code-mmcoe:~#</span>
          <span>curl -I https://code-mmcoe.tech/page</span>
          <br/>
          <span className="text-text-muted">HTTP/2 404 N/A</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost-mint">&larr; Go Home</Button>
          </Link>
          <Link href="/projects">
            <Button variant="primary">View Projects &rarr;</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
