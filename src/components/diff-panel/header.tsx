import type { MouseEventHandler } from 'react'
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CopyIcon,
  EllipsisIcon,
  MessageSquareIcon,
} from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/utils/clsx'

interface HeaderProps {
  isOpen: boolean
  handleFold: () => void
  filePath?: string
  oldPath?: string
  newPath?: string
}

export default function Header({
  isOpen,
  handleFold,
  filePath: fileName,
  oldPath: oldFileName,
  newPath: newFileName,
}: HeaderProps) {
  const isFileRenamed = oldFileName !== newFileName

  const notImplement: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    toast('Not implement', {
      style: {
        backgroundColor: 'var(--color-toast-danger)',
      },
    })
  }

  const handleCopyPath: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(fileName || '')
    toast('Coppied file path to clipboard', { description: fileName })
  }

  return (
    <div
      className={cn(
        'rounded-t-md text-xs items-center bg-secondary-bg border flex justify-between border-border-default p-2 text-text-primary -mb-0.5',
        [isOpen ? 'border-b-0' : 'rounded-b-md'],
      )}
    >
      <div className="flex gap-2 items-center">
        <div role="button" tabIndex={0} className="cursor-pointer">
          <ChevronDownIcon className="w-3" />
        </div>
        {isFileRenamed ? (
          <>
            <span className="text-text-remove">{oldFileName}</span>
            <ArrowRightIcon className="w-3" />
            <span className="text-text-add">{newFileName}</span>
          </>
        ) : (
          <span>{fileName}</span>
        )}

        <div
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          onClick={handleCopyPath}
        >
          <CopyIcon className="w-3" />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
          <input type="checkbox" onChange={handleFold} />
          <label>Viewed</label>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={notImplement}
          className="cursor-pointer"
        >
          <MessageSquareIcon className="w-3" />
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={notImplement}
          className="cursor-pointer"
        >
          <EllipsisIcon className="w-3" />
        </div>
      </div>
    </div>
  )
}
