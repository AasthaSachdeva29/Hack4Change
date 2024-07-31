

import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
       
       
                    
                    {
                        path: "/productivity",
                        name: "Productivity",
                        icon: <FaRegChartBar />,
                        subItems: [
                            {
                                path: "/productivity/market",
                                name: "Marketplace"
                            },
                            {
                                path: "/productivity/agritrace",
                                name: "Agritrace-Connect"
                            }
                        ]
                    },
                    {
                        path: "/traceability",
                        name: "Traceability",
                        icon: <FaUserAlt />,
                    },
                    {
                        path: "/weather",
                        name: "Weather Forecast",
                        icon: <FaUserAlt />,
                    },
                    {
                        path: "/carbonfootprints",
                        name: "Carbon Footprints",
                        icon: <FaUserAlt />,
                    },
                    {
                        path: "/disease",
                        name: "Disease Detection",
                        icon: <FaUserAlt />,
                    },
                    {
                        path: "/aires",
                        name: "ChatBot",
                        icon: <FaUserAlt />,
                    }
                   
    ];

    return (
        <div className="contain" style={{ position: "sticky" }}>
            <div style={{ width: isOpen ? "250px" : "50px" ,top:"-3px"}} className="sidebar">
                <div className="top_header">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">AgriTrace</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <div key={index}>
                        <NavLink to={item.path} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className={`link_text ${item.name === "Health & Progress" ? "small-font" : ""}`}>{item.name}</div>
                        </NavLink>
                        {/* Render sub-items if they exist */}
                        {item.subItems && isOpen && (
                            <div style={{ paddingLeft: "20px" }}>
                                {item.subItems.map((subItem, subIndex) => (
                                    <NavLink key={subIndex} to={subItem.path} className="sub-link" activeClassName="active">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            {/* You can customize the sub-item icon here */}
                                            <div style={{ marginRight: "5px",color:"white",fontSize:"25px" }}>&#8627;</div>
                                            <div style={{ color: "white", textDecoration: "none", margin:"5px",fontSize:"15px" }}>{subItem.name}</div>
                                            
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;







// import React, { useState } from 'react';
// import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState(null);

//     const toggle = () => setIsOpen(!isOpen);

//     const menuItem = [
//         {
//             path: "/health",
//             name: "Health & Progress",
//             icon: <FaUserAlt />
//         },
//         {
//             path: "/traceability",
//             name: "Traceability",
//             icon: <FaUserAlt />,
//         },
//         {
//             path: "/productivity",
//             name: "Productivity",
//             icon: <FaRegChartBar />,
//             subItems: [
//                 {
//                     path: "/productivity/marketplace",
//                     name: "Marketplace"
//                 },
//                 {
//                     path: "/productivity/agritrace",
//                     name: "Agritrace-Connect"
//                 }
//             ]
//         },
//         {
//             path: "/sustainability",
//             name: "Sustainability",
//             icon: <FaCommentAlt />,
//             subItems: [
//                 {
//                     path: "/sustainability/carbonfootprints",
//                     name: "Carbon Footprint"
//                 }
               
//             ]
//         }
//     ];

//     const handleItemClick = (index) => {
//         setActiveItem(index === activeItem ? null : index);
//     };

//     return (
//         <div className="contain" style={{ position: "sticky" }}>
//             <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
//                 <div className="top_header">
//                     <h1 style={{ display: isOpen ? "block" : "none", fontWeight:"bold" }} className="logo">AgriTrace</h1>
//                     <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
//                         <FaBars onClick={toggle} />
//                     </div>
//                 </div>
//                 {menuItem.map((item, index) => (
//                     <div key={index}>
//                         <NavLink
//                             to={item.path}
//                             className="link"
//                             activeClassName="active"
//                             onClick={() => handleItemClick(index)}
//                         >
//                             <div className="icon">{item.icon}</div>
//                             <div className="link_text">{item.name}</div>
//                         </NavLink>
//                         {/* Render sub-items if they exist and the parent item is active */}
//                         {item.subItems && index === activeItem && (
//                             <div style={{ paddingLeft: "20px" }}>
//                                 {item.subItems.map((subItem, subIndex) => (
//                                     <NavLink
//                                         key={subIndex}
//                                         to={subItem.path}
//                                         className="sub-link"
//                                         activeClassName="active"
//                                     >
//                                         <div style={{ display: "flex", alignItems: "center" }}>
//                                             {/* You can customize the sub-item icon here */}
//                                              <div style={{ marginRight: "5px", color: "white", fontSize:"25px"}}> &#8627;</div> 
//                                             <div style={{ color: "white", textDecoration: "none", margin:"5px",fontSize:"15px" }}>{subItem.name}</div>
//                                         </div>
//                                     </NavLink>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;


