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
  const [isOpen, setIsOpen] = useState(true)

  const handleFold = (value: boolean) => {
    setIsOpen(!value)
  }

  return (
    <div className="rounded w-full space-y-3">
      {diffSampleData.map((file) => (
        <Fragment key={file.displayPaths[0]}>
          <Collapsible onOpenChange={setIsOpen} open={isOpen}>
            <CollapsibleTrigger className="w-full">
              <Header
                isOpen={isOpen}
                handleFold={handleFold}
                filePath={file.displayPaths[0]}
                oldPath={file.oldPath}
                newPath={file.oldPath}
              />
            </CollapsibleTrigger>

            <CollapsibleContent className="w-full bg-primary-bg rounded border-t-0 border border-border-default">
              <CodeView />
            </CollapsibleContent>
          </Collapsible>
        </Fragment>
      ))}
    </div>
  )
}
