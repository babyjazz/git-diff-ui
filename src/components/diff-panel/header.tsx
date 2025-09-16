import {
  ChevronDownIcon,
  CopyIcon,
  EllipsisIcon,
  MessageSquareIcon,
} from 'lucide-react'
import { cn } from '@/utils/clsx'

interface HeaderProps {
  isOpen: boolean
  handleFold: (value: boolean) => void
}

export default function Header({ isOpen, handleFold }: HeaderProps) {
  const handelComment = () => {
    // eslint-disable-next-line
    alert('No implement')
  }

  return (
    <div
      className={cn(
        'rounded-t-md text-xs items-center bg-secondary-bg border flex justify-between border-border-default p-2 text-text-primary -mb-0.5',
        [isOpen ? 'border-b-0' : 'rounded-b-md'],
      )}
    >
      <div className="flex gap-2 items-center">
        <ChevronDownIcon className="w-3" />
        <span>src/components/some-file.tsx</span>
        <CopyIcon className="w-3" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
          <input
            type="checkbox"
            onChange={(e) => handleFold(e.target.checked)}
          />
          <label>Viewed</label>
        </div>
        <div onClick={handelComment} className="cursor-pointer">
          <MessageSquareIcon className="w-3" />
        </div>
        <EllipsisIcon className="w-3" />
      </div>
    </div>
  )
}
