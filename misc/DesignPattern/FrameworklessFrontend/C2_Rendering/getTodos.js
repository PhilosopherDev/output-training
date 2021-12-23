const { faker } = window // TodoMVC.html 에서 <script src="https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js"></script> 으로 연결했기에 사용가능

const createElement = () => ({
  text: faker.random.words(2),
  completed: faker.random.boolean()
})

const repeat = (elementFactory, number) => {
  const array = []
  for (let index = 0; index < number; index++) {
    array.push(elementFactory())
  }
  return array
}

export default () => {
  const howMany = faker.random.number(10) + 1
  return repeat(createElement, howMany); // random 한 howMany 만큼 random한 text, completed 를 가진 element 를 생성한 array 를 반환
}