import './Principal.css';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

function Principal({ voltarPara, titulo, children }) {

  return <main className='principal_root'>

    <div className='principal_titulo'>

      {voltarPara && <Link to={voltarPara}>
        <GoArrowLeft size={24} color='orange' />
      </Link>}

      <h1>{titulo}</h1>

    </div>

    {children}

  </main>;

}

export default Principal;
