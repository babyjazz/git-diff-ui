import { GitPullRequestIcon } from 'lucide-react'
import { DiffPanel } from '@/components/diff-panel'
import { Badge } from '@/components/ui/badge'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <div className="w-full p-6 space-y-4">
      <h1 className="text-3xl font-bold pb-4">Pull requests</h1>
      <div className="text-base space-x-2">
        <Badge
          variant="secondary"
          className="bg-badge px-3 py-2 rounded-3xl font-bold"
        >
          <GitPullRequestIcon />
          <span>Open</span>
        </Badge>
        <span className="">[GGWP-999][fix] add rm -rf * into button</span>
        <a href="#" className="text-info-300 hover:underline ml-2 underline">
          #555
        </a>
      </div>
      <DiffPanel />

      <Toaster />
    </div>
  )
}
