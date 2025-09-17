import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/clsx'

const SAMPLE_DATA = [
  { value: '1', label: 'SamplePR1' },
  { value: '2', label: 'SamplePR2' },
  { value: '3', label: 'SamplePR3' },
  { value: '4', label: 'SamplePR4' },
  { value: '5', label: 'SamplePR5' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const { prId = '1' } = useParams()
  const [activePr, setActivePr] = useState(prId)

  useEffect(() => {
    // Update state from URL param
    setActivePr(prId)
  }, [prId])

  const handleClickSampleData = (value: string) => {
    setActivePr(value)
    navigate(ROUTES.HOME_PR.replace(':prId', value))
  }

  return (
    <div className="w-full items-center space-y-4 pt-4 px-6 border-b border-border-default bg-secondary-bg">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold">Pull Requests</h1>
        <Badge className="bg-badge rounded-full h-4">
          {SAMPLE_DATA.length}
        </Badge>
      </div>

      <div className="flex w-full gap-6">
        {SAMPLE_DATA.map((data) => (
          <div
            key={data.value}
            role="button"
            tabIndex={0}
            onClick={() => handleClickSampleData(data.value)}
            className={cn('cursor-pointer hover:text-text-link text-sm pb-3', {
              'border-b-2 border-border-active text-text-link':
                activePr === data.value,
            })}
          >
            {data.label}
          </div>
        ))}
      </div>
    </div>
  )
}
