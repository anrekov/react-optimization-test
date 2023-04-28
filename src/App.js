import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { Card, Card2 } from './components/Card'
import { Text, Text2 } from './components/Text'
import { Helmet } from 'react-helmet'
import { TestUC } from './components/TestUC'

const elements = ['one', 'two']

function App() {
  const [input, setInput] = useState('')

  const isInputExist = useMemo(() => !!input.length, [input.length])

  const cb = () => 'cb'
  const cbUCB = useCallback(() => 'cbUCB', []) // Будет та же ссылка

  return (
    <div className='App'>
      <Helmet>
        <meta name='description' content='Test app' />
        <meta name='keywords' content='test app react optimization memo' />
        <title>Main page</title>
      </Helmet>

      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* useCallback test */}
      <TestUC cb={cb} />
      <TestUC cb={cbUCB} />

      {/* Приколы JSX/React в плане статики */}
      <p>Просто текст, который не при делах</p>
      <Text />
      <Text2 />

      <div className='card-wrapper'>
        <div className='divider'>Без оптимизации</div>
        {!!input && elements.map((el) => <Card key={el}>{el}</Card>)}

        <div className='divider'>Без оптимизации и зависимости</div>
        {elements.map((el) => (
          <Card key={el}>{el}</Card>
        ))}

        <div className='divider'>useMemo спасёт?</div>
        {isInputExist && elements.map((el) => <Card key={el}>{el}</Card>)}

        <div className='divider'>memo</div>
        {!!input && elements.map((el) => <Card2 key={el}>{el}</Card2>)}
      </div>
    </div>
  )
}

export default App
