const quotes = [
  {
    quote: "너는 꼭 살아서, 지푸라기라도 잡아서, 내 이름을 기억해줘",
    author: "Lee Chan-hyuk",
  },
  {
    quote: "잃기 두려웠던 욕심 속에도 작은 예쁨이 있지.",
    author: "Oh Hyuk",
  },
  {
    quote: "Look at the stars, Look how they shine for you.",
    author: "Coldplay",
  },
  {
    quote: "난 한 동안 새 활짝 피었다 질래. 또 한번 영원히.",
    author: "Choi Jung-hoon",
  },
  {
    quote: "내 빛바랜 마음이 내 바램 대로, 더럽혀진 한줌의 재로...",
    author: "Seo Tai-ji",
  },
  {
    quote: "수없이 잃었던 춥고 모진 날 사이로, 조용히 잊혀진 네 이름을 알아",
    author: "Lee Ji-eun",
  },
  {
    quote: "오른손 왼손도 뭔가가 부족해. 한 아름 안기엔 뭔가가 부족해...",
    author: "Kim C",
  },
  {
    quote:
      "오늘 밤 끝 무렵에 보라빛 물들으면, 잽싸게 물리쳐라 하늘 빛 품은 해야",
    author: "Choi Jung-hoon",
  },
  {
    quote: "오 그대여 부서지지마, 바람새는 창틀에 넌 추워지지마",
    author: "Hwang So-yoon",
  },
  {
    quote:
      "바람에 날려 꽃이 지는 계절엔, 아직도 너의 손을 잡은 듯, 그런 듯 해.",
    author: "Kim Yoon-ah",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
