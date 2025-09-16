import { Fragment } from 'react'
import diffSampleData from '@/constants/diff-data/diff-serialized-sample-1.json'

interface CodeViewProps {
  hunks: (typeof diffSampleData)[number]['hunks']
}

export default function CodeView({ hunks }: CodeViewProps) {
  return (
    <div className="text-xs rounded text-text-primary grid grid-cols-[50px_1fr] gap-x-8">
      {hunks.map((hunk) => (
        <Fragment key={`${hunk.oldLineStart}-${hunk.newLineStart}`}>
          <div className="bg-secondary-bg p-2 text-center">
            {hunk.oldLineStart}
          </div>
          <div className="py-2">Old code</div>
        </Fragment>
      ))}
    </div>
  )
}
