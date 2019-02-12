const getFirstSelector = selector => document.querySelector(selector)

const nestedTarget = () => document.querySelector(".target")

const deepestChild = () => document.querySelector("div#grand-node div div div div")

const increaseRankBy = n => {
  let ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

// const increaseRankBy = n => document.querySelectorAll(".ranked-list li").forEach(li => parseInt(li.innerHTML) + n);
