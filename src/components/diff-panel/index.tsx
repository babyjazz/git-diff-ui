import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import CodeView from './code-view'
import Header from './header'

export function DiffPanel() {
  return (
    <div className="rounded w-full">
      <Collapsible>
        <CollapsibleTrigger className="w-full">
          <Header />
        </CollapsibleTrigger>

        <CollapsibleContent className="w-full bg-primary-bg rounded border-t-0 border border-border-default">
          <CodeView />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
