import { Fragment } from 'react'
import diffSampleData from '@/constants/diff-data/diff-serialized-sample-1.json'

interface CodeViewProps {
  hunks: (typeof diffSampleData)[number]['hunks']
}

export default function CodeView({ hunks }: CodeViewProps) {
  return (
    <div className="text-xs rounded p-2 text-text-primary grid grid-cols-[20px_1fr] gap-x-3">
      {hunks.map((hunk) => (
        <Fragment key={`${hunk.oldLineStart}-${hunk.newLineStart}`}>
          <div className="bg-secondary-bg">{hunk.oldLineStart}</div>
          <div>Old code</div>
        </Fragment>
      ))}
    </div>
  )
}
