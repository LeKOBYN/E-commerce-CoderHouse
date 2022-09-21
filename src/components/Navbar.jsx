import styled from 'styled-components'
import CartWidget from './CartWidget';

export default function Navbar(){
    return(
        <>
            <NavContainer> 
            <Logo src="https://esports.as.com/2019/10/08/SKT_Logo_2019.png?hash=22e270093357fb43b89c49697d29bfc2e5adcaab" alt="Logo" />
                <Titulo>T1 <span>FIGHTING</span></Titulo>

                <ListaNav>
                   <ItemListaNav><Link href="#"> Home       </Link></ItemListaNav>
                   <ItemListaNav><Link href="#"> Shop       </Link></ItemListaNav>
                   <ItemListaNav><Link href="#"> About      </Link></ItemListaNav>
                   <ItemListaNav><Link href="#"> Contact    </Link></ItemListaNav>
                   <ItemListaNav><Link href="#"> Blog       </Link></ItemListaNav>
                </ListaNav>
                <CartWidget/>
            </NavContainer>
        </>
    );
}
 

const NavContainer = styled.nav`
    background-color: #333;
    display: flex;
    align-items: center;    
`
const Titulo = styled.h2`
        color: #E72424;
        font-weight: 400;
        span{
            font-weight: bold;
        }
`

const ListaNav = styled.ul`
    margin-left: 50rem;
    display: flex;
    list-style: none;
    text-align: center;
   
`

const ItemListaNav = styled.li`
        margin-left: 4rem;
        list-style: none;
        color: white;
        display: inline-block; 
        font-size: 1.2rem;
`

const Link = styled.a`
    text-decoration: none;
    color: white;
`

const Logo = styled.img `
    width: 100px;
    padding: .3rem 1rem;
    margin-left: 10px;
` 
