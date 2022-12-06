
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarParent = styled.div`
  background: #D8D8D8;
  width: 250px;
  height: 100vh;
  a {
    text-decoration: none;
    
  }
`;

const SidebarItem = styled.div`
  padding: 2px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 0px 12px;
  border-radius: 4px;

  p {
    color: gray;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #C0C0C0;
  }
`;

function Sidebar(props) {
    return (
        <>
            <SidebarParent>
                <div style={{position: 'fixed'}}>
                    <h3 style ={{paddingLeft:40, textAlign:'center'}} >Employee Portal</h3>
                    <Link to ='/employee'><SidebarItem><p>Employee Creation</p></SidebarItem></Link>
                    <Link to ='/employeeList'><SidebarItem><p>Employee List</p></SidebarItem></Link>
                </div>
                
            </SidebarParent>
        </>
    );
}

export default Sidebar;