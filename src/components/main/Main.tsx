import React from "react";
import { FAQs } from "../FAQ/FAQ.tsx";
import { Tasks } from "../tasks/Tasks.tsx";
import { Skills } from "../skills/Skills.tsx";
import { TitleWindow } from "../titleWindow/titleWindow.tsx";
import "./main.css";
import { Works } from "../works/Works.tsx";
import { Authors } from "../authors/Authors.tsx";
import { TrainingProgram } from "../trainingProgram/TrainingProgram.tsx";
import { Career } from "../career/Career.tsx";
import { Rates } from "../rates/Rates.tsx";
function Main() {
  const faqs = [
    {
      question: "что нужно для обучения?",
      answer: [
        `Вам подойдет современный компьютер или ноутбук с 8 и более ГБ оперативной памяти, на котором установлена видеокарта Nvida, начиная с GeForce 900.`,
        `Если у вас MacBook, то желательно, чтобы у него был процессор М1, это нужно для комфортного прохождения прохождения блоков с Redshift.`,
        `Также вам нужно будет установить программы Maya, Cinema 4D и Blender, Redshift.`,
        `- Blender — бесплатная программа работы с трехмерной графикой`,
        `- Maya — бесплатный триал на 30 дней.`,
        `-Cinema 4D и Redshift Render — бесплатный триал на 14 дней`,
      ],
    },
    {
      question: "кто проверяет задания на курсе 3D-художник?",
      answer: [
        "На онлайн-курсе задания проверяются так:",
        "1. Проверка наставником, который дает подробную обратную связь",
        "2. Кросс-проверка (peer review): ваши работы проверяют сокурсники,",
        "а вы проверяете их работы — это тренировка насмотренности (ключевого навыка",
        "в профессии 3D-художника), структурирование и закрепление знаний.",
      ],
      open: true,
    },
    {
      question: "как проходит обучение?",
      answer: [
        "По программе обучения вы:",
        "Просматриваете короткие видеоуроки на платформе и выполняете задания.",
        "-Все это занимает от 8 часов в неделю: курс можно совмещать с основной",
        "работой или с обучением в вузе",
        "Вы можете:",
        "-Переносить дедлайны",
        "-Приостанавливать («замораживать») обучение",
        "Вас поддерживают:",
        "-Наставники",
        "-Сокурсники",
        "-Координаторы",
      ],
      open: true,
    },
    {
      question: "на какой период предоставляется доступ к курсу?",
      answer: ["Доступ к курсу 3D остается у вас навсегда."],
      open: true,
    },
    {
      question: "как проходит стажировка?",
      answer: [
        "Стажировка — удаленная, ее можно проходить, находясь в любой точке мира.",
        "Срок — 1 месяц.",
        "-Вы самостоятельно создадите проект по реальному брифу от заказчика",
        "-Вас будет курировать арт-директор",
        "Опыт стажировки можно включить в резюме, а выполненный проект — в портфолио.",
      ],
      open: true,
    },
    {
      question: "помогаете ли вы с трудоустройством?",
      answer: [
        "У нас есть свой карьерный центр. Его специалисты помогают в поиске траектории профессионального развития.",
        "Вы узнаете:",
        "-Как правильно составить резюме",
        "-Как сформировать портфолио с работами в 3D-графике",
        "-Как найти интересующую вакансию",
      ],
      open: true,
    },
    {
      question: "какие есть варианты оплаты обучения?",
      answer: [
        "Вы можете оплатить курс единовременным платежом с дополнительной скидкой 10%, которая суммируется с другими акциями на сайте. Или выбрать удобную рассрочку без первоначального взноса и переплат от одного из наших партнеров (Тинькофф, Сбербанк, Почта Банк, ОТП Банк) и оплачивать обучение небольшими частями в течение 24 месяцев. Оставьте заявку, и менеджер расскажет вам подробнее про условия оплаты.",
        "А еще мы принимаем оплату за обучение от юридических лиц. Некоторые работодатели поддерживают сотрудников в желании развиваться. Обратитесь к своему руководителю — возможно, компания готова частично или полностью оплатить ваше обучение. Чтобы выставить счет, нам понадобятся реквизиты организации.",
        "Мы принимаем оплату дебетовыми и кредитными картами, Яндекс. Кошельком, Qiwi или наличными в терминалах и кассах.",
      ],
      open: true,
    },
    {
      question: "какова ваша политика возврата денег за курсы?",
      answer: [
        "Мы стараемся гибко подходить к вашим потребностям. Поэтому учитываем обстоятельства и возвращаем стоимость обучения полностью или частично, когда это предусмотрено договором.",
        "Если вы передумали проходить курс или хотите оформить возврат по другой причине, вы можете позвонить на номер горячей линии — наш менеджер расскажет об условиях. Они также описаны в разделе 4 нашей оферты.",
      ],
      open: true,
    },
    {
      question: "как быть, если я пропускаю уроки и не успеваю учиться?",
      answer: [
        "В рамках обучения предусмотрены каникулы, вы сможете перезагрузиться и отдохнуть.",
        "Если у вас временно отсутствует возможность продолжать обучение, вы можете перенести его и перейти на другой поток. По всем вопросам вы можете обращаться к куратору курса 3D.",
      ],
      open: true,
    },
    {
      question:
        "мне 15 лет. Могу ли я учиться у вас? И есть ли в Contented возрастные ограничения для студентов?",
      answer: [
        "Учиться на наших курсах можно с 16 лет. Если вы младше, но уже хотите оценить свои силы в дизайне и узнать о профессии больше, посмотрите наши бесплатные материалы и мероприятия здесь. Они помогут сориентироваться в мире дизайнерских специальностей, понять, что интереснее и больше вам подходит. А еще заранее оценить сложность обучения.",
      ],
      open: true,
    },
    {
      question: "я могу подарить обучение дизайну близкому человеку?",
      answer: [
        "Учиться на наших курсах можно с 16 лет. Если вы младше, но уже хотите оценить свои силы в дизайне и узнать о профессии больше, посмотрите наши бесплатные материалы и мероприятия здесь. Они помогут сориентироваться в мире дизайнерских специальностей, понять, что интереснее и больше вам подходит. А еще заранее оценить сложность обучения.",
      ],
      open: true,
    },
    {
      question: "я могу подарить обучение дизайну близкому человеку?",
      answer: [
        "Конечно. Для этого приобретите сертификат на сумму конкретного курса. Или подарите свободу выбора: купите сертификат на любую сумму, а получатель потратит его на свое усмотрение.",
      ],
      open: true,
    },
    {
      question: "какие курсы мне ещё могут быть интересны?",
      answer: [
        "Нравится 3D, но хотите попробовать что-нибудь еще? Приглашаем вас на профориентационный курс «Старт в дизайне». Вы попробуете 5 востребованных дизайн-профессий и будете обучаться той, что понравилась больше остальных.",
        "Освойте 2D- и 3D-анимацию на курсе «Профессия моушн-дизайнер с нуля до ПРО». За 18 месяцев создадите 16 работ и освоите 7 программ под руководством экспертов с опытом работы с Adidas, Яндекс, Mail.ru Group, Yota",
      ],
      open: true,
    },
    {
      question: "как стать 3D-дизайнером?",
      answer: [
        "Чтобы стать 3D-дизайнером, не обязательно иметь художественное или IT-образование и даже уметь рисовать. На курсах мы учим людей из разных сфер.",
        "Главное - желание и готовность получать новые знания.",
        "Больше информации по данному вопросу вы можете найти в статье 'Кто такой 3D Artist и чем он занимается?'",
      ],
      open: true,
    },
    {
      question: "как стать 3D-художником?",
      answer: [
        "Чтобы стать 3D-художником, не обязательно иметь художественное или IT-образование и даже уметь рисовать. На курсах мы учим людей из разных сфер.",
        "Главное - желание и готовность получать новые знания. Для начала можно изучить основы 3D-моделирования и программное обеспечение для создания 3D-моделей, например, Maya, 3ds Max, Blender.",
        "Больше информации по данному вопросу вы можете найти в статье 'Кто такой 3D Artist и чем он занимается?'",
      ],
      open: true,
    },
    {
      question: "как сделать 3D-анимацию?",
      answer: [
        "Чтобы создать 3D-анимацию, нужно иметь опыт работы с графическими программами для 3D-моделирования, а также понимание основных принципов анимации. Есть специализированные программы, такие как Autodesk Maya, 3ds Max, Blender, в которых работают 3D-дизайнеры. Важно также уметь работать с ключевыми кадрами, таймингом и визуальным рассказом, чтобы сделать анимацию более качественной и интересной. Всему этому мы учим на курсах.",
        "Больше информации можно найти в статье 'Подборка программ для 3D художника'.",
      ],
      open: true,
    },
    {
      question: "где работать 3D-художнику?",
      answer: [
        "3D-художники работают в игровой и киноиндустрии, рекламе, архитектурном проектировании и промышленном дизайне. Можно работать как фрилансер, устроиться в дизайн-студию или открыть свою.",
        "Больше информации можно найти в статье 'Кто такой 3D Artist и чем он занимается?'.",
      ],
      open: true,
    },
  ];
  return (
    <div className="containerr">
      <TitleWindow />
      <div className="container">
        <Tasks />
      </div>
      <Skills />
      <div className="container">
        <Works />
      </div>
      <div className="container">
        <Authors />
      </div>
      <div className="container">
        <TrainingProgram />
      </div>
      {/* <div className="container"> */}
      <Career />
      {/* </div> */}
      <div className="container">
        <Rates />
      </div>
      <div className="container">
        <FAQs faqs={faqs} />
      </div>
    </div>
  );
}

export default Main;
