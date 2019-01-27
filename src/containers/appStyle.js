import styled from 'styled-components'

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  aside {
    order: 2;
  }
  
  main {
    order: 1;
    padding: 30px;
  }

  @media (min-width: 1140px) {
    flex-direction: row;
    justify-content: center;
    
    aside {
      order: 1;
    }
    
    main {
      order: 2;
    }
  }
`
