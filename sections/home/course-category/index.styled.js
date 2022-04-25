import styled from 'styled-components'


export const CourseContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:100px;
    margin-bottom:100px;
`

export const SingleCardContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:start;
    flex-wrap:wrap;
    margin-top:50px;
`

export const Single = styled.div`
    width:23%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin:0 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom:10px;

    img{
        max-width:100%;
    }
    
    div {
        text-align:center;
        padding:15px;

        h4{
            font-size:17px;
            font-weight:700;
        }
        p{
            color:#333;
        }
        span {
            color:${({ theme }) => theme.colors.lightblue};
            font-weight:bold;
        }
    }

    @media screen and (max-width:992px) {
        width:60%;
        margin-top:40px;
    }
`