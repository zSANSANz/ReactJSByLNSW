import logo from './logo.svg';
import './App.css';

const IniFunctionElemen = () => {
  return (
    <div>Functional Element</div>
  )
}

const IniFunctionElemen2 = () => {
  return (
    <div className='list class-tambahan'>Functional Element 2</div>
  )
}

const IniFunctionElemenLogin = () => {
  return (
    <div>Functional untuk sudah login</div>
  )
}

const IniFunctionElemenGuest = () => {
  return (
    <div className='list class-tambahan'>Functional untuk belon login</div>
  )
}

const ButtonEmployee = () => {
  return (
    <button>Button Employee</button>
  )
}

const ButtonAdmin = () => {
  return (
    <button>Button Admin</button>
  )
}

const ButtonSuperAdmin = () => {
  return (
    <button>Button Super Admin</button>
  )
}

let login = true
let LoginAs = 'admin'
function App() {
  let content
  if (LoginAs === 'admin') {
    content = 'Kak Admin!'
  } else if (LoginAs === 'employee') {
    content = 'kak employee!!!'
  } else if (LoginAs === 'superAdmin') {
    content = 'kak super admin!!!!!'
  }
  return (
    <div className='warna-merah'>
      <h1 className='halo'>
        hello world!
      </h1>
      <h2 className='halo-dunia'>
        hallo dunyo {content}
      </h2>
      <p>hallo dunia</p>
      <ul className='list'>
        <li>Coffe</li>
        <li>tea</li>
        <li>milk</li>
      </ul>
      <IniFunctionElemen />
      <IniFunctionElemen2 />
      <IniFunctionElemen />
      <IniFunctionElemen2 />
      <IniFunctionElemen />
      <IniFunctionElemen2 />
      <IniFunctionElemen />
      <IniFunctionElemen2 />
      {
        login? <IniFunctionElemenLogin /> : <IniFunctionElemenGuest />
      }

      {
        login == true ? <IniFunctionElemenLogin /> : <IniFunctionElemenGuest />
      }

      { 
        LoginAs === 'admin' ? <ButtonAdmin /> : []
      }

      {
        LoginAs === 'employee' ? <ButtonEmployee /> : [] 
      }

      {
        LoginAs === 'super-admin' ? <ButtonSuperAdmin /> : []
      }
    </div>
  );
}

export default App;
