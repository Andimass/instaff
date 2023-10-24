import './Cadastr.css'
import React, {useRef, useState} from "react";

const Cadastr = () =>  {

  const [activeHandler, setActiveHandler] = useState(null);

  const handleClick = (handlerId) => {
    if (activeHandler === handlerId) {
      // If the same handler is clicked again, close it
      setActiveHandler(null);
    } else {
      // Close the previously active handler (if any)
      if (activeHandler !== null) {
        switch (activeHandler) {
          case 1:
            setIsShown(false);
            break;
          case 2:
            setIsShown_2(false);
            break;
          case 3:
            setIsShown_3(false);
            break;
          case 4:
            setIsShown_4(false);
            break;
          case 5:
            setIsShown_5(false);
            break;
          default:
            break;
        }
      }
      // Open the clicked handler
      setActiveHandler(handlerId);
    }
  };

  const [isShown, setIsShown] = useState(false);
  const [isShown_2, setIsShown_2] = useState(false);
  const [isShown_3, setIsShown_3] = useState(false);
  const [isShown_4, setIsShown_4] = useState(false);
  const [isShown_5, setIsShown_5] = useState(false);
  const handleCloseClick = () => {
    setActiveHandler(null); // Закрыть блок
  };



  function openMenu() {
  document.body.classList.add('menu-opened');
}

// При закрытии меню
    function closeMenu() {
    document.body.classList.remove('menu-opened');
}


  return (
    <head>
         <title>Кадастр</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
    <div className={'Cadastr'}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <img className='cadastr_bgc' src='/public/cadastr.jpeg'/>
      <div className={`cadastr_header ${activeHandler === 4 ? 'bgc_opacity' : ''}`}>
        <a href="/">
            <img className='logo-supply' src="/public/logo.png" alt='' />
        </a>
        <input className={`menu_supply ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white.png' onClick={() => handleClick(4)} alt=''/>
        {activeHandler === 4 && (
            <div className='menu_supply_activate'>
                <p className='menu_supply_activate_close' onClick={handleCloseClick}>Закрыть</p>
                <div className='menu_opacity_bgc'></div>
                <div className='menu_supply_activate_LI'>
                    <li className='menu_supply_activate_li'><a href="/">Главная</a></li>
                    <li className='menu_supply_activate_li'><a href="/project">Проекты</a></li>
                    <li className='menu_supply_activate_li'><a href="/about">О кампании</a></li>
                    <li className='menu_supply_activate_li'><a href="/contacts">Контакты</a></li>
                    <li className='menu_supply_activate_li_callback'><a href='/callback'>Связаться с нами</a></li>
                </div>
                <p className='menu_supply_activate_city'>г.Краснодар</p>
                <p className='menu_supply_activate_number'>+7 (918) 495-34-20</p>
            </div>
        )}
      </div>
       <div className='cadastr_body'>
           <h2 className="cadastr_title">Кадастровые работы<span className='cadastr_span'></span></h2>





               <svg width="0" height="0">
            <filter
            id="ambilight"
            width="300%"
            height="300%"
            x="-0.75"
            y="-0.75"
            colorInterpolationFilters="sRGB"
            >
            <feOffset in="SourceGraphic" result="source-copy" />
            <feColorMatrix
                in="source-copy"
                type="saturate"
                values="1"
                result="saturated-copy"
            />
            <feColorMatrix
                in="saturated-copy"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        33 33 33 101 -100"
                result="bright-colors"
            />
            <feMorphology
                in="bright-colors"
                operator="dilate"
                radius="1"
                result="spread"
            />
            <feGaussianBlur
                in="spread"
                stdDeviation="15"
                result="ambilight-light"
            />
            <feOffset in="SourceGraphic" result="source" />
            <feComposite in="source" in2="ambilight-light" operator="over" />
            </filter>
            </svg>




           <div className='cadastr_uslugi'>
                <div className={`cadastr_body_uslugi_box1 ${activeHandler === 1 ? 'blue-background' : ''}`}>
                    <h2 className='cadastr_body_uslugi_box_title'>Межевание земельного участка</h2>
                    <img className='cadastr_body_box1_image' src='/public/cadastr1.jpg'/>
                    <p className='cadastr_body_price'>от 10.000 руб.</p>
                    <p className='cadastr_body_text'>Установление границ и меток на участке для определения его площади и правовых ограничений.</p>
                    <input className={`cadastr_body_uslugi_box_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" onClick={() => handleClick(1)} alt=''/>
                    {activeHandler === 1 && (
                    <div className='dop_1'>


                    </div>
                  )}
                </div>


               <div className={`cadastr_body_uslugi_box2 ${activeHandler === 2 ? 'blue-background' : '' }`}>
                    <h2 className='cadastr_body_uslugi_box_title'>Технический план ОКС</h2>
                    <img className='cadastr_body_box2_image' src='/public/cadastr2.jpg'/>
                    <p className='cadastr_body_price2'>от 10.000 руб.</p>
                    <p className='cadastr_body_text2'>Составление документа характеристик и параметров строительных объектов с целью регистрации и учета в соответствии с законодательством</p>
                    <input className={`cadastr_body_uslugi_box_strela2 ${activeHandler === 2 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(2)} alt=''/>
                    {activeHandler === 2 && (
                    <div className='dop_2'>


                    </div>
                  )}
                </div>


               <div className={`cadastr_body_uslugi_box3 ${activeHandler === 3 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Акт обследования</h2>
                   <img className='cadastr_body_box3_image' src='/public/cadastr3.jpg'/>
                   <p className='cadastr_body_price3'>от 10.000 руб.</p>
                    <p className='cadastr_body_text3'>Документальное подтверждение результатов осмотра объекта или территории с указанием выявленных характеристик, состояния или проблем</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 3 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(3)} alt=''/>
                    {activeHandler === 3 && (
                    <div className='dop_3'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box4 ${activeHandler === 5 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Формирование з/у и схема на КПТ</h2>
                   <img className='cadastr_body_box4_image' src='/public/cadastr4.jpg'/>
                   <p className='cadastr_body_price4'>от 10.000 руб.</p>
                    <p className='cadastr_body_text4'>Услуги геодезической обработки и документирования земельных участков и их расположения на кадастровой карте</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 5 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(5)} alt=''/>
                    {activeHandler === 5 && (
                    <div className='dop_4'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box5 ${activeHandler === 6 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Исправление кадастровых ошибок</h2>
                   <img className='cadastr_body_box5_image' src='/public/cadastr5.jpg'/>
                   <p className='cadastr_body_price5'>от 10.000 руб.</p>
                    <p className='cadastr_body_text5'>Коррекция и исправление недочетов или неточностей в кадастровых данных и документах для обеспечения их точности и актуальности</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 6 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(6)} alt=''/>
                    {activeHandler === 6 && (
                    <div className='dop_5'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box6 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Межевание для выдела с/х долей</h2>
                   <img className='cadastr_body_box6_image' src='/public/cadastr6.jpg'/>
                   <p className='cadastr_body_price6'>от 10.000 руб.</p>
                    <p className='cadastr_body_text6'>Определение и оформление отдельных участков земли для с/x использования с соблюдением законодательных норм и требований</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`cadastr_body_uslugi_box7 ${activeHandler === 8 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Снижение кадастровой стоимости</h2>
                   <img className='cadastr_body_box7_image' src='/public/cadastr7.jpg'/>
                   <p className='cadastr_body_price7'>от 10.000 руб.</p>
                    <p className='cadastr_body_text7'>Уменьшение оценочной стоимости недвижимости или земельного участка, для снижения налоговых и иных финансовых обременений</p>
                    <input className={`gaz_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`cadastr_body_uslugi_box8 ${activeHandler === 9 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Строительно-планировочное задание (СПЗ) </h2>
                   <img className='cadastr_body_box8_image' src='/public/cadastr8.jpg'/>
                   <p className='cadastr_body_price8'>от 10.000 руб.</p>
                    <p className='cadastr_body_text8'>Определение назначения земли, допустимые строительные работы и параметры объектов, которые могут быть построены на участке</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box9 ${activeHandler === 10 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title9'>Уведомление о планах строительста и реконстукции</h2>
                   <img className='cadastr_body_box9_image' src='/public/cadastr9.jpg'/>
                   <p className='cadastr_body_price9'>от 10.000 руб.</p>
                    <p className='cadastr_body_text9'>Уведомление о намерении начать строительные или реконструкционные работы на конкретном земельном участке</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 5 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(5)} alt=''/>
                    {activeHandler === 5 && (
                    <div className='dop_4'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box10 ${activeHandler === 11 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Разрешение на строительство</h2>
                   <img className='cadastr_body_box10_image' src='/public/cadastr10.jpg'/>
                   <p className='cadastr_body_price10'>от 10.000 руб.</p>
                    <p className='cadastr_body_text10'>Официальное разрешение, которое позволяет начать и завершить строительные работы на определенном земельном участке</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 6 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(6)} alt=''/>
                    {activeHandler === 6 && (
                    <div className='dop_5'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box11 ${activeHandler === 12 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Как узаконить гараж (Гаражная амнистия)</h2>
                   <img className='cadastr_body_box11_image' src='/public/cadastr11.jpg'/>
                   <p className='cadastr_body_price11'>от 10.000 руб.</p>
                    <p className='cadastr_body_text11'>Подготовка документов и требований для законного признания гаража, обеспечивая его соответствие строительным и земельным нормативам</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`cadastr_body_uslugi_box12 ${activeHandler === 13 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title'>Схема расположения земельного участка на КПТ</h2>
                   <img className='cadastr_body_box12_image' src='/public/cadastr12.jpg'/>
                   <p className='cadastr_body_price12'>от 10.000 руб.</p>
                    <p className='cadastr_body_text12'>Создание планов и документации, точно определяющих местоположение и границы земельного участка на кадастровой карте</p>
                    <input className={`gaz_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_footer ${activeHandler === 1 ? 'footer-shot_1' : '' || activeHandler === 2 ? 'footer-shot_2' : '' || activeHandler === 3 ? 'footer-shot_3' : '' }`}>
                   <img className='cadastr_footer_logo' src='/public/logo2.png' alt=''/>
                   <img className='cadastr_footer_logo2' src='/public/Group 4.png' alt=''/>
                   <div className='cadastr_footer_s'>
                   <li className='cadastr_footer_source'><a>Главная</a></li>
                   <li className='cadastr_footer_source'><a>Проекты</a></li>
                   <li className='cadastr_footer_source'><a>О кампании</a></li>
                   <li className='cadastr_footer_source'><a>Контакты</a></li>
                   <li className='cadastr_footer_callback'><a>Связаться с нами</a></li>
                   <div className='cadastr_black_line'></div>
               </div>
           </div>
          </div>
       </div>
    </div>
    </head>
  );
}

export default Cadastr