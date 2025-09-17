import { Fragment, useState } from 'react'
import { useParams } from 'react-router'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import { sampleDataMapper } from '@/constants/diff-data-mapper'
import { type DiffData } from '@/types/diff-data'
import CodeView from './code-view'
import Header from './header'

export function DiffPanel() {
  const { prId = '1' } = useParams()
  const sampleData = sampleDataMapper[prId] || []
  const [isViewed, setIsViewed] = useState(Array(sampleData.length).fill(true))

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
      {sampleData.map((file, i) => (
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
              <CodeView hunks={file.hunks as DiffData['hunks']} />
            </CollapsibleContent>
          </Collapsible>
        </Fragment>
      ))}
    </div>
  )
}
