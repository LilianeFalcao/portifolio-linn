"use client"
import styled from "styled-components"

export const SectionInicial = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100vh;

    position: relative;
    overflow: hidden;
`

export const Titulo = styled.h1`
    font-size: clamp(3rem, 6vw, 7rem);
    font-weight: 450;
    line-height: 0.9;
    letter-spacing: -0.04em;

    margin: 0;

    overflow: visible;

    position: relative;

    text-rendering: geometricPrecision;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

export const Subtitulo = styled.h2`
    margin: 0;

    font-weight: 450;

    -webkit-font-smoothing: antialiased;
`

export const MenuLateral = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    width: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    z-index: 50;

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