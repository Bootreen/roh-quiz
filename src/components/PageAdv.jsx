export const PageAdv = ({ navHandler }) => (
  <>
    <a href='https://talents.taktsoft.com/bewerbung?bootcamp=0' target='_blank'>
      <div className='adv-img-container'>
        <img className='adv-img' src='/tct-logo.png' />
      </div>
    </a>
    <p className='description'>
      Do you want to learn how to create this and dozens of other cool web
      applications? Ready to start a new career and secure your financial
      future? Join the Taktsoft Campus Talents program and sign up for our
      Bootcamp as a Frontend or Fullstack developer.{" "}
    </p>
    <h3 className='adv-h3'>Advertising</h3>
    <form
      className='buttons-container'
      target='_blank'
      action='https://talents.taktsoft.com/bewerbung?bootcamp=0'
    >
      <button type='submit'>Learn more</button>
      <button onClick={navHandler}>Skip Ad</button>
    </form>
  </>
);

export default PageAdv;
