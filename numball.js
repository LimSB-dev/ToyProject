const inputTag = document.querySelector('#input')
const formTag = document.querySelector('#form')
const ulTag = document.querySelector('#logs')

const numbers = []

for (let i = 0; i < 9; i++) {
    numbers.push(i + 1)   
}

const answer = []
for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length)
    answer.push(numbers[index])
    numbers.splice(index, 1)
}

const tries = []

const check = function(input) {
    if (input.length !== 4) {
        return alert('4자리 숫자로 입력해 주세요.')
    }

    if (new Set(input).size !== 4) {
        return alert('중복되지 않도록 입력해 주세요.')
    }

    if (tries.includes(input)) {
        return alert('이미 시도한 숫자입니다.')
    }

    tries.push(input)
    return true
}

const hit = function(event) {
    event.preventDefault()

    const input = inputTag.value

    if (check(input)) {
        const log = document.createElement('li')

        if (answer.join('') === input) {
            log.innerText = 'Home Run'
        } else if (tries.length > 9) {
            log.innerText = `패배! 정답은 ${answer}`
        } else {

            let strike = 0
            let ball = 0

            for (let i =0; i < answer.length; i++) {
                const index = input.indexOf(answer[i])

                if (index > -1) {
                    if (index === i) {
                        strike++
                    } else {
                        ball++
                    }
                }
            }
            log.innerText = `${input} : ★${strike}스트라이크 ${ball}볼★`
        } 
        ulTag.appendChild(log)

    }
    event.target.reset()
    
}
formTag.addEventListener('submit', hit)