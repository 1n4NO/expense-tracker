import { styled } from "styled-components";

// AppHeader Styles

export const HeaderWrapper = styled.header`
    padding: 10px 0;
`;

export const AppLogo = styled.img``;

// SankeyContainer Styles

export const SankeyWrapper = styled.div`
    background-color: #f7f7f7;
`;

// DataTable Styles

export const DataTableWrapper = styled.div`
    color: #f7f7f7;
`;

export const DataTableLabel = styled.h3``;

export const DataTableHeading = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DataTableHeader = styled.div`
    width: 30%;
    padding: 20px 100px;
    border: 1px solid;
`;

export const DataTableValues = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DataTableValue = styled.div`
    padding: 20px 100px;
    text-align: center;
    width: 30%;
    border: 1px solid;
`;

// SankeyController Styles 

export const SankeyControllerWrapper = styled.div`
    background-color: #016165;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
`;

export const ControllerButton = styled.div`
    background-image: linear-gradient(135deg, #ffffff, #f7f7f7, #e3e3e3);
    border-radius: 6px;
    padding: 12px 20px;
    cursor: pointer;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.3), -20px -20px 70px rgba(255, 255, 255, 0.3);
`;
