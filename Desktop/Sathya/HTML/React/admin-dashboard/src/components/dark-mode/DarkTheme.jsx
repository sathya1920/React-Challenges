import React, { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import './DarkTheme.css'
import { ThemeContext } from "../context/ThemeProvider";
const DarkTheme = () => {
  const {darkMode,toggleTheme} = useContext(ThemeContext);
  
  useEffect(()=>{
    if(darkMode){
        document.body.classList.add("mode");
    }else{
        document.body.classList.remove("mode");
    }
  },[darkMode])
  return (
    <div className={darkMode ? `mode`: ``}>
      <h1 className={darkMode ? `text-info` : ``}>Dark Mode Challange</h1>
      {darkMode ? (
        <MdLightMode
          size={40}
          className="icon"
          color="orange"
          onClick={toggleTheme}
        />
      ) : (
        <MdDarkMode
          onClick={toggleTheme}
          size={40}
          className="icon"
        />
      )}
      <p className={darkMode ? `text-white` : ``}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        molestias tempore recusandae eligendi unde. Error laboriosam fugiat
        doloribus natus eveniet cupiditate modi, dicta eligendi culpa deserunt
        sunt ab sit illo!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sequi
        optio pariatur maxime ut rerum iure inventore quia necessitatibus eaque
        omnis neque, aliquam nemo repudiandae fuga doloremque, exercitationem
        sunt odio! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde quia consectetur sit delectus ut minus, ducimus enim aut fugiat
        accusamus nesciunt ea possimus, similique qui soluta? Laborum cumque
        porro mollitia aliquid impedit ea laboriosam magnam modi corrupti sed,
        soluta at deleniti quod magni dolore perferendis quia delectus, deserunt
        tempore ab reiciendis fugit veniam eveniet iste. Corrupti nesciunt,
        maxime at earum atque repellendus eveniet hic, dignissimos rerum quam
        reiciendis quos necessitatibus neque natus eligendi nemo distinctio
        delectus dolores labore blanditiis temporibus a, ut debitis facere?
        Eligendi corrupti modi, praesentium consequuntur velit ab officiis.
        Voluptas placeat odit impedit. Magnam recusandae impedit nesciunt.
      </p>
      <button className={darkMode ? `btn btn-warning` : ``}>Save</button>
      <button className={darkMode ? `btn btn-primary` : ``}>Submit</button>
    </div>
  );
};

export default DarkTheme;
