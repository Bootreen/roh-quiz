import "./PageAdv.css";

export const PageAdv = ({ navHandler }) => (
  <>
    <h2 className='adv-h2'>ROH Quiz</h2>
    <div className='imageLink'>
      <a
        href='https://talents.taktsoft.com/bewerbung?bootcamp=0'
        target='_blank'
      >
        <img src='/TaktsoftLogo.jpg' />
      </a>
    </div>
    <h3 className='adv-h3'>Advertising</h3>
    <button onClick={navHandler}>Skip Ad</button>
  </>
);

export default PageAdv;
