import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import CodeView from './code-view'
import Header from './header'

export function DiffPanel() {
  const [isOpen, setIsOpen] = useState(true)

  const handleFold = (value: boolean) => {
    setIsOpen(!value)
  }

  return (
    <div className="rounded w-full">
      <Collapsible onOpenChange={setIsOpen} open={isOpen}>
        <CollapsibleTrigger className="w-full">
          <Header isOpen={isOpen} handleFold={handleFold} />
        </CollapsibleTrigger>

        <CollapsibleContent className="w-full bg-primary-bg rounded border-t-0 border border-border-default">
          <CodeView />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
