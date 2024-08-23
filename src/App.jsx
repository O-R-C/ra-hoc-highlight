/* eslint-disable react/prop-types */

import moment from 'moment/min/moment-with-locales'
moment.locale('ru')

function DateTimePretty(Component) {
  return function newDate(props) {
    return (
      <Component
        {...props}
        date={moment(props.date).fromNow()}
      />
    )
  }
}

function DateTime(props) {
  return <p className='date'>{props.date}</p>
}

const PrettyDate = DateTimePretty(DateTime)

function Video(props) {
  return (
    <div className='video'>
      <iframe
        src={props.url}
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
      <PrettyDate date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map((item) => (
    <Video
      key={item.url}
      url={item.url}
      date={item.date}
    />
  ))
}

export default function App() {
  const list = [
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().add(-10, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().add(-1, 'hours').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().add(-1, 'month').format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment().add(-1, 'years').format('YYYY-MM-DD HH:mm:ss'),
    },
  ]

  return <VideoList list={list} />
}
