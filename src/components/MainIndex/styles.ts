"use client"
import FundoEu from "@/assets/Fundo1.png"
import styled from "styled-components"


export const SectionInicial = styled.section`
    /* Adicione as aspas simples em volta da URL */
    background-image: url('${props => FundoEu.src}'); 
    background-size: cover;      
    background-position: center; 
    background-repeat: no-repeat; 
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    
    width: 100%;
    height: 100vh; /* Garante que ocupa a tela toda */
    padding: 2rem;
    position: relative; /* Importante para o alinhamento dos filhos */
`

export const Titulo = styled.h1`
    margin-top: 8vh; 
    font-size: 3rem;
    text-align: center;
`
export const Subtitulo = styled.h2`
    text-align: center;
    color: #636363;
`

export const BotoesIniciais = styled.div`
    margin-top: 60vh; 
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 20px;
    gap: 8px;

    button{
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background: linear-gradient(to right, #6207FF, #1E0773, #00A5CA);
        color: white;
        font-size: 1rem;
        font-weight: bold;
            &:hover{
                cursor: pointer;
                transform: scale(1.05);
            }
        }
`

export const MenuLateral = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 80px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;

    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
    
        li{
            width: 35px;
            transition: 0.3s ease-in-out;
        
        &:hover{
            transform: scale(1.2);
            }
        }
    }
`