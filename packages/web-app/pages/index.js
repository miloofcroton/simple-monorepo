import foo from '@namespace/foo'
import Bar from '@namespace/bar'

export default function Home() {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
    </div>
  )
}
