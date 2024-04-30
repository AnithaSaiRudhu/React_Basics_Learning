import logo from "../images/react.png";

const headerImg = {
    height : '35px',
    verticalAlign:'top'
}

function MainHeader(){

    return(
        <div style={{backgroundColor : 'black'}}>
            <img src={logo} style={headerImg} ></img> <br/>
            React Course TaskOpedia!
        </div>
    )

}

function SubTitle()
{
    return(
    <div>
           <h1 className='subTitle'>This will be an exciting react course</h1>
    </div>
    )

}


const Header = () => {
    return (
      <div>
        <MainHeader/>
        <h1 className='heading1'>React Course</h1>
        <SubTitle/>
        </div>
    )
}

export default Header;