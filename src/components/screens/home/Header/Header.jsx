
import './Header.scss'
import React, {useEffect, useState, useRef} from "react";
import $ from "jquery";
import p5 from "p5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const [isOpen_2, setIsOpen_2] = useState(false);
    const toggleModal_2 = () => setIsOpen_2(!isOpen_2);

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => setIsExpanded(!isExpanded);

    const [isExpanded_2, setIsExpanded_2] = useState(false);
    const toggleExpansion_2 = () => setIsExpanded_2(!isExpanded_2);

    const [isOpen_3, setIsOpen_3] = useState(false);
    const toggleModal_3 = () => setIsOpen_3(!isOpen_3);
    const [isExpanded_3, setIsExpanded_3] = useState(false);
    const toggleExpansion_3 = () => setIsExpanded_3(!isExpanded_3);

    const [isOpen_4, setIsOpen_4] = useState(false);
    const toggleModal_4 = () => setIsOpen_4(!isOpen_4);
    const [isExpanded_4, setIsExpanded_4] = useState(false);
    const toggleExpansion_4 = () => setIsExpanded_4(!isExpanded_4);

        return (
        <html>
        <head>
         <title>HR</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

            <meta name="yandex-verification" content="ee98594a3963c95e" />
            </head>
            <body className="custom-zoom-page">
            <div className='Header'>
                <div className='header_up'>
                    <img className='header_up_img' src='/public/logo.png'/>
                    <p className='header_up_img_title'>HR - агенство</p>
                    <div className='header_up_text'>
                        <a className='header_up_text_1' href='#about'>Почему мы</a>
                        <a className='header_up_text_2' href='#ourcep'>Этапы сотрудничества</a>
                        <a className='header_up_text_3'>Стоимость</a>
                        <a className='header_up_text_4' href='#etap'>Отзывы и кейсы</a>
                        <a className='header_up_text_5'>Контакты</a>
                    </div>
                </div>
                <div className='header_top'>
                    <div className='header_top_ml'>
                    <h className='header_top_title'>Найдём сильных специалистов для вашего дела!</h>
                    <img className='header_top_img_1' src='/public/h1.png'/>
                    <img className='header_top_img_2' src='/public/h2.png'/>
                    <img className='header_top_img_3' src='/public/h3.png'/>
                    <div className='header_top_text'>
                        <p className='header_top_text_1'>Точечный подбор персонала в различных сферах бизнеса. От рядового сотрудника до топ-менеджера и управленца</p>
                        <p className='header_top_text_2'></p>
                        <p className='header_top_text_3'></p>
                    </div>
                    </div>
                </div>
                <div className='header_keys'>
                    <h className='header_keys_title'>Почему мы?</h>
                    <div className='header_keys_title_img'>
                        <div className='header_keys_box_1'>
                            <img className='header_keys_img_1' src='/public/poisk.png'/>
                            <h2 className='header_keys_text_1'>Релевантные кандидаты в первые дни сотрудничества</h2>
                        </div>
                        <div className='header_keys_box_2'>
                            <img className='header_keys_img_2' src='/public/poisk.png'/>
                            <h2 className='header_keys_text_2'>Своя методика подбора (не ограничиваемся hh.ru)</h2>
                        </div>
                        <div className='header_keys_box_3'>
                            <img className='header_keys_img_3' src='/public/poisk.png'/>
                            <h2 className='header_keys_text_3'>Опытные рекрутёры из разных сфер </h2>
                        </div>
                        <div className='header_keys_box_4'>
                            <img className='header_keys_img_4' src='/public/poisk.png'/>
                            <h2 className='header_keys_text_4'>Средний срок закрытия вакансии 10 дней</h2>
                        </div>
                    </div>
                </div>
                <div className='header_about_company'>
                    <img className='header_about_company_img' src='/public/6911306.jpg'/>
                    <h className='header_about_company_title' id='about'>О нас</h>
                    <p className='header_about_company_text_1'>Мы – рекрутинговая компания, осуществляем подбор русскоязычного персонала в различных сферах бизнеса. Найдём от рядового сотрудника до топ-менеджера и управленца. Сотрудничаем с представителями всех отраслей и направлений. </p>
                    <p className='header_about_company_text_2'><span>INSTAFF</span> – это профессиональное HR-агентство. Наша цель – снять с собственника бизнеса «головную боль» по поиску и подбора персонала.</p>
                    <p className='header_about_company_text_3'>Мы убеждены, что основная задача нашего заказчика – это развитие и масштабирование своей компании. Доверьте профессиональным рекрутёрам «рутину и операционку».</p>
                    <p className='header_about_company_text_4'>Обратившись в кадровое агентство INSTAFF, вы сэкономите самый главный ресурс – время и энергию. А также существенно сократите бюджет на подбор и затраты на содержание штатного HR-специалиста.</p>
                </div>
                <div className='header_etap'>
                    <h2 className='header_etap_title' id='etap'>Этапы выполнения вакансии</h2>
                    <div className='header_etap_box'>
                        <p className='header_etap_num_1'>1</p>
                        <p className='header_etap_num_1_title'>Брифинг-встреча</p>
                        <p className='header_etap_num_1_text'>Заполнение заказчиком заявки на подбор (техническое задание).</p>
                        <img className='header_etap_num_1_img' src='/public/vsrecha.png'/>
                        <p className='header_etap_num_2'>2</p>
                        <p className='header_etap_num_2_title'>Рисуем портрет</p>
                        <p className='header_etap_num_2_text'>Обсуждаем нюансы идеального кандидата</p>
                        <img className='header_etap_num_2_img' src='/public/cena.png'/>
                        <p className='header_etap_num_3'>3</p>
                        <p className='header_etap_num_3_title'>Аналитика</p>
                        <p className='header_etap_num_3_text'>Проводим анализ рынка труда и вакансий</p>
                        <img className='header_etap_num_3_img' src='/public/podpis.png'/>
                        <p className='header_etap_num_4'>4</p>
                        <p className='header_etap_num_4_title'>Договор</p>
                        <p className='header_etap_num_4_text'>Заключаем договор оказания услуг</p>
                        <img className='header_etap_num_4_img' src='/public/otbor.png'/>
                        <p className='header_etap_num_5'>5</p>
                        <p className='header_etap_num_5_title'>Публикация вакансии</p>
                        <p className='header_etap_num_5_text'>Пишем классный «продаваемый» текст вакансии, учитывая механизм и особенности алгоритмов работных сайтов</p>
                        <img className='header_etap_num_5_img' src='/public/sopr.png'/>
                        <p className='header_etap_num_6'>6</p>
                        <p className='header_etap_num_6_title'>Активный поиск</p>
                        <p className='header_etap_num_6_text'>Сорсинг релевантных резюме, «холодные» и «тёплые» звонки</p>
                        <img className='header_etap_num_6_img' src='/public/contact.png'/>
                        <p className='header_etap_num_6_dug'></p>
                        <p className='header_etap_num_11'>7</p>
                        <p className='header_etap_num_11_title'>Интервью</p>
                        <p className='header_etap_num_11_text'>Проводим первичное интервью. Направляем резюме и итоги с выявлением hard и soft skills</p>
                        <img className='header_etap_num_11_img' src='/public/vsrecha.png'/>
                        <p className='header_etap_num_10'>8</p>
                        <p className='header_etap_num_10_title'>Назначение встречи</p>
                        <p className='header_etap_num_10_text'>Приглашаем успешных соискателей в офис заказчика или организуем видео собеседование</p>
                        <img className='header_etap_num_10_img' src='/public/cena.png'/>
                        <p className='header_etap_num_9'>9</p>
                        <p className='header_etap_num_9_title'>Обратная связь</p>
                        <p className='header_etap_num_9_text'>Узнаём итоги у заказчика и кандидата (впечатления и дальнейшие действия)</p>
                        <img className='header_etap_num_9_img' src='/public/podpis.png'/>
                        <p className='header_etap_num_8'>10</p>
                        <p className='header_etap_num_8_title'>Адаптация</p>
                        <p className='header_etap_num_8_text'>После выхода на работу остаёмся на связи, поддерживаем коммуникацию с сотрудником во время испытательного срока</p>
                        <img className='header_etap_num_8_img' src='/public/otbor.png'/>
                        <p className='header_etap_num_7'>11</p>
                        <p className='header_etap_num_7_title'>Гарантия</p>
                        <p className='header_etap_num_7_text'>В случае увольнения делаем замену кандидата в течение установленного гарантийного периода</p>
                        <img className='header_etap_num_7_img' src='/public/sopr.png'/>
                    </div>
                </div>
                <div className='header_preim'>
                    <h2 className='header_preim_title_1'>Преимущества работы с нами</h2>
                    <h2 className='header_preim_title_2'>Основательный подход к своему делу и грамотное отношение к каждому клиенту — залог успешного сотрудничества!</h2>
                        <div className='header_preim_box'>
                            <p className='header_preim_text_1'>Поиск и подбор топ-менеджеров;</p>
                            <p className='header_preim_text_2'>Поиск и подбор специалистов, персонала среднего и высшего звена;</p>
                            <p className='header_preim_text_3'>Прямой поиск уникальных специалистов в своей области деятельности;</p>
                            <p className='header_preim_text_4'>Консультации клиента по оценке потребности компании в специалистах и составлению точного профиля должности</p>
                            <p className='header_preim_text_5'>Курирование кандидата на испытательном сроке и - консультации заказчика по вопросам адаптации персонала</p>
                            <p className='header_preim_text_6'>Предоставление гарантии на все закрываемые вакансии</p>
                        </div>
                        <div className='header_preim_box_img'>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                        </div>
                </div>
                <div className='header_price'>
                    <h2 className='header_price_title'>Расчет стоимости</h2>
                      <div className='header_price_box'>
                        <p className='header_price_text'>Стоимость услуги обсуждается индивидуально после анализа заявки на подбор.</p>
                        <p className='header_price_factor'>Основные факторы, влияющие на ценообразование:</p>
                        <p className='header_price_factor_n1'>1.	Регион поиска специалистов</p>
                        <p className='header_price_factor_n2'>2.	Уникальность и специфика вакансии</p>
                        <p className='header_price_factor_n3'>3.	Длительность гарантийного периода</p>
                        </div>
                    <img className='header_price_img' src='/public/raschet.jpg'/>
                    <p className='header_price_price'>Рассчитать стоимость подбора</p>
                </div>
                <div className='header_otziv'>
                    <h2 className='header_otziv_title'>Наши кейсы</h2>
                    <div className='header_otziv_glav_box'>
                    <div className={`header_otziv_box_1 ${isExpanded ? 'expanded' : ''}`}>
                        <img className='header_otziv_box_1_title_img' src='/public/partner-logo.jpeg'/>
                        <p className='header_otziv_box_1_title'>ООО "ПАРТНЕР"</p>
                        <p className='header_otziv_box_1_title_date'>1 сентября</p>
                        <img className='header_otziv_box_1_star_img' src='/public/stars_11906616.png'/>
                        <p className='header_otziv_box_1_title_text'>Сделка состоялась</p>
                        <img
                            className={`header_otziv_box_1_img ${isOpen ? 'fullscreen' : ''}`}
                            src='/public/partner-otz.jpeg'
                            onClick={toggleModal}
                            alt="Отзыв"
                        />
                        {isOpen && <div className="overlay" onClick={toggleModal}></div>}
                        {isExpanded && <p className="additional_text">Менее, чем за месяц закрыли несколько позиций в инженерно-проектной компании. Удалось поработать с минимальными вложениями. Кандидатура сметчицы нашлась при помощи собственной базы соискателей.</p>}
                        <p className='header_otziv_box_1_podrobnee' onClick={toggleExpansion}>{isExpanded ? 'Закрыть' : 'Подробнее'}</p>
                    </div>
                    <div className={`header_otziv_box_2 ${isExpanded_2 ? 'expanded_2' : ''}`}>
                        <img className='header_otziv_box_2_title_img' src='/public/krovat.jpeg'/>
                        <p className='header_otziv_box_1_title'>Кроваткинбург</p>
                        <p className='header_otziv_box_1_title_date'>1 сентября</p>
                        <img className='header_otziv_box_1_star_img' src='/public/stars_11906616.png'/>
                        <p className='header_otziv_box_1_title_text'>Сделка состоялась</p>
                        <img
                            className={`header_otziv_box_2_img ${isOpen_2 ? 'fullscreen_2' : ''}`}
                            src='/public/krov-otz.jpeg'
                            onClick={toggleModal_2}
                            alt="Отзыв"
                        />
                        {isOpen && <div className="overlay" onClick={toggleModal_2}></div>}
                        {isExpanded_2 && <p className="additional_text">Искали менеджеров по продажам в интернет-магазин мебели. География поиска была: все регионы РФ, в которых московское время. Финальный запрос от заказчика был на поиск HRD. Подобрали успешного специалиста за 2 дня.</p>}
                        <p className='header_otziv_box_1_podrobnee' onClick={toggleExpansion_2}>{isExpanded_2 ? 'Закрыть' : 'Подробнее'}</p>
                    </div>
                    <div className={`header_otziv_box_3 ${isExpanded_3 ? 'expanded_3' : ''}`}>
                        <img className='header_otziv_box_2_title_img' src='/public/urlogo.jpeg'/>
                        <p className='header_otziv_box_1_title'>ФИН Эксперт</p>
                        <p className='header_otziv_box_1_title_date'>1 сентября</p>
                        <img className='header_otziv_box_1_star_img' src='/public/stars_11906616.png'/>
                        <p className='header_otziv_box_1_title_text'>Сделка состоялась</p>
                        <img
                            className={`header_otziv_box_3_img ${isOpen_3 ? 'fullscreen_3' : ''}`}
                            src='/public/urotz.jpeg'
                            onClick={toggleModal_3}
                            alt="Отзыв"
                        />
                        {isOpen_3 && <div className="overlay" onClick={toggleModal_3}></div>}
                        {isExpanded_3 && <p className="additional_text">Подобрали менеджера по работе с клиентами в юридическую компанию узкой специализации (банкротство). Несмотря на другой часовой пояс (+7 часов к московскому времени), сработали успешно и оперативно.</p>}
                        <p className='header_otziv_box_1_podrobnee' onClick={toggleExpansion_3}>{isExpanded_3 ? 'Закрыть' : 'Подробнее'}</p>
                    </div>
                    <div className={`header_otziv_box_4 ${isExpanded_4 ? 'expanded_4' : ''}`}>
                        <img className='header_otziv_box_4_title_img' src='/public/elit.jpeg'/>
                        <p className='header_otziv_box_4_title'>ФИН Эксперт</p>
                        <p className='header_otziv_box_4_title_date'>1 сентября</p>
                        <img className='header_otziv_box_1_star_img' src='/public/stars_11906616.png'/>
                        <p className='header_otziv_box_1_title_text'>Сделка состоялась</p>
                        <img
                            className={`header_otziv_box_4_img ${isOpen_4 ? 'fullscreen_4' : ''}`}
                            src='/public/elitotz.jpeg'
                            onClick={toggleModal_4}
                            alt="Отзыв"
                        />
                        {isOpen_4 && <div className="overlay" onClick={toggleModal_4}></div>}
                        {isExpanded_4 && <p className="additional_text">Был запрос от заказчика – подбор двух менеджеров по продажам в шоурум элитных аксессуаров для дома и офиса из натуральной кожи. Выполнили задачу за неделю.</p>}
                        <p className='header_otziv_box_1_podrobnee' onClick={toggleExpansion_4}>{isExpanded_4 ? 'Закрыть' : 'Подробнее'}</p>
                    </div>
                </div>
                </div>
                <div className='header_op'>
                    <h2 className='header_op_title'>Нам доверяют</h2>
                    <div className='header_op_img_box'>
                        <img className='header_op_img_box_1' src='/public/krovati.jpeg'/>
                        <img className='header_op_img_box_2' src='/public/zapad.jpeg'/>
                        <img className='header_op_img_box_3' src='/public/partner.jpeg'/>
                        <img className='header_op_img_box_4' src='/public/sfera.jpeg'/>
                        <img className='header_op_img_box_5' src='/public/zabor.jpeg'/>
                        <img className='header_op_img_box_6' src='/public/finexp.jpeg'/>
                        <img className='header_op_img_box_7' src='/public/giulia.jpeg'/>
                    </div>
                </div>
                <div>

                </div>
                <div className='header_footer'>
                    <p>Подвал</p>
                </div>
                <div>

                </div>
            </div>
            </body>
        </html>
        );
}
export default Header
