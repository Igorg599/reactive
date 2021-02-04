import React from 'react';
import Bell from '../assets/img/bell.png';

function From() {
    const [checkChoice, setCheckChoice] = React.useState(true);
    const [consentCheckOne, setConsentCheckOne] = React.useState(false);
    const [consentCheckTwo, setConsentCheckTwo] = React.useState(false);

    return (
        <form>
            <div className="choice">
                <div className="choice__ellipse"><p>1</p></div>
                <h3>Выбор заявителя</h3>
                <div className={checkChoice ? "choice__item active" : "choice__item"} onClick={() => setCheckChoice(true)}>
                    <div className={checkChoice ? "choice__check active" : "choice__check"}></div>
                    <div className="choice__descr">
                        <h5>Константинопольский К.К.</h5>
                        <p>Физическое лицо</p>
                    </div>
                </div>
                <div className={checkChoice ? "choice__item" : "choice__item active"} onClick={() => setCheckChoice(false)}>
                    <div className={checkChoice ? "choice__check" : "choice__check active"}></div>
                    <div className="choice__descr">
                        <h5>ООО «Константинополь»</h5>
                        <p>Юридическое лицо</p>
                    </div>
                </div>
                <button className="button" type="button">Продолжить</button>
            </div>
            <form className='data'>
                <div className="data__ellipse"><p>2</p></div>
                <h3>Данные заявителя</h3>
                <h5>Фамилия</h5>
                <input type='text' className="input" required/>
                <h5>Имя</h5>
                <input type='text' className="input" required/>
                <h5>Отчество</h5>
                <input type='text' className="input" required/>
                <h5>Электронная почта</h5>
                <input type='email' className="input" required/>
                <h5>Телефон</h5>
                <input type='number' className="input" required/>
                <h4>Документ, удостоверяющий личность</h4>
                <h5>Документ</h5>
                <input type='text' className="input" required/>
                <div className="data__pasport">
                    <div className="data__serial">
                        <h5>Серия</h5>
                        <input type='number' className="input serial" required/>
                    </div>
                    <div className="data__serial">
                        <h5>Номер</h5>
                        <input type='number' className="input number" required/>
                    </div>
                </div>
                <h5>Когда выдан</h5>
                <div className="data__issue">
                    <div className="data__issueitem">
                        <h6>День</h6>
                        <input type='number' className="input day" required/>
                    </div>
                    <div className="data__issueitem">
                        <h6>Месяц</h6>
                        <input type='number' className="input day" required/>
                    </div>
                    <div className="data__issueitem">
                        <h6>Год</h6>
                        <input type='number' className="input year" required/>
                    </div>
                </div>
                <button className="button" type="submit">Продолжить</button>
            </form>
            <form className='consent'>
                <div className="consent__ellipse"><p>3</p></div>
                <h3>Согласие</h3>
                <h4>Требуется ваше согласие по следующим пунктам:</h4>
                <ul>
                    <li>Я подтверждаю, что вся представленная информация является достоверной и точной;</li>
                    <li>Я несу ответственность в соответствии с действующим законодательством Российской Федерации за предоставление заведомо ложных или неполных сведений;</li>
                    <li>Я выражаю свое согласие на необходимое использование и обработку своих персональных данных, в том числе в информационных системах;</li>
                    <li>Со сроками оказания государственной услуги ознакомлен.</li>
                </ul>
                <div className={consentCheckOne ? 'consent__check active' : 'consent__check'}>
                    <input className="consent__checkbox" type="checkbox" required onClick={() => setConsentCheckOne(!consentCheckOne)}/>
                    <p>Я подтверждаю свое согласие со всеми вышеперечисленными пунктами</p>
                </div>
                <div className={consentCheckTwo ? 'consent__check active' : 'consent__check'}>
                    <input className="consent__checkbox" type="checkbox" required onClick={() => setConsentCheckTwo(!consentCheckTwo)}/>
                    <p>Я уведомлен о том, что результат будет получен в электронном виде</p>
                </div>
                <div className='consent__bell'>
                    <p>Пожалуйста, еще раз внимательно проверьте все данные перед отправкой</p>
                    <img alt='bell' src={Bell}/>
                </div>
                <button className="button" type="submit">Отправить</button>
                <div className='consent__bottom'>Нажимая кнопку «Отправить», вы соглашаетесь с <span>правилами хранения и обработки персональных данных</span></div>
            </form>
        </form>
    );
}

export default From;