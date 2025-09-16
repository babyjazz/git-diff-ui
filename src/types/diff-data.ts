export type DiffData = {
  status: 'MODIFIED' | 'ADDED' | 'REMOVED' | 'UNCHANGED'
  displayPaths: string[]
  oldPath: string
  newPath: string
  hunks: {
    enclosingBlock?: string
    oldLineCount: number
    oldLineStart: number
    newLineCount: number
    newLineStart: number
    beforeDiff: {
      parts: {
        content: string
        status: 'UNCHANGED' | 'ADDED' | 'REMOVED'
      }[]
      oldN: number
      newN: number
    }[]
    afterDiff: {
      parts: {
        content: string
        status: 'UNCHANGED' | 'ADDED' | 'REMOVED'
      }[]
      oldN: number
      newN: number
    }[]
  }[]
}
