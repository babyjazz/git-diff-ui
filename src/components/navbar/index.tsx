import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Navbar() {
  return (
    <div className="w-full items-center py-4 px-6 border-b border-border-default bg-secondary-bg">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold">Pull Requests</h1>
        <Badge className="bg-badge rounded-full h-4">3</Badge>
      </div>

      <div className="flex w-full">
        <Tabs defaultValue="sampleData1">
          <TabsList>
            <TabsTrigger value="sampleData1">Sample Data 1</TabsTrigger>
            <TabsTrigger value="sampleData2">Sample Data 2</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
