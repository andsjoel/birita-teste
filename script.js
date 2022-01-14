

function createCard(cardContent, cardDesk) {
  const divCard = document.createElement('div')
  divCard.innerHTML = `<div class="front">
                      <div class="front__inside">
                        <h3>${cardContent.title}</h3>
                        <p>${cardContent.task}</p>
                        <em>${cardContent.doses}</em>
                        <i class='fas fa-beer' style='font-size:36px'></i>
                      </div>
                    </div>
                    <div class="back">  
                    </div>`
  cardDesk.appendChild(divCard)
  divCard.className = "card"
  divCard.addEventListener('click', () => {
    const card = document.querySelector('.card-desk .card')
    if (card.className.includes('flip')) {
      card.style.animation = "drop_card 1s"
      setTimeout(displayRandomCard, 1000)
    } else {
      card.classList.add('flip')
    }
  })
}

function displayRandomCard() {
  const cardDesk = document.querySelector('.card-desk')
  cardDesk.innerHTML = ''
  const randomIndex = getRandomNum(0, cards.length - 1)
  const selectedCard = cards[randomIndex]
  createCard(selectedCard, cardDesk)
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btnImage = document.getElementById('getRandomCard')

btnImage.addEventListener('click', displayRandomCard)

