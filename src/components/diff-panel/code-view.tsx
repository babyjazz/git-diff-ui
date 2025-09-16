import type { DiffData } from '@/types/diff-data'
import { cn } from '@/utils/clsx'

interface CodeViewProps {
  hunks: DiffData['hunks']
}

export default function CodeView({ hunks }: CodeViewProps) {
  return (
    <div className="text-xs rounded text-text-primary">
      {hunks.map((hunk) => (
        <div
          key={`${hunk.oldLineStart}-${hunk.newLineStart}`}
          className="flex flex-col"
        >
          <div className="bg-secondary-bg w-full pl-7 py-2 border-y border-border-default/40">
            <span className="text-text-secondary">{'@@ '}</span>
            <span className="text-text-remove">
              -{hunk.oldLineStart},{hunk.oldLineCount}
            </span>
            <span className="text-text-add">
              {' +'}
              {hunk.newLineStart},{hunk.newLineCount}
            </span>
            <span className="text-text-secondary">{' @@ '}</span>{' '}
            {hunk.enclosingBlock}
          </div>

          {hunk.beforeDiff.map((line) => (
            <div
              key={`${line.oldN}-${line.newN}`}
              className="flex items-baseline bg-diff-remove/20"
            >
              <span className="bg-secondary-bg p-1 text-center w-8">
                {line.oldN}
              </span>
              <span className="bg-secondary-bg p-1 text-center w-8 text-text-remove">
                -
              </span>
              <span>
                {line.parts.map((p) => (
                  <span
                    key={p.content}
                    className={cn({ 'bg-diff-remove': p.status === 'REMOVED' })}
                  >
                    {p.content}
                  </span>
                ))}
              </span>
            </div>
          ))}
          {hunk.afterDiff.map((line) => (
            <div
              key={`${line.oldN}-${line.newN}`}
              className="flex items-baseline bg-diff-add/20"
            >
              <span className="bg-secondary-bg p-1 text-center w-8 text-text-add">
                +
              </span>
              <span className="bg-secondary-bg p-1 text-center w-8">
                {line.newN}
              </span>
              <span>
                {line.parts.map((p) => (
                  <span
                    key={p.content}
                    className={cn({ 'bg-diff-add': p.status === 'ADDED' })}
                  >
                    {p.content}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
