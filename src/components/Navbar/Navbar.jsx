import styled from 'styled-components'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
            <NavContainer> 
                <Container>
                    <Link to="/"><Logo src="https://esports.as.com/2019/10/08/SKT_Logo_2019.png?hash=22e270093357fb43b89c49697d29bfc2e5adcaab" alt="Logo" /></Link>
                    <Titulo>T1 <span>FIGHTING</span></Titulo>
                </Container>


                <ListaNav>
                   <Link to="/"><ItemListaNav>Home       </ItemListaNav></Link>
                   <Link to="/category/programacion"><ItemListaNav> Programacion       </ItemListaNav></Link>
                   <Link to="/category/diseño"><ItemListaNav> Diseño      </ItemListaNav></Link>
                   <Link to="#"><ItemListaNav> Contact    </ItemListaNav></Link>
                   <Link to="#"><ItemListaNav> Blog       </ItemListaNav></Link>
                   <ItemListaNav><CartWidget/></ItemListaNav>
                </ListaNav>
                
            </NavContainer>
        </>
    );
}
 

const NavContainer = styled.nav`
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content:space-between;    
`


const Titulo = styled.h2`
        color: #E72424;
        font-weight: 400;
        span{
            font-weight: bold;
        }
`

const ListaNav = styled.ul`
    display: flex;
`

const ItemListaNav = styled.li`
        margin: 0 2rem 0 2rem;
        list-style: none;
        color: white;
        display: inline-block; 
        font-size: 1.2rem;
        text-decoration: none;
        transition: 0.4s;
    :hover{
        transform: scale(1.10);
    }   
         
`


const Logo = styled.img `
    width: 100px;
    padding: .3rem 1rem;
    margin-left: 10px;
    transition: 0.4s;
    :hover{
        transform: scale(1.20);
    }   
    
` 

const Container = styled.div`
    display: flex;
    align-items: center;
    
`
