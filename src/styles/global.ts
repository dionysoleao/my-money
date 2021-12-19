import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

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

body,input, text-area, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6{
    font-weight:400;
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
a{
    color:var (--text-body);
    text-decoration:none;

}
body{
    background:var(--background);
    -webkit-font-smoothing: antialiased;

}
`