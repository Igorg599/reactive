import React from 'react';
import Vector from '../assets/img/Vector.png';



function SubHeader() {
  return (
    <div className="subheader">
        <div className="subheader__left">
            <h2>Выдача градостроительного плана земельного участка</h2>
            <p>Градостроительный план земельного участка выдается в целях обеспечения субъектов градостроительной деятельности информацией, необходимой для архитектурно-строительного проектирования, строительства, реконструкции объектов капитального строительства в границах земельного участка.</p>
        </div>
        <div className="subheader__right">
            <img src={Vector} alt='vector'/>
            <p>Услугу предоставляет</p>
            <p>Орган местного самоуправления</p>
        </div>
    </div>
  );
}

export default SubHeader;