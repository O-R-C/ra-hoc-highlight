/* eslint-disable react/prop-types */

function New(props) {
  return (
    <div className='wrap-item wrap-item-new'>
      <span className='label'>New!</span>
      {props.children}
    </div>
  )
}

function Popular(props) {
  return (
    <div className='wrap-item wrap-item-popular'>
      <span className='label'>Popular!</span>
      {props.children}
    </div>
  )
}

function Article(props) {
  return (
    <div className='item item-article'>
      <h3>
        <a href='#'>{props.title}</a>
      </h3>
      <p className='views'>Прочтений: {props.views}</p>
    </div>
  )
}

function Video(props) {
  return (
    <div className='item item-video'>
      <iframe
        src={props.url}
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
      <p className='views'>Просмотров: {props.views}</p>
    </div>
  )
}

/**
 * A higher-order component that wraps the given Component with a New or Popular component
 * based on the views count of the props.
 *
 * @param {React.Component} Component - The component to be wrapped
 * @return {function} A function that returns the wrapped component
 */
function ItemAddPopular(Component) {
  return function ItemWithPopular(props) {
    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      )
    }

    if (props.views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      )
    }

    return <Component {...props} />
  }
}

const VideoWithPopular = ItemAddPopular(Video)
const ArticleWithPopular = ItemAddPopular(Article)

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithPopular
            key={item.url || item.title}
            {...item}
          />
        )

      case 'article':
        return (
          <ArticleWithPopular
            key={item.url || item.title}
            {...item}
          />
        )
    }
  })
}

export default function App() {
  const list = [
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]

  return <List list={list} />
}
