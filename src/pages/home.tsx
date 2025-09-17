import { useParams } from 'react-router'
import isEmpty from 'lodash/isEmpty'
import { GitPullRequestIcon } from 'lucide-react'
import { DiffPanel } from '@/components/diff-panel'
import { Badge } from '@/components/ui/badge'
import { sampleDataMapper } from '@/constants/diff-data-mapper'

export default function Home() {
  const { prId = '1' } = useParams()
  const sampleData = sampleDataMapper[prId] || []

  return (
    <div className="w-full">
      <div className="p-6 space-y-4">
        {isEmpty(sampleData) ? (
          <span>Pull request not found</span>
        ) : (
          <div className="text-base space-x-2">
            <Badge
              variant="secondary"
              className="bg-badge px-3 py-2 rounded-3xl font-bold"
            >
              <GitPullRequestIcon />
              <span>Open</span>
            </Badge>
            <span className="">[GGWP-999][fix] add rm -rf * into button</span>
            <a
              href="#"
              className="text-info-300 hover:underline ml-2 underline"
            >
              #555
            </a>
          </div>
        )}
        <DiffPanel />
      </div>
    </div>
  )
}
