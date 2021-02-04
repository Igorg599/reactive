import React from 'react';

function From() {
    const [checkChoice, setcheckChoice] = React.useState(true);

    return (
        <form>
            <div className="choice">
                <div className="choice__ellipse"><p>1</p></div>
                <h3>Выбор заявителя</h3>
                <div className={checkChoice ? "choice__item active" : "choice__item"} onClick={() => setcheckChoice(true)}>
                    <div className={checkChoice ? "choice__check active" : "choice__check"}></div>
                    <div className="choice__descr">
                        <h5>Константинопольский К.К.</h5>
                        <p>Физическое лицо</p>
                    </div>
                </div>
                <div className={checkChoice ? "choice__item" : "choice__item active"} onClick={() => setcheckChoice(false)}>
                    <div className={checkChoice ? "choice__check" : "choice__check active"}></div>
                    <div className="choice__descr">
                        <h5>ООО «Константинополь»</h5>
                        <p>Юридическое лицо</p>
                    </div>
                </div>
                <button className="choice__button" type="button">Продолжить</button>
            </div>
        </form>
    );
}

export default From;