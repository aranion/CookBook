import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Сделайте свою тестовую ветку: <code>git branch testing_ИМЯ</code>
        </p>
        <p>
          Переключитесь на свою ветку:<code> git checkout testing_ИМЯ </code>
        </p>
        <p>Для проверки слияния git веток, добавьте свое имя ниже: </p>
        <span>имя1</span>
        <br />
        <span>имя2</span>
        <p>Сделайте Push в ветку: </p>
        <ul>
          <li>
            <code>git add .</code>
          </li>
          <li>
            <code>git commit -m 'testing_ИМЯ'</code>
          </li>
          <li>
            <code>git push --set-upstream origin testing_ИМЯ</code>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
