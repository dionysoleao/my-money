import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light:#6923FF;
    
    --text-title:#363F5F;
    --text-body: #969C83;

    --background: #f0f2f5;
    --shape: #FFFFFF;
}

html{
    @media (max-width: 1000px){
        font-size:93.75% /*15px*/
    }
    @media (max-width: 728px){
        font-size:87.5% /*14px*/
    }
}

button{
    cursor:pointer;
}

[disabled] {
    opacity:0.6;
    cursor: not-allowed;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:var(--background);
    -webkit-font-smoothing: antialiased;

}
`