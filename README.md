# Zap UI

Zap UI это легкая в использовании UI библиотека, разработанная для совместной работы с React. Проект ориентирован на обеспечение удобства разработки пользовательских интерфейсов с использованием популярного фреймворка React и интеграции стилей с помощью Tailwind CSS..

## Содержание

- [Установка](#использование)
- [Требования](#требования)
- [Установка компонентов](#установка-компонентов)
- [Команда проекта](#команда-проекта)

## Использование:

Установите npm-пакет с помощью команды:

```sh
$ npm i @roodiroot/zap-ui
```

Далее необходимо инициализировать свой проект:

```sh
$ npx @roodiroot/zap-ui init
```

Это создаст фаил конфигурации в корне проекта, в нем укажите актуальный путь для установки компонентов:

```js
{
    "contentPath": "src/components/ui"
}
```

## Разработка

### Требования

Для установки и запуска проекта, необходим [React](https://react.dev/), а так же установленная библиотека [TailwindCss](https://tailwindcss.com/).

### Установка компонентов

Для установки элементов, выполняйте команды:

```sh
$ npx @roodiroot/zap-ui add <Название элемента>
```

### Названия компонентов

- [elements-biglink]

```tsx
<div className='hidden sm:mb-8 sm:flex sm:justify-center'>
  <BigLink
    onClick={() => console.log("hello world")}
    text={"Узнать больше про телескоп Habble"}
  />
</div>
```

- [elements-button]

```tsx
<Button onClick={() => console.log("hello world")} variant='link' arrow>
  Hello
</Button>
```

- [elements-input]

```tsx
<InputCastom placeholder='Введите ваш номер телефона' required />
```

- [hello-simple-center]

```tsx
<div className=''>
  <SimpleCenter
    h1='Бесплатный онлайн перевод с английского'
    description='Получите перевод миллионов слов и выражений в направлении русский-английский и реальные примеры употребления благодаря нашей технологии.'
    blur_elements
    biglink='Узнать больше про телескоп Habble'
    biglink_action={() => console.log("biglink")}
    button_link_text='Смотреть далее'
    button_link_action={() => console.log("button_link_action")}
    button_one_text='Консультация'
    button_one_action={() => console.log("button_one_action")}
  />
</div>
```

- [hello-simple-gallery]

```tsx
<SimpleGallery
  h1='EDM фестиваль &laquo;Энергия&nbsp;Будущего&raquo;'
  description='Здесь музыкальные ноты переплетаются в гармонии, сценические представления становятся настоящими шедеврами, а мастер-классы от мировых мастеров искусства разглашают тайны творческого мастерства. Присоединяйтесь к этому уникальному событию, где культуры соединяются в танце, звуке и красках, создавая неповторимую симфонию Всемирного Слияния!'
  img_list={[img1, img2, img3, img4, img5, img6, img7]}
  biglink='Узнать больше про телескоп Habble'
  biglink_action={() => console.log("biglink")}
  button_link_text='Смотреть далее'
  button_link_action={() => console.log("button_link_action")}
  button_one_text='Консультация'
  button_one_action={() => console.log("button_one_action")}
  pattern={pattern}
/>
```

- [hello-simple-center-diagonal]

```tsx
<div>
  <SimpleCenterVariantDiagonal
    h1='Бесплатный онлайн перевод с английского'
    description='Получите перевод миллионов слов и выражений в направлении русский-английский и реальные примеры употребления благодаря нашей технологии.'
    img={img}
    biglink='Узнать больше про телескоп Habble'
    biglink_action={() => console.log("biglink")}
    button_link_text='Смотреть далее'
    button_link_action={() => console.log("button_link_action")}
    button_one_text='Консультация'
    button_one_action={() => console.log("button_one_action")}
  />
</div>
```

## Команда проекта

Оставьте пользователям контакты и инструкции, как связаться с командой разработки.

- [Максим Борисов](https://t.me/@mvoodi) — Front-End Engineer

## Источники

Впереди только светлое будущее.
