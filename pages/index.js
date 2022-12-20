import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey there 🙋, I'm Whattyu. I currently working with Next.js and building JavaScript Discord bots.
          </h1>
          <h2>
            Some of my Projects ⬎
          </h2>
          <p>
            <ul>
              <li>My First Bot -> <a href="https://cariyebot.github.io/" target="_blank">Cariye Bot</a> </li>
              <li>My Second (and best) Bot -> <a href="https://top.gg/bot/849663572308918343/" target="_blank">Cariye+ Bot</a> </li>
              <li>My Basic Calculator <a href="https://calculate.whattyu.repl.co/" target="_blank">Site</a> </li>
              <li>My Basic <a href="https://tetris-game.whattyu.repl.co/" target="_blank">Tetris Game</a> </li>
              <li>My Basic Python <a href="https://tetris-game.whattyu.repl.co/" target="_blank">Projects</a> </li>
            </ul>
          </p>
    </div>
  </Container>
</>
  )
}

export default HomePage;
