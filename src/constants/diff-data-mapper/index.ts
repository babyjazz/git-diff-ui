import diffSampleData from '@/constants/diff-data/diff-serialized-sample-1.json'
import diffSampleData2 from '@/constants/diff-data/diff-serialized-sample-2.json'
import diffSampleData3 from '@/constants/diff-data/diff-serialized-sample-3.json'
import diffSampleData4 from '@/constants/diff-data/diff-serialized-sample-4.json'
import diffSampleData5 from '@/constants/diff-data/diff-serialized-sample-5.json'
import { type DiffData } from '@/types/diff-data'

export const sampleDataMapper: Record<string, DiffData[]> = {
  '1': diffSampleData as DiffData[],
  '2': diffSampleData2 as DiffData[],
  '3': diffSampleData3 as DiffData[],
  '4': diffSampleData4 as DiffData[],
  '5': diffSampleData5 as DiffData[],
}
