import { Fragment, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import diffSampleData from '@/constants/diff-data/diff-serialized-sample-1.json'
import CodeView from './code-view'
import Header from './header'

export function DiffPanel() {
  const [isViewed, setIsViewed] = useState(
    Array(diffSampleData.length).fill(true),
  )

  const handleFold = (i: number) => {
    setIsViewed((prev) => {
      const newArr = [...prev]
      newArr[i] = false
      return newArr
    })
  }

  const handleToggleViewed = (index: number) => {
    setIsViewed((prev) => {
      const newArr = [...prev]
      newArr[index] = !prev[index]
      return newArr
    })
  }

  return (
    <div className="rounded w-full space-y-3">
      {diffSampleData.map((file, i) => (
        <Fragment key={file.displayPaths[0]}>
          <Collapsible
            defaultOpen
            open={isViewed[i]}
            onOpenChange={() => handleToggleViewed(i)}
          >
            <CollapsibleTrigger className="w-full">
              <Header
                handleFold={() => handleFold(i)}
                filePath={file.displayPaths[0]}
                oldPath={file.oldPath}
                newPath={file.oldPath}
                isOpen={isViewed[i]}
              />
            </CollapsibleTrigger>

            <CollapsibleContent className="w-full bg-primary-bg rounded border-t-0 border border-border-default">
              <CodeView hunks={file.hunks} />
            </CollapsibleContent>
          </Collapsible>
        </Fragment>
      ))}
    </div>
  )
}
