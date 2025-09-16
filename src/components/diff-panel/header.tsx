import {
  ChevronDownIcon,
  CopyIcon,
  EllipsisIcon,
  MessageSquareIcon,
} from 'lucide-react'

export default function Header() {
  return (
    <div className="rounded-t-md text-xs items-center border-b-0 bg-secondary-bg border flex justify-between border-border-default p-2 text-text-primary -mb-0.5">
      <div className="flex gap-2 items-center">
        <ChevronDownIcon className="w-3" />
        <span>src/components/some-file.tsx</span>
        <CopyIcon className="w-3" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
          <input type="checkbox" />
          <label>Viewed</label>
        </div>
        <MessageSquareIcon className="w-3" />
        <EllipsisIcon className="w-3" />
      </div>
    </div>
  )
}
