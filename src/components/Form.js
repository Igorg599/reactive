import React from 'react';
import Bell from '../assets/img/bell.png';
import Done from '../assets/img/Done.png';

function From() {
    const [checkChoice, setCheckChoice] = React.useState(true);
    const [consentCheckOne, setConsentCheckOne] = React.useState(false);
    const [consentCheckTwo, setConsentCheckTwo] = React.useState(false);
    const [done, SetDone] = React.useState(true);

    const [valueSurname, setValueSurname] = React.useState('');
    const [valueName, setValueName] = React.useState('');
    const [valuePatronymic, setValuePatronymic] = React.useState('');
    const [valueEmail, setValueEmail] = React.useState('');
    const [valueTel, setValueTel] = React.useState('');
    const [valueDocument, setValueDocument] = React.useState('');
    const [valueSerial, setValueSerial] = React.useState('');
    const [valueNumber, setValueNumber] = React.useState('');
    const [valueDay, setValueDay] = React.useState('');
    const [valueMonth, setValueMonth] = React.useState('');
    const [valueYear, setValueYear] = React.useState('');

    const [visibleChoice, setVisibleChoice] = React.useState(true);
    const [visibleDoneChoice, setVisibleDoneChoice] = React.useState(false);
    const [visibleDisabledData, setVisibleDisabledData] = React.useState(true);
    const [visibleData, setVisibleData] = React.useState(false);
    const [visibleDoneData, setVisibleDoneData] = React.useState(false);
    const [visibleDisabledConsent, setVisibleDisabledConsent] = React.useState(true);
    const [visibleConsent, setVisibleConsent] = React.useState(false); 

    const onValueSurnameChange = (e) => {
        setValueSurname(e.target.value);
    }
    const onValueNameChange = (e) => {
        setValueName(e.target.value);
    }
    const onValuePatronymicChange = (e) => {
        setValuePatronymic(e.target.value);
    }
    const onValueEmailChange = (e) => {
        setValueEmail(e.target.value);
    }
    const onValueTelChange = (e) => {
        setValueTel(e.target.value);
    }
    const onValueDocumentChange = (e) => {
        setValueDocument(e.target.value);
    }
    const onValueSerialChange = (e) => {
        setValueSerial(e.target.value);
    }
    const onValueNumberChange = (e) => {
        setValueNumber(e.target.value);
    }
    const onValueDayChange = (e) => {
        setValueDay(e.target.value);
    }
    const onValueMonthChange = (e) => {
        setValueMonth(e.target.value);
    }
    const onValueYearChange = (e) => {
        setValueYear(e.target.value);
    }

    function onStepTwo() {
        setVisibleChoice(!visibleChoice);
        setVisibleDoneChoice(!visibleDoneChoice);
        setVisibleDisabledData(!visibleDisabledData);
        setVisibleData(!visibleData);
    }

    function onStepThree(e) {
        e.preventDefault();
        setVisibleData(!visibleData);
        setVisibleDoneData(!visibleDoneData);
        setVisibleDisabledConsent(!visibleDisabledConsent);
        setVisibleConsent(!visibleConsent);
    }

    function onRepeatStepOne() {
        setVisibleChoice(true);
        setVisibleDoneChoice(false);
        setVisibleDisabledData(true);
        setVisibleData(false);
        setVisibleDoneData(false);
        setVisibleDisabledConsent(true);
        setVisibleConsent(false);
    }

    function onRepeatStepTwo() {
        setVisibleChoice(false);
        setVisibleDoneChoice(true);
        setVisibleDisabledData(false);
        setVisibleData(true);
        setVisibleDoneData(false);
        setVisibleDisabledConsent(true);
        setVisibleConsent(false);
    }

    const onDispatchData = (e) => {
        e.preventDefault();
        SetDone(!done);
    }

    return (
        <>
            {done ? 
                <>
                    {visibleChoice ?
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
                        <button className="button" type="button" onClick={onStepTwo}>Продолжить</button>
                    </div> : <div/>}
                    {visibleDoneChoice ?
                    <div className="done" onClick={onRepeatStepOne}>
                        <div className="done__ellipse"><img alt='done' src={Done}/></div>
                        <p>Выбор заявителя</p>
                    </div> : <div/>}
                    {visibleDisabledData ?
                        <div className="disabled">
                            <div className="disabled__ellipse">2</div>
                            <p>Данные заявителя</p>
                        </div> : <div/>}
                    {visibleData ?
                    <form onSubmit={onStepThree} className='data'>
                        <div className="ellipse"><p>2</p></div>
                        <h3>Данные заявителя</h3>
                        <h5>Фамилия</h5>
                        <input onChange={onValueSurnameChange} value={valueSurname} type='text' className="input" required/>
                        <h5>Имя</h5>
                        <input onChange={onValueNameChange} value={valueName} type='text' className="input" required/>
                        <h5>Отчество</h5>
                        <input onChange={onValuePatronymicChange} value={valuePatronymic} type='text' className="input" required/>
                        <h5>Электронная почта</h5>
                        <input onChange={onValueEmailChange} value={valueEmail} type='email' className="input" required/>
                        <h5>Телефон</h5>
                        <input onChange={onValueTelChange} value={valueTel} type='number' className="input" required/>
                        <h4>Документ, удостоверяющий личность</h4>
                        <h5>Документ</h5>
                        <input onChange={onValueDocumentChange} value={valueDocument} type='text' className="input" required/>
                        <div className="data__pasport">
                            <div className="data__serial">
                                <h5>Серия</h5>
                                <input onChange={onValueSerialChange} value={valueSerial} type='number' className="input serial" required/>
                            </div>
                            <div className="data__serial">
                                <h5>Номер</h5>
                                <input onChange={onValueNumberChange} value={valueNumber} type='number' className="input number" required/>
                            </div>
                        </div>
                        <h5>Когда выдан</h5>
                        <div className="data__issue">
                            <div className="data__issueitem">
                                <h6>День</h6>
                                <input onChange={onValueDayChange} value={valueDay} type='number' className="input day" required/>
                            </div>
                            <div className="data__issueitem">
                                <h6>Месяц</h6>
                                <input onChange={onValueMonthChange} value={valueMonth} type='number' className="input day" required/>
                            </div>
                            <div className="data__issueitem">
                                <h6>Год</h6>
                                <input onChange={onValueYearChange} value={valueYear} type='number' className="input year" required/>
                            </div>
                        </div>
                        <button className="button" type="submit">Продолжить</button>
                    </form> : <div/>}
                    {visibleDoneData ?
                    <div className="done two" onClick={onRepeatStepTwo}>
                        <div className="done__ellipse"><img alt='done' src={Done}/></div>
                        <p>Данные заявителя</p>
                    </div> : <div/>}
                    {visibleDisabledConsent ? 
                    <div className="disabled">
                        <div className="disabled__ellipse">3</div>
                        <p>Согласие</p>
                    </div> : <dib/>}
                    {visibleConsent ?
                    <form onSubmit={onDispatchData} className='consent'>
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
                            <input checked={consentCheckOne} className="consent__checkbox" type="checkbox" required onClick={() => setConsentCheckOne(!consentCheckOne)}/>
                            <p>Я подтверждаю свое согласие со всеми вышеперечисленными пунктами</p>
                        </div>
                        <div className={consentCheckTwo ? 'consent__check active' : 'consent__check'}>
                            <input checked={consentCheckTwo} className="consent__checkbox" type="checkbox" required onClick={() => setConsentCheckTwo(!consentCheckTwo)}/>
                            <p>Я уведомлен о том, что результат будет получен в электронном виде</p>
                        </div>
                        <div className='consent__bell'>
                            <p>Пожалуйста, еще раз внимательно проверьте все данные перед отправкой</p>
                            <img alt='bell' src={Bell}/>
                        </div>
                        <button className="button" type="submit">Отправить</button>
                        <div className='consent__bottom'>Нажимая кнопку «Отправить», вы соглашаетесь с <span>правилами хранения и обработки персональных данных</span></div>
                    </form> : <div/>}
                </> :
                <div className='finish'>
                    <h3>Заявление принято</h3>
                    <p>Номер заявления <strong>RU-1234567</strong>. Максимальный срок предоставления услуги — 20 рабочих дней. Следите за статусом заявления в <span>Личном кабинете</span>. <br/><br/> Если у вас остались вопросы по оказанию услуги, пожалуйста, обращайтесь по телефону +7 (342) 123-45-67.</p>
                    <div className='finish__button'>
                        <button className="button continue" type="button">Вернуться в каталог</button>
                        <button className="button transition" type="button">Перейти в личный кабинет</button>
                    </div>
                </div>
            }
        </>
    );
}

export default From;