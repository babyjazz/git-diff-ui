import { Fragment } from 'react'
import diffSampleData from '@/constants/diff-data/diff-serialized-sample-1.json'

export default function CodeView() {
  return (
    <div className="text-xs rounded p-2 text-text-primary grid grid-cols-[20px_1fr_1fr]">
      <div>3</div>
      <div>Old code</div>
      <div>New code</div>
    </div>
  )
}
