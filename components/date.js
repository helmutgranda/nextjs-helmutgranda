import { parseISO, format } from 'date-fns'

export default function Date({ dateString, title }) {
  // console.log(dateString, title);
  if(dateString == undefined) {
    return <time>Time unknown</time>
  }else{
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  }
  
}