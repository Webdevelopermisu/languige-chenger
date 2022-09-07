const langEl = document.querySelector('.langWrap');
const link = document.querySelector('a');
const titleEl = document.querySelector('.title');
const descriptionEl = document.querySelector('.description');

link.forEach(el => {
    el.addEventListener('click', ()=>{
        langEl.querySelector(".active").classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title
    })
});



var data = {
    "english":
    {
        "title": "hello world",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, repellendus illo, animi nemo ipsa assumenda eius perferendis eaque dicta recusandae similique quasi earum dolorum id vel corporis laborum eos? Repellat quo facilis harum omnis, tenetur nihil quibusdam sit iste alias eius voluptatum cupiditate natus, modi voluptatibus excepturi voluptas esse accusantium voluptatem dolorum, enim rem repudiandae non earum quasi! Distinctio sit sint, dolorem voluptates aut numquam nostrum hic iste, laudantium perferendis facere maxime esse fuga ipsa quasi nulla quis blanditiis rerum!"
    },
    "kazakh":{
        "title":"Сәлем Әлем",
        "description":"Тапсырыс беруші үшін майлау процесіне назар аудару өте маңызды. Оған тойтарыс беру үшін, ешкімнің ақыл-ойының өзі оның күшін және бас тарту сөздерін және сол сияқты сол немесе физикалық ауыртпалықтардың ауырсынуын қабылдауға бола ма? Ол мұның бәрі үшін оңай екенін, кейбіреулер үшін ешнәрсе емес деп есептелетінін, ол басқаша өзінің ләззатының қалауымен туылғанын, айыптаушылардың ләззаты - азаптың ләззатын, объектісі үшін оны жоққа шығарады. бас тарту олар сияқты емес! Айырмашылық болсын, азап болсын, ләззат болсын, мейлі бұл жерде біздікі болсын, мақтауларды көтере отырып, бұл ештеңенің мақтанышына қашудың өзі!"
    },
    "japanese":{
        "title":"こんにちは世界",
        "description":"お客様が脂肪分解プロセスに注意を払うことは非常に重要です。 反発された、彼に反発された、精神自体の誰も彼の態度を引き受けることができず、拒否の言葉など、あたかもそれらの痛みまたは肉体的な痛みの痛みのように？ 彼は、これらすべてがいかに簡単なことであるか、ある人にとっては何の役にも立たないと考えられていること、そうでなければ彼は自分の快楽の欲求を持って生まれてきたこと、告発者の快楽は苦痛の快楽であると反駁する。否認は彼らのようではありません！ それが区別であろうと、苦痛であろうと、喜びであろうと、あるいは決してここにいる私たちの 1 人が称賛を受けていることであろうと、それはまるで誰もいないかのように、物事のお世辞への逃走そのものです!"
    }

}